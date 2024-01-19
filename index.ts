function log(message: string): void { console.log(message) }

log("*** Hello, Typescript! ***")

log("\n*** Simple Types ***")
const explicit: string = "explicit"
const implicit = "implicit" // or type inferred
log("const explicit type: " + explicit)
log("const implicit type: " + implicit)

let number = 3
log(`let number (${number}) squared: ${number * number}`)
number = 4
log(`let number (${number}) edited and cubed: ${number * number * number}`)

log("\n*** Undefined and Null Types ***")
const _undefined: undefined = undefined
const _null: null = null
log(`avoid undefined: ${_undefined} and null: ${_null}`)

log("\n*** Object Type ***")
const person: { name: string, age: number } = {
  name: "Fred Flintstone",
  age: 24
}
log(`object type for person: ${JSON.stringify(person)}`)

log("\n*** Union Type ***")
let code: (string | number)
code = "abc"
log(`union type for string: ${code}`)
code = 123
log(`union type for number: ${code}`)

function displayType(code: (string | number)) {
  if(typeof(code) === "string")
    log('union type code is string.')
  else if(typeof(code) === "number")
    log('union type code is number.')
}
displayType(123)
displayType("abc")

log("\n*** Arrays ***")
const letters: string[] = ['a', 'b', 'c']
letters.push('d')
log(`mutable array with d pushed: ${letters}`)

const numbers: readonly number[] = [1, 2, 3]
log(`immutable array: ${numbers}`)

log("\n*** Tuples ***")
const tuple: readonly [number, boolean, string] = [1, true, 'string']
log(`immutable tuple: ${tuple}`) // don't use mutable tuples

log("\n*** Enum ***")
enum RGB { // immutable values
  red = 0,
  green = 1,
  blue = 2
}
log(`enum for RGB: ${JSON.stringify(RGB)}`) // value, key - duplicated
log(`enum for RGB: ${Object.keys(RGB)}`) // values, keys

log("\n*** Type Alias ***")
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType,
  model: CarModel
}
const carYear: CarYear = 2001
const carType: CarType = "Boxster"
const carModel: CarModel = "Porsche"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
}
log(`type alias for car: ${JSON.stringify(car)}`)

log("\n*** Interface ***")
interface Rectangle {
  height: number,
  width: number
}
const rectangle: Rectangle = {
  height: 10,
  width: 20
}
log(`interface for rectangle: ${JSON.stringify(rectangle)}`)

log("\n*** Functions ***")
function multiply(x: number, y: number): number {
  return x * y
}
function add(x: number, y: number, z?: number): number {
  return x + y + (z || 0)
}
log(`function multiple (2 * 3): ${multiply(2, 3)}`)
log(`function add with optional parameter (1, 2): ${add(1, 2)}`)
log(`function add with optional parameter (1, 2, 3): ${add(1, 2, 3)}`)