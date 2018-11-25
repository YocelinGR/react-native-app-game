# Tic Tac Toe
## Documentación y desarrollo
________________________________________
1. Getting started

Explicar y comentar los procesos, comandos y procedimientos para poner el proyecto en marcha, compilar, gestionar dependencias, etc.

•	Como usuario: Acceder a la URL de la aplicación en Expo desde tu celular (https://expo.io/@yocelingr/myApp), escanea el código QR y comienza a usar la App. 

•	Como desarrollador: Acceder a la liga del repositorio, forkear y clonar el repositorio, abrir el repositorio local haciendo uso de un editor (VisualStudioCode, Atom, etc.). 

En una terminal de línea de comandos ejecuta los comandos: “npm init” y  adapta el archivo package.json a tu proyecto, además correo el comando “yarn install” para instalar las dependencias necesarias. Realizar las modificaciones necesarias en los archivos tomando como base la explicación sobre ficheros, archivos y funciones especificados antes, guardar los cambios y visualizarlos desde la línea de comandos corriendo “expo start”, espera a que aparezca el código QR, escanéalo de expo para visualizar los cambios. 

Para contribuir al proyecto, haz un pull request a la liga de GitHub del repositorio original y esperar a que el dueño del repositorio master apruebe o rechace el commit.
Finalmente, puedes crear una cuenta en expo y ejecutar en CLI el comando “expo build: android” desde tus credenciales para subir a la aplicación tus cambios. 

2. Definición de objetivos y estrategia

En esta sección se definirán los resultados que busca el cliente, se propondrán las diferentes opciones que podrían ayudar a conseguir los objetivos y se buscará llegar a un acuerdo con el cliente, para ello es importante definir estrategias que definirán si se desarrollará un juego de gato como aplicación nativa en Android, iOS o PWA.

El objetivo principal de este proyecto es desarrollar un juego nativo para celular, bien para Android o iOS, para este proyecto será necesario hacer uso de un Framework nativo como: React Native, Native Script u otros.

•	Objetivos del cliente:

o	Muestra grilla (grid) de 3x3 y opcionalmente de 4x4

o	Muestra jugador al que le toca su turno para jugar

o	Permite marcar cajita vacía

o	Cambia el turno después de marcar caja 

o	No permite marcar una caja ya marcada

o	Permite reiniciar la partida

o	Detecta jugadas ganadoras en eje x

o	Detecta jugadas ganadoras en eje y

o	Detecta jugadas ganadoras en diagonales

o	Muestra jugador ganador cuando gana

o	Muestra jugada ganadora cuando hay ganador

o	Muestra empate cuando nadie gana y no quedan cajitas que marcar

o	Permitir volver a empezar cuando termina una partida (alguien ganó o empate)

•	Objetivos técnicos:

o	Uso de aplicaciones nativas: Se sugiere el uso de React Native, Native Script, Vue Native o Ionic. 

o	Manejo de EXPO para los despliegues y pruebas de funcionalidad. 

Adicionalmente se sugiere el uso de Android Studio, Android Simulator y Xcode para hacer despliegues y posterior incorporación a plataformas como GooglePlay.  

o	Manejo de interacciones /eventos táctiles con la pantalla.

o	Manejo de navegación entre vistas en la aplicación nativa.

o	Uso de iconos y splash para diferentes dispositivos. 

o	Manejo de estado en el DOM del dispositivo. 

3.  Desarrollo de contenidos

El apartado debe definir el contenido del sitio, listar las páginas que es relevante tener, detallando información sobre su contenido, además es necesario redactar los textos para mostrarse.

•	Splash: Muestra  un conejo con fondo negro para hacer más amigable la espera de carga del juego.

•	1er Vista: Juego de Tic Tac Toe en una grilla de 3x3. 

La temática del juego es el típico juego de gato con iconos referentes al clásico juego Whack a Mole, por lo cual se hace uso de una ardilla y un mazo como iconos para las partidas, además se muestran los textos: Whack a Mole Tap!, Jugador en turno: 1 o 2 e Icono en turno: ardilla o mazo. Además, cuenta con dos botones, el primero reinicia la partida, y el segundo dirige a una grilla de 4x4 con el mismo juego.  

•	2ª Vista: Cuenta con una grilla de 4x4 del juego de gato con la misma temática de ardillas y mazos, incluye un NavBar y fondo con colores diferentes a la vista anterior, además cuenta con un botón para reiniciar la partida, otro para regresar a la grilla de 3x3 y un flecha en la parte superior izquierda para regresar a la vista anterior. 

4. Propuesta de diseño

Es necesario presentar bocetos de la estructura de cada plantilla del sitio, realizar el diseño de mediana y alta fidelidad y finalmente presentar el diseño de la plataforma. Es propio presentar y testear las páginas, se sugiere el uso de invision para dar tour por cada pantalla en futuros proyectos.

•	Diseño de baja fidelidad: 

![Wireframe vista 1]( https://github.com/YocelinGR/react-native-app-game/blob/master/assets/wireframe2.jpg?raw=true)

![Wireframe vista 2:grilla 3x3]( https://github.com/YocelinGR/react-native-app-game/blob/master/assets/wireframe1.jpg?raw=true)

![Wireframe vista 3:grilla 4x4]( https://github.com/YocelinGR/react-native-app-game/blob/master/assets/wireframe3.jpg?raw=true)
•	Diseño del sitio final:

![Wireframe vista 2: grilla 3x3]( https://github.com/YocelinGR/react-native-app-game/blob/master/assets/screen3.png?raw=true)

![Wireframe vista 3: grilla 4x4]( https://github.com/YocelinGR/react-native-app-game/blob/master/assets/screen1.png?raw=true)

![Wireframe vista 4: alert]( https://github.com/YocelinGR/react-native-app-game/blob/master/assets/alert.png?raw=true)

 5. Desarrollo y maquetación

El desarrollo y maquetación del proyecto se realizó utilizando los elementos de “react-native-elements” y “react-native”, además de usaron elementos de imágenes para complementar el diseño, estos archivos se pueden encontrar en la carpeta assets del proyecto.

6. Dar revisión y capacitación

Se da una asesoría al cliente sobre el uso y administración del sitio.

Se da explicación de uso de la página y donde se explican los detalles más importantes de la implementación. Se otorga un periodo de un mes al cliente para encontrar posibles fallas o dudas sobre el sistema, después de este periodo se podría requerir alguna gratificación por asesorías.

7. Publicación en el servidor o URL definitiva

Se entrega una liga en GitHub Pages y la liga del código QR para escanear el juego usarlo desde expo. 

see [Repositorio] (https://github.com/YocelinGR/react-native-app-game)

see [QR Expo] (https://expo.io/@yocelingr/myApp)

Para poder hacer uso del juego desde el celular, se sugiere ir al siguiente enlace: see [Expo para Android] (https://play.google.com/store/apps/details?id=host.exp.exponent&hl=es), e instalar la aplicación, posteriormente se sugiere escanear el código QR desde la aplicación de Expo. Por el momento, el juego no se encuentra disponible en iOS, pero se espera que esta construcción esté disponible pronto. 

8. Documentación

•	Tecnologías

Descripción de tecnologías, Frameworks, compiladores, gestores de tareas, librerías, su versión y cómo se usa.

•	React Native (RN): Es un Cross-Platform Framework que permite desarrollar aplicaciones nativas para Android e iOS usando JavaScript. A diferencia de otras tecnologías para desarrollo de APPs nativas (como Cordova), RN renderiza las vistas como vistas nativas y no como webViews. RN ofrece un conjunto de componentes React equivalentes a nativos. 

•	Unit Test con Jest: Herramienta para elaborar test unitarios en JavaScript, que destaca por su sencillez de uso, por su flexibilidad y por ser adaptable a nuevas librerías que incrementan su poder, es parte de Node.js. En el proyecto se usan los test unitarios como medio de comprobar que la calidad de ejecución de las funciones es buena, que cumple con los mínimos requerimientos y que devuelven solo la información necesaria.

•	Expo: Es un conjunto de  herramientas, librerías y servicios  open source que ayudan a desarrollar apps nativas en iOS Y Android, escritas en JavaScript que provee acceso a la funcionalidad del dispositivo como a la cámara, contactos, almacenamiento local, etc., todo sin modificar el código nativo, conservando el proyecto portable, con la condición de correrse desde la App de Expo. Además permite escanear el enlace a la App, o compartirlo. 

•	Organización

Boilerplate - Estructura de los ficheros.

1.	/.
2.	├── .expo
3.	├── assets
4.	├── components
5.	│ └──plantillaFour.js
6.	│ └──plantillaTree.js
7.	├── node_modules
8.	├── .gitignore
9.	├── .watchmanconfig
10.	├── App.js
11.	├── app.json
12.	├── babel.config.js
13.	├── package.json
14.	├── README.md
15.	├── Thumbs.db
16.	├──yarm.lock

•	Layout

Disposición general de los bloques del sitio, sus módulos y los handles o hooks para llamarlos (rutas).

    •	Grilla 3x3: Basta con ir a la página de la App y esperar a que el splash termine de ejecutarse. 

    •	Grilla 4x4: Al dar clic sobre “Go FourGame” redirige a la grilla del juego de 4x4, es posible regresar a la vista anterior con el botón “Go TreeGame” o bien con la flecha de retorno ubicada en la parte superior izquierda de la pantalla. 
•	Funciones 
Nombre de cada módulo, sus parámetros, peculiaridades, de dónde obtiene los datos y como se transforman.

•	App: 

-	App: es un componente que contiene el elemento “createStackNavigator” de react navigation que permite la gestión de vistas y la transición entre una y otra, en el caso del juego, cuenta con dos vistas : “TreeGame” para el juego con grilla de 3x3 y “FourGame” para la grilla de 4x4. Con las opciones de navegación es posible establecer el color y estilo de los headers de cada vista así como el componente que se renderea en cada vista. 

•	plantillaTree: 

-	TreeGame: es un componente que incluye la lógica y los gráficos del juego de grilla 3x3, tiene como estado una matriz de posiciones (gameState), el jugado en turno (currentPlayer) y el icono en turno (currentIcon). A continuación se describen las funciones expuestas en este componente:

    - initializeState: Actualiza el estado a una partida en blanco, esta función se usa para montar el componente en (componentDidMount) y además para reiniciar una partida cuando hay un ganador (función “onTilePress”), cuando hay un empate (nadie gana) o cuando se oprime el botón “New GamePress”).

    - getWinner: esta función evalúa las casillas que han sido seleccionadas y detiene el juego cuando una partida se gana en diagonal derecha o izquierda, en columna o fila, además evalúa si todas las casillas han sido seleccionadas y no nadie ha ganado. Retorna un arreglo de dos casillas, en el primero se devuelve 1 si ha ganado el primer jugador (con icono de ardilla), devuelve -1 si el jugador 2 ha ganado la partida (con icono de mazo) y devuelve 2 si hubo empate o ninguno ha ganado. En la segunda posición del vector, se devuelve 0 si la partida ganadora es una columna, 1 si ganó una fila, 2 si ganó la diagonal izquierda, 3 si ganó la diagonal derecha y 4 si no hubo ganador. La lógica de elección, consiste en sumar valores de acuerdo a las casillas seleccionadas y evaluar el resultado según la partida.

    - onTilePress: evalúa los estados y renderea los cambios necesarios de acuerdo con la interacción del usuario, coloca a un jugador en la grilla y actualiza el estado de la misma (líneas 80-84), switchea el turno de jugada con su icono correspondiente (líneas 86 a 89) y evalúa las partidas ganadas, para cada caso, desata una alerta con el numero e icono del jugador, además indica la partida ganadora, además reinicia el juego de forma automática. 

    - onNewGame: inicializa la partida cuando se clickea un botón.

    - renderIcon: identifica el estado de una casilla y renderea el icono de ardilla o mazo según sea el caso, además aquí se especifica el tamaño de los iconos. 

    - static.navigationOtions: indica que esta será la primera pantalla de las opciones de navegación.

    - En el return: aquí se dibuja la grilla, cada casilla incluye un elemento TouchableOpacity con un evento onPress que desata la función OnTilePress que pasa como parámetro la coordenada de la casilla, adicionalmente pide la actualización del icono según su coordenada. Agrega dos botones, el que desata el reinicio del juego y el que solicita el cambio de vista con la función “this.props.navigation.navigate ('FourGame')” que redirige a la segunda vista. 

    Por último se agregan los estilos para para el texto y la grilla dentro de la variable styles que guarda dentro de la propiedad créate del elemento styleSheet los objetos con estilo para cada texto, icono y grilla.
    

•	pantillaFour:

Incluye las funciones que se incorporan en la grilla de3x3 adaptando los estados a una grilla mayor. Esta vista incluye un botón que redirige a la vista anterior por medio de un evento onPress que desata la función de react-navigation: “this.props.navigation.goBack ()” para poder volver atrás.


9. Organización y distribución de tareas:

Issues para Sprint 1

•	Instalación de todas las dependencias necesarias para el funcionamiento de la App.

•	Despliegue de la aplicación de prueba en Expo App para Android.

•	Grilla de 3x3 desplegada en la App.

•	Build de Android listo en Expo. 

Issues Sprint 2 

•	Juego completo en 3x3.

•	Juego completo en 4x4.

•	Navegación entre vistas.

•	Splash de carga personalizado. 

Issues Sprint 3: 

•	Documentación

•	Test con Jest

•	Dar estilos a botones, texto e iconos

•	Anadir vista con botones de “comenzar” y “salir”

•	Añadir si es posible otro juego (se sugiere whack a mole o 
google’s dinosaur)

10. Equipo y contacto:

•	Yocelin García

Habilidad para programar en CSS, HTML, JavaScript, React JS y React Native. Hace uso de GitHub colaborativo y presenta buena lógica de extracción de datos de API´s.

Contacto:

•	Slack: YOCELIN GARCIA ROMERO

•	see [GitHub] (https://github.com/YocelinGR)

•	FaceBook: @Yocelin Garcia Romero

•	Correo: garcia_romero.y@hotmail.com


