Formato ABC a Partitura
========
INSTITUTO TECNOLOGICO DE COSTA RICA

INTERFACES GRAFICAS 

PROYECTO NUMERO 1

ABC FORMART TO SCORESHEET

ANDRES RAMIREZ FUENTES 201013880

DANILO SANCHEZ MONGE 201035479

Introduccion
--------
Este proyecto muestra la implementacion de diferentes lenguajes de programacion tales como coffeescript, xml javascript y xul 
para la creacion de una aplicacion que se ejecute en el computador. Coffescript es un lenguaje simplificado de javascript
que a traves  un compilador traduce de coffescript a javascript para poder leerlo en los navegadores o aplicaciones como cualquier otra aplicacion.

XUL es un lenguaje desarrollado por mozilla para la creacion de interfaces para sus aplicaciones.
Descripción del contenido a desplegar
--------
el programa funcionara en tres diferentes areas
1. un textarea en el cual se pobra ver el el archivo .abc 
2. un area donde se vera un un arbol cargado desde un .xml
3. un box donde contendra un svg que pintara una partitura. 
Definición de estructuras de datos (formato) utilizadas
--------
En este caso las estructura de datos utilizadas son abc  y xml para mostrarlo en el arbol. 
el estandar oficial  se llama abc standard v1.6. el cual es descripcion textual de la sintaxis abc. 
La notacion musical abc es un lenguaje de escritura musical que se representa por medio del codigo ASCII. 
Inicialmente este formato fue creado para musica folk, la cual musicalmente no es muy compleja, ya que esta compuesta por melodias de una sola voz,y que puede ser escrita en una una sola linea de pentagrama con notacion musical estandar. La sintaxis permite la utilizacion de metadata para cada tono, puesto que la escritura del ABC es en codigo ASCII, la edicion del mismo se puede hacer en cualquier editor de texto aunque actualmente existen software de distribucion mayormente libre.
el formato abc lo podemos dividir en dos grandes secciones, en la que la primera parte seria el encabezado y la segunda la escritura del texto. 
##En la parte de encabezado tenemos diferentes partes entre las que podemos destacar como importantes:##
1. index: indica el numero de pista. 
2. titulo: es el nombre de la cancion 
3. tipo de melodia: que tipo de musica se escribira. 
4. compas: metrica que  tendra la cancion.
5. clave: se definida la tonalidad de la musica. 
##como segunda parte del formato en la edicion podemos destacar:##
1. notas: existen las 7 notas musicales, desde do hasta si. 
2. silencios: cada simbolo relacionado a las notas. 
3. arreglos: son elementos de la musica que poseen una representacion en abc. 
4. compases, barras de repeticion: Las definiciones musicales basicas para la correcta escritura de una partitura, tiene su simbologia en formato abc.

Forma de compilación, ejecución y utilización de la aplicación.
--------

Abrir el cmd de windows y localizarlo en la carpeta.
1. compilar el coffeescript con la instruccion coffee -c main.coffee para crear el archivo main.js
2. poner entre comillas la direccion de mozilla seguido de -app y nuevamente la direccion entre comillas de application.ini

para utilizar la aplicacion usted debera:

1. dar clic en archivo

2. despues en clic.abc

3. buscar el archivo y cargarlo 

para cargar un xml debera de

1. dar clic en archivo

2. despues dar clic en abrir xml abc

3. buscar el archivo en el computador

Ejemplos de datos a utilizar como pruebas
--------

Para esta aplicion se cuenta con 2 archivo de muestra ubicados en "Bootstrap/Canciones/" se llaman "cancion.txt" la cual tiene una partitura sencilla y por ultimo "mortal.abc" la cual tiene mas de 10 partituras.

**un primer ejemplo:**

> Encabezados

> > X:2

> > T:Old Sir Simon the King

> > C:Trad.

> > S:Offord MSS          % from Offord manuscript

> > N:see also Playford   % notes

> > M:9/8

> > R:SJ                  % slip jig

> > Q:C3=120              % tempo

> > Z:originally in C     % transcription notes

> > K:G

**un segundo ejemplo:**

> Encabezados
> > C, D, E, F,|G, A, B, C|D E F G| A B c d|e f g a|b c' d' e'|f' g' a' b'|]

**un tercer ejemplo:**

> marcadores de ritmo
> > A>A A2>A2 A>>A A2>>>A2|]

**un cuarto ejemplo:**

> Vigas
> > A B c d AB cd|ABcd ABc2|]

**un quinto ejemplo:**

##Implementados al Cargar Archivos##
> Ejmplos

> > Acordes 

> > > [CEGc] [C2G2] [CE][DF]|[D2F2][EG][FA] [A4d4]|]

> > Grace notes

> > > {g}A3 A{g}AA|{gAGAG}A3 {g}A{d}A{e}A|]

> > Accents

> > > ~A ~c .A .c vA vc uA uc|]

> > chords

> > > "A"A "Gm7"D "Bb"F "F#"A|]

> > Ties and Slurs

> > > (AA) (A(A)A) ((AA)A) (A|A) A-A A-A-A A2-|A4|]

> > Tuplets

> > > (2AB (3ABA (4ABAB (5ABABA (6ABABAB (7ABABABA|]

para archivos .abc puede utilizar este codigo.\n
prueba.abc
para archivos .xml puede utilizar este ejemplo.\n
"The Legacy Jig.xml"

Limitaciones observadas y posibles mejoras (lista TO DO).
--------
La libreria funcion correctamente en html, pero no en xul.\n
se llama a la funcion para utilizar la libreria pero esta no sale de ella, y no hace el display del svg como si pasa en html (ver ejemplo en la carpeta html\index)