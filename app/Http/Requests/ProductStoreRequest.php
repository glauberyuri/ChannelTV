<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'user_id' => $this->user()->id
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:120',
            'description' => 'required|string',
            'user_id' => 'exists:users, id',
            'status' => 'required|boolean',
            'slug' => 'nullable|string',
            'image' => 'nullable|string',
            'price' => 'required',
            'category_id' => 'exists:categories:id',
            'discount' => 'nullable'
        ];
    }
}
