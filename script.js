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



function menuToggle() {
    let menuArea = document.getElementById("menu-area");

    if(menuArea.style.width == '200px') {
        menuArea.style.width ='0px';
    } else {
        menuArea.style.width = '200px';
    }

}



