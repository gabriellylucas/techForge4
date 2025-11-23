"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.lido = false;
    }
    marcarComoLido() {
        this.lido = true;
    }
}
exports.Livro = Livro;
