/*@flow*/

// function split(str) {
//   return str.split(' ')
// }

// split(11)

// function add(x: number, y: number): number {
//   return x + y
// }

// add(11, 11)

class Bar {
  x: string
  y: string | number
  z: boolean

  constructor(x: string, y: string | number) {
    this.x = x
    this.y = y
    this.z = false
  }
}

var bar: Bar = new Bar('hello', 4)

var obj: { a: string, b: number, c: Array<string>, d: Bar } = {
  a: 'hello',
  b: 11,
  c: ['hello', 'world'],
  d: new Bar('hello', 3)
}

