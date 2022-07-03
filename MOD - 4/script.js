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


let lista = [
    {id:1, nome:'Everton', sobrenome:'Henrique'},
    {id:2, nome:'Lucas', sobrenome:'Medeiros'},
    {id:3, nome:'Armageddon', sobrenome:'Silva'}
];
let pessoa = lista.find(function(item){
    return  (item.id == 3) ? true : false; 
});



let res = pessoa;

console.log(res);




