//Versión avanzada de interfaz nueronal desarrollada con html, css y javascript.
//Basada en primera versión basica desarrollada con python. 
//Obivamente está versión desarrollada con html, css y javascript (lleva una serie de mejoras aplicas)
//Inicio de nuevas mejoras en la interfaz neuronal
let network = new brain.neuroalNetwork();

//Entrenada para gestionar colores
network.train([
        //fondo negro (entrada en 0s) = texto blanco (salida = 1)
        {input: {rojo: 0, verde: 0, azul: 0},output:{color:1}},
        //fondo blanco (entrada en 1s) = texto negro (salida = 0)
        {input: {rojo: 1, verde: 1, azul: 1},output:{color:0}},
        //fondo verde, texto negro
        {input: {rojo: 0, verde: 1, azul: 0},output:{color:0}},
        //fondo azul, texto blanco
        {input: {rojo: 0, verde: .43, azul: 1},output:{color:1}},
        //fondo rojo, texto blanco
        {input: {rojo: 1, verde: 0, azul: 0},output:{color:1}},

]);
function update(color){
        //canales de colores:
        let rgb = [color.channels.r, color.channels.g, color.channels.b];
        let div = document.getElementById("MiInterfazneuronalavanzada");
        div.style.background = color.toHEXString(); //Nueva forma para poner el color de fondo
        //Tomar el fondo actual elegido por el usuario,
        //para usarlo de entrada para que la red nos de su
        //prediccion del mejor color de texto a utilizar
        let entrada ={
        rojo: rgb[0]/255,
        verde: rgb[1]/255,
        azul: rgb[2]/255,        
          };
          //Obtener la prediccion de la red
			let resultado = network.run(entrada);
			//console.log(resultado);
                        //Si resultado > .5, se considera color de texto blanco
	if (resultado.color > .5) {
	   div.style.color = "white";
	  }  else {
	    div.style.color = "black";
	  }
        }