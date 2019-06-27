# tracks.acme
### Prueba Express.js para NaNLabs

## Getting Started
```
Dentro de la carpeta Docs se puede obtener un modelo de clases de la solución completa del ejercicio.
Si bien el ejercicio dice 'endpoints necesarios para crear tracks y asociar una canción a un track', se desarrollo el alta de Tracks, Scenes y AcmeAgents.
```

## Base de datos utilizada:
```
Dado mi perfil orientado a Java con base de datos relacional, en principio se intentó ir por una base de datos SQLite, ya que podría entregarla dentro del código y no era necesario instalar un servidor (mas practico y liviano). Luego, investigando sobre nodejs y dado a las dificultades que tuve para mapear objetos JS en una base relacional, se decidio por mongodb que parece ser mas natural usando un mapeo con mongoose.
Para hacer mas sencilla la instalación, se optó por publicar la base de datos en la nube (https://cloud.mongodb.com).
```

## Dar visibilidad inmediata
```
Dos opciones de acuerdo a si el usuario esta o no logueado en la aplicación:
1 - Usar socket para alertar a un usuario en el navegador en el momento que este usando la aplicación.
2 - Enviar un mail, mensaje de texto o whatsapp.
```

## Prerequisitos
```
npm
git
Conexión a internet
```

## Test de application:

```
$ git clone https://github.com/itursarry/tracks.acme.git
$ npm install
$ npm start
- Abrir el navegador en localhost:3000/
```

