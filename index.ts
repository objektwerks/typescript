function log(message: string): void { console.log(message) }

log("*** Hello, Typescript! ***")

log("\n*** Types ***")
const explicit: string = "explicit"
const implicit = "implicit" // or type inferred
log("const explicit type: " + explicit)
log("const implicit type: " + implicit)

let number = 3
log(`let number (${number}) squared: ${number * number}`)
number = 4
log(`let number (${number}) edited and cubed: ${number * number * number}`)

const _undefined: undefined = undefined
const _null: null = null
log(`avoid undefined: ${_undefined} and null: ${_null}`)

log("\n*** Object Type ***")
const person: { name: string, age: number } = {
  name: "Fred Flintstone",
  age: 24
}
log(`object type for person: ${JSON.stringify(person)}`)

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
log(`enum for RGB: ${JSON.stringify(RGB)}`)

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
