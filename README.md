  Flow weather

###  Descripción

- Aplicación meteorológica que que muestra el clima de 5 ciudades de LATAM.
- La aplicación proporciona la información meteorológica para los próximos 5 días de una ciudad seleccionada.

###  TECNOLOGIA UTILIZADA:

- HTML
- CSS
- JavaScript.
- React js.

###  Estructura:

- Componentes: CardOfeta, Card, FlowResponsive, Image, ImageWeather, Navb, SeccionWeather y Spinner.
- Img: Recursos multimedia(imagenes).
- pages: Paginas de la app: weather y Home.

###  Diseño detallado:

- Se Construyó la aplicación utilizando componentes funcionales de react para manejar el estado, compartir datos mediantes props y otros métodos de ciclo de vida.
- Para el sistema de rutas se utilizo la libreria "react-router-dom".
- Para brindar mayor orden y compresion del proyecto, se utilizo la metodologia BEM para escribir los estilos  CSS de la app. 
- Para lograr la app responsive se utilizo Bootstrap y media Query.
- Mantuve el diseño de la aplicación simple para tener cualquier modificación o mejora en el futuro para evolucionar el diseño según sea necesario.
- Para los icon de la app se utilizo react-icons por la variedad y tamaño de la libreria.
- Para el consumo de la APi se utilizo Axios.
- Para mejorar la carga de las images se utilizo "react-lazy-load-image-component".

###  Detalles de la API:
Api para obtener el clima actual de una ciudad especifica.
- https://api.openweathermap.org/data/2.5/forecast

Api para obtener el clima de los 8 dias futuros de una ciudad especifica.
- https://api.openweathermap.org/data/2.5/onecall

###  Enlace de la aplicación:

Enlace a la aplicación alojada en Vercel [ https://challenge-sable-xi.vercel.app/ ](https://challenge-sable-xi.vercel.app/)

###  Cómo ejecutar la aplicación:

Clonar el repositorio y configurar la aplicación

```
# clonar el repositorio git
clon de git https://github.com/obertogustavo10/challenge.git
cd test-challege/
npm install
npm start

```
