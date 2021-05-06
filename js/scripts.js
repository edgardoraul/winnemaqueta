// Escuchando el evento para que cargue todo el DOM
window.addEventListener("DOMContentLoaded", cargarScripts);

// La función que carga los scripts de funciones importantes.
function cargarScripts()
{
	/* El menú principal **********************/

	// Variable del botón principal que abre y ciera el menú
	const botonMenu = document.querySelector("#boton__menu");

	// Variable que contiene el listado de menú principal de la web
	const listadoMenu = document.querySelector("#header_nav");

	// Escuchando el evento de click del botón del menú principal
	botonMenu.addEventListener( "click", abrirCerrar );

	// Función que puede abrir y cerrar el menú principal
	function abrirCerrar(ev)
	{
		ev.preventDefault();

		if( listadoMenu.classList.contains("navegacion__lista--abierto") )
		{
			listadoMenu.classList.remove("navegacion__lista--abierto");
			listadoMenu.classList.add("navegacion__lista--cerrado");
			botonMenu.children[0].classList.add("icon-menu");
			botonMenu.children[0].classList.remove("icon-cross");
		}
		
		else if( listadoMenu.classList.contains("navegacion__lista--cerrado") )
		{
			listadoMenu.classList.add("navegacion__lista--abierto");
			listadoMenu.classList.remove("navegacion__lista--cerrado");
			botonMenu.children[0].classList.remove("icon-menu");
			botonMenu.children[0].classList.add("icon-cross");
		}

		else
		{
			listadoMenu.classList.add("navegacion__lista--abierto");
			listadoMenu.classList.remove("navegacion__lista--cerrado");
			botonMenu.children[0].classList.remove("icon-menu");
			botonMenu.children[0].classList.add("icon-cross");
		}
	}

	// Escuchando el evento de redimensionar la pantalla
	window.addEventListener("resize", mostrarOcultar, false);
	
	// Función muestra y oculta el menú principal dependiendo del ancho de pantalla
	function mostrarOcultar()
	{
		const ancho = window.innerWidth;
		if( ancho >= 1000 )
		{
			listadoMenu.classList.add("navegacion__lista--abierto");
			listadoMenu.classList.remove("navegacion__lista--cerrado");
		}
		else if ( ancho < 1000 && ancho > 720)
		{
			listadoMenu.classList.add("navegacion__lista--cerrado");
			listadoMenu.classList.remove("navegacion__lista--abierto");
		}
		else
		{
			listadoMenu.classList.remove("navegacion__lista--cerrado");
			listadoMenu.classList.remove("navegacion__lista--abierto");
		}
	}

	/* El "ir arriba" **************************************/
	// Escuchando el evento del scrolling
	const botonGoTop = document.getElementById("gotop");
	// window.addEventListener("scroll", esconder_mostrar);
	// window.addEventListener("load", esconder_mostrar);
	function esconder_mostrar(ev)
	{
		const coordY = window.pageYOffset;
		const ancho = window.innerWidth;
		
		if( coordY >= 600 && ancho < 500 )
		{
			botonGoTop.classList.add( "fadeInUp" );
			botonGoTop.classList.remove( "fadeOutDown" );
		}
		else if( coordY < 600 && ancho < 500 )
		{
			botonGoTop.classList.remove( "fadeInUp" );
			botonGoTop.classList.add( "fadeOutDown" );
		}
		else
		{
			botonGoTop.classList.add( "fadeInUp" );
			botonGoTop.classList.remove( "fadeOutDown" );
		}		
	}

	
	
	/* Los submenúes secundario del menú principal ************/
	
	// Variable de los listados de sub menúes. Es un arreglo
	const listadoSubMenu = document.querySelectorAll(".navegacion__lista__item__enlace + .sublista");
	
	// Creando botones clickeables para abrir los submenúes. Es un arreglo.
	const listadoSubMenuBoton = [];
	listadoSubMenu.forEach( (ev) => {
		listadoSubMenuBoton.push( ev.previousElementSibling);
	});
	
	// Se le asigna la propiedad de poder abrir y cerrar a cada enlace que funcionará como botón de submenú.
	for (let i = 0; i < listadoSubMenuBoton.length; i++ )
	{
		listadoSubMenuBoton[i].addEventListener("click", abrirSubMenu);
		function abrirSubMenu(ev)
		{
			ev.preventDefault();
			
			if( listadoSubMenuBoton[i].nextElementSibling.classList.contains("sublista--abierto") )
			{
				listadoSubMenuBoton[i].nextElementSibling.classList.remove("sublista--abierto");
				listadoSubMenuBoton[i].nextElementSibling.classList.add("sublista--cerrado");

				if(listadoSubMenuBoton[i].childNodes[0].nextElementSibling.classList.contains("icon-minus"))
				{
					listadoSubMenuBoton[i].childNodes[0].nextElementSibling.classList.add("icon-plus");
					listadoSubMenuBoton[i].childNodes[0].nextElementSibling.classList.remove("icon-minus");
				}
			}
			
			else if( listadoSubMenuBoton[i].nextElementSibling.classList.contains("sublista--cerrado") )
			{
				listadoSubMenuBoton[i].nextElementSibling.classList.add("sublista--abierto");
				listadoSubMenuBoton[i].nextElementSibling.classList.remove("sublista--cerrado");
				
				if(listadoSubMenuBoton[i].childNodes[0].nextElementSibling.classList.contains("icon-plus"))
				{
					listadoSubMenuBoton[i].childNodes[0].nextElementSibling.classList.add("icon-minus");
					listadoSubMenuBoton[i].childNodes[0].nextElementSibling.classList.remove("icon-plus");
				}
			}
			
			else
			{
				listadoSubMenuBoton[i].nextElementSibling.classList.add("sublista--abierto");
				listadoSubMenuBoton[i].nextElementSibling.classList.remove("sublista--cerrado");

				if(listadoSubMenuBoton[i].childNodes[0].nextElementSibling.classList.contains("icon-plus"))
				{
					listadoSubMenuBoton[i].childNodes[0].nextElementSibling.classList.add("icon-minus");
					listadoSubMenuBoton[i].childNodes[0].nextElementSibling.classList.remove("icon-plus");
				}
			}
		}
	}


	/* Escuchando el evento scrollTop para poder mostrar el menú principal */
	/* window.addEventListener("scroll", mostrarMenu);
	let lastScrollTop = 0;
	const menuPrincipal = document.querySelector("#header");
	const listadoMenuPrincipal = document.querySelector("#header_nav");
	const wrapper = document.querySelector(".wrapper");
	function mostrarMenu()
	{
		let st = window.pageYOffset || document.documentElement.scrollTop;
		if( st > lastScrollTop && !listadoMenuPrincipal.classList.contains("navegacion__lista--abierto") )
		{
			menuPrincipal.classList.add("fadeOutUp");
			menuPrincipal.classList.remove("fadeInDown");
			menuPrincipal.classList.remove("fijado");
			wrapper.classList.remove("wrapper--fixedMenu");
		}
		else if ( st <= lastScrollTop && listadoMenuPrincipal.classList.contains("navegacion__lista--abierto") )
		{
			menuPrincipal.classList.add("fadeInDown");
			menuPrincipal.classList.add("fijado");
			wrapper.classList.add("wrapper--fixedMenu");
			menuPrincipal.classList.remove("fadeOutUp");
		}
		else
		{
			menuPrincipal.classList.add("fadeInDown");
			menuPrincipal.classList.add("fijado");
			wrapper.classList.remove("wrapper--fixedMenu");
			menuPrincipal.classList.remove("fadeOutUp");
		}
		lastScrollTop = st;
	}
 */

	/* Las funciones para manipular los sliders */
	function cargadorSlider()
	{
		// Contenedor de los items
		const slider = document.querySelector( ".slider" );

		// El arreglo con cada uno de los sliders.
		const slidersItems = document.querySelectorAll(".slider__item");

		// El ancho del contenedor de los items
		if(slidersItems.length !== 0)
		{
			let altoItem = slidersItems[0].clientHeight;
			slider.style.minHeight = altoItem + "px";

			// Cambia el tamaño cada vez que se redimensiona la pantalla
			window.addEventListener("resize", () => {
				altoItem = slidersItems[i].clientHeight;
				slider.style.minHeight = altoItem + "px";
			});

			slider.style.minHeight = altoItem + "px";


			// Animación de entrada y salida
			let animacionEntrada, animacionSalida;
			
			// Agregando los z-index de acuerdo a su orden
			for( let i = 0; i < slidersItems.length; i++ )
			{			
				// Controlando si tiene una animación o no
				if( slider.classList.contains("animacion__carrousel") )
				{
					animacionEntrada = "slideInRight";
					animacionSalida = "slideOutLeft";
					slidersItems[i].classList.add(animacionSalida);
				}
				else if( slidersItems[i].classList.contains("animacion__fade") )
				{
					animacionEntrada = "fadeIn";
					animacionSalida = "fadeOut";
				}
				// console.log( slidersItems[i] );
			}


			// Función que se autoejecuta cada 3 segundos
			let i = 0;
			function temporizadorInfinito()
			{
				setTimeout( temporizadorInfinito, 5000 );
				izq();
	
				// Control del contador
				i = ( i + 1 ) % slidersItems.length;
				der();
				// console.log( slidersItems[i] );
			}
			temporizadorInfinito();
	
			 // Desplazamiento hacia la izquierda y desaparece
			function izq()
			{
				slidersItems[i].classList.add( animacionSalida );
				slidersItems[i].classList.remove( animacionEntrada );
			}
			
			// Desplazamiento desde la derecha y se queda en el centro 
			function der()
			{
				slidersItems[i].classList.add( animacionEntrada );
				slidersItems[i].classList.remove( animacionSalida );
			}
		}		
	}
	cargadorSlider();

	/******* LOS REVIEWS *******/
	const reviewsContenedor = document.querySelector(".contenedor__ventana");
	const reviewsItems = document.querySelectorAll(".contenedor__ventana__item");
	const flechaIzq = document.getElementById("flechaIzq");
	const flechaDer = document.getElementById("flechaDer");

	// Función que mueve a la izquierda o a la derecha
	function escrolIzq()
	{
		reviewsContenedor.scrollLeft -= reviewsItems[0].offsetWidth + 20;
	}
	function escrolDer()
	{
		reviewsContenedor.scrollLeft += reviewsItems[0].offsetWidth + 20;
	}
	
	// Control con los botones
	if(flechaDer != null)
	{
		flechaDer.addEventListener("click", escrolDer, false);
	}
	if(flechaIzq != null)
	{
		flechaIzq.addEventListener("click", escrolIzq, false);
	}

	// Control con las flechas en el teclado
	document.addEventListener("keydown", (e) => {
		if(e.key == "ArrowLeft")
		{
			escrolIzq();
		}
		else if(e.key == "ArrowRight")
		{
			escrolDer();
		}
	}, false);

	// Contador automático de slider. Controla que exista.
	if(reviewsItems.length > 0)
	{
		let cuenta = 0;
		function escrollInfinito()
		{
			setTimeout( escrollInfinito, 1000 );
			if( cuenta + 1 < reviewsItems.length )
			{
				escrolDer();
			}
			else
			{
				escrolIzq();
			}
			cuenta = ( cuenta + 1 ) % reviewsItems.length;
			console.log(reviewsContenedor.scrollLeft);
		}
		escrollInfinito();
	}


	/* MOSTRAR Y OCULTAR LOS FILTROS */	
	const filtros = document.querySelector(".widget__filtro");
	const botonFiltro = document.querySelector("#botonFiltro");

	// Controla que exista
	if(botonFiltro != null)
	{
		botonFiltro.addEventListener("click", filtreador, false);
	}
	function filtreador(ev)
	{
		ev.preventDefault();
		if( filtros.style.display == "block" )
		{
			filtros.style.display = "none";
		}
		else
		{
			filtros.style.display = "block";
		}
	}

	// Controla que existan
	if(filtros != null)
	{
		window.addEventListener("resize", () => {
			if( window.innerWidth > 719 )
			{
				filtros.style.display = "block";
			}
			else
			{
				filtros.style.display = "none";
			}
		});
	}

	/* DAR VUELTA LAS FLECHITAS */
	const flechitas = document.querySelectorAll(".widget__contenido__titulo");
	for(let i = 0; flechitas.length > i; i++)
	{
		flechitas[i].addEventListener("click", () => {
			if(!flechitas[i].classList.contains("widget__contenido__titulo--clickeado"))
			{
				flechitas[i].classList.add("widget__contenido__titulo--clickeado");
				console.log("agregado");
			}
			else
			{
				flechitas[i].classList.remove("widget__contenido__titulo--clickeado");
				console.log("removido");
			}
		});
	}
}
