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
		}
		
		else if( listadoMenu.classList.contains("navegacion__lista--cerrado") )
		{
			listadoMenu.classList.add("navegacion__lista--abierto");
			listadoMenu.classList.remove("navegacion__lista--cerrado");
		}

		else
		{
			listadoMenu.classList.add("navegacion__lista--abierto");
			listadoMenu.classList.remove("navegacion__lista--cerrado");
		}
	}

	// Escuchando el evento de redimensionar la pantalla
	window.addEventListener("resize", mostrarOcultar, false);
	
	// Función muestra y oculta el menú principal dependiendo del ancho de pantalla
	function mostrarOcultar(ev)
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
	}

	/* El "ir arriba" **************************************/
	// Escuchando el evento del scrolling
	const botonGoTop = document.querySelector("#gotop");
	window.addEventListener("scroll", esconder_mostrar);
	window.addEventListener("load", esconder_mostrar);
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
	window.addEventListener("scroll", mostrarMenu);
	let lastScrollTop = 0;
	const menuPrincipal = document.querySelector("#header");
	const listadoMenuPrincipal = document.querySelector("#header_nav");
	function mostrarMenu()
	{
		let st = window.pageYOffset || document.documentElement.scrollTop;
		if( st > lastScrollTop && !listadoMenuPrincipal.classList.contains("navegacion__lista--abierto") )
		{
			menuPrincipal.classList.add("fadeOutUp");
			menuPrincipal.classList.remove("fadeInDown");
			menuPrincipal.classList.remove("fijado");
			listadoMenuPrincipal.classList.remove("scrollingY");
		}
		else if ( st <= lastScrollTop && listadoMenuPrincipal.classList.contains("navegacion__lista--abierto") )
		{
			menuPrincipal.classList.add("fadeInDown");
			menuPrincipal.classList.add("fijado");
			listadoMenuPrincipal.classList.add("scrollingY");
			menuPrincipal.classList.remove("fadeOutUp");
		}
		else if( listadoMenuPrincipal.classList.contains("navegacion__lista--cerrado") )
		{
			listadoMenuPrincipal.classList.remove("scrollingY");
		}
		else
		{
			menuPrincipal.classList.add("fadeInDown");
			menuPrincipal.classList.add("fijado");
			menuPrincipal.classList.remove("fadeOutUp");
		}
		lastScrollTop = st;
	}
}