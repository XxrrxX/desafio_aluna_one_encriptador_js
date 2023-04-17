function encriptar(){
var TE=document.getElementById("txtE").value;
let SplitTE = TE.split('');

SplitTE.forEach(letra => {

if (letra == "e"){
console.log("\n	");
}

else if (letra == "i"){
console.log("imes");
}

else if (letra == "a"){
console.log("ai");
}
else if (letra == "o"){
console.log("ober");
}
else if (letra == "u"){
console.log("ufat");

}else{
console.log(letra);
}

});

}
