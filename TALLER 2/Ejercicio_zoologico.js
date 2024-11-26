class Animal {
    constructor(nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }

    describirAnimal() {
        console.log(`${this.nombre} es de especie ${this.especie}`);
    }

    hacerSonido() {
        console.log(`${this.nombre} está haciendo un sonido`);
    }
}

class Leon extends Animal {
    constructor(nombre) {
        super(nombre, 'León');
    }

    hacerSonido() {
        console.log(`${this.nombre} el león está rugiendo: Roaaaarrrr!`);
    }
}

class Elefante extends Animal {
    constructor(nombre) {
        super(nombre, 'Elefante');
    }

    hacerSonido() {
        console.log(`${this.nombre} el elefante está barritando: Barrrr!`);
    }
}

class Tigre extends Animal {
    constructor(nombre) {
        super(nombre, 'Tigre');
    }

    hacerSonido() {
        console.log(`${this.nombre} el tigre está ronroneando: Grrrrr!`);
    }
}

let leon1 = new Leon("Alex");
let elefante1 = new Elefante("Dumbo");
let tigre1 = new Tigre("Tigresa");

let animales = [leon1, elefante1, tigre1];

// aqui se hace poliformismo
animales.forEach(animal => {
    animal.hacerSonido();
});
