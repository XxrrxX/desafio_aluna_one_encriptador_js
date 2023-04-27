const encriptar = document.querySelector(".btn1");
const desencriptart = document.querySelector(".btn2");
const copy = document.querySelector(".copy");

//buttons to encrypt
encriptar.addEventListener("click", () => {
  let message = document.querySelector(".message").value;
  let text = message.replace(/e/gim, "enter");
  text = text.replace(/o/gim, "ober");
  text = text.replace(/i/gim, "imes");
  text = text.replace(/a/gim, "ai");
  text = text.replace(/u/gim, "ufat");

  const insert = document.querySelector(".encriptador-all__result");
  insert.innerHTML = text;
  document.querySelector(".message").value = "";
  document.querySelector(".encriptador-all__search").style.display = "none";
  document.querySelector(".copy").style.display = "block";
  document.querySelector(".encriptador-all__result").style.display = "block";
});

//button to decrypt
desencriptar.addEventListener("click", () => {
  let message = document.querySelector(".message").value;
  let text = message.replace(/enter/gim, "e");
  text = text.replace(/ober/gim, "o");
  text = text.replace(/imes/gim, "i");
  text = text.replace(/ai/gim, "a");
  text = text.replace(/ufat/gim, "u");

  const insert = document.querySelector(".encriptador-all__result");
  insert.textContent = text;
  document.querySelector(".message").value = "";
  document.querySelector(".encriptador-all__search").style.display = "none";
  document.querySelector(".copy").style.display = "block";
  document.querySelector(".encriptador-all__result").style.display = "block";
});

//button to copy
copy.addEventListener("click", () => {
  const message = document.querySelector(".encriptador-all__result");
  console.log(message.textContent);
  const insert = document.querySelector(".message");
  insert.value = message.textContent;
  document.querySelector(".encriptador-all__result").innerHTML = "";
  document.querySelector(".copy").style.display = "none";
  document.querySelector(".encriptador-all__result").style.display = "none";
  document.querySelector(".encriptador-all__search").style.display = "block";
});
