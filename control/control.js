var gateway = `ws://${window.location.hostname}/ws`;
  var websocket;
  window.addEventListener('load', onLoad);
  function initWebSocket() {
    console.log('Trying to open a WebSocket connection...');
    websocket = new WebSocket(gateway);
    websocket.onopen    = onOpen;
    websocket.onclose   = onClose;
   
  }
  function onOpen(event) {
    console.log('Connection opened');
  }
  function onClose(event) {
    console.log('Connection closed');
    setTimeout(initWebSocket, 2000);
  }

  function onMessage(event) {
    var state;
    if (event.data == "1"){
      state = "ON";
    }
    else{
      state = "OFF";
    }
    document.getElementById('state').innerHTML = state;
  }

  function onLoad(event) {
    initWebSocket();
    initButton();
  }
  
  //Controller Functionality Start
// ------------------------------------- 

  function initButton() {

  let izquierda = document.querySelector('.left')
  let derecha = document.querySelector('.right')
  let abajo = document.querySelector('.bottom')
  let arriba = document.querySelector('.top')

  let izquierdaFlecha = document.querySelector('.arrow-left')
  let derechaFlecha = document.querySelector('.arrow-right')
  let abajoFlecha = document.querySelector('.arrow-bottom')
  let arribaFlecha = document.querySelector('.arrow-top')

  let Estado = 0
  let senalEnviada = 0 
      window.addEventListener("keydown", function (event) {
            
            let letra = (event.code)
  
      switch (letra) {
        default:

          izquierda.classList.remove('active')
          derecha.classList.remove('active')
          abajo.classList.remove('active')
          arriba.classList.remove('active')

          izquierdaFlecha.classList.remove('active')
          derechaFlecha.classList.remove('active')
          abajoFlecha.classList.remove('active')
          arribaFlecha.classList.remove('active')

        break;
                
            //!--------------IZQUIERDA---------------

          case 'KeyA':
          Estado=1;
          
          if(Estado && !senalEnviada){
          console.log('Presionaste A y soy el boton de la izquierda =D')
          izquierdaFlecha.classList.add('active')
          izquierda.classList.add('active')
          websocket.send('IZQUIERDA');
          senalEnviada=1;
          }

        break;

            //!--------------DERECHA---------------

          case 'KeyD':
          Estado=1;
          if(Estado && !senalEnviada){
          console.log('Presionaste D y soy el boton de la derecha =D')     
          derechaFlecha.classList.add('active')
          derecha.classList.add('active')    
          websocket.send('DERECHA');
          senalEnviada=1;
          }

        break;

            //!--------------ABAJO---------------
           
          case 'KeyS':
          Estado=1;
          if(Estado && !senalEnviada){
          console.log('Presionaste S y soy el boton de abajo =D') 
          websocket.send('ABAJO');         
          abajoFlecha.classList.add('active')
          abajo.classList.add('active')
          senalEnviada=1;
          }

        break;           

            //!--------------ARRIBA---------------

          case 'KeyW':
          Estado=1;
          if(Estado && !senalEnviada){
          console.log('Presionaste W y soy el boton de arriba =D')    
          arribaFlecha.classList.add('active')
          arriba.classList.add('active')
          websocket.send('ARRIBA');
          senalEnviada=1;
          }
        break;    
}})

//SÍ TOCA LA TECLA        ↑ <=
  //-------------------------------
//SÍ SUELTA LA TECLA      => ↓


      window.addEventListener("keyup", function (event) {

          let letra = (event.code)

      switch (letra) {


            //!--------------MENOS_IZQUIERDA---------------

          case 'KeyA':

            console.log('Dejó de presionarse A y soy el boton de la izquierda =D')
            izquierda.classList.remove('active')
            izquierdaFlecha.classList.remove('active')
            websocket.send('MENOSIZQUIERDA');
            Estado=0
            senalEnviada=0

        break;
                
            //!--------------MENOSDERECHA---------------

          case 'KeyD':

            console.log('Dejo de presionarse D y soy el boton de la derecha =D')
            derechaFlecha.classList.remove('active')
            derecha.classList.remove('active')
            websocket.send('MENOSDERECHA');
            Estado=0
            senalEnviada=0

        break;
                
            //!--------------MENOSABAJO---------------
        
            case 'KeyS':

              console.log('Dejo de presionarse S y soy el boton de abajo =D')
              abajoFlecha.classList.remove('active')
              abajo.classList.remove('active')
              websocket.send('MENOSABAJO');
              Estado=0
              senalEnviada=0

          break;
                
            //!--------------MENOSARRIBA---------------

            case 'KeyW':

              console.log('Dejo de presionarse W y soy el boton de arriba =D')
              arribaFlecha.classList.remove('active')
              arriba.classList.remove('active')
              websocket.send('MENOSARRIBA');
              Estado=0
              senalEnviada=0

          break;               
            }

        })

  }

  function toggle(){


    websocket.send('alan');
  }
