const inputText = document.querySelector(".inputText");
const result = document.querySelector(".result");
const btnEncrypt = document.querySelector(".encrypt-button");
const btnDecrypt = document.querySelector(".decrypt-button");
const btnCopy = document.querySelector(".copy");

function encrypt() {
  let text = inputText.value.toLowerCase();
  let encryptText = text
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

  result.value = encryptText;
  document.querySelector(".inputText").value = "";
}

function decrypt() {
  let decryptText = result.value.toLowerCase();
  let text = decryptText
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

  result.value = text;
  document.querySelector(".result");
}

function copy() {
  let copiedText = result.value;
  navigator.clipboard.writeText(copiedText);
  document.querySelector(".result").value = "";
}

const btnPaste = document.querySelector(".paste");

btnPaste.addEventListener("click", function () {
  navigator.clipboard.readText().then(function (copiedText) {
    inputText.value = copiedText;
  });
});

inputText.addEventListener("input", function () {
  let encryptedText = inputText.value;
  if (
    encryptedText.includes("enter") ||
    encryptedText.includes("imes") ||
    encryptedText.includes("ober") ||
    encryptedText.includes("ai") ||
    encryptedText.includes("ufat")
  ) {
    inputText.value = decrypt(encryptedText);
  }
});

btnEncrypt.onclick = encrypt;
btnDecrypt.onclick = decrypt;
btnCopy.onclick = copy;
btnPaste.onclick = paste;
