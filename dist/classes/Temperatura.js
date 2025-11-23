"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Temperatura = void 0;
class Temperatura {
    constructor(valor) {
        this.valor = valor;
    }
    paraFahrenheit() {
        return this.valor * 1.8 + 32;
    }
    paraKelvin() {
        return this.valor + 273.15;
    }
}
exports.Temperatura = Temperatura;
