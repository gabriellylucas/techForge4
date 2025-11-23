import { ContaBancaria } from "./classes/ContaBancaria";
import { Livro } from "./classes/Livro";
import { Produto } from "./classes/Produto";
import { Temperatura } from "./classes/Temperatura";
import { Agenda } from "./classes/Agenda";

// Testando ContaBancaria
const conta = new ContaBancaria("Maria", 100);
conta.depositar(50);
conta.sacar(30);
console.log(conta);

// Testando Livro
const livro = new Livro("TS Básico", "Ana", 200);
livro.marcarComoLido();
console.log(livro);

// Testando Produto
const prod = new Produto("Teclado", 150, 3);
console.log(prod.valorTotalEstoque());

// Testando Temperatura
const temp = new Temperatura(25);
console.log(temp.paraFahrenheit());
console.log(temp.paraKelvin());

// Testando Agenda
const agenda = new Agenda();
agenda.adicionar("Estudar TypeScript");
agenda.listar();
