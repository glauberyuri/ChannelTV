<?php

namespace App\Enums;

enum CheckoutStepsEnum : int
{
    // STATUS
    case INFORMATION = 1;
    case INSTALLED = 2;
    case PAYMENT = 3;

    public function getName(): string
    {
        return match ($this){
            self::INFORMATION => 'Informações',
            self::INSTALLED => 'Instalado',
            self::PAYMENT => 'Pagamento',
            default => 'Passo de checkout não encontrado'

        };
    }
}
