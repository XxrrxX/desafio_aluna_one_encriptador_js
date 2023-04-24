function encriptar(){
var TE=document.getElementById("txtE").value;
let SplitTE = TE.split('');
var StringE;

SplitTE.forEach(letra => {

if (letra == "e"){

StringE =  "\n";
}

else if (letra == "i"){
StringE =  "imes";
}

else if (letra == "a"){
StringE =  "ai";
}
else if (letra == "o"){
StringE =  "ober";
}
else if (letra == "u"){
StringE = "ufat";

}else{

StringE = letra;

}

document.write(StringE);

});



}
