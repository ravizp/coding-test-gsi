// Getter untuk nilai kamus utama
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

//===============Jawaban untuk tugas nomer 1 ========================
// Mengonversi kata menjadi bilangan
function converToNumber(input) {
  return input.split("").map(getDictionaryValue).join("");
}

function handleConvert() {
  const inputText = document.getElementById("inputText").value;
  const output = inputText.split("\n").map((line) => converToNumber(line));
  document.getElementById("outputConversion").innerHTML = output.join("<br>");
}

//=====================Jawaban untuk tugas nomer 2=====================
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

function calculateOperators(operator) {
  return eval(operator);
}

function handleCalculate() {
  const inputText = document.getElementById("inputText").value;
  const outputNumbers = inputText
    .split("\n")
    .map((line) => converToNumber(line));

  const Operators = outputNumbers.map(addOperators);
  const results = Operators.map(calculateOperators);

  const operatorOutput = Operators.join("<br>");
  const calculationOutput = results.join("<br>");

  document.getElementById("outputOperator").innerHTML = operatorOutput;
  document.getElementById("outputCalculation").innerHTML = calculationOutput;
}

//================Jawaban untuk Tugas nomer 3 logic and code ==============
const dictionary = {
  0: "A",
  1: "B",
  2: "E",
  3: "F",
  4: "I",
  5: "J",
  6: "O",
  7: "P",
  8: "U",
  9: "V",
};

// Generate pola penjumlahan
function generateExplanation(target) {
  let numbers = [];
  let sum = 0;
  let currentNumber = 0;

  while (sum < target) {
    if (sum + currentNumber > target) {
      currentNumber = 0; // Reset ke 0 jika melebihi target
    }
    numbers.push(currentNumber);
    sum += currentNumber;
    currentNumber = (currentNumber + 1) % 10; // Angka berikutnya
  }

  return numbers;
}

// Proses untuk tugas nomor 3
function handleAlphabetConversion() {
  const inputText = document.getElementById("outputCalculation").innerText;
  const results = inputText.split("\n").map((line) => Math.abs(parseInt(line)));

  let detailedProcess = "";
  let numberSequences = "";
  let finalAlphabets = "";

  results.forEach((result) => {
    const numbers = generateExplanation(result);
    const explanation = `${result} = ${numbers.join(" + ")}`;
    const sequence = numbers.join("");
    const alphabet = sequence
      .split("")
      .map((num) => dictionary[num])
      .join("");

    detailedProcess += explanation + "\n";
    numberSequences += sequence + "\n";
    finalAlphabets += alphabet + "\n";
  });

  document.getElementById("outputDetailedProcess").innerText =
    detailedProcess.trim();
  document.getElementById("outputNumbers").innerText = numberSequences.trim();
  document.getElementById("outputAlphabets").innerText = finalAlphabets.trim();
}

// ========Jawaban untuk Tugas nomer 4 Code and Logic ==========================
// Proses untuk tugas nomor 4
function handleExtendedAlphabetConversion() {
  const inputText = document.getElementById("outputDetailedProcess").innerText;
  const explanationLines = inputText.split("\n");

  let extendedProcess = "";
  let extendedNumberSequences = "";
  let extendedAlphabets = "";

  explanationLines.forEach((line) => {
    const [originalTarget, explanation] = line.split(" = ");
    const target = parseInt(originalTarget) + 2;
    const numbers = explanation.split(" + ").map(Number);

    let sum = numbers.reduce((a, b) => a + b, 0);
    let currentNumber = 1;
    while (sum < target) {
      sum += currentNumber;
      numbers.push(currentNumber);
      currentNumber++;
    }

    const newExplanation = `${target} = ${numbers.join(" + ")}`;
    const sequence = numbers.join("");
    const alphabet = sequence
      .split("")
      .map((num) => dictionary[num])
      .join("");

    extendedProcess += newExplanation + "\n";
    extendedNumberSequences += sequence + "\n";
    extendedAlphabets += alphabet + "\n";
  });

  document.getElementById("outputExtendedDetailedProcess").innerText =
    extendedProcess.trim();
  document.getElementById("outputExtendedNumbers").innerText =
    extendedNumberSequences.trim();
  document.getElementById("outputExtendedAlphabets").innerText =
    extendedAlphabets.trim();
}
