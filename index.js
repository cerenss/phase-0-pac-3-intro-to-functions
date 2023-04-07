// Follow along with the examples here
function doNothing() {}

function sayHello() {
    console.log("Hello!");
}

sayHello();

function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}

sayHelloToGuadalupe();

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}`);
}

sayHelloTo("sucre");

function say(greeting, firstName) {
   return `${greeting}, ${firstName}!`;
   console.log("I was called");
}
say("Hola", "Ceronimo");

function add(x, y) {
    return x+y;
}

console.log(add(1, 2));