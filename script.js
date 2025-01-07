// Getter untuk nilai kamus
function getDictionaryValue(char) {
  if (char === " ") return 0;

  if (char >= "A" && char <= "Z") {
    const valueChar = {
      A: 0,
      B: 1,
      C: 1,
      D: 1,
      E: 2,
      F: 3,
      G: 3,
      H: 3,
      I: 4,
      J: 5,
      K: 5,
      L: 5,
      M: 5,
      N: 5,
      O: 6,
      P: 7,
      Q: 7,
      R: 7,
      S: 7,
      T: 7,
      U: 8,
      V: 9,
      W: 9,
      X: 9,
      Y: 9,
      Z: 9,
    };
    return valueChar[char];
  }

  if (char >= "a" && char <= "z") {
    const valueChar = {
      a: 9,
      b: 8,
      c: 8,
      d: 8,
      e: 7,
      f: 6,
      g: 6,
      h: 6,
      i: 5,
      j: 4,
      k: 4,
      l: 4,
      m: 4,
      n: 4,
      o: 3,
      p: 2,
      q: 2,
      r: 2,
      s: 2,
      t: 2,
      u: 1,
      v: 0,
      w: 0,
      x: 0,
      y: 0,
      z: 0,
    };
    return valueChar[char];
  }

  return "";
}

//============Tugas Nomer 1 logic dan codingannya======================
// Mengonversi kata menjadi bilangan
function converToNumber(input) {
  return input.split("").map(getDictionaryValue).join("");
}

//konversi kalimat atau kata ke bilangan atau angka
function handleConvert() {
  const inputText = document.getElementById("inputText").value;
  const output = inputText.split("\n").map((line) => converToNumber(line));
  document.getElementById("outputConversion").innerHTML = output.join("<br>");
}

//============Tugas nomer 2 logic dan codingannya=====================
// Fungsi untuk menambahkan tanda "+" dan "-" secara bergantian
function addOperators(numbers) {
  let result = "";
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
    if (i < numbers.length - 1) {
      result += i % 2 === 0 ? "+" : "-";
    }
  }
  return result;
}

// Fungsi untuk menghitung hasil penjumlahan dan pengurangan aritmatika
function calculateOperators(operator) {
  return eval(operator);
}

// Proses perhitungan penjumlahan dan pengurangan
function handleCalculate() {
  const inputText = document.getElementById("inputText").value;
  const outputNumbers = inputText
    .split("\n")
    .map((line) => converToNumber(line)); // Konversi kalimat ke angka

  const Operators = outputNumbers.map(addOperators); // Tambahkan operator
  const results = Operators.map(calculateOperators); // Hitung hasil

  const operatorOutput = Operators.join("<br>");
  const calculationOutput = results.join("<br>");

  document.getElementById("outputOperator").innerHTML = operatorOutput;
  document.getElementById("outputCalculation").innerHTML = calculationOutput;
}
