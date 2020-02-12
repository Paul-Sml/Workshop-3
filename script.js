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
t[2] = "Ainsi fût bâtie une nouvelle civilisation, mais l’Homme n’avait pas vraiment changé.<br> Un clivage social très fort survécut à la refonte de la civilisation, ce qui séparait encore les élites...";
t[3] = "du bas-peuple.";
t[4] = "La Nature terrestre fut emmenée dans les cités célestes des Hommes également. Il existe donc toujours un lieu de repos spirituel, un endroit de pèlerinage en dehors de la ville.";
t[5] = "Tu es né(e) dans la ville d’Heredia, et tu as toujours vécu dans le ciel puisque tes grands-parents étaient eux-mêmes des élus qui ont vécu jadis la “Grande Ascension”.<br>Heredia est construite sur la créature la plus majestueuse de toutes, la raie géante nommée Jaya’nah.";
t[6] = "Qu’est ce que c'était ça ? J’ai dû rêver. Bon, il me reste un peu de temps avant d’aller travailler, j’ai encore sommeil...";
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
    if (iTexte!=6) {
        iTexte ++;
        document.getElementById("texte").innerHTML = t[iTexte];
    }
    if (iTexte==6) {    
        document.getElementById("troisChoixB").style.visibility = "visible";
        document.getElementById("tchoix1").style.visibility = "visible";
        document.getElementById("tchoix2").style.visibility = "visible";
        document.getElementById("tchoix3").style.visibility = "visible";
    }
})
//------------------------Fin avancer dialogue------------------------
//Choix It 1------------------------3
tchoix1.on('click',function() {
    if (iTexte==6) {
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
    if (iTexte==6) {
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
    if (iTexte==6) {
        iTexte+=3;
        document.getElementById("texte").innerHTML = t[iTexte];
        document.getElementById("troisChoixB").style.visibility = "hidden";
        document.getElementById("tchoix1").style.visibility = "hidden";
        document.getElementById("tchoix2").style.visibility = "hidden";
        document.getElementById("tchoix3").style.visibility = "hidden";
    }
})
//Fin choix It 1------------------------3