//let pessoa = {
//    nome: 'Everton',
//    idade: '90',
//    posses: {
//        casa: 'Gigante',
//        carro: 'Mustang GT'
//    }
//};
//console.log(pessoa);

//Código SÍNCRONO   lnha por linha
/*
let n7ome = 'Everton';
let sob8renome = 'Henrique';
let no76meCompleto = nome+ ' '+sobrenome;
*/

//Código ASSÍNCRONO 
/*
let nome = 'Everton';
let sobrenome = 'Henrique';
let temperatura = Maquininha.pegarTemperatura(); //ASSINCRONA
let nomeCompleto = nome+ ' '+sobrenome;
*/

//function alertar () {
//    console.log("Fala meu querido, tudo bem?");
//}
//let nome = 'Everton'
//setTimeout(alertar, 2000);
//let sobrenome = 'Henrique'
//console.log("NOME COMPLETO: "+nome+' '+sobrenome);

//function pegarTemperatura() {
//   return new Promise(function(resolve, reject) {
//       console.log("pegando temperatura...");
//
//       setTimeout(function(){
//           resolve('40 na sombra');
//       },2000);
//   });

// USANDO A PROMISE
/*
console.log('código antes!')

let  temp = pegarTemperatura();

console.log('código durante!')

temp.then(function(resultado){
    console.log("TEMPERATURA: "+resultado);
});

temp.catch(function(error) {
    console.log("Erro fatal, máquina defeituosa");
});
console.log('código depois!');
*/  
//

//async function loadPosts () {     //ESPERA A FUNÇÃO
//    document.getElementById('posts').innerHTML = 'Carregando...'
//
//    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
//    let json = await req.json();
//    montarBlog(json);
//        
//}
//
//function montarBlog(lista) {
//    let html = '';
//
//    for(let i in lista) {
//        html += '<h3>'+lista[i].title+'</h3>';
//        html += lista[i].body+'<br/>';
//        html += '<hr/>';
//    }
//
//    document.getElementById("posts").innerHTML = html;
//}

//async function inserirPost() {
//    document.getElementById("posts").innerHTML = "Carregando..."
//
//    let req = await fetch ('https://jsonplaceholder.typicode.com/posts', {
//        method: 'POST',
//        body: JSON.stringify({
//            title: 'Titulo de teste',
//            body: 'Corpo de teste',
//            userId: 4
//        }),
//        headers: {
//            'Content-Type': 'application/json'
//        }
//    });
//    let json = await req.json();
//
//    console.log(json);
//}


//async function enviar() {
//    let arquivo = document.getElementById('arquivo').files[0];
//
//    let body = new FormData();
//    body.append('title', 'Welcome to the new world');
//    body.append('arquivo', arquivo);
//
//
//    let req = await fetch('https://helloworld.com.br', {
//        method: 'POST',
//        body: body,
//        headers: {
//            'Content-Type': 'multipart/form-data'
//        }
//    });
//}

//function mostrar () {
//    let imagem = document.getElementById("imagem").files[0];
//
//    let img = document.createElement('img');
//    img.src = URL.createObjectURL(imagem);
//    img.width = 200;
//
//    document.getElementById("area").appendChild(img);
//}
//function mostrar () {
//    let reader = new FileReader();
//    let imagem = document.getElementById('imagem').files[0];
//
//    reader.onloadend = function() {
//        let img = document.createElement('img');
//        img.src = reader.result;
//        
//
//        document.getElementById('area').appendChild(img);
//    }
//
//    reader.readAsDataURL(imagem);
//}
















