// VARIABLES
let numeroDocumento;
let usuarios = ['María Rodríguez', 'Ana Martínez', 'Alejandro Pérez', 'Carlos Sánchez', 'Sebastián Díaz'];
let cuentaNuevaDni = [];
let nombreRegistrados = [];
let saldoRegistrados = [];

// BIENVENIDA AL BANCO
let opciones = prompt('Bienvenido a Banco Argentino.\n¿Tiene ya una cuenta en nuestro Banco?\n1. SI\n2. NO').toLowerCase();

if (opciones === "1" || opciones === 'si') {
  tengoCuentaNumeroDocuemento();
  tengoCuentaPassword();
  usuariosCreados();
} else if (opciones === '2' || opciones === 'no') {
  cuentaNueva();
  cuentaNuevaNombre();
  ingresarContraseña();
  ingresarSaldo();
} else {
  alert('Respuesta inválida. Por favor, responda con dígitos numéricos ("1" o "2") o con dígitos alfabéticos ("si" o "no")');
}

// NUMERO DE DOCUMENTO
function tengoCuentaNumeroDocuemento() {
  while (true) {
    numeroDocumento = prompt('Ingrese su Numero De Documento De Identidad (DNI)\nRecuerde que este debe constar de 8 dígitos numéricos:');

    if (numeroDocumento === null) {
      alert('Has cancelado el ingreso del DNI. Regresando al inicio.');
      break;
    }

    if (/^\d{8}$/.test(numeroDocumento)) {
      alert('DNI ingresado correctamente: ' + numeroDocumento);
      break; 
    } else {
      alert('Ingrese un DNI válido de 8 dígitos numéricos. Inténtelo nuevamente.');
    }
  }
}

// INGRESO DE CONTRASEÑA
function tengoCuentaPassword() {
  let password;

  while (true) {
    password = prompt('Ingrese su contraseña:\n-Debe contener al menos 8 caracteres\n-Una mayúscula\n-Una minúscula\n-Un número');

    if (password === null) {
      alert('Has cancelado el ingreso de la contraseña.');
      break; 
    }

    if (password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)) {
      alert('Contraseña ingresada correctamente.');
      break; 
    } else {
      alert('La contraseña no cumple con los requisitos. Inténtelo nuevamente.');
    }
  }
}

// GENERADOR DE SUELDOS ALEATORIO
function usuariosCreados() {
  function generarSueldoAleatorio() {
    return Math.floor(Math.random() * (20001 - 5500) + 5500);
  }

  const nombreAleatorio = usuarios[Math.floor(Math.random() * usuarios.length)];
  const sueldoAleatorio = generarSueldoAleatorio();

  alert(`Bienvenido estimado cliente, ha iniciado sesión en su cuenta:\nPodrá visualizar su saldo también en la consola.\nNombre:  ${nombreAleatorio} \nDNI:  ${numeroDocumento}\nSaldo Actual:  $${sueldoAleatorio}`);

  console.log(`${nombreAleatorio}: ${sueldoAleatorio}`);
}

// INGRESO DE CUENTA NUEVA DNI OPCION 2
function cuentaNueva() {
  while (true) {
    numeroDocumento = prompt('Para registrarse ingrese su Numero De Documento De Identidad (DNI)\nRecuerde que este debe constar de 8 dígitos numéricos:');

    if (numeroDocumento === null) {
      alert('Has cancelado el ingreso del DNI. Regresando al inicio.');
      break;
    }

    if (/^\d{8}$/.test(numeroDocumento)) {
      alert('DNI ingresado correctamente: ' + numeroDocumento);
      cuentaNuevaDni.push(numeroDocumento); 
      break; 
    } else {
      alert('Ingrese un DNI válido de 8 dígitos numéricos. Inténtelo nuevamente.');
    }
  }
}

// INGRESO DE NOMBRE CUENTA NUEVA OPCION 2
function cuentaNuevaNombre() {
  let nombreNuevo;

  while (true) {
    nombreNuevo = prompt('Ingrese su nombre completo:');

    
    if (nombreNuevo.trim() !== '' && !/\d/.test(nombreNuevo)) {
      nombreRegistrados.push(nombreNuevo);
      console.log('Nombre registrado:', nombreNuevo);
      break; 
    } else {
      alert('Por favor, ingrese un nombre válido sin números.');
      
    }
  }
}

// INGRESAR CONTRASEÑA DESPUÉS DE REGISTRAR NUEVO NOMBRE
function ingresarContraseña() {
  let passwordNuevo;

  while (true) {
    passwordNuevo = prompt('Ingrese su nueva contraseña:\n-Debe contener al menos 8 caracteres\n-Una mayúscula\n-Una minúscula\n-Un número');

    if (passwordNuevo === null) {
      alert('Has cancelado el ingreso de la contraseña. Regresando al inicio.');
      break;
    }

    if (passwordNuevo.length >= 8 && /[A-Z]/.test(passwordNuevo) && /[a-z]/.test(passwordNuevo) && /\d/.test(passwordNuevo)) {
      alert('Contraseña ingresada correctamente.');
      break;
    } else {
      alert('La contraseña no cumple con los requisitos. Inténtelo nuevamente.');
    }
  }
}

// INGRESAR SALDO
function ingresarSaldo() {
  let saldoNuevo;

  while (true) {
    saldoNuevo = parseFloat(prompt('Ingrese el saldo inicial de su cuenta:'));

    if (!isNaN(saldoNuevo) && saldoNuevo >= 0) {
      alert('Saldo ingresado correctamente.');
      saldoRegistrados.push(saldoNuevo);
      break;
    } else {
      alert('Ingrese un monto de saldo válido. Inténtelo nuevamente.');
    }
  }

  
alert(`¡Felicitaciones! Ha creado una cuenta en nuestro banco.\nDNI: ${numeroDocumento}\nNombre: ${nombreRegistrados[0]}\nSaldo: $${saldoRegistrados[0]}`);

}


