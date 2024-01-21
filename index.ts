export {}

function log(message: string): void { console.log(message) }

log("*** Hello, Typescript! ***")

log("\n*** Simple Type ***")
const explicit: string = "explicit"
const implicit = "implicit" // or type inferred
log("const explicit type: " + explicit)
log("const implicit type: " + implicit)

let number = 3
log(`let number (${number}) squared: ${number * number}`)
number = 4
log(`let number (${number}) edited and cubed: ${number * number * number}`)

log("\n*** Undefined and Null Type ***")
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

log("\n*** Tuple ***")
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
interface Rectangle { // extensible
  height: number,
  width: number
}
const rectangle: Rectangle = {
  height: 10,
  width: 20
}
log(`interface for rectangle: ${JSON.stringify(rectangle)}`)

log("\n*** Type ***")
type Mammal = { // not extensible
  kind: string
}
type Whale = Mammal & { 
  food: string
}
const whale: Whale = {
  kind: "sperm",
  food: "shrimp"
}
log(`type for mammal > whale: ${JSON.stringify(whale)}`)

log("\n*** Type Coercion ***")
const n = "1" as unknown as number // as any remove compiler error
log(`type coercion of string to number: ${n}`)

log("\n*** Function ***")
function multiply(x: number, y: number): number {
  return x * y
}
function add(x: number, y: number, z?: number): number {
  return x + y + (z || 0)
}
log(`function multiple (2 * 3): ${multiply(2, 3)}`)
log(`function add with optional parameter (1, 2): ${add(1, 2)}`)
log(`function add with optional parameter (1, 2, 3): ${add(1, 2, 3)}`)

log("\n*** Higher Order Function ***")
function greet(fn: (message: string) => void, name: string) {
  fn(`Greetings: ${name}`)
}
greet(log, 'Fred Flintstone')

log("\n*** Async / Await Function ***")
async function sqrt(x: number): Promise<number> {
  return Math.sqrt(x)
}
const value = await sqrt(4)
log(`async function sqrt with await: ${value}`)

log("\n*** Class ***")
class User {
  pin: string
  constructor(pin: string) {
    this.pin = pin
  }
}
const user = new User("1a2b3c");
log(`class for user: ${JSON.stringify(user)}`)

interface Shape {
  area: () => number
}
class Square implements Shape {
  side: number
  constructor(side: number) {
    this.side = side
  }
  area(): number {
    return this.side * this.side
  }
}
const square = new Square(2)
log(`class for square implements shape: ${JSON.stringify(square)}`)

abstract class Animal {
  kind: string
  constructor(kind: string) {
    this.kind = kind
  }
  toString(): string {
    return `animal with no kind`
  }
}
class Dog extends Animal {
  constructor(kind: string) {
    super(kind)
  }
  override toString(): string {
    return `dog with kind: ${this.kind}`
  }
}
const dog = new Dog('dog')
log(`class for dog extends animal: ${JSON.stringify(dog)}`)
log(`class for dog toString: ${dog.toString()}`)

log("\n*** Generic Type ***")
class Box<T> {
  item: T

  constructor(item: T) {
    this.item = item
  }
}
const box = new Box<number>(1)
log(`generic type for box: ${JSON.stringify(box)}`)

function identity<T>(arg: T): T {
  return arg
}
const id = identity("identity")
log(`generic type for identity function: ${JSON.stringify(id)}`)

log("\n*** Partial Type ***")
interface Point {
  x: number
  y: number
}
const partial: Partial<Point> = {} // Partial allows x and y to be optional
partial.x = 1
partial.y = 2
log(`partial type for point: ${JSON.stringify(partial)}`)

log("\n*** Required Type ***")
const required: Required<Point> = { // Required requires x and y to be initialized
  x: 3,
  y: 4,
}
log(`required type for point: ${JSON.stringify(required)}`)

log("\n*** Record Type ***")
const nameAgeRecord: Record<string, number> = { // equivalent to { [key: string]: number }
  'Fred Flintstone': 24,
  'Barney Rubble': 21
} // Unlike a Java record, mutliple key-value pairs can be provided.
log(`record type: ${JSON.stringify(nameAgeRecord)}`)

log("\n*** Readonly Type ***")
const readonly: Readonly<Point> = { // makes type readonly
  x: 5,
  y: 6
}
log(`readonly type for point: ${JSON.stringify(readonly)}`)

log("\n*** Recursion ***")
function sum(xs: number[], acc: number = 0): number {
  if (xs.length == 0) return acc
  else {
    const head = xs[0]
    const tail = xs.slice(1)
    return sum(tail, acc + head)
  }
}
const total = sum([1, 2, 3])
log(`recursion for sum of [1, 2, 3]: ${total}`)