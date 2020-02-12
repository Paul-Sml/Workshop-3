//------------------------Initialisation------------------------
let bulle = $('#bulle');
let iTexte = 0;
let tchoix1 = $('#tchoix1');
let tchoix2 = $('#tchoix2');
let tchoix3 = $('#tchoix3');
let dchoix1 = $('#dchoix1');
let dchoix2 = $('#dchoix2');

//-------------------------Texte------------------------
let t = [100];
t[0] = "texte inutile atm";
t[1] = "Malgré l’annihilation d’une grande partie de la population, ces villes volantes permirent à l’Humanité de perdurer sur une planète qui les rejetait désormais."; 
t[2] = "texte2";
t[3] = "texte3";
t[4] = "texte4";
t[5] = "texte5";
t[6] = "texte6";
t[7] = "texte7";
t[8] = "texte8";
t[9] = "texte9";
t[10] = "texte10";
t[11] = "texte11";
t[12] = "texte";
t[13] = "texte";
t[14] = "texte";
t[15] = "texte";
t[16] = "texte";
t[17] = "texte";
t[18] = "texte";
t[19] = "texte";
t[20] = "texte";
t[21] = "texte";
t[22] = "texte";
t[23] = "texte";
t[24] = "texte";
t[25] = "texte";
t[26] = "texte";
t[27] = "texte";
t[28] = "texte";
t[29] = "texte";
t[30] = "texte";
t[31] = "texte";
t[32] = "texte";
t[33] = "texte";
t[34] = "texte";
t[35] = "texte";
t[36] = "texte";
t[37] = "texte";
t[38] = "texte";
t[39] = "texte";
t[40] = "texte";
//------------------------Fin texte------------------------
//------------------------Avancer dans le dialgue------------------------
$('#bulle').on('click',function() {
    if (iTexte!=2 && iTexte!=3 &&iTexte!=8) {
        iTexte ++;
        document.getElementById("texte").innerHTML = t[iTexte];
    } 
    if (iTexte==3) {    
        document.getElementById("troisChoixB").style.visibility = "visible";
        document.getElementById("tchoix1").style.visibility = "visible";
        document.getElementById("tchoix2").style.visibility = "visible";
        document.getElementById("tchoix3").style.visibility = "visible";
    }
    if (iTexte==8) {
        document.getElementById("deuxChoixB").style.visibility = "visible";
        document.getElementById("dchoix1").style.visibility = "visible";
        document.getElementById("dchoix2").style.visibility = "visible";
    }
})

//------------------------Fin avancer dialogue------------------------
//------------------------Point and click 1------------------------
$('#pac1o1').on('click',function() {
	if (iTexte==2) {
		iTexte++;
		document.getElementById("texte").innerHTML = t[iTexte];
	}
})
//------------------------Fin poc1------------------------
//Choix It 1------------------------
tchoix1.on('click',function() {
	if (iTexte==3) {
		iTexte++;
		document.getElementById("texte").innerHTML = t[iTexte];
        document.getElementById("troisChoixB").style.visibility = "hidden";
        document.getElementById("tchoix1").style.visibility = "hidden";
        document.getElementById("tchoix2").style.visibility = "hidden";
        document.getElementById("tchoix3").style.visibility = "hidden";
        iTexte+=2;
	}
})
tchoix2.on('click',function() {
    if (iTexte==3) {
        iTexte+=2;
        document.getElementById("texte").innerHTML = t[iTexte];
        document.getElementById("troisChoixB").style.visibility = "hidden";
        document.getElementById("tchoix1").style.visibility = "hidden";
        document.getElementById("tchoix2").style.visibility = "hidden";
        document.getElementById("tchoix3").style.visibility = "hidden";
        iTexte++;
    }
})
tchoix3.on('click',function() {
    if (iTexte==3) {
        iTexte+=3;
        document.getElementById("texte").innerHTML = t[iTexte];
        document.getElementById("troisChoixB").style.visibility = "hidden";
        document.getElementById("tchoix1").style.visibility = "hidden";
        document.getElementById("tchoix2").style.visibility = "hidden";
        document.getElementById("tchoix3").style.visibility = "hidden";
    }
})
//Fin choix It 1
//Choix It 2------------------------
dchoix1.on('click',function() {
    if (iTexte==8) {
        iTexte++
        document.getElementById("texte").innerHTML = t[iTexte];
        document.getElementById("deuxChoixB").style.visibility = "hidden";
        document.getElementById("dchoix1").style.visibility = "hidden";
        document.getElementById("dchoix2").style.visibility = "hidden";
        iTexte++;
    }
})
dchoix2.on('click',function() {
    if (iTexte==8) {
        iTexte+=2;
        document.getElementById("texte").innerHTML = t[iTexte];
        document.getElementById("deuxChoixB").style.visibility = "hidden";
        document.getElementById("dchoix1").style.visibility = "hidden";
        document.getElementById("dchoix2").style.visibility = "hidden";
    }
})
//Fin choix It 2