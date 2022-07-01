//alert("Muito bom dia, vamos acordar!");//



//document.getElementById("titulo").innerHTML = "Opa meu querido, quer café?"; //troca o texto do h1 com o id titulo, para esse texto dentro das aspas//
//document.write("Texto exemplo");
//window.alert("Mensagem exemplo");

//console.log("Mensagem que vai aparecer no console");//

//var nome = "Everton";
//var idade = 90;
//alert( nome);//

//var x = 10;
//var y = 15;

//var total = x + y;//
//alert(total);//

//var nome = "Everton"; //TEXTO ENTRE ASPAS É CHAMADO DE STRING//
//var sobrenome = "Henrique";

//var nomecompleto = nome+" "+sobrenome;
//alert(nomecompleto);//


//var hora = 15;
//if ( hora < 12 ) {
       //console.log("Bom dia")
//}
//else {
    //console.log("Deixa de ser burro, não é de manhã")
//}
//var hora = 15

//if (hora >= 8 && hora <= 12) {
//alert('Hora de programar!!!');
//} else {
//console.log('Hora de Jogar.');
//}

//var hora = 6;

//if ( hora < 5) {//
    //console.log("Boa madrugada")
//}//else if ( hora < 12) {
    //console.log("Bom dia");

//} //else if ( hora < 18) {
    //console.log("Boa tarde");
//} //else if ( hora <= 23) {
    //console.log("Boa noite");
//}

//var hora = 15;

//if ( hora == 12 || hora == 18) {
    //console.log("Você está na hora do rush");
//}

//var idade = 19;

//if(idade < 18) { 
//console.log("adolescente");
//} else if (idade >=19 && idade <=50) {
//console.log("adulto");
//} else if(idade > 50) {
//console.log("idoso");
//} else {
//console.log("operação inválida");
//}


//function clicou(){
   //document.getElementById("titulo").innerHTML = "Agora beba. imediatamente."
//}

//function digitou(e) {
//   if(e.keyCode == 13 && e.ctrlKey == true) {
//    let texto = document.getElementById("campo").value;
//    console.log("texto");
//   }
//}

//function azul(){
//    limpar();
//    document.getElementById("titulo").classList.add('azul');
//}
//function vermelho() {
//    limpar();
//    document.getElementById("titulo").classList.add('vermelho');
//}
//function verde() {
//    limpar();
//    document.getElementById("titulo").classList.add('verde');
//}
//function limpar() {
//    document.getElementById("titulo").classList.remove("azul")
//    document.getElementById("titulo").classList.remove("vermelho")
//    document.getElementById("titulo").classList.remove("verde")
//}
//
//function mostrarTelefone(elemento) {
//    //tirar();
//    elemento.style.display = "none";
//    document.getElementById("telefone").style.display = "block";
//
//}
//function tirar() {
//    document.getElementById("telefone").style.display = "none";
//}


//et carros = ['Palio', 'Civic', 'Toyota Supra Mk11','Trueno', 'Mazda RX7' ];

//onsole.log(carros)


//let carro = {
//    nome: 'Toyota',
//    modelo: 'Supra',
//    ano: '2017',
//    ligado: false,
//    ligar:function() {
//      this.ligado = true;
//        console.log("VRUM VRUM");
//    },
//    acelerar:function() {
//        if(this.ligado == true) {
//        console.log("Riiiiiiiiiiih!");
//        }
//    }
//    
//};
//console.log("Modelo:"+carro.modelo)
//
//carro.ligar();
//carro.acelerar();



//function menuToggle() {
//    let menuArea = document.getElementById("menu-area");
//
//    if(menuArea.style.width == '200px') {
//        menuArea.style.width ='0px';
//    } else {
//        menuArea.style.width = '200px';
//    }
//
//}

//let dia = 4;
//let diaNome = '';
//
//switch(dia) {
//    case 6:
//    case 7:
//        diaNome = 'Final de semana';
//        break;
//    default:
//        diaNome = 'Dia de Semana';
//        break;



   //case 1:
   //    diaNome = 'Segunda-Feira'
   //    break;
   //case 2:
   //    diaNome = 'Terça-Feira'
   //    break;
   //case 3:
   //    diaNome = 'Quarta-Feira'
   //    break;
   //case 4:
   //    diaNome = 'Quinta-Feira'
   //    break;
   //case 5:
   //    diaNome = 'Sexta-Feira'
   //    break;
   //case 6:
   //    diaNome = 'Sábado'    
   //    break;
   //case 7:
   //    diaNome = 'Domingo'
   //    break;


//}
//document.getElementById("dia").innerHTML = "Hoje é: "+diaNome;





//FOR LOOP
//FOR LOOP ARRAY
//let carros = ['Ferrari', 'Lamborghini', 'Mercedes', 'Supra','Mazda RX7'];
//
//let html = '<ul>';
//
//for(let i in carros) {
//    html += '<li>'+ carros[i] +'</li>';
//}
//
//
//html += '</ul>';
//document.getElementById("demo").innerHTML = html;
//let texto = '';
//for(let i = 0; i <= 10; i++) {
//    texto = texto + i + '<br/>';

//}

//let html = '';
//
//
//let c = 0;
//while(c <= 10) {
//    html += "Número: "+c+"<br/>";
//    c++;
//
//}
//for(let c = 1;c <= 10;c++) {
//    html += "Número: "+c+"<br/>";
//}
//
//document.getElementById("demo").innerHTML = html;
//var n = 0;
//
//while (n < 16) { //enquanto n for menor que 16 a condição não será satisfeita//
// n++;
//}
//
//console.log(n);

//=============================FIM DO MÓDULO 2=========================================//


//============================MÓDULO 3=================================================//




//function trocar() {
//
//    if (document.querySelector('button').classList.contains('preto'))  {
//        document.querySelector('button').classList.remove('preto');
//        document.querySelector('button').classList.add('verde');
//    } else {
//        document.querySelector('button').classList.remove('verde');
//        document.querySelector('button').classList.add('preto')
//    }
//}

 












