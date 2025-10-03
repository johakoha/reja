// console.log("Jack Ma maslahatlari");
// const list = [
//     "yahshi talaba boling", // 0-20
//     "togri boshliq tanlang va koproq hato qiling", // 20-30
//     "uzingizga ishlashingizni boshlang", // 30-40
//     "siz kuchli bolgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yoq endi", // 60
// ];

// // CALLBACK functions
// function maslahatBering (a, callback) {
//   if (typeof a !== "number") callback("Insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a < 20 && a <= 30) callback(null, list[1]);
//   else if (a < 30 && a <= 40) callback(null, list[2]);
//   else if (a < 40 && a <= 50) callback(null, list[3]);
//   else if (a < 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(70, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log(data);
//   }
// });
// console.log("passed here 1");


// ASYNC functions
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       setInterval(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }




//call via then/catch
// then/catch
// console.log("passed here 0");
// maslahatBering(20)
// .then((data) => {
//     console.log("javob:", data);
// })
// .catch((err) => {
//     console.log("ERROR:", err);
// });
// console.log("passed here 1");


//call via async/await 
// async/await
// async function run() {
//     let javob = await maslahatBering(25);
//     console.log(javob);
// }
// run();




// Masalani izohi
// A-TASK

//Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// masalani yechimi:

// The NOTORIOUS MMA - CONNOR MCGREGOR: shut your mouth and take my money!
// "Precision beats power, timing beats speed."

// function countLetter(letter, word) {
//   return word.split('').filter(c => c === letter).length;
// }

// console.log("McGregor says:", countLetter("o", "notorious")); // 3 ta o harfi qatnashgan



// 23rd september class example

// DEFINE
// function qoldiqliBolish(a, b, callback) {
//   if (b === 0) {
//     callback("Mahraj nolga teng emas!", null);
//   } else {
//     const c = a % b;
//     callback(null, c);
//   }
// }

// // CALL
// qoldiqliBolish(7, 5, (err, data) => {
//   if (err) {
//     console.log("ERROR:", err);
//   } else {
//     console.log("data:", data);
//     console.log("MANTIQLAR...");
//   }
// });





// TASK B

// Shunday, function tuzingki, bu function yagona parametrga ega bo'lib
// string tarkibidagi sonlar miqdorini qaytarsin

// Masalan: countDigits("ad2a54y79wet0sfgb9")
// Yuqoridagi string tarkibida 7 dona raqam qatnashganligi uchun, natija 7 qaytadi

//Yechimi:

// function countIntegers(input) {
//   let count = 0;

  
//     for (let index in input) {
//       if (input[index] >= 0 && input[index] <= 9) {
//         count++;
//       }
//     }
//    return count;
// }

// console.log(countIntegers("duhf3uhr38239d"));



// TASK - C
// Masalani izohi
// Shop nomli class tuzing, va bu class 3 xill parametr qabul qilsin. Hamda classning quyidagdek 3'ta metodi bo'lsin: 1) qoldiq 2) sotish 3) qabul
// Har bir metod ishga tushgan vaqtda log qilinsin
//MASALAN:
//const shop = new Shop(4, 5, 2)
// shop.qoldiq();
// natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud
// shop.sotish("non", 3); & shop.qabul("cola", 4); & shop.qoldiq();
// Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud!


// Masalani yechimi:

// class Shop {
//   constructor(non, qaymoq, moxito) {
//     this.non = non;
//     this.qaymoq = qaymoq;
//     this.moxito = moxito;
//   }

//   getTime() {
//     const now = new Date();
//     return `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
//   }

//   qoldiq() {
//     console.log(`Hozir ${this.getTime()}da ${this.non}ta non, ${this.qaymoq}ta qaymoq va ${this.moxito}ta moxito mavjud`);
//   }

//   sotish(mahsulot, miqdor) {
//     this[mahsulot] -= miqdor;
//     console.log(`Hozir ${this.getTime()}da ${miqdor}ta ${mahsulot} sotildi`);
//   }

//   qabul(mahsulot, miqdor) {
//     this[mahsulot] += miqdor;
//     console.log(`Hozir ${this.getTime()}da ${miqdor}ta ${mahsulot} qabul qilindi`);
//   }
// }

// // Test qilib ko'ramiz, natija qaytishi kerak
// // Test
// const shop = new Shop(4, 5, 2);
// shop.qoldiq();
// shop.sotish("non", 3);
// shop.qabul("moxito", 4);
// shop.qoldiq();



// TASK - D

// Masalani izohi:
// Ikkita parametra ega function tuzing, va functioning
// berilgan birinchi va ikkinchi parametr qiymatlari o'zaro to'liq
// mos kelsa true qiymat qaytarsin
// Masalan: checkContent("mitgroup", "gmtiprou");
// Yuqoridagi misolda birinchi va ikkinchi parametr qiymatli bir xil
// ya'ni bir xil harflar qatnashganligi uchun true qiymat qaytaradi.

// Masalani yechimi:

function checkContent(str1, str2) {
  if (str1.length !== str2.length) return false;
  
  for (let char of str1) {
    if (!str2.includes(char)) return false;
  }
  
  for (let char of str2) {
    if (!str1.includes(char)) return false;
  }
  
  return true;
}

// Test qilib ko'ramiz 
// Bu misolda funksiyani parametrlarini uzunliklariga qarab tekshiradi
// Shunda uzunligi mos kelishi kelmasligiga qarab false yoki true qaytaradi
console.log(checkContent("listen", "silent")); // true
console.log(checkContent("desserts", "stressed")); // true
console.log(checkContent("salom", "alik")); // false



