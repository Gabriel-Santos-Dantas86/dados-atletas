# Sistema de Cálculo de IMC para Atletas
Descrição do Projeto
Este projeto é uma aplicação web completa para gerenciamento e análise de dados de atletas, com foco no cálculo de IMC (Índice de Massa Corporal) e média de notas em competições esportivas.

O que o projeto faz?
Cadastra atletas com informações pessoais e desempenho

Calcula o IMC de cada atleta baseado em peso e altura

Determina categorias por faixa etária (Infantil, Juvenil, Intermediário, Adulto)

Processa notas eliminando a maior e menor para cálculo da média válida

Apresenta resultados de forma organizada e visual

Gerencia múltiplos atletas em tempo real

Com o que este projeto contribui?
Para academias e clubes: Oferece uma ferramenta prática para acompanhamento físico de atletas

Para nutricionistas esportivos: Auxilia no monitoramento do IMC de atletas

Para técnicos e preparadores: Permite análise combinada de desempenho e condicionamento físico

Para estudantes: Demonstra aplicação de POO (Programação Orientada a Objetos) em JavaScript

Por que este projeto é importante?
Saúde do Atleta: Monitora o IMC, indicador importante da condição física

Gestão Esportiva: Integra dados físicos com desempenho em competições

Tomada de Decisão: Auxilia na classificação por categorias e avaliação de evolução

Educacional: Exemplifica conceitos avançados de JavaScript e manipulação de dados

Prático: Interface intuitiva para uso em ambientes esportivos reais

Tecnologias Utilizadas
HTML5: Estrutura semântica com formulários avançados

CSS3: Estilização moderna e responsiva

JavaScript ES6+: Classes, métodos, array manipulation

Programação Orientada a Objetos: Modelagem de entidades com herança e encapsulamento

Estrutura do Projeto
text
sistema-imc-atletas/
│
├── index.html          # Interface principal
├── style.css           # Estilos personalizados
└── script.js           # Lógica da aplicação
Funcionalidades Principais
Cadastro de Atletas
Nome, idade, peso, altura

Notas de competição (múltiplas valores)

Validação de dados de entrada

Cálculos Automáticos
IMC: Peso ÷ (Altura × Altura)

Categoria por Idade:

Infantil (9-11 anos)

Juvenil (12-13 anos)

Intermediário (14-15 anos)

Adulto (16-30 anos)

Média Válida: Notas ordenadas, descartando extremos

Interface
Formulário intuitivo

Lista dinâmica de atletas

Cartões informativos

Contador em tempo real

Design responsivo

Categorias de Atletas
Faixa Etária	Categoria
9-11 anos	Infantil
12-13 anos	Juvenil
14-15 anos	Intermediário
16-30 anos	Adulto
Métodos de Cálculo
IMC (Índice de Massa Corporal)
text
IMC = peso / (altura × altura)
Média Válida
Ordena notas em ordem crescente

Remove a menor nota

Remove a maior nota

Calcula média das notas restantes

Como Usar
1. Cadastrar Atleta
text
Nome: João Silva
Idade: 14
Peso: 65.5
Altura: 1.72
Notas: 8.5, 9.0, 7.5, 8.0, 9.5
2. Resultados Gerados
text
Categoria: Intermediário
IMC: 22.13
Média Válida: 8.50
Interpretação do IMC para Atletas
Importante: O IMC em atletas pode ser menos preciso devido à massa muscular.

IMC	Classificação
Abaixo de 18.5	Abaixo do peso
18.5 - 24.9	Peso normal
25.0 - 29.9	Sobrepeso
Acima de 30.0	Obesidade
Estrutura de Classes
javascript
class Atleta {
  constructor(nome, idade, peso, altura, notas)
  calculaCategoria()    // Define categoria por idade
  calculaIMC()         // Calcula Índice de Massa Corporal  
  calculaMediaValida() // Média descartando notas extremas
}
Funções Utilitárias
format(n, d) - Formata números com casas decimais

render() - Atualiza interface com dados atuais

Event listeners para formulário e botões

Compatibilidade
Navegadores modernos (Chrome, Firefox, Safari, Edge)

Dispositivos móveis e tablets

Acessibilidade básica

Como Executar
Clone o repositório:

bash
git clone https://github.com/Gabriel-Santos-Dantas86/dados-atletas
Acesse a pasta: dados-atletas

bash
cd sistema-imc-atletas
Abra no navegador:

bash
open index.html

Contribuição
Faça um Fork do projeto

Crie uma Branch para sua Feature (git checkout -b feature/AmazingFeature)

Commit suas Mudanças (git commit -m 'Add some AmazingFeature')

Push para a Branch (git push origin feature/AmazingFeature)

Abra um Pull Request

Melhorias Futuras
Gráficos de evolução do IMC

Comparativo entre atletas

Exportação de relatórios

Histórico de medições

Metas personalizadas por atleta

Integração com wearables

Público-Alvo
Academias e centros esportivos

Escolas de educação física

Clubes e associações esportivas

Nutricionistas especializados em esportes

Preparadores físicos

Suporte
Encontrou algum problema ou tem sugestões?

Abra uma issue

Entre em contato: sro.danttas@gmail.com

Licença
Distribuído sob licença MIT. Veja LICENSE para mais informações.

Autores
Seu Nome - Gabriel-Santos-Dantas86

Desenvolvido para promover saúde esportiva através da tecnologia

Referências
OMS - Classificação IMC

Sociedade Brasileira de Medicina do Esporte

Awesome README Templates

Exemplo de Uso Prático
javascript
// Cadastro de atleta de alto rendimento
const atleta = new Atleta(
  "Maria Oliveira", 
  22, 
  68.5, 
  1.75, 
  [9.5, 9.8, 9.2, 9.7, 9.9]
);

console.log(atleta.calculaCategoria()); // "Adulto"
console.log(atleta.calculaIMC());       // 22.37
console.log(atleta.calculaMediaValida());// 9.67
Este sistema é ideal para acompanhamento contínuo do desenvolvimento físico e técnico de atletas em diversas modalidades esportivas.
