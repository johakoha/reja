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

function countIntegers(input) {
  let count = 0;

  
    for (let index in input) {
      if (input[index] >= 0 && input[index] <= 9) {
        count++;
      }
    }
   return count;
}

console.log(countIntegers("duhf3uhr38239d"));
