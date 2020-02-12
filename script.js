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
t[1] = "Ca fonctionne!!"; 
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
//------------------------Texte choix------------------------
/*en standby
let tc = [100];
tc[0] = "salut";
tc[1] = "choix"; 
tc[2] = "choix2";
tc[3] = "texte3";
tc[4] = "texte4";
tc[5] = "texte5";
tc[6] = "texte6";
tc[7] = "texte7";
tc[8] = "texte";
tc[9] = "texte";
tc[10] = "texte";
tc[11] = "texte";
tc[12] = "texte";
tc[13] = "texte";
tc[14] = "texte";
tc[15] = "texte";
tc[16] = "texte";
tc[17] = "texte";
tc[18] = "texte";
tc[19] = "texte";
tc[20] = "texte";
tc[21] = "texte";
tc[22] = "texte";
tc[23] = "texte";
tc[24] = "texte";
tc[25] = "texte";
tc[26] = "texte";
tc[27] = "texte";
tc[28] = "texte";
tc[29] = "texte";
tc[30] = "texte";
tc[31] = "texte";
tc[32] = "texte";
tc[33] = "texte";
tc[34] = "texte";
tc[35] = "texte";
tc[36] = "texte";
tc[37] = "texte";
tc[38] = "texte";
tc[39] = "texte";
tc[40] = "texte";
*/
//------------------------Fin texte choix-------------------------
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