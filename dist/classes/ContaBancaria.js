"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContaBancaria = void 0;
class ContaBancaria {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
        else {
            console.log("Saldo insuficiente!");
        }
    }
}
exports.ContaBancaria = ContaBancaria;
