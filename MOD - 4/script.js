//et nome = 'Everton Henrique Galindo';
//
//et resultado = nome.split(' ');
//
//onsole.log(resultado);


//let n = '25';
//let res = parseInt(n) + 5;
//console.log(res);
/*
for(let i in lista) {
    lista2.push(lista[i] *)
}*/
//lista2 = lista.map(function(item) {
    //return item * 2;

//});
//lista2 = lista.filter(function(item) {
//    if(item < 20) {
//        return true;
//    } else {
//        return false;
//    }
//});
//lista2 = lista.every(function(item){
//    if(item > 20){
//        return true;
//    } else {
//        return false
//    }
//});
//let lista2 = [];
//
//lista2 = lista.findIndex(function(item) {
//    if(item == 16) {
//        return true; 
//    } else {
//        return false
//    }
//});
//let lista = [
//    {id:1, nome:'Everton', sobrenome:'Henrique'},
//    {id:2, nome:'Lucas', sobrenome:'Medeiros'},
//    {id:3, nome:'Armageddon', sobrenome:'Silva'}
//];
//let pessoa = lista.find(function(item){
//    return  (item.id == 3) ? true : false; 
//});
//let res = pessoa;
//console.log(res);
//let d = new Date();
//
//d.setFullYear(2022);
//
//let novoValor = d.getTime();
//console.log(novoValor);
//let novoValor = Math.floor(Math.random() * 100);
//
//console.log(novoValor );

//let  timer;
//
//function comecar() {
//    timer = setInterval(showTime, 1000);
//
//}
//function parar() {
//    clearInterval(timer)
//}
//
//function showTime() {
//    let d = new Date();
//    let h = d.getHours();
//    let m = d.getMinutes();
//    let s = d.getSeconds();
//    let txt = h+':'+m+':'+s;
//    document.querySelector('.demo').innerHTML = txt;
//}
//function rodar() {
//  timer =  setTimeout(function() {
//        document.querySelector('.demo').innerHTML = 'Rodou';
//    }, 2000);
//
//}
//function parar() {
//    clearTimeout(timer);
//}

//let nome = 'Everton';
//let idade = 36;


//let frase = 'meu nome é '+nome+', eu tenho '+idade+' anos e ano que vem farei '+(idade+1)+' anos'
//let frase = `Meu nome é ${nome}, eu tenho ${idade} e ano que vem farei ${idade+1} anos.`;

//console.log(frase);
//et pessoa = {
//   nome: 'Everton',
//   sobrenome: 'Henrique',
//   idade: 90,
//   social: {
//       facebook: 'Kozuki Oden',
//       instagram: {
//           url: '@kozuki_',
//           seguidores: '1000'
//
//       }
//   }, 
    //nomeCompleto: function() {
        //return `${this.nome} ${this.sobrenome}`;
    //}
//}
//let {nome, idade, social:{instagram} } = pessoa;
//console.log(nome, idade,  instagram)
//function pegarNomeCompleto (obj) {
//    return obj.nome+' '+obj.sobrenome
//}
//
//
//console.log(pegarNomeCompleto(pessoa));


//let info = [ 'Everton Henrique', 'Everton', 'Henrique', '@e.henrique9' ];
//
//
//let [ nomeComleto, nome, sobrenome, instagram ] = info;
//
//console.log(nomeComleto, nome, sobrenome, instagram);
//let [nome, sobrenome] = ['Everton', 'Henrique'];

//console.log(nome, sobrenome);

/*function somar (x, y) {
    return x + y;
}*/
//let somar = function(x, y) {
//    return x + y;
//}

/*let somar = (x, y) => {
    return x + y
}*/
//let somar = (x, y) => x+y;
//let letrasNoNome = nome => nome.length;
//console.log(letrasNoNome('Everton'));
//let numeros = [1,2,3,4];
//let outros = [...numeros,5,6,7,8];
//console.log(outros);
//let info = {
//    nome: 'Everton',
//    sobrenome: 'Henrique',
//    idade: 90
//};
//let novaInfo = {
//    ...info,
//    cidade: 'João Pessoa',
//    estado: 'Paraiba',
//    pais: 'Brasil'
//};
//console.log(novaInfo);
//function adicionarInfo(info) {
//    let novasInfo ={
//        ...info, //OPERADOR SPREAD
//        status: 0,
//        token:'Exemplo',
//        data_cadastro: 'Teste'
//    };
//    
//    return novasInfo
//}
//
//console.log(adicionarInfo ({nome: 'Everton', sobrenome:'Henrique'}));
//function add(...numeros) {  //OPERADOR REST
//    console.log(numeros);
//
//};
// add(6,7,5,4,5,7);

//let lista = ['ovo', 'café', 'arroz', 'macarrão', 'feijão'];
//console.log( lista.includes('ovo') );
//console.log( 'everton'.repeat(20) );
//let pessoa = {
//    nome: 'Everton',
//    sobrenome: 'Henrique',
//    idade: 90
//};
//
//
//
//console.log( Object.entries(pessoa) );
//let cartao = '1234123412341234';
//let lastDigits = cartao.slice(-4);
//let cartaoMascarado= lastDigits.padStart (16, '*');
//console.log('Este é o seu cartão? '+cartaoMascarado );









