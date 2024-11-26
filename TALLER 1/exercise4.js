// Clase padre
class empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    
    obtenerDetalles() {
        return `Nombre: ${this.nombre}, Salario: ${this.salario}`;
    }
}

// Clase hijo
class gerente extends empleado {
    constructor(nombre, salario, departamento) {
        super(nombre, salario);
        this.departamento = departamento;
    }
    
    obtenerDetalles() {
        return `Nombre: ${this.nombre}, Salario: ${this.salario}, Departamento: ${this.departamento}`;
    }
}

const empleado1 = new empleado("Juanse", "2'000.000");
console.log(empleado1.obtenerDetalles());

const gerente1 = new gerente("Julian", "1'000.000", "Logística");
console.log(gerente1.obtenerDetalles());
