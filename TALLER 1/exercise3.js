function vehiculo(marca){
    this.marca=marca;

    this.arrancar=function(){
        console.log("El vehículo ha arrancado");
   }
}

function coche(marca,modelo){
    vehiculo.call(this,marca);
    
    this.modelo=modelo;

    this.mostrarInfo=function(){
        console.log("Marca:"+ this.marca, " " + "Modelo:" + this.modelo);
    }
}

const miCoche=new coche('Honda','Civic');
miCoche.arrancar();
miCoche.mostrarInfo();


