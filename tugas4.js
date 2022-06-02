var mobilAngkot = 10;
var mobilAktif = 6;

for(var noMobil = 1; noMobil<=mobilAngkot; noMobil++){
    if(noMobil<=6){
        console.log("Angkot No "+noMobil+" beroperasi dengan baik.");
    }
    else if(noMobil===7 || noMobil===8 || noMobil===9){
        console.log("Angkot No "+noMobil+" sedang lembur.");
    }
    else{
        console.log("Angkot No "+noMobil+" sedang tidak beroperasi.");
    }
}