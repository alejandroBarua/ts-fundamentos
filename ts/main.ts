// todo tipo de dato se puede declarar forma implicita aunque no es recomendable hacerlo asi
let greeting = "Hello World"; // greeting es de tipo string 

// declarar un tipo explicitamente
let lenguageName : string = "Typescript";
let releaseYear : number = 2012;
let isOpenSource : boolean = true;

// variable con tipado dinamico o "sin tipo" tal como js
let dynamic : any = 3.14;
dynamic = "PI";

// objetos
const lenguage1 : { name: string, release: number } = {
	name: "Typescript",
	release: 2012 
}

// creando un nuevo tipo
type person = {
	name: string,
	age: number,
	address?: string // con el signo de pregunta (?) decimos que address es opcional
}
// si no le decimos que es opcional el objeto me no podria ser de tipo person

const me : person = {
	name: "Alejandro",
	age: 25
}


// union de tipos
let age : string | number = 8;
age = "eight";

