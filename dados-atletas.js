// Classe Atleta
class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = Number(idade);
    this.peso = Number(peso);
    this.altura = Number(altura);
    this.notas = notas.map(Number);
  }

  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) return "Infantil";
    if (this.idade >= 12 && this.idade <= 13) return "Juvenil";
    if (this.idade >= 14 && this.idade <= 15) return "Intermediário";
    if (this.idade >= 16 && this.idade <= 30) return "Adulto";
    return "Sem categoria";
  }

  calculaIMC() {
    return this.peso / (this.altura * this.altura);
  }

  calculaMediaValida() {
    let notas = [...this.notas].sort((a, b) => a - b);
    notas.shift();
    notas.pop();
    let soma = notas.reduce((t, n) => t + n, 0);
    return soma / notas.length;
  }
}

// Utilidades
function format(n, d = 2) {
  return n.toFixed(d);
}

// Seletores
const form = document.getElementById("formAtleta");
const lista = document.getElementById("lista");
const totalAtletas = document.getElementById("totalAtletas");
const btnLimpar = document.getElementById("btnLimpar");

const atletas = [];

// Cadastro
form.addEventListener("submit", e => {
  e.preventDefault();

  const nome = form.nome.value;
  const idade = form.idade.value;
  const peso = form.peso.value;
  const altura = form.altura.value;
  const notas = form.notas.value.split(",").map(s => s.trim());

  const atleta = new Atleta(nome, idade, peso, altura, notas);
  atletas.push(atleta);

  render();

  form.reset();
});

btnLimpar.addEventListener("click", () => form.reset());

// Renderização
function render() {
  lista.innerHTML = "";
  atletas.forEach(a => {
    const card = document.createElement("div");
    card.className = "athlete-card";

    card.innerHTML = `
      <div class="meta">
        <div class="name">${a.nome}</div>
        <div class="cat">${a.calculaCategoria()}</div>
      </div>

      <div class="stats">
        <div class="chip">IMC: ${format(a.calculaIMC(), 3)}</div>
        <div class="chip">Média válida: ${format(a.calculaMediaValida(), 3)}</div>
        <div class="chip">Notas: ${a.notas.join(", ")}</div>
      </div>
    `;

    lista.appendChild(card);
  });

  totalAtletas.textContent = atletas.length;
}

// Inicializa
render();