
//buttons to encrypt
function Encriptar() {
  let  message = document.getElementById("M").value;
  let text = message.replace(/e/gim, "enter");
  text = text.replace(/o/gim, "ober");
  text = text.replace(/i/gim, "imes");
  text = text.replace(/a/gim, "ai");
  text = text.replace(/u/gim, "ufat");

  const insert = document.getElementById("ER");
  insert.innerHTML = text;
  document.getElementById("M").value = "";
  document.getElementById("ESAll").style.display = "none";
  document.getElementById("cop").style.display = "block";
  document.getElementById("ER").style.display = "block";
}


//button to decrypt
function Desencriptar(){
  let message = document.getElementById("M").value;
  let text = message.replace(/enter/gim, "e");
  text = text.replace(/ober/gim, "o");
  text = text.replace(/imes/gim, "i");
  text = text.replace(/ai/gim, "a");
  text = text.replace(/ufat/gim, "u");

  const insert = document.getElementById("ER");
  insert.textContent = text;
  document.getElementById("M").value = "";
  document.getElementById("ESAll").style.display = "none";
  document.getElementById("cop").style.display = "block";
  document.getElementById("ER").style.display = "block";
}

//button to copy
function copiar(){
  const message = document.getElementById("ER");
  console.log(message.textContent);
  const insert = document.getElementById("M");
  insert.value = message.textContent;
  document.getElementById("ER").innerHTML = "";
  document.getElementById("cop").style.display = "none";
  document.getElementById("ER").style.display = "none";
  document.getElementById("ESAll").style.display = "block";
}

