const passWordInput = document.querySelector
('#ingresodecontraseña')
//metemos en la variable passWordInput a el input donde se escribe
//la contraseña


//Iconos
const showPassword = document.querySelector
('#show-password')
//metemos en la variable showPassword a el icono de mostrar contraseña

const hidePassword = document.querySelector
('#hide-password')
//metemos en la variable hidePassword a el icono de ocultar contraseña


//Boton
const btnStatePassword = document.querySelector
('.btn-hide-show')
//metemos en btnStatePassword al Boton donde estan los dos iconos
//de mostrar/ocultar contraseña

// ---------------------------------------------------------------
btnStatePassword.addEventListener('click', () => {
  event.preventDefault();
  if(passWordInput.type === 'password'){
    passWordInput.type = 'text'
    showPassword.style.display = 'none'
    hidePassword.style.display = 'block'
   
  }
  else{
    passWordInput.type = 'password'
    showPassword.style.display = 'block'
    hidePassword.style.display = 'none'
  }
  
})

/* En el boton, hacemos un addEventListener, para que cuando se haga
click, se ejecute una funcion, es funcion hace lo siguiente:
si el input (donde se escribe la contraseña), es de tipo password
(osea que no se mostrara lo que se escribe)...
entonces pasamos el tipo a texto, de esta manera se mostrara
al mismo tiempo, modificamos el css de los dos iconos, ocultando uno,
y mostrando el otro, en caso de que sea al reves, que cuando se haga click
el input este en tipo texto, se pasa a modo password, y se oculta un icono,
y se muestra el otro
*/