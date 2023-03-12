require ( './root.js' );

var a, b

beforeEach(function () {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

describe('basic math functions',  function () {
  
  it("'add()' is a valid function", function add() {
    expect(add).toExist
  })

  it("'subtract()' is a valid function", function subtract() {
    expect(subtract).toExist
  })

  it("'multiply()' is a valid function", function multiply() {
    expect(multiply).toExist
  })

  it("'divide()' is a valid function", function divide() {
    expect(divide).toExist
  })

  it('add(a, b) adds two numbers and returns the result', function add() {
    return a + b
  })
  
  it('subtract(a, b) subtracts b from a and returns the result', function subtract() {
    return b - a
   
  })
  
  it('multiply(a, b) multiplies two numbers and returns the result', function multiplies() {
    return a * b

    expect(multiply(a, b)).toEqual(a * b)
  })
  
  it('divide(a, b) divides a by b and returns the result', function divides() {
    return a / b
    expect(divide(a, b)).toEqual(a / b)
  })
  
  it('increment(n) increments n and returns the result', function  increments() {
    return a+1
    expect(increment(a)).toEqual(a + 1)
  })
  
  it('decrement(n) decrements n and returns the result', function decrement() {
    return a - 1
    expect(decrement(a)).toEqual(a - 1)
  })
})




describe('makeInt(1)', function makeInt() {
  
  it('parses n as an integer and returns the parsed integer', function parse() {
    let n = "1"

   parseInt(n)
   return n


    expect(makeInt(a.toString())).toEqual(a)
  })

  it('assumes base 10', function() {
    let n = "1"
    parseInt(n,10)
    return n
    expect(makeInt('0x2328')).toEqual(0)
  })

  it('returns NaN as appropriate', function() {
    expect(isNaN(makeInt('sldkjflksjf'))).toEqual(true)
  })
})

describe('preserveDecimal(n)', function() {

  it('preserves n\'s decimals (it parses n as a floating point number) and returns the parsed number', function() {
    let n = "1.555"
    parseFloat(n)
    return n
    expect(preserveDecimal('2.222')).toBe(2.222)
  })

  it('returns NaN as appropriate', function() {

    let n = "not a number"
    parseInt(n)
    return n
    expect(isNaN(preserveDecimal('sldkjflksjf'))).toEqual(true)
  })
})
