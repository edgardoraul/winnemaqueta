window.addEventListener("DOMContentLoaded", cargarScripts);

function cargarScripts()
{
	// Funcionalidad al botón del menú
	const botonMenu = document.querySelector("#boton__menu");
	const listadoSubMenu = document.querySelectorAll(".navegacion__lista__item__enlace + .sublista");
	const listadoMenu = document.querySelector("#header_nav");

	// Creando botones clickeables para abrir los submenúes
	const listadoSubMenuBoton = [];

	listadoSubMenu.forEach( (ev) => {
		listadoSubMenuBoton.push( ev.previousElementSibling);
	});


	for (let i = 0; i < listadoSubMenuBoton.length; i++ )
	{
		listadoSubMenuBoton[i].addEventListener("click", (ev) => {
			ev.preventDefault();

			if( listadoSubMenuBoton[i].nextElementSibling.classList.contains("sublista--abierto") )
			{
				listadoSubMenuBoton[i].nextElementSibling.classList.remove("sublista--abierto");
				listadoSubMenuBoton[i].nextElementSibling.classList.add("sublista--cerrado");
			}
			
			else if( listadoSubMenuBoton[i].nextElementSibling.classList.contains("sublista--cerrado") )
			{
				listadoSubMenuBoton[i].nextElementSibling.classList.add("sublista--abierto");
				listadoSubMenuBoton[i].nextElementSibling.classList.remove("sublista--cerrado");
			}

			else
			{
				listadoSubMenuBoton[i].nextElementSibling.classList.add("sublista--abierto");
				listadoSubMenuBoton[i].nextElementSibling.classList.remove("sublista--cerrado");
			}
		});
	}

	botonMenu.addEventListener( "click", abrirCerrar );

	
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
}