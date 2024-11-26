// Clase Padre
class Animal {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    hacerSonido() {
      console.log("El animal hace un sonido.");
    }
  }
  
  // Clase hijo
  class Perro extends Animal {
    constructor(nombre, edad, raza) {
      super(nombre, edad);
      this.raza = raza;
    }
  
    hacerSonido() {
      console.log(`El perro ${this.nombre} ladra: ¡Guau!`);
    }
  }
  const miPerro = new Perro("Yerry", "3", "Criollo");
  console.log(`${miPerro.nombre}, un perro ${miPerro.raza} de ${miPerro.edad} años.`);
  miPerro.hacerSonido();

  