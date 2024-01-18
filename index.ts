function log(message: string): void { console.log(message) }

log("*** Hello, Typescript! ***")

console.log("*** Types ***")
const explicit: string = "explicit"
const implicit = "implicit" // or type inferred
log("const explicit type: " + explicit)
log("const implicit type: " + implicit)

let number = 3
log(`let number (${number}) squared: ${number * number}`)
number = 4
log(`let number (${number}) cubed: ${number * number * number}`)