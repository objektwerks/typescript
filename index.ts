console.log("*** Hello, Typescript! ***")

console.log("*** Types ***")
const explicit: string = "explicit"
const implicit = "implicit" // or type inferred
console.log("const explicit type: " + explicit)
console.log("const implicit type: " + implicit)

let number = 3
console.log(`let number (${number}) squared: ${number * number}`)
number = 4
console.log(`let number (${number}) cubed: ${number * number * number}`)