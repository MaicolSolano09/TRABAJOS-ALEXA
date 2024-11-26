//EJERCICIO 1 Gestión de Estudiantes
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    return `¡Hola! Mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
  }
}

class Estudiante extends Persona {
  constructor(nombre, edad) {
    super(nombre, edad);
    this.calificaciones = [];
  }
  agregarCalificacion(calificacion) {
    this.calificaciones.push(parseFloat(calificacion));
  }
  calcularPromedio() {
    let suma = this.calificaciones.reduce(
      (total, calificacion) => total + calificacion,
      0
    );
    let promedio = (suma / this.calificaciones.length).toFixed(2);
    return `Promedio de notas: ${promedio}`;
  }
  mostrarCalificaciones() {
    return `El estudiante ${this.nombre} tiene las siguientes notas: ${this.calificaciones}`;
  }
}

class Curso {
  constructor(nombreCurso) {
    this.nombreCurso = nombreCurso;
    this.estudiantes = [];
  }

  agregarEstudiante(estudiante) {
    if (estudiante instanceof Estudiante) {
      this.estudiantes.push(estudiante);
    } 
  }

  calcularPromedioCurso() {
    if (this.estudiantes.length === 0) {
      return "No hay estudiantes en el curso.";
    }

    let sumaTotal = 0;
    let cantidadCalificaciones = 0;

    this.estudiantes.forEach(estudiante => {
      sumaTotal += estudiante.calificaciones.reduce((sum, cal) => sum + cal, 0);
      cantidadCalificaciones += estudiante.calificaciones.length;
    });

    if (cantidadCalificaciones === 0) {
      return "No hay calificaciones en el curso.";
    }

    let promedio = (sumaTotal / cantidadCalificaciones).toFixed(2);
    return `Promedio del curso '${this.nombreCurso}': ${promedio}`;
  }
}

class CursoOnline extends Curso {
  constructor(nombreCurso, plataforma) {
    super(nombreCurso);
    this.plataforma = plataforma;
  }

  detallesCurso() {
    return `Curso online '${this.nombreCurso}' en la plataforma '${this.plataforma}'.`;
  }
}

class CursoPresencial extends Curso {
  constructor(nombreCurso, ubicacion) {
    super(nombreCurso);
    this.ubicacion = ubicacion;
  }

  detallesCurso() {
    return `Curso presencial '${this.nombreCurso}' en '${this.ubicacion}'.`;
  }
}

let alumno;
let curso;

function agregarEstudiante() {
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);

  if (nombre && edad) {
    alumno = new Estudiante(nombre, edad);
    document.getElementById("resultado").innerHTML = alumno.saludar();
  } else {
    alert("Completa todos los campos.");
  }
}

function agregarCalificacion() {
  if (alumno) {
    const calificacion = parseFloat(document.getElementById("calificacion").value);
    if (!isNaN(calificacion)) {
      alumno.agregarCalificacion(calificacion);
      document.getElementById("resultado").innerHTML = `Calificación ${calificacion} agregada.`;
    } else {
      alert("Ingrese una calificación válida.");
    }
  } else {
    alert("Primero debe agregar un estudiante.");
  }
}

function mostrarCalificaciones() {
  if (alumno) {
    document.getElementById("resultado").innerHTML = alumno.mostrarCalificaciones();
  }
}

function calcularPromedio() {
  if (alumno) {
    document.getElementById("resultado").innerHTML = alumno.calcularPromedio();
  }
}

function crearCurso() {
  const nombreCurso = document.getElementById("nombreCurso").value;
  const tipoCurso = document.getElementById("tipoCurso").value;
  const detalleCurso = document.getElementById("detalleCurso").value;

  if (nombreCurso && detalleCurso) {
    if (tipoCurso === "online") {
      curso = new CursoOnline(nombreCurso, detalleCurso);
    } else {
      curso = new CursoPresencial(nombreCurso, detalleCurso);
    }
    document.getElementById("resultado").innerHTML = `Curso '${nombreCurso}' creado.`;
  } else {
    alert("Completa todos los campos del curso.");
  }
}

function agregarEstudianteAlCurso() {
  if (curso && alumno) {
    curso.agregarEstudiante(alumno);
    document.getElementById("resultado").innerHTML = `Estudiante ${alumno.nombre} agregado al curso '${curso.nombreCurso}'.`;
  } else {
    alert("Asegúrese de haber creado un curso y agregado un estudiante.");
  }
}

function mostrarPromedioCurso() {
  if (curso) {
    document.getElementById("resultado").innerHTML = curso.calcularPromedioCurso();
  } else {
    alert("Primero debe crear un curso.");
  }
}


//EJERCICIO 2: Zoológico
class Animal {
  constructor(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie;
  }

  describirAnimal() {
    return `${this.nombre} es de especie ${this.especie}`;
  }

  hacerSonido() {
    return `${this.nombre} está haciendo un sonido`;
  }
}

class Leon extends Animal {
  constructor(nombre) {
    super(nombre, "León");
  }

  hacerSonido() {
    return `${this.nombre} el león está rugiendo: Roaaaarrrr!`;
  }
}

class Elefante extends Animal {
  constructor(nombre) {
    super(nombre, "Elefante");
  }

  hacerSonido() {
    return `${this.nombre} el elefante está barritando: Barrrr!`;
  }
}

class Tigre extends Animal {
  constructor(nombre) {
    super(nombre, "Tigre");
  }

  hacerSonido() {
    return `${this.nombre} el tigre está ronroneando: Grrrrr!`;
  }
}

let animales = [];

function agregarAnimal() {
  const nombre = document.getElementById("nombreAnimal").value;
  const tipo = document.getElementById("tipoAnimal").value;

  let nuevoAnimal;

  if (tipo === "Leon") {
    nuevoAnimal = new Leon(nombre);
  } else if (tipo === "Elefante") {
    nuevoAnimal = new Elefante(nombre);
  } else if (tipo === "Tigre") {
    nuevoAnimal = new Tigre(nombre);
  }

  if (nuevoAnimal) {
    animales.push(nuevoAnimal);
    document.getElementById(
      "resultado1"
    ).innerHTML = `${nuevoAnimal.describirAnimal()} ha sido agregado.`;
  }
}

function hacerSonidos() {
  let resultado = "";
  if (animales.length > 0) {
    animales.forEach((animal) => {
      resultado += animal.hacerSonido() + "<br>";
    });
    document.getElementById("resultado1").innerHTML = resultado;
  }
}

//EJERCICIO 3: Inventario de Productos
class Producto {
  constructor(nombre, precio, cantidadEnStock) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidadEnStock = cantidadEnStock;
  }

  mostrarProducto() {
    return `Producto: ${this.nombre}, Precio: ${this.precio}, Cantidad en stock: ${this.cantidadEnStock}`;
  }
}

class Electrodomestico extends Producto {
  constructor(nombre, precio, cantidadEnStock, marca) {
    super(nombre, precio, cantidadEnStock);
    this.marca = marca;
  }

  mostrarProducto() {
    return `Electrodoméstico: ${this.nombre}, Marca: ${this.marca}, Precio: ${this.precio}, Cantidad en stock: ${this.cantidadEnStock}`;
  }
}

let productos = [];

function toggleMarca() {
  const tipo = document.getElementById("tipoProducto").value;
  const marcaProductos = document.getElementById("marcaProductos");
  marcaProductos.style.display = tipo === "Electrodomestico" ? "block" : "none";
}

function agregarProducto() {
  const nombre = document.getElementById("nombreProducto").value;
  const precio = document.getElementById("precioProducto").value;
  const cantidad = document.getElementById("cantidadStock").value;
  const tipo = document.getElementById("tipoProducto").value;
  let nuevoProducto;

  if (tipo === "Electrodomestico") {
    const marca = document.getElementById("marcaProducto").value;
    nuevoProducto = new Electrodomestico(
      nombre,
      parseFloat(precio),
      parseInt(cantidad),
      marca
    );
  } else {
    nuevoProducto = new Producto(
      nombre,
      parseFloat(precio),
      parseInt(cantidad)
    );
  }

  productos.push(nuevoProducto);
  document.getElementById(
    "resultado2"
  ).innerHTML = `Se ha agregado el producto: ${nuevoProducto.mostrarProducto()}`;
}

function listarProductosConBajoStock() {
  const productosConBajoStock = productos.filter(
    (producto) => producto.cantidadEnStock < 10
  );
  let resultadoHTML = "<h3>Productos con stock menor a 10:</h3>";

  if (productosConBajoStock.length > 0) {
    productosConBajoStock.forEach((producto) => {
      resultadoHTML += `<p>${producto.mostrarProducto()}</p>`;
    });
  } else {
    resultadoHTML += "<p>No hay productos con bajo stock.</p>";
  }

  document.getElementById("resultado2").innerHTML = resultadoHTML;
}

//EJERCICIO 4: Sistema de Empleados
class Empleado {
  constructor(nombre, sueldo) {
    this.nombre = nombre;
    this.sueldo = sueldo;
  }
}

class EmpleadoTiempoCompleto extends Empleado {
  constructor(nombre, sueldo) {
    super(nombre, sueldo);
  }

  calcularSueldo(horas) {
    return this.sueldo * horas;
  }
}

class EmpleadoMedioTiempo extends Empleado {
  constructor(nombre, sueldo) {
    super(nombre, sueldo);
  }

  calcularSueldo(horas) {
    return this.sueldo * horas * 0.5;
  }
}

let empleados = [];

function agregarEmpleado() {
  const nombre = document.getElementById("nombreEmpleado").value;
  const sueldo = parseFloat(document.getElementById("sueldoEmpleado").value);
  const tipo = document.getElementById("tipoEmpleado").value;
  const horas = parseFloat(document.getElementById("horasTrabajadas").value);

  let nuevoEmpleado;

  if (tipo === "Tiempo Completo") {
    nuevoEmpleado = new EmpleadoTiempoCompleto(nombre, sueldo);
  } else if (tipo === "Medio Tiempo") {
    nuevoEmpleado = new EmpleadoMedioTiempo(nombre, sueldo);
  }

  if (nuevoEmpleado) {
    empleados.push(nuevoEmpleado);
    const sueldoTotal = nuevoEmpleado.calcularSueldo(horas);
    document.getElementById(
      "resultado3"
    ).innerHTML = `${nuevoEmpleado.nombre} ha sido agregado. Sueldo total: $${sueldoTotal}`;
  }
}

function listarEmpleados() {
  let resultado = "";
  if (empleados.length > 0) {
    empleados.forEach((empleado) => {
      resultado += `${empleado.nombre} - Sueldo por hora: $${empleado.sueldo}<br>`;
    });
    document.getElementById("resultado3").innerHTML = resultado;
  }
}

//Ejercicio 5: Sistema Bancario

class CuentaBancaria {
  constructor(numeroCuenta, saldo = 0) {
    this.numeroCuenta = numeroCuenta;
    this.saldo = saldo;
  }

  depositar(monto) {
    this.saldo += monto;
  }

  retirar(monto) {
    if (monto <= this.saldo) {
      this.saldo -= monto;
    } else {
      alert("Saldo insuficiente.");
    }
  }
}

class CuentaAhorros extends CuentaBancaria {
  aplicarIntereses() {
    const interes = 0.02;
    this.saldo += this.saldo * interes;
  }
}

class CuentaCorriente extends CuentaBancaria {
  retirar(monto) {
    const limite = -500;
    if (this.saldo - monto >= limite) {
      this.saldo -= monto;
    } else {
      alert("Límite de sobregiro alcanzado.");
    }
  }
}

const cuentas = [];

function crearCuenta() {
  const numeroCuenta = document.getElementById("numeroCuenta").value;
  const tipoCuenta = document.getElementById("tipoCuenta").value;

  let nuevaCuenta;
  if (tipoCuenta === "ahorros") {
    nuevaCuenta = new CuentaAhorros(numeroCuenta);
  } else {
    nuevaCuenta = new CuentaCorriente(numeroCuenta);
  }

  cuentas.push(nuevaCuenta);
  actualizarListado();
}

function depositar() {
  const numeroCuenta = document.getElementById("numeroCuenta").value;
  const monto = parseFloat(document.getElementById("monto").value);

  const cuenta = cuentas.find((c) => c.numeroCuenta === numeroCuenta);
  if (cuenta) {
    cuenta.depositar(monto);
    actualizarListado();
  }
}

function retirar() {
  const numeroCuenta = document.getElementById("numeroCuenta").value;
  const monto = parseFloat(document.getElementById("monto").value);

  const cuenta = cuentas.find((c) => c.numeroCuenta === numeroCuenta); //find para encontrar el objeto que se quiere
  if (cuenta) {
    cuenta.retirar(monto);
    actualizarListado();
  }
}

function actualizarListado() {
  const listado = document.getElementById("listadoCuentas");
  listado.innerHTML = "";
  cuentas.forEach((cuenta) => {
    const li = document.createElement("li");
    li.textContent = `Cuenta ${cuenta.numeroCuenta} - Saldo: $${cuenta.saldo}`;
    listado.appendChild(li);
  });
}

  //Ejercicio 6: Catálogo de Vehículos

  class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    DescripcionVehiculo() {
        return `El vehículo de marca ${this.marca}, modelo ${this.modelo}, año ${this.año}`;
    }
}

class Auto extends Vehiculo {
    constructor(marca, modelo, año) {
        super(marca, modelo, año);
    }
    conducir() {
        return `${this.DescripcionVehiculo()} está siendo conducido.`;
    }
}

class Moto extends Vehiculo {
    constructor(marca, modelo, año) {
        super(marca, modelo, año);
    }
    conducir() {
        return `${this.DescripcionVehiculo()} está siendo conducida.`;
    }
}

let Vehiculos = [];

function agregarVehiculo() {
    const marca = document.querySelector("#marca").value;
    const modelo = document.querySelector("#modelo").value;
    const año = document.querySelector("#anio").value;
    const tipo = document.querySelector("#tipoVehiculo").value;

    let VehiculoNuevo;
    if (tipo === "Auto") {
        VehiculoNuevo = new Auto(marca, modelo, año);
    } else if (tipo === "Moto") {
        VehiculoNuevo = new Moto(marca, modelo, año);
    }

    if (VehiculoNuevo) {
        Vehiculos.push(VehiculoNuevo);
        document.getElementById("listadoVehiculos").innerHTML = `${VehiculoNuevo.DescripcionVehiculo()} ha sido agregado.`;
    }
}

function listarVehiculos() {
    let resultado = "";
    if (Vehiculos.length > 0) {
        Vehiculos.forEach(vehiculo => {
            resultado += `<li>${vehiculo.DescripcionVehiculo()}</li>`;
        });
        document.getElementById("listadoVehiculos").innerHTML = resultado;
    }
}

//ejercicio 7

//Ejercicio 8: Biblioteca

class Libro {
  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }
  mostrarLibro() {
    return `Libro: ${this.titulo}, Autor: ${this.autor}`;
  }
}

class LibroDigital extends Libro {
  constructor(titulo, autor, formato) {
    super(titulo, autor);
    this.formato = formato;
  }
  mostrarLibro() {
    return `Libro: ${this.titulo}, Autor: ${this.autor}, Formato: ${this.formato}`;
  }
}

class LibroFisico extends Libro {
  constructor(titulo, autor, paginas) {
    super(titulo, autor);
    this.paginas = paginas;
  }
  mostrarLibro() {
    return `Libro: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.paginas}`;
  }
}

let AlmacenarLibros = [];

function agregarLibro() {
  const nombre = document.getElementById("nombreTitulo").value;
  const autor = document.getElementById("autor").value;
  const tipo = document.getElementById("tipo").value.toLowerCase();

  let librito;

  if (tipo === "digital") {
    const formato = document.getElementById("formato").value;
    librito = new LibroDigital(nombre, autor, formato);
  } else if (tipo === "fisico") {
    const paginas = document.getElementById("paginas").value;
    librito = new LibroFisico(nombre, autor, paginas);
  }

  if (librito) {
    AlmacenarLibros.push(librito);
    document.getElementById(
      "listadoLibros"
    ).innerHTML = `${librito.mostrarLibro()}, ha sido agregado.`;
    limpiarFormulario();
  }
}

function listarLibros() {
  const listaLibros = document.getElementById("listaLibros");
  listaLibros.innerHTML = "";

  AlmacenarLibros.forEach((librito) => {
    const li = document.createElement("li");
    li.textContent = librito.mostrarLibro();
    listaLibros.appendChild(li);
  });
}

function listarLibrosPorAutor() {
  const BusquedaPorAutor = document.getElementById("BusquedaPorAutor").value;
  const listaLibrosPorAutor = document.getElementById("listaLibrosPorAutor");
  listaLibrosPorAutor.innerHTML = "";

  let librosEncontrados = false;

  AlmacenarLibros.forEach((libro) => {
    if (libro.autor.toLowerCase() === BusquedaPorAutor.toLowerCase()) {
      const li = document.createElement("li");
      li.textContent = libro.mostrarLibro();
      listaLibrosPorAutor.appendChild(li);
      librosEncontrados = true;
    }
  });
}

function limpiarFormulario() {
  document.getElementById("formularioLibro").reset();
  document.getElementById("campoDigital").style.display = "none";
  document.getElementById("campoFisico").style.display = "none";
}

function mostrarCampos() {
  const tipo = document.getElementById("tipo").value;
  if (tipo === "digital") {
    document.getElementById("campoDigital").style.display = "block";
    document.getElementById("campoFisico").style.display = "none";
  } else if (tipo === "fisico") {
    document.getElementById("campoDigital").style.display = "none";
    document.getElementById("campoFisico").style.display = "block";
  } else {
    document.getElementById("campoDigital").style.display = "none";
    document.getElementById("campoFisico").style.display = "none";
  }
}

//Ejercicio 9: Sistema de Transporte

class Transporte {
  constructor(capacidad, tipoCombustible) {
    this.capacidad = capacidad;
    this.tipoCombustible = tipoCombustible;
  }
  mostrarTransporte() {
    return `Capacidad de personas: ${this.capacidad}, Tipo de combustible: ${this.tipoCombustible}`;
  }
}

class Autobus extends Transporte {
  constructor(capacidad, tipoCombustible) {
    super(capacidad, tipoCombustible);
  }
  arrancar() {
    return `El autobús ha arrancado`;
  }
}

class Bicicleta extends Transporte {
  constructor(capacidad, tipoCombustible) {
    super(capacidad, "no usa");
  }
  pedalear() {
    return `La bicicleta esta siendo manejada`;
  }
}

let MedioTransporte = [];

function agregarTransporte() {
  const capacidad = document.getElementById("capacidad").value;
  const tipoTransporte  = document.getElementById("tipoTransporte").value;
  const tipoCombustible = document.getElementById("tipoCombustible").value;

  let transporte;

  if (tipoTransporte  === 'Autobus') {
      transporte = new Autobus(capacidad, tipoCombustible);
  } else if (tipoTransporte  === 'Bicicleta') {
      transporte = new Bicicleta(capacidad);
  }

  if (transporte) {
      MedioTransporte.push(transporte);
      listarTransportes();
    }
  }


function listarTransportes(){
  const lista=document.getElementById('listaTransportes');
  lista.innerHTML="";

  MedioTransporte.forEach(transporte=>{
      let go;
      if(transporte instanceof Autobus){
          go=transporte.arrancar();
      }else if(transporte instanceof Bicicleta){
          go=transporte.pedalear();
      }
      const lisItem=document.createElement('li');
      lisItem.textContent=`${transporte.mostrarTransporte()}, ${go}`
      lista.appendChild(lisItem)
   });
}
document.getElementById("tipoTransporte").addEventListener("change", function() {
  const tipo = this.value;
  const tipoCombustibleContainer = document.getElementById("tipoCombustibleContainer");

  if (tipo === "Bicicleta") {
      tipoCombustibleContainer.style.display = "none"; // Esconde el campo de combustible
  } else {
      tipoCombustibleContainer.style.display = "block"; // Muestra el campo de combustible
  }
});
  
//Ejercicio 10: Tienda de Mascotas

class Mascota{
  constructor(nombre,tipo){
      this.nombre=nombre;
      this.tipo=tipo;
  }
  describirMascota(){
      return `Nombre: ${this.nombre},  Tipo: ${this.tipo}`
  }
}
class Perro extends Mascota{
  constructor(nombre){
      super(nombre,'Perro');
  }
  ladrar(){
      return `El perro hace Guauu`;
  }
}

class Gato extends Mascota{
  constructor(nombre){
      super(nombre,'Gato');
  }
  maullar(){
      return `${this.nombre} hace miauuu`
  }
}

let Mascotas=[];

function agregarMascota() {
  const nombreMascota = document.getElementById("nombreMascota").value;
  const tipoMascota  = document.getElementById("tipoMascota").value;

  let mascotica;

  if (tipoMascota  === 'Perro') {
      mascotica = new Perro(nombreMascota);
  } else if (tipoMascota  === 'Gato') {
      mascotica = new Gato(nombreMascota);
  }

  if (mascotica) {
      Mascotas.push(mascotica);
      listarMascotas();
    }
  }
  function listarMascotas(){
      const listar=document.getElementById('listaMascotas');
      listar.innerHTML="";
  
      Mascotas.forEach(mascoticas=>{
          let Animal;
          if(mascoticas instanceof Perro){
              Animal=mascoticas.ladrar();
          }else if(mascoticas instanceof Gato){
              Animal=mascoticas.maullar();
          }
          const lisItem1=document.createElement('li');
          lisItem1.textContent=`${mascoticas.describirMascota()}, ${Animal}`
          listar.appendChild(lisItem1)
       });
  }