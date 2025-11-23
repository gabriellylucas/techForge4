"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Agenda = void 0;
class Agenda {
    constructor() {
        this.compromissos = [];
    }
    adicionar(compromisso) {
        this.compromissos.push(compromisso);
    }
    listar() {
        console.log("Compromissos:");
        this.compromissos.forEach((c, i) => {
            console.log(`${i + 1}. ${c}`);
        });
    }
}
exports.Agenda = Agenda;
