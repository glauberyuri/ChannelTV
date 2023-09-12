<?php

namespace App\Enums;

enum OrderStatusEnum: int {
    case CART = 1;
    case PENDING = 2;
    case PAID = 3;
    case CANCELED = 4;
    case REJECTED = 5;

    protected function getName(): string
    {
        return match($this){
          self::CART => 'Carrinho',
          self::PENDING => 'Pendente',
          self::PAID => 'Pago',
          self::CANCELED => 'Cancelado',
          self::REJECTED => 'Rejeitado',
          default => 'Status não encontrado'
        };
    }

}
