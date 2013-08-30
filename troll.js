var user = prompt("Ustedt esta caminando por la jungla y de repente aparece un TROLL... ¿Que usted quiere hacer? PELEAR, PAGARLE o CORRER").toUpperCase();

switch(user) {
    case 'PELEAR':
        var lanzaLlamas = prompt("¿Tienes un lanza llamas?").toUpperCase();
        var bazoka = prompt("¿Tienes una bazoka?").toUpperCase();
        if( lanzaLlamas === "SI" || bazoka === "SI") {
            console.log("Es usted un asecino perfecto"); 
        } else {
            console.log("Pobre hombre... llevenlo al 28");
        }
        break;
    case 'PAGARLE':
        var deseo = prompt("¿Deseas pagarle?").toUpperCase();
        var dinero = prompt("¿Tienes dinero?").toUpperCase();
        if(deseo === "SI" && dinero === "SI") {
            console.log("Viviras por contar con las sietes luces");
        } else {
            console.log("Muere por pobre Gruuuuu");
        }
        break;
    case 'CORRER':
        var tullido = prompt("¿Eres tullido?").toUpperCase();
        var peso = prompt("Eres gordo?").toUpperCase();
        if(tullido === "SI" || peso === "SI") {
            console.log("Estas jodio");
        } else {
            console.log("Corre hasta mas no poder");
        }
        break;
    default:
        console.log("No te entedemos, por eso muere");
};
