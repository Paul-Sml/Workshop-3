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
t[15] = "Tiens, Lucy n’est pas là ?";
t[16] = "Je ne sais pas petit, tu devrais retourner travailler, sinon tu vas te faire remonter les bretelles, et moi aussi en prime.";
t[17] = "Je ferais mieux de travailler, Chuck me surveille de très près en ce moment.";
t[18] = "Petit ! Au lieu de te tourner les pouces, j’ai besoin d’un gamin pour aller remettre une machine en route. Fais gaffe, il manque une grille sur un des conduits, ne tombe pas dedans tu risques de rester bloqué.";
t[19] = "Te mêle pas de ça ! Je te dis de réparer la machine, tu le fais. Arrête de te poser des questions, t’es pas payé pour réfléchir.";
t[20] = "Je vais t’apprendre à respecter tes supérieurs, sale mioche ! Non seulement tu vas y aller, mais en plus je vais te supprimer ta paye du jour !";
t[21] = "Une fois la machine réparée, vous décidez de la redémarrer pour voir si tout est bien en ordre. Le bruit assourdissant et le fracas qu’elle produit en démarrant vous surprennent tellement que vous reculez sans regarder derrière vous. Vous tombez et vous cognez la tête, ce qui vous plonge dans l’inconscience.";
t[22] = "Vous vous réveillez dans une flaque de fluide noirâtre";
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
    if (iTexte!=6 && iTexte!=10 && iTexte!=15 && iTexte != 18) {
        iTexte ++;
        document.getElementById("texte").innerHTML = t[iTexte];
    }
    if (iTexte==6) {
        document.getElementById("deuxChoixB").style.visibility = "visible";
        document.getElementById("dchoix1").style.visibility = "visible";
        document.getElementById("dchoix2").style.visibility = "visible";
    }
    if (iTexte==9){iTexte=14}
    if (iTexte==12){iTexte=14}
    if (iTexte==15){
        document.getElementById("deuxChoixB").style.visibility = "visible";
        document.getElementById("1").innerHTML = "Demander au contremaître Gareth s'il sait ou est Lucy"
        document.getElementById("2").innerHTML = "Ne pas perdre de temps et aller travailler"
        document.getElementById("dchoix1").style.visibility = "visible";
        document.getElementById("dchoix2").style.visibility = "visible";
    }
    if (iTexte==18) {    
        document.getElementById("troisChoixB").style.visibility = "visible";
        document.getElementById("3").innerHTML = "Que se passe t-il avec le personnel ?"
        document.getElementById("4").innerHTML = "Je n’ai pas envie de risquer ma peau pour une machine ! Tu n’as qu’à y aller toi."
        document.getElementById("5").innerHTML = "J’y vais tout de suite m’sieur !"
        document.getElementById("tchoix1").style.visibility = "visible";
        document.getElementById("tchoix2").style.visibility = "visible";
        document.getElementById("tchoix3").style.visibility = "visible";
    }
    //Italic
    if (iTexte==21 || iTexte==22) {document.getElementById("texte").style.fontStyle = "italic";}else{document.getElementById("texte").style.fontStyle = "normal";}
    //Fin italic
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
        iFond.attr('src','assets/fond.png');
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
        document.getElementById("bulle").style.visibility = "visible";
       }
    }
})
//------------------------Fin poc1------------------------
//Choix It 2------------------------2
dchoix1.on('click',function() {
    if (iTexte==15) {
        iTexte++
        document.getElementById("texte").innerHTML = t[iTexte];
        document.getElementById("deuxChoixB").style.visibility = "hidden";
        document.getElementById("dchoix1").style.visibility = "hidden";
        document.getElementById("dchoix2").style.visibility = "hidden";
        iTexte++;
    }
})
dchoix2.on('click',function() {
    if (iTexte==15) {
        iTexte+=2;
        document.getElementById("texte").innerHTML = t[iTexte];
        document.getElementById("deuxChoixB").style.visibility = "hidden";
        document.getElementById("dchoix1").style.visibility = "hidden";
        document.getElementById("dchoix2").style.visibility = "hidden";
    }
})
//Fin choix It 2------------------------2
//Choix It 3------------------------3
tchoix1.on('click',function() {
    if (iTexte==18) {
        iTexte++;
        document.getElementById("texte").innerHTML = t[iTexte];
        document.getElementById("troisChoixB").style.visibility = "hidden";
        document.getElementById("tchoix1").style.visibility = "hidden";
        document.getElementById("tchoix2").style.visibility = "hidden";
        document.getElementById("tchoix3").style.visibility = "hidden";
        iTexte++;
    }
})
tchoix2.on('click',function() {
    if (iTexte==18) {
        iTexte+=2;
        document.getElementById("texte").innerHTML = t[iTexte];
        document.getElementById("troisChoixB").style.visibility = "hidden";
        document.getElementById("tchoix1").style.visibility = "hidden";
        document.getElementById("tchoix2").style.visibility = "hidden";
        document.getElementById("tchoix3").style.visibility = "hidden";
    }
})
tchoix3.on('click',function() {
    if (iTexte==18) {
        iTexte+=3;
        document.getElementById("texte").innerHTML = t[iTexte];
        document.getElementById("troisChoixB").style.visibility = "hidden";
        document.getElementById("tchoix1").style.visibility = "hidden";
        document.getElementById("tchoix2").style.visibility = "hidden";
        document.getElementById("tchoix3").style.visibility = "hidden";
    }
})
//Fin choix It 3------------------------3