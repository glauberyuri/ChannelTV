<?php

namespace App\Enums;

enum ProductStatusEnum: int
{
    case DISABLED = 0;
    case ACTIVATED = 1;


protected function getName() : string
{
    return match($this){
        self::DISABLED => 'Desabilitado',
        self::ACTIVATED => 'Ativado',
        default => 'Status não encontrado'
    };
}

}
