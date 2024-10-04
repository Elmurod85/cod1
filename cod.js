
// Futbol jamoamiz chempionatni yakunladi.

// Jamoamizning o'yin natijalari qatorlar to'plamida qayd etilgan. Har bir o'yin formatidagi satr bilan ifodalanadi "x:y", bu erda xjamoamizning ochkolari va yraqiblarimizning ochkolari.

// Masalan: ["3:1", "2:2", "0:1", ...]

// Har bir o'yin uchun ochkolar quyidagicha taqsimlanadi:

// agar x > y bo'lsa: 3 ball (g'alaba)
// agar x < y: 0 ball (yo'qotish)
// agar x = y bo'lsa: 1 ball (bo'g'in)
// xBiz ushbu to'plamni oladigan va yuqorida keltirilgan qoidalar bo'yicha jamoamiz chempionatda olgan ( ) ochkolar sonini qaytaradigan funksiya yozishimiz kerak .

// Eslatmalar:

// jamoamiz chempionatda doim 10ta o'yin o'tkazadi
// 0 <= x <= 4
// 0 <= y <= 4


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Total amount of points", function()){
  it("Sample Tests", function(){
    assert.strictEqual(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);
    assert.strictEqual(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10);
    assert.strictEqual(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0);
    assert.strictEqual(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15);
    assert.strictEqual(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) , 12);
  });
});


function points(games) {
    return 0
  }
