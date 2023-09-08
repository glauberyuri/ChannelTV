import React from 'react';
import {Outlet} from "react-router-dom";
import PageComponent from "../components/PageComponent.jsx";

function Clients(props) {
  return (
    <PageComponent title="Clientes">
      Children
    </PageComponent>
  );
}

export default Clients;
