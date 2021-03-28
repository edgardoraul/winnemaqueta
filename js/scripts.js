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
			listadoMenu.classList.remove("navegacion__lista--abierto", "fadeInDown");
			listadoMenu.classList.add("navegacion__lista--cerrado", "fadeOutUp");
		}
		
		else if( listadoMenu.classList.contains("navegacion__lista--cerrado") )
		{
			listadoMenu.classList.add("navegacion__lista--abierto", "fadeInDown");
			listadoMenu.classList.remove("navegacion__lista--cerrado", "fadeOutUp");
		}

		else
		{
			listadoMenu.classList.add("navegacion__lista--abierto", "fadeInDown");
			listadoMenu.classList.remove("navegacion__lista--cerrado", "fadeOutUp");
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
		listadoSubMenuBoton[i].addEventListener("click", (ev) => {
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
		});
	}
}