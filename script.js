//------------------------Initialisation------------------------
let bulle = $('#bulle');
let iTexte = 0;
let tchoix1 = $('#tchoix1');
let tchoix2 = $('#tchoix2');
let tchoix3 = $('#tchoix3');
let dchoix1 = $('#dchoix1');
let dchoix2 = $('#dchoix2');
let pac1i = 0;
let iFond = $('#imageFond');

//-------------------------Texte------------------------
let t = [100];
t[0] = "texte inutile atm";
t[1] = "Malgré l’annihilation d’une grande partie de la population, ces villes volantes permirent à l’Humanité de perdurer sur une planète qui les rejetait désormais."; 
t[2] = "Ainsi fût bâtie une nouvelle civilisation, mais l’Homme n’avait pas vraiment changé.<br> Un clivage social très fort survécut à la refonte de la civilisation, ce qui séparait encore les élites...";
t[3] = "du bas-peuple.";
t[4] = "La Nature terrestre fut emmenée dans les cités célestes des Hommes également. Il existe donc toujours un lieu de repos spirituel, un endroit de pèlerinage en dehors de la ville.";
t[5] = "Tu es né dans la ville d’Heredia, et tu as toujours vécu dans le ciel puisque tes grands-parents étaient eux-mêmes des élus qui ont vécu jadis la “Grande Ascension”.<br>Heredia est construite sur la créature la plus majestueuse de toutes, la raie géante nommée Jaya’nah.";
t[6] = "Qu’est ce que c'était ça ? J’ai dû rêver. Bon, il me reste un peu de temps avant d’aller travailler, j’ai encore sommeil...";
t[7] = "...";
t[8] = "J’ai trop dormi ! Il faut que je me dépêche d’aller à l’usine, sinon Chuck va encore me faire travailler pendant la moitié de la nuit.";
t[9] = "Eh gamin ! Tu es encore en retard ! Dépêche toi de te mettre au travail avant que je vienne m’occuper de ton<br>cas ! Pour la peine, tu vas nettoyer toutes les machines ce soir, ça te donnera une bonne raison de dormir jusqu’à pas d’heure !";
t[10] = "texte10";
t[11] = "Je vais en profiter pour aller à l’usine en avance, ça me permettra de m’amuser avec Lucy avant de commencer le travail.";
t[12] = "Tiens ! Qu’est-ce que tu fais là petit ? Tu es en avance ? C’est parfait ! Lucy est absente aujourd’hui, mais si tu te mets à travailler maintenant, je te laisserai quelques minutes de plus en pause ce midi.";
t[13] = "Ces news sont étrange... Bon allez, c'est l'heure de partir";
t[14] = "Salut petit, va à ton poste, et pas de bêtises !";
t[15] = "texte15";
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
    if (iTexte==13){iFond.attr('src','assets/usine.png');}
    if (iTexte!=6 && iTexte!=10) {
        iTexte ++;
        document.getElementById("texte").innerHTML = t[iTexte];
    }
    if (iTexte==2){iFond.attr('src','assets/villeRiche.png');}
    if (iTexte==3){iFond.attr('src','assets/basQuartier.png');}
    if (iTexte==6) {
        document.getElementById("deuxChoixB").style.visibility = "visible";
        document.getElementById("dchoix1").style.visibility = "visible";
        document.getElementById("dchoix2").style.visibility = "visible";
        iFond.attr('src','assets/zzz.png');
    }
    if (iTexte==9){iTexte=14;iFond.attr('src','assets/usine.png');}
    if (iTexte==12){iTexte=14;iFond.attr('src','assets/usine.png');}
})
//------------------------Fin avancer dialogue------------------------
//Choix It 1------------------------2
dchoix1.on('click',function() {
    if (iTexte==6) {
        iTexte++;
        document.getElementById("texte").innerHTML = t[iTexte];
        document.getElementById("deuxChoixB").style.visibility = "hidden";
        document.getElementById("dchoix1").style.visibility = "hidden";
        document.getElementById("dchoix2").style.visibility = "hidden";
    }
})
dchoix2.on('click',function() {
    if (iTexte==6) {
        iTexte+=4;
        document.getElementById("texte").innerHTML = t[iTexte];
        document.getElementById("deuxChoixB").style.visibility = "hidden";
        document.getElementById("dchoix1").style.visibility = "hidden";
        document.getElementById("dchoix2").style.visibility = "hidden";
        document.getElementById("bulle").style.visibility = "hidden";
        iFond.attr('src','assets/reveil.png');
    }
})
//Fin choix It 1------------------------2
//------------------------Point and click 1------------------------
$('#pac1o1').on('click',function() {
    if (iTexte==10) {
        document.getElementById("bulle").style.visibility = "visible";
        document.getElementById("texte").innerHTML = "\"Une nouvelle maladie fait rage, pour l'instant aucun remède n'a été trouvé\"";
        pac1i++
    }
})
$('#pac1o2').on('click',function() {
    if (iTexte==10) {
        if (pac1i==0) {
            iTexte++;
            document.getElementById("bulle").style.visibility = "visible";
            document.getElementById("texte").innerHTML = t[iTexte];
           
       }else {
        iTexte+=3;
        document.getElementById("texte").innerHTML = t[iTexte];
        
       }
    }
})
//------------------------Fin poc1------------------------