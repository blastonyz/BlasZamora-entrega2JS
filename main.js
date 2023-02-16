alert("hola");
const nombre = prompt("ingrese un nombre de usuario");
let pass = parseInt(prompt("ingrese una clave numerica"));
while (isNaN(pass)) {
    alert("caracteres invalidos");
    pass = parseInt(prompt("ingrese una clave numerica"));

}
alert("Gracias,Bienvenido al simulador de compras");
let user= prompt("Nombre de Usuario")
let clave= parseInt(prompt("Contraseña"))

/*registro y validacion*/
for(let i=0;i<2;i=i+1){
    if(nombre==user && pass==clave){
     alert("Usuario y contraseña correctos");
     break;   
    }
    else{
        alert("usuario o contraseña incorrectos");
        user= prompt("Ingrese Nombre de Usuario");
        clave= parseInt(prompt("Contraseña"));

    }
}

class Stock{
            constructor(id,producto,precio,disponibles){
            this.id = id;            
            this.producto = producto;
            this.precio = precio;
            this.disponibles = disponibles;
            }
            restaDisponible(){
                this.disponible = this.disponible - 1;
                console.log(`el sotck de ${this.producto} ha sido actualizado`); 
            }
}   

const stock1 = new Stock(0,"Aceite",500,20) ;
const stock2 = new Stock(1,"Cera",350,25);
const stock3 = new Stock(2,"Shampoo",400,25);
const stock4 = new Stock(3,"Jabon",200,40);
const stock5 = new Stock(4,"Peine",370,20);

const arrayStock = [stock1,stock2,stock3,stock4,stock5]


function mostrar(){for(Stock of arrayStock){
   console.log(Stock.id) 
   console.log(Stock.producto);
}
}
alert("Seleccione un producto para simular compra: 0-Aceite : $500,1-Cera: $350 ;2-Shampoo : $400,3-Jabon :$200 ,4-Peine :$370 ; ");
let prodId = parseInt(prompt());
while(prodId != "ESC"){




let prueba = arrayStock.find(elem => elem.id == prodId);

console.log(prueba);

let costo = prueba.precio;
alert("$ "+ costo);

alert("Seleccione un producto para simular compra: 0-Aceite : $500,1-Cera: $350 ;2-Shampoo : $400,3-Jabon :$200 ,4-Peine :$370 ; ");
prodId = parseInt(prompt());
}

