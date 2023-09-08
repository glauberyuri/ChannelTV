import React from 'react';
import {Outlet} from "react-router-dom";

function GuestLayout(props) {
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-16 w-auto"
            src="/images/MenuLogo.png"
            alt="Your Company"
          />

        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

        <Outlet />
        </div>
      </div>
    </div>
  );
}

export default GuestLayout;
