class Empleado {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    calcularSueldo(horasTrabajadas) {
        return this.sueldo * horasTrabajadas;
    }
}

class EmpleadoTiempoCompleto extends Empleado {
    constructor(nombre, sueldo) {
        super(nombre, sueldo);
    }

    calcularSueldo(horasTrabajadas) {
        return super.calcularSueldo(horasTrabajadas);
    }
}

class EmpleadoMedioTiempo extends Empleado {
    constructor(nombre, sueldo) {
        super(nombre, sueldo);
    }

    calcularSueldo(horasTrabajadas) {
        return super.calcularSueldo(horasTrabajadas);
    }
}

// arreglo de empleados
const empleados = [
    new EmpleadoTiempoCompleto('Juan', 200),
    new EmpleadoMedioTiempo('Ana', 150),
    new EmpleadoTiempoCompleto('Pedro', 250),
    new EmpleadoMedioTiempo('Lucía', 100)
];

// Horas trabajadas por cada empleado
const horasTrabajadas = [40, 20, 45, 25];

empleados.forEach((empleado, indice) => {
    const sueldo = empleado.calcularSueldo(horasTrabajadas[indice]);
    console.log(`El sueldo de ${empleado.nombre} es: $${sueldo}`);
});
