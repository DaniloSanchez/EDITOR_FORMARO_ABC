Formato ABC a Partitura
========
INSTITUTO TECNOLOGICO DE COSTA RICA\n

INTERFACES GRAFICAS \n

PROYECTO NUMERO 1\n

ABC FORMART TO SCORESHEET\n

ANDRES RAMIREZ FUENTES 201013880\n

DANILO SANCHEZ MONGE 201035479\n

Introduccion
--------
este proyecto muestra la implementacion de diferentes lenguajes de programacion tales como coffeescript, xml javascript y xul para la creacion de ua aplicacion.

Descripción del contenido a desplegar
--------
el programa funcionara en tres diferentes areas \n
1. un textarea en el cual se pobra ver el el archivo .abc
2. un area donde se vera un un arbol cargado desde un .xml
3. un box donde contendra un svg que pintara una partitura.


Definición de estructuras de datos (formato) utilizadas
--------
en este caso las estructura de datos utilizadas son abc  y xml para mostrarlo en el arbol

Forma de compilación, ejecución y utilización de la aplicación
--------
abrir el cmd de windows y localizarlo en la carpeta\n
1. compilar el coffeescript con la instruccion coffee -c main.coffee para crear el archivo main.js
2. poner entre comillas la direccion de mozilla seguido de -app y nuevamente la direccion entre comillas de application.ini
\n
para utilizar la aplicacion usted debera:\n
1. dar clic en archivo
2. despues en clic.abc
3. buscar el archivo y cargarlo \n
para cargar un xml debera de \n
1. dar clic en archivo
2. despues dar clic en abrir xml abc
3. buscar el archivo en el computador

Ejemplos de datos a utilizar como pruebas
--------
para archivos .abc puede utilizar este codigo.\n
prueba.abc
para archivos .xml puede utilizar este ejemplo.\n
"The Legacy Jig.xml"
Limitaciones observadas y posibles mejoras (lista TO DO).
--------
La libreria funcion correctamente en html, pero no en xul.\n
se llama a la funcion para utilizar la libreria pero esta no sale de ella, y no hace el display del svg como si pasa en html (ver ejemplo en la carpeta html\index)