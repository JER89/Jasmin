let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
return texte1 + texte2;
}
let afficherCar5 =  (texte) => {
    return texte.charAt(4);

}
let afficher9Car =  (texte) => {
    return texte.substring(0,9);

}
let majusculeString =  (texte) => {

    return texte.toUpperCase();
}
let minusculeString =  (texte) => {
    return texte.toLowerCase();

}
let SupprEspaceString =  (texte) => {
    return texte.trim();

}
let IsString =  (texte) => {
   if(typeof texte === "string"){
       return true;
   } else {
       return false;
   }

}

let AfficherExtensionString =  (texte) => {
return texte.split('.').pop();
}
let NombreEspaceString =  (texte) => {
    return texte.split(' ').length -1;

}
let InverseString =  (texte) => {
return texte.split('').reverse().join('');
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
return Math.pow(x,y);
}
let valeurAbsolue =  (nombre) => {
return Math.abs(nombre);
}
let valeurAbsolueArray =  (array) => {
let newArray=[];
array.forEach(element => {
    element = Math.abs(element);
    newArray.push(element);
})
return newArray;
}
let sufaceCercle =  (rayon) => {
    let surface = Math.pow(rayon, 2) * Math.PI;
    return Math.round(surface);

}
let hypothenuse =  (ab, ac) => {
  return Math.sqrt(Math.pow(ab,2) + Math.pow(ac, 2));

}
let calculIMC =  (poids, taille) => {
    let IMC = poids/Math.pow(taille,2);
    return Number(IMC.toFixed(2));


}