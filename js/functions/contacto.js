var nombre;
var apellido;
var edad;
var celular;
var departamento;
var sexo;
var info;
var mensajee;
let contactoArray = []
/*toma los datos del contacto y los guarda en un array*/
function cargarFormContacto(){
    var nombre = document.getElementById('nombreContacto').value;
    var apellido = document.getElementById('apellidoContacto').value;
    var edad = document.getElementById('edadContacto').value;
    var celular = document.getElementById('celularContacto').value;
    var departamento = document.getElementById('departamentoContacto').value;
    var sexo = document.getElementById('masculino','femenino').value;
    var info = document.getElementById('acepta').value;
    var mensajee = document.getElementById('mensajee').value;
    var contacto1 = new Contacto(nombre,apellido,edad,celular,departamento,sexo,mensajee,info);
    contacto1.mostrarDatos();
    contactoArray.push(contacto1);
    localStorage.setItem("contacto1", JSON.stringify(contactoArray));
    let contactoArray1 = JSON.parse(localStorage.getItem("contacto1"))
    }

function Contacto (nombre,apellido,edad,celular,departamento,sexo,mensajee,info) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.celular = celular;
    this.departamento = departamento;
    this.sexo = sexo;
    this.mensajee = mensajee;
    this.info = info;
    this.mostrarDatos = function () {
            console.log(contactoArray)
        }
    }

/*validacion del form*/
(function () {
    'use strict'

    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }else{
              alert('Gracias por contactarte con nosotros!')
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()