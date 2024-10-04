// SayHello funksiyasini tuzatish
// Starship Enterprise barchani bortga chiqayotganda kutib olish
//  dasturini yaratishda muammoga duch keldi. Sizning vazifangiz 
//  kodni tuzatish va dasturni qaytadan ishga tushirishdir!

// Chiqish misoli:

// Hello, Mr. Spock

const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(sayHello('Mr. Spock'), 'Hello, Mr. Spock')
    assert.strictEqual(sayHello('Captain Kirk'), 'Hello, Captain Kirk')
    assert.strictEqual(sayHello('Liutenant Uhura'), 'Hello, Liutenant Uhura')
    assert.strictEqual(sayHello('Dr. McCoy'), 'Hello, Dr. McCoy')
  });
});


function sayHello(name) {
    return 'Hello'
  }