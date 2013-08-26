/*jshint multistr:true */

text = "Bla bla bla bla bla bla bla bla bla Al_Hilario bla \
bla bla bla bla bla bla bla bla bla bla Al_Hilario bla bla \
bla bla bla bla bla bla bla bla Al_Hilario bla bla bla";

myName = "Al_Hilario";
hits = [];

for (i = 0; i < text.length; i++) {
    if (text[i] == "A") {
        for(var j = i; j < (myName.length + i); j++) {
            hits.push(text[j]);
        }
    }
}

if (hits === 0) {
    console.log("No se encontro su nombre");
} else {
    console.log(hits);
}
