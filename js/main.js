"use strict";
// todo tipo de dato se puede declarar forma implicita aunque no es recomendable hacerlo asi
let greeting = "Hello World"; // greeting es de tipo string 
// declarar un tipo explicitamente
let lenguageName = "Typescript";
let releaseYear = 2012;
let isOpenSource = true;
// variable con tipado dinamico o "sin tipo" tal como js
let dynamic = 3.14;
dynamic = "PI";
// objetos
const lenguage1 = {
    name: "Typescript",
    release: 2012
};
// si no le decimos que es opcional el objeto me no podria ser de tipo person
const me = {
    name: "Alejandro",
    age: 25
};
// union de tipos
let age = 8;
age = "eight";
