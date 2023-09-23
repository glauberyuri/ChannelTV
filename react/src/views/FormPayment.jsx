import React, {useEffect, useState} from 'react';
import CreditCardComponent from "../components/CreditCardComponent.jsx";
import axiosClient from "../../axios.js";

function FormPayment(props) {
    const [currentCart, setCurrentCart] = useState([]);

    useEffect(() => {
        axiosClient.get('/loadCart')
            .then(({data}) =>{
                console.log(data)
                setCurrentCart(data)
            })
    }, []);
  return (
    <div>
      <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 mt-10 text-gray-800">
        <div className="w-full -mx-3 md:flex items-start">
          <section className="px-3 md:w-7/12 lg:pr-10">
              <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                  {currentCart.skus.map((sku) => (
                      <div key={sku[id]} className="w-full flex items-center mb-6">
                          <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                              <img src="/images/MenuLogo.png" alt="Product" />
                          </div>
                          <div className="flex-grow pl-3">
                              <h6 className="font-semibold uppercase text-gray-600">{sku.name}</h6>
                              <p className="text-gray-400">SKU: {sku.id}</p>
                              <ul>
                                  {sku.features.map((feature) => (
                                      <li key={feature.id}>{feature.name}: {feature.value}</li>
                                  ))}
                              </ul>
                          </div>
                          <div>
                              <span className="font-semibold text-gray-600 text-xl">${sku.price}</span>
                              <span className="font-semibold text-gray-600 text-sm">.00</span>
                          </div>
                      </div>
                  ))}
              </div>
            <div className="mb-6 pb-6 border-b border-gray-200">
              <div className="-mx-2 flex items-end justify-end">
                <div className="flex-grow px-2 lg:max-w-xs">
                  <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Discount code</label>
                  <div>
                    <input className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="XXXXXX" type="text" />
                  </div>
                </div>
                <div className="px-2">
                  <button className="block w-full max-w-xs mx-auto border border-transparent bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold">APPLY</button>
                </div>
              </div>
            </div>
            <div className="mb-6 pb-6 border-b border-gray-200 text-gray-800">
              <div className="w-full flex mb-3 items-center">
                <div className="flex-grow">
                  <span className="text-gray-600">Subtotal</span>
                </div>
                <div className="pl-3">
                  <span className="font-semibold">$190.91</span>
                </div>
              </div>
              <div className="w-full flex items-center">
                <div className="flex-grow">
                  <span className="text-gray-600">Taxes (GST)</span>
                </div>
                <div className="pl-3">
                  <span className="font-semibold">$19.09</span>
                </div>
              </div>
            </div>
            <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
              <div className="w-full flex items-center">
                <div className="flex-grow">
                  <span className="text-gray-600">Total</span>
                </div>
                <div className="pl-3">
                  <span className="font-semibold text-gray-400 text-sm">AUD</span>
                  <span className="font-semibold">$210.00</span>
                </div>
              </div>
            </div>
          </section>

          <div className="px-3 md:w-5/12">
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
              <div className="w-full flex mb-3 items-center">
                <div className="w-32">
                  <span className="text-gray-600 font-semibold">Contact</span>
                </div>
                <div className="flex-grow pl-3">
                  <span>Scott Windon</span>
                </div>
              </div>
              <div className="w-full flex items-center">
                <div className="w-32">
                  <span className="text-gray-600 font-semibold">Billing Address</span>
                </div>
                <div className="flex-grow pl-3">
                  <span>123 George Street, Sydney, NSW 2000 Australia</span>
                </div>
              </div>
            </div>

            {/* Component Payment */}
            <CreditCardComponent />
            {/* Payment Button */}
            <div>
              <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold">
                <i className="mdi mdi-lock-outline mr-1"></i> Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormPayment;
