<h2 style="background:#4995e3; color: white; padding: 10px">Typescript</h2>

### Caracteristicas de Typescript

- Todo código escrito en Typescript puede convertirse a Javascript. Esto es asi incluso si en el codigo typescript tiene errores resaltados. Esto es para asegurar la compatibilidad con javascript y hace mas sencilla la migracion a este lenguaje.

- Typescript es fuertemente tipado. Lo bueno de eso es que mientras escribimos codigo nos resaltara errores y nos dara opciones de auto-completado.

- Se puede convertir codigo Typescript a cualquier version de Javascript. Gracias a ésto, no vas a tener que preocuparte si los browsers mas viejos soportan o no versiones de Javascript mas modernos. O cambiar de version dependiendo de qué version de Nodejs tengas en tu servidor.

- Angular usa como lenguaje de programación estándar a Typescript.

### Pasos para crear y configurar un proyecto en typescript.

1. Instalar Typescript.

`$ npm install -g typescript`

2. Crear el archivo de configuración mediante el comando.

`$ tsc --init`

3. Abrir el archivo de configuraciones, descomentar y cambiar lo necesario.

Para decirle a typescript a que version de javascript tiene que compilar.

`"target": "es5" --> "target": "es6"`

Le doy la ubicacion donde debe dejar los archivos compilados a js.

`"outDir" : "./js"`

Esta configuracion es para decirle que archivos debe compilar "todos lo que estan dentro de la carpeta ts".

`"include": [ "./ts/*" ]`

Para excluir la carpeta app asi typescript es mas rapido en la busqueda de archivos que tiene que compilar. En este caso no es necesario usar esta configuración ya que la carpeta app no esta dentro de la configuracion anterior.

`"exclude": [ "./app" ] `

4. Ahora puede programar en Typescript

Para compilar a js use

`$ tsc `

Para compilar a js cada ves que guarde los cambios use

`$ tsc -w`
