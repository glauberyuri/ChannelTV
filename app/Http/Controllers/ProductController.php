<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductStoreRequest;
use App\Http\Requests\ProductUpdateRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        //Get user
        $user = $request->user();

        return ProductResource::collection(
            Product::where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->paginate(10)
            );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ProductStoreRequest $request)
    {
        $data = $request->validated();

        // Check if image was given and save on local file system
        if(isset($data['image'])){
            $relativePath = $this->saveImage($data['image']);
            $data['image'] = $relativePath;
        }

        $product = Product::create($data);


        return new ProductResource($product);
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product, Request $request)
    {
        //Check user
        $user = $request->user();

        if($user->id !== $product->user_id) return abort(403, 'Unauthorized action');

        return new ProductResource($product);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductUpdateRequest $request, Product $product)
    {
        $data = $request->validated();

        // Check if image was given and save on local file system
        if(isset($data['image'])){
            $relativePath = $this->saveImage($data['image']);
            $data['image'] = $relativePath;

            // If there is an old image, delete it
            if($product->image){

                $absolutePath = public_path($product->image);
                File::delete();
            }
        }
        //Update product in the database

        $product->update($data);

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
    /**
     * Save image in local file system and return saved image path.
     * @param $image
     */
    public function saveImage($image)
    {
        // Check if image is valid base64 string
        if(preg_match('/^data:image\/(\w+);base64,/', $image, $type)){
            // Take out the base64 encoded text without mine type
            $image = substr($image, strpos($image, ',') + 1);
            // Get file extension
            $type = strtolower($type[1]); // jpg, png, gif
            //Check if file is an image
            if(!in_array($type, ['jpg', 'jpeg', 'gif', 'png'])) throw new \Exception('Tipo de imagem invalida!');

            $image = str_replace(' ', '+', $image);
            $image = base64_decode($image);

            if($image === false) throw new \Exception('base64_decode failed');
        }else {
            throw new \Exception('did not match data URI with image data');
        }
        $dir = 'images/';
        $file = Str::random(). '.' .$type;
        $absolutePath = public_path($dir);
        $relativePath = $dir . $file;
        if (!File::exists($absolutePath)){
            File::makeDirectory($relativePath, $image);
        }
        file_put_contents($relativePath, $image);

        return $relativePath;
    }
}
