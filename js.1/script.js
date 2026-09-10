let nome = "Gabriel";
console.log("Olá, " + nome + "!");

let idade = 18;
console.log("Você tem " + idade + " anos.");

let eMaiorDeIdade = idade >= 18;
if (eMaiorDeIdade) 
    console.log("Você é maior de idade.");
else
    console.log("Você é menor de idade.");

let endereço = "Rua das Flores, 123";
//console.log("Endereço: " + endereço);

if (endereço)
    console.log("Endereço é " + endereço);
else
    console.log("Endereço não foi definido");


let telefone = undefined;
//console.log("telefone:", telefone);

if (telefone)
    console.log("telefone é " + telefone);
else
    console.log("telefone não foi definido");

let count = 2;
count++;
count++;
count--;
count++;
console.log("years for the worldcup:", count);

let Nome = "Gabriel";
console.log("é igual?" , Nome == "João" ? "igual" : "diferente")

let gols = 0;
let countGol = gols; 
countGol++;
countGol++;

//countGols = countGol == 3 ? "hat-trick" : countGol == 2 ? "faltou pouco para o hat-trick" : countGol == 1 ? "gol" : "ruim";
//nsole.log("Você fez um " + countGols);

switch (gols){
    case 3:
        console.log("Você fez um hat-trick!");
        break;
    case  2:
        console.log("Faltou pouco para o hat-trick!");
        break;
    case 1:
        console.log("Você fez um gol!");
        break;
    default:
        console.log("Você é ruim.");
}


let Niveis = "Médio";

let selectedLevel = Niveis == "Fácil" ? "Iniciante" : Niveis == "Médio" ? "Intermediário" : Niveis == "Difícil" ? "Avançado" : "Nível desconhecido";
console.log("Nível selecionado:", selectedLevel);


switch (Niveis){
    case "Fácil":
        console.log("Você ainda é iniciante!")
        break;
    case "Médio":
        console.log("Você já tem alguma experiência!")
        break;
    case "Difícil":
        console.log("Você é um expert!")
        break;
    default:
        console.log("Nível desconhecido.")
}

let boladeouro = [8, 7, 5, 2, 1, 3];
// Iterando sobre o array (lista) de bolas de ouro e exibindo o nome do jogador correspondente

for (let i = 0; i < boladeouro.length; i++) 
// para cada quantidade de bolas de ouro, chamamos a função NomedeJogadores para obter o nome do jogador correspondente e exibimos a mensagem no console
    
{
    let boladeouros = boladeouro[i];
    let jogador = NomedeJogadores(boladeouros);
    
    console.log(`O ${jogador} tem ${boladeouros} ${boladeouros == 1 ? "bola de ouro" : "bolas de ouro"} `);
}

function NomedeJogadores(boladeouro) {
    if (boladeouro == 8) 
        return "messi"; 
    else if (boladeouro == 7) 
        return "pelé";
    else if (boladeouro == 5) 
        return "cristiano ronaldo";
    else if (boladeouro == 2) 
        return "ronaldinho";
    else if (boladeouro == 1) 
        return "kaka";
    else if (boladeouro == 3) 
        return "zidane";
    else 
        return "jogador desconhecido";
}

let copas = [5, 4, 3, 2, 1, 0];

for (let i = 0; i < copas.length; i++)
 {
    let copasGanhas = copas[i];
    let sele = NomedasSeleçôes(copasGanhas);

    console.log(`${sele} tem ${copasGanhas} ${copasGanhas == 1 ? "copa do mundo" : "copas do mundo"}
`);
}

function NomedasSeleçôes(copas) {
    if (copas == 5)
        return "Brasil";
    else if (copas == 4)
        return "Alemanha";
    else if (copas == 3)
        return "Argentina";
    else if (copas == 2)
        return "Uruguai";
    else if (copas == 1)
        return "Inglaterra";
    else if (copas == 0)
        return "outros países";
}


//let cor = "amarelo";

//let selectedcor = cores == "amarelo" ? "atenção" : cores == "verde" ? "siga" : cores == "vermelho" ? "pare";
//console.log("cor:", selectedcor);

let cor = 'amarelo' 

if (cor === 'amarelo'){
    console.log('atenção');
}
else if (cor === 'vermelho'){
    console.log('pare');
}
else{
    console.log('siga');
}


let cores = 'verde'
switch (cores){
    case "amarelo":
        console.log("Atenção!");
        break;
    case "vermelho":
        console.log("Pare!");
        break;
    case "verde":
        console.log("Siga!");
        break;
    default:
        console.log("informação desconhecida.");
}


let core = ["amarelo", "vermelho", "verde"];
  for (let i = 0; i < cores.length; i++){
        let cor = cores[i];
        switch (cor){
    case "amarelo":
        console.log("Atenção!");
        break;
    case "vermelho":
        console.log("Pare!");
        break;
    case "verde":
        console.log("Siga!");
        break;
    default:
        console.log("informação desconhecida.");
    }}


    let videogames = ['xbox one' , 'playstation 4', 'playstation 5'];
        for (let i = 0; i < videogames.length; i++){
            let valor = videogames[i];
            switch (valor){
                case 'xbox one':
                    console.log(1800);
                    break;
                case 'playstation 4':
                    console.log(2000);
                    break;
                case 'playstation 5':
                    console.log(4000);
                    break;
                default:
                    console.log('videogame não encontrado');
            }
        }


function precoJogo(valor) {
     switch (valor){
        case 'fifa':
            return (200);
        case 'gta v':
            return (150);
        case 'minecraft':
            return(100);
            default:
                return('jogo não tem');
    }
}

let jogo = precoJogo('gta v');
console.log('o preço do jogo é', jogo);


function saborsorvete(sabor, valor){
    switch (sabor, valor){
        case 1:
            return('chocolate');
            return(12);
        case '2':
            return (10);
        case '3':
            return(8);
        default:
            return('sabor não existe');
    }
}

let sorvete1 = saborsorvete(1);
console.log('o preço do', sorvete1, 'é:', sorvete1);


let cliente = [{
    nome: 'Gabriel',
    idade: 18,
    vip: true
},
{
    nome: 'João',
    idade: 17,
    vip: false
},
{
    nome: 'Maria',
    idade:20,
    vip: false
}];

console.log('o cliente', cliente[0].nome,  'tem' , cliente[0].idade , 'anos.' );


let jogadores = [{
    Nome: 'Messi',
    Nacionalidade: 'Argentina',
    BolaDeOuro : true,
    numero: 8},
    {
        Nome: 'Pelé',
        Nacionalidade: 'Brasil',
        BolaDeOuro : true,
        numero: 7
    },
    {
        Nome: 'Kevin De Bruyne',
        Nacionalidade: 'Bélgica',
        BolaDeOuro: false
    }
];

function quantasbolasdeouro(jogador){
     if (jogador.BolaDeOuro === true){
        return(`sim e quantas são? ${jogador.numero}`);
    }
    else {
        return('não');
    }
} 

let resultado = quantasbolasdeouro(jogadores[0]);
console.log('o jogador', jogadores[0].Nome, 'é do país', jogadores[0].Nacionalidade, 'e tem bola de ouro?', resultado);

let lendas = jogadores.filter(jogador => {return jogador.BolaDeOuro === true});
console.log(lendas);


for (let i = 1; i <= 5; i++){
    console.log(i);
}

let multiplicar = (a, b) => a * b;
console.log(multiplicar (5,10));