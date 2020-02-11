//------------------------Initialisation------------------------
let bulle = $('#bulle');
let iTexte = 0;

//-------------------------Texte------------------------
let t = [100];
t[0] = "salut";
t[1] = "Ca fonctionne!!"; 
t[2] = "texte";
t[3] = "texte";
t[4] = "texte";
t[5] = "texte";
t[6] = "texte";
t[7] = "texte";
t[8] = "texte";
t[9] = "texte";
t[10] = "texte";
t[11] = "texte";
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

bulle.on('click',function() {
    document.getElementById("texte").innerHTML = t[iTexte];
    iTexte ++;
})

//------------------------Point and click 1------------------------
$('#pac1o1').on('click',function() {
	if (iTexte==2) {document.getElementById("texte").innerHTML = "trouvé";	}
})