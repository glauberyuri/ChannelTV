import React from "react";
import { CheckIcon } from '@heroicons/react/20/solid'
import PricingShowComponent from "./PricingShowComponent.jsx";

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]
export default function FormPaymentComponent() {


  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Melhor Lista IPTV com +100.000 em conteúdo!</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Conheça nosso sistema com grade completa em
            4K/Full HD/HD e mais importante
            sem travamentos.
          </p>
        </div>
        <PricingShowComponent title="Todos Canais Cobrança Mensal" price="30" description="Televisão por Protocolo de Internet"/>
        <PricingShowComponent title="Todos Canais Cobrança Trimestral" price="75" description="Televisão por Protocolo de Internet"/>
      </div>
    </div>
  );

}
