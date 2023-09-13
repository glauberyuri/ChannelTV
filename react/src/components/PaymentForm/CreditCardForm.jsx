import React from 'react';

function CreditCardForm(props) {
  return (
    <div class="w-full max-w-lg mx-auto p-8">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-lg font-medium mb-6">Payment Information</h2>
        <form>
          <div class="grid grid-cols-2 gap-6">
            <div class="col-span-2 sm:col-span-1">
              <label for="card-number" class="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
              <input type="text" name="card-number" id="card-number" placeholder="0000 0000 0000 0000" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"/>
            </div>
            <div class="col-span-2 sm:col-span-1">
              <label for="expiration-date" class="block text-sm font-medium text-gray-700 mb-2">Expiration Date</label>
              <input type="text" name="expiration-date" id="expiration-date" placeholder="MM / YY" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"/>
            </div>
            <div class="col-span-2 sm:col-span-1">
              <label for="cvv" class="block text-sm font-medium text-gray-700 mb-2">CVV</label>
              <input type="text" name="cvv" id="cvv" placeholder="000" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"/>
            </div>
            <div class="col-span-2 sm:col-span-1">
              <label for="card-holder" class="block text-sm font-medium text-gray-700 mb-2">Card Holder</label>
              <input type="text" name="card-holder" id="card-holder" placeholder="Full Name"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div class="mt-8">
            <button type="submit" class="w-full bg-red-600 hover:bg-red-400 text-white font-medium py-3 rounded-lg focus:outline-none">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreditCardForm;
