//------------------------Initialisation------------------------
let bulle = $('#bulle');
let iTexte = 17;
let tchoix1 = $('#tchoix1');
let tchoix2 = $('#tchoix2');
let tchoix3 = $('#tchoix3');
let dchoix1 = $('#dchoix1');
let dchoix2 = $('#dchoix2');
let pac1i = 0;
let iFond = $('#imageFond');
let iPerso =$('#perso');
let iPerso2 =$('#perso2');

//-------------------------Texte------------------------
let t = [290];
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
//puzzle
t[21] = "Une fois la machine réparée, vous décidez de la redémarrer pour voir si tout est bien en ordre. Le bruit assourdissant et le fracas qu’elle produit en démarrant vous surprennent tellement que vous reculez sans regarder derrière vous. Vous tombez et vous cognez la tête, ce qui vous plonge dans l’inconscience.";
t[22] = "Vous vous réveillez dans une flaque de fluide noirâtre";
t[23] = "Cette fois, j’aurais vraiment dû me méfier ! Qu’est ce que c’est que cette chose noire et gluante ? L’odeur est immonde, c’est à peine respirable. Le conduit est trop haut, je ne peux même pas remonter.";
t[24] = "IL Y A QUELQU’UN ? JE SUIS COINCÉ !";
t[25] = "......s’il......te..p..plait..";
t[26] = "Quoi ? Qui est là ? Gareth, c’est vous ?";
t[27] = "....";
t[28] = "Mon dieu, j’ai l’impression que les produits toxiques dans lesquels je me suis évanoui me rendent fou. Je dois vite vite sortir d’ici.";
t[29] = "";
t[30] = "C’est vraiment grand ici ! Je suis incapable de me repérer.";
t[31] = "Vous apercevez une lueur de lumière au fond du couloir que vous parcourez depuis quelques minutes. En vous approchant, vous distinguez quelques quintes de toux provenant du même endroit que la lumière. Mais cette toux n’est pas celle d’un vigile de nuit, c’est celle d’un enfant !";
t[32] = "Vous vous précipitez et vous passez la tête par l’ouverture afin d’observer l’intérieur de la pièce.<br>C’est une sorte d’hôpital de fortune, sur des matelas posés à même le sol, des dizaines d’enfants gisent, plaintifs.<br>Vous reconnaissez Lucy, votre meilleure amie, alitée et au bord de l’inconscience.";
t[33] = "Mince ! Les gardes ont l'air de m'avoir entendu. Je ferais mieux de me cacher en attendant qu'ils détournent leur attention";
t[34] = "Lucy, réveille toi ! Qu’est-ce que tu fais ici ? Réponds ! Oh non, elle est inconsciente… Je dois sortir d’ici, cet endroit commence vraiment à me faire peur.";
t[35] = "J'entend du bruit, je vais me faufiler dans cette porte.";
t[36] = "Une pièce de maintenance ? Il y a un plan de secours, mais j’ai du mal à le comprendre. Je crois que ces produits toxiques m’ont vraiment embrouillé l’esprit. Ou peut-être que c’est ma chute...";
//puzzle
t[37] = "Ah voilà ! Je peux enfin m’en aller d’ici !";
t[38] = "Suite à ce périple vous rentrez chez vous, vous y apercevez Chuck et un autre contremaître que vous ne connaissez pas qui discutent avec vos parents.";
t[39] = "...nous sommes désolés…";
t[40] = "...on a tout fait pour le sauver, mais il est mort...";
t[41] = "Eh vous ! Qu’est-ce que vous racontez à mes parents ?!";
t[42] = "Oh mon dieu mon fils ! On te croyait mort…";
t[43] = "Quelle magnifique nouvelle ! Tu es vivant, petit. On t’a cherché partout, nous aussi on te croyait mort.";
t[44] = "C’est faux ! Je viens de me réveiller, exactement où j’étais tombé. Personne n’est venu me secourir. D’ailleurs, cet endroit était étrange, qu’est-ce qu’il s’y passe ?";
t[45] = "Je crois que tu as rêvé gamin. Les produits toxiques dans lesquels tu es tombé ont dû te provoquer des hallucinations. Viens avec nous, tu dois voir un médecin très vite. On n’est jamais trop prudents";
t[46] = "Sûrement pas, je vais très bien ! Vous cachez quelque chose.";
t[47] = "C’est peut être une bonne idée mon chéri, tu as peut être ingéré quelque chose sans t’en rendre compte.";
t[48] = "Mais maman, écoute-moi !";
t[49] = "Bon ça suffit ! On n’est jamais trop prudent. Viens, sinon l’entreprise sera tenue pour responsable de ta mauvaise santé. Je te rappelle que je suis ton supérieur et que tu me dois respect et obéissance.";
t[50] = "Mais...";
t[51] = "Ce sera rapide, arrête de te faire prier petit !";
t[52] = "Ne discute pas. Je ne veux pas que tu tombes malade, vas-y !";
t[53] = "";
t[54] = "Qu’est ce qu’ils vont me faire ? C’est vraiment étrange, Chuck n’a jamais été bienveillant envers qui que ce soit";
t[55] = "Tu as bien failli trop en dire, gamin. J’ai toujours su que tu nous mettrais dans le pétrin à force de te mêler de ce qui ne te regarde pas.";
t[56] = "Pourquoi des enfants sont retenus dans l’entrepôt ? Qu’est-ce que vous manigancez ? Je n’ai rien à vous dire !";
t[57] = "Qu’as-tu vu dans ce trou ? Essaie pas de me mentir, gamin.";
t[58] = "Je vous ai dit que je n’en parlerais pas avec vous.";
t[59] = "Ecoute, petit. Je ne me suis pas déplacé jusque chez tes parents pour le plaisir. Tu te doutes bien que je ne peux pas me permettre de te laisser partir comme ça. Si tu me dis ce que tu as vu, je ferai mon possible pour plaider en ta faveur auprès de monsieur Poskinov.";
t[60] = "Mais en attendant, je dois t’enfermer pour être sûr que tu ne fasses rien de stupide.";
t[61] = "Il faut que je m’échappe, sinon je ne sais pas ce qu’ils vont me faire...";
t[62] = "Une fois arrivés, les contremaîtres vous enferment comme ils l’ont dit dans une pièce lugubre isolée du reste de l’usine.";
//puzzle
t[63] = "Bon, j’ai enfin réussi à me tirer de ce bourbier. Pour enfermer un enfant, ce qu’ils cachent doit être très grave...";
//puzzle
t[64] = "Gareth tu es là ? J’ai vraiment besoin de te parler, c’est urgent !";
t[65] = "William, c’est toi ? Entre, ne fais pas de bruit...";
t[66] = "En rentrant chez moi, j’ai trouvé les contremaîtres qui essayaient de faire croire à mes parents que j’étais mort. Heureusement, je suis arrivé au même moment ! Ensuite, ils ont convaincu mes parents que je devais les accompagner et ils m’ont enfermé ! Gareth, ils cachent quelque chose ! Tu sais de quoi il s’agit ?";
t[67] = "... ça s’est passé à l’usine cet après-midi. Votre enfant a été chargé d’aller réparer une machine mais tout ne s’est pas déroulé comme prévu. En redémarrant la machine, il est tombé dans le conduit qui se trouvait derrière lui.. L’endroit dans lequel il est tombé est... inaccessible. Nous n’avons rien pu faire.";
t[68] = "Mon dieu... C’est impossible...";
t[69] = "Sachez que votre fils était un très bon élément. Nous sommes grandement affectés par sa perte. Au nom de l’entreprise Poskinov, nous vous présentons toutes nos condoléances.";
t[70] = "Mais qu’est-ce qu’ils racontent à mes parents ? Je ne suis pas mort ! C’est étrange.. Ils cachent sûrement quelque chose de grave. Peut être que Gareth est au courant de quelque chose, je devrais aller le voir.";
//puzzle
t[71] = "Gareth tu es là ? J’ai vraiment besoin de te parler, c’est urgent !";
t[72] = "Entre, ne fais pas de bruit...";
t[73] = "Les contremaîtres ont fait croire à mes parents que j’étais mort ! Je ne peux pas rentrer chez moi après ça, ils sauront où me trouver. Je dois comprendre ce qu’il se passe, Lucy a disparue elle aussi. As-tu remarqué quelque chose de louche dans l’entreprise ?";
t[74] = "Écoute William, je sais pas si je peux te parler de ça… Ne te mêle pas des affaires du patron, crois-moi, j’en sais quelque chose.";
t[75] = "Tu dois m’aider ! J’ai vu des enfants malades enfermés, tu ne peux pas tolérer ça toi aussi !";
t[76] = "C’est plus compliqué que ça tu sais… Si les autres contremaîtres apprennent que j’ai parlé, je ne sais pas ce qu’ils peuvent lui faire ..";
t[77] = "Faire quoi ?  À qui ? Je ne comprends rien Gareth.";
t[78] = "À ma fille William, à ma fille… Elle est malade et ce sont les seuls à disposer du traitement. Je ne peux me permettre de la perdre.";
t[79] = "Ils te font du chantage ! D’ailleurs, qu’est-ce qui l’a rendue malade ?";
t[80] = "Tu t’en doutes n’est-ce pas ? La même chose que pour les autres. Seulement, puisque c’est ma fille, ils ne pouvaient pas me la cacher, j’étais déjà au courant de la combine. Donc ils m’ont dit de la garder ici, mais si je parle de sa maladie à qui que ce soit, ils ne me donneront plus de quoi la maintenir en vie.";
t[81] = "Oui Gareth.. J’ai tout vu, la quarantaine, et ces flaques de liquides bizarres dans le ventre de la bête.";
t[82] = "En effet, Abraham Poskinov fait croire que les déchets industriels sont stockés puis jetés hors de Jaya’nah mais il ment… Les personnes que tu as vues en quarantaine, elles sont toutes atteintes d'intoxications dues aux émanations des produits toxiques de l’usine.";
t[83] = "Seulement, les malades constituent en eux-mêmes la preuve que Poskinov a des pratiques douteuses, donc le patron a décidé de les cacher. Puisque les déchets toxiques sont déversés à l’intérieur de Jaya’nah, elle finira par mourir aussi du poison qu’elle est obligée d’ingérer tous les jours.";
t[84] = "Quand j’étais dans le ventre de Jaya’nah, je ressentais une sorte de souffrance permanente. Je m’inquiète autant pour elle que pour mes amis. Je ne veux pas te déranger plus longtemps, Gareth, ta fille a sûrement besoin de soins.";
t[85] = "Et dire que je travaille pour une usine qui va peut-être détruire la ville… En plus, je dois sauver les ouvriers malades enfermés. Pour ce soir, je vais passer la nuit caché, je ne connais qu’un seul endroit où personne ne viendra me chercher...";
t[86] = "Au moins ici je suis tranquille, personne ne viendra me déranger…";
t[87] = "J’…ai..besoin….d’aide";
t[88] = "J’ai…..mal";
t[89] = "Qui est là ?";
t[90] = "Tu....tu...comprends... ce que je dis ?..";
t[91] = "Montre-toi ! Arrête de te cacher !";
t[92] = "Tu.. ne peux.. me voir... tu vis... sur moi..";
t[93] = "Jaya’nah ?";
t[94] = "Trouve... le sanctuaire...";
t[95] = "Quel sanctuaire ? Je ne comprends pas !";
t[96] = "....";
t[97] = "Je ne comprends pas... Qu’est-ce que je dois faire...";
t[98] = "Tu.. sauras où aller... je.. te l'indi...querais. Rend toi.... à la.. forêt";
t[99] = "";
t[100] = "C'est donc ça le sanctuaire ?";
//puzzle
t[101] = "Enfin...";
t[102] = "Où suis-je ?";
t[103] = "Je t’ai fait venir jusqu’au sanctuaire car c’est le seul moyen pour moi de communiquer avec toi.";
t[104] = "Je vois, mais pourquoi m’avoir emmené ici ?";
t[105] = "Je ne comprends pas pourquoi, mais tu es le seul de ton espèce à entendre mes plaintes. J’ai besoin de ton aide.";
t[106] = "Je croyais que je devenais fou...";
t[107] = "Tu n’es pas fou, nous sommes liés. Tu dois m’aider, si tu me sauves, tous ceux que tu connais continueront à vivre sur moi. Mais si je meurs, beaucoup d’humains mourront avec moi.";
t[108] = "Tes cheveux blancs sont la marque des élus. La légende étant oubliée depuis bien des générations, tout le monde croit que ce n’est qu’une simple spécificité physique, mais ils se trompent.";
t[109] = "Tu veux dire que j’ai des sortes de pouvoirs ?";
t[110] = "Oui, tu as le pouvoir de comprendre les souffrances des êtres qui t’entourent. Dès qu’elle domine un endroit, ton espèce le détruit, puis elle abandonne l’endroit pour en détruire un autre. Seulement, nous sommes nous aussi des êtres vivants.";
t[111] = "C’est pour cela que ton empathie pour nous te semble être un pouvoir surnaturel. Aide-moi, tu peux montrer à tout le monde que cette immonde usine m’empoisonne simplement pour enrichir un homme.";
t[112] = "Je ne suis qu’un enfant. Comment puis-je m’opposer seul à l’homme le plus puissant de la ville ? Même la police évite de se mêler de ses affaires.";
t[113] = "Tu n’es pas seul...";
t[114] = "";
t[115] = "Cette fois-ci, plus de doutes possibles ! Jaya’nah me parle ! Je n’ai pas le choix, je dois l’aider. Mais comment faire pour renverser Poskinov ? Il est trop influent pour qu’un simple enfant comme moi puisse mettre son entreprise à mal.";
t[116] = "À moins que je ne prouve aux yeux de tous qu’il joue avec la vie des habitants de la ville avec ses petites magouilles...";
t[117] = "Vous décidez de retourner chez Gareth, lorsque vous sortez, une bonne partie de la journée s’est déjà écoulée";
t[118] = "Gareth ! Tu es là ? Je dois te parler de quelque chose de très important.";
t[119] = "Ah tu es là, petit ? Ne reste pas là, entre.";
t[120] = "Jaya’nah se plaint tous les jours, je l’ai entendue dans un sanctuaire perdu dans la forêt.";
t[121] = "...Petit, tu es sûr que les produits toxiques ne t’ont pas laissé de séquelles ?";
t[122] = "Je te le promets Gareth ! Tu l’as dit toi-même la dernière fois, nous sommes encore entrain de tuer l’endroit qui nous accueille !";
t[123] = "Évidemment, de toute façon, que pouvons-nous y faire ?";
t[124] = "Nous devons mettre la lumière sur ce qu’il se passe dans l’usine.";
t[125] = "Poskinov est trop influent !";
t[126] = "Contrairement à toi, il n’a pas la confiance des ouvriers...";
t[127] = "Je suis pas sûr de te suivre, William. Tu veux que je m’oppose à lui ?";
t[128] = "Oui, organise une grève, si la production est bloquée, tous les journaux de la ville iront directement à l’usine pour couvrir l’évènement. Si je parviens à libérer les malades, nous prouveront déjà que Poskinov séquestre des enfants pour cacher les effets nocifs qu’ont ses produits sur eux";
t[129] = "Et ma fille ? Je suis vraiment désolé, mais je ne risquerai pas sa mort. Sous aucun prétexte. Comment fera-t-on si Poskinov étouffe l’affaire ? N’oublie pas qu’il est un ami personnel du maire de la ville, il est intouchable.";
t[130] = "Mais elle mourra si Jaya’nah meurt ! Je vais poster des lettres anonymes pour prévenir les journaux qu’une grève générale se prépare aux usines Poskinov. Il faut au moins essayer de sauver Jaya’nah. Il doit bien y avoir des remèdes quelque part dans l’usine.";
t[131] = "Je suppose que je n’ai pas le choix… Mais comment comptes-tu les faire sortir de l’usine devant tout le monde ? Tu vas te faire attraper par les fidèles du patron qui gardent l’entrepôt.";
t[132] = "Je profiterai de la cohue générée par la grève, si tu peux te procurer les clés, je me charge d’aller leur ouvrir discrètement.";
t[133] = "Bien, je m’occuperai de cette partie du plan. Laisse moi une journée pour en parler à ceux en qui j’ai confiance, et nous bloquerons la production après-demain.";
//puzzle
t[134] = "Les gars, nous devons bloquer la production ! Le patron nous ment depuis longtemps !";
t[135] = "Tu es contremaître, toi ! Nous, on peut pas s’permettre d’arrêter le boulot. Sans paye, on mange pas !";
t[136] = "";
t[137] = "Eh bien… Si on fait rien, on va tous mourir, c’est ce que tu es en train de nous dire ?";
t[138] = "Oui, vous, moi, nous tous sauf le patron. En plus de ça...";
t[139] = "Excusez-moi, messieurs, j’interromps quelque chose ? Gareth, suivez-moi. J’ai un problème dont j’aimerais vous faire part.";
t[140] = "Bien, monsieur...";
t[141] = "Le patron est venu le chercher en personne ! Et vu les deux gorilles qui l’accompagnent, il n’a pas l’air de plaisanter. Peut-être que ce bon vieux Gareth nous dit la vérité, après tout.";
t[142] = "Je suis désolé, petit…";
t[143] = "Tu es désolé ? Mais pourquoi ?";
t[144] = "Tiens, bonjour jeune homme. C’est justement vous que je cherchais ! Vous me mettez des bâtons dans les roues, chose que je ne saurai tolérer. Je me vois dans l’obligation de faire en sorte que cela cesse.";
t[145] = "Gareth, vous avez dévoilé des informations confidentielles à cet irresponsable enfant, je me vois donc dans l’obligation de vous sanctionner.";
t[146] = "À moins d’une action qui vous placerait de nouveau en odeur de sainteté à mes yeux, j’ai l’immense regret de vous annoncer que l’entreprise n’est plus en mesure de fournir à votre fille son traitement.";
t[147] = "Je ne vois que deux façons de sortir de cette fâcheuse situation. La première, et celle que je trouve personnellement la plus probable, est que vous restiez bêtement accroché à vos principes d’enfant de dix ans. Auquel cas je prendrai des mesures qui vous déplairont très certainement.";
t[148] = "La seconde est que vous vous décidez enfin à être raisonnable, et vous arrêtez de vous mêler de ce qui ne vous regarde pas. Dans ce cas je vous offrirai généreusement, ainsi qu’à votre famille une place dans un dirigeable si notre bienaimée Jaya’nah venait à nous quitter. La proposition vaut aussi pour vous, Gareth.";
t[149] = "Alors tu disais vrai, petit. Poskinov se fiche vraiment du sort de la ville et de ses habitants.";
t[150] = "Silence, Gareth. Choisissez tous les deux vos prochains mots avec attention. ma patience a atteint ses limites.";
t[151] = "Bien.. Je pense que nous n’avons pas vraiment le choix...."
t[152] = "Quelle sage décision ! Bien, je ne puis m’entretenir avec vous plus longtemps, les affaires m’appellent. Puisque toute confusion est dissipée, plus rien ne me retient dans votre miteuse bâtisse. En vous souhaitant une agréable journée.";
t[153] = "Cet homme est vraiment méprisable...";
t[154] = "Ne t’inquiète pas Gareth, je ne compte pas le laisser s’en tirer à si bon compte.";
t[155] = "Que veux-tu dire, mon garçon ?";
t[156] = "Tu croyais vraiment que j’allais accepter sa proposition comme si j’étais à sa solde ? Je ne vais pas me laisser faire aussi facilement. Il doit sûrement penser que cette histoire est réglée, que nous nous sommes docilement rangés de son côté par peur.";
t[157] = "Alors, on poursuit le plan ?";
t[158] = "Bien sûr."
t[159] = "Gareth et vous maintenez votre décision d'exécuter votre plan initial. Vous vous rendez à l’usine ensemble.";
t[160] = "Tu sais qui est responsable des clés de la quarantaine aujourd’hui ?";
t[161] = "Si je ne me trompe pas, c’est Chuck.";
t[162] = "Il ne nous laissera jamais les prendre !";
t[163] = "Ne t’inquiète pas, je me charge de lui.";
t[164] = ""
t[165] = "Qu’est-ce-qu’il se passe les gars ? Vous n’êtes pas censés travailler ?";
t[166] = "Gareth ! Tu es vivant ! On a eu peur que le patron t’ait fait la peau ! On est désolés de ne pas avoir cru directement à l’histoire que tu nous avais raconté...";
t[167] = "Ne vous en faites pas pour moi. Je suis plus résistant que j’en ai l’air, alors vous nous soutenez ? Vous bloquez la production ?";
t[168] = "Bien sûr qu’on te soutient !";
t[169] = "Bien, pour prouver à tout le monde que le patron est une ordure, il faut aller chercher les clés du vieil entrepôt. C’est Chuck qui en est responsable aujourd’hui, est-ce que quelqu’un sait où il est ?";
t[170] = "Oui, suis-nous.";
t[171] = "Je vous revaudrais ça les gars !";
t[172] = ""
t[173] = "Salut Chuck, donne nous la clé de l’entrepôt s’il te plaît.";
t[174] = "Ne fait pas l’innocent avec moi, je ne suis pas stupide, je sais ce que vous avez prévu de faire et je ne me joindrai pas à votre stupide plan. Maintenant remettez-vous au travail avant que le patron ne se fâche.";
t[175] = "Je me doutais que ça se passerait comme ça. J’ai essayé de faire ça en douceur, mais j’ai pas l’temps de discuter. Allez les gars, on va la récupérer de force.";
t[176] = "Si tu veux cette clé, viens la chercher !";
t[177] = "Chuck est facilement maîtrisé par les ouvriers et vous prenez la clé.";
t[178] = "Bien, allons libérer nos camarades !";
t[179] = "Je vais saboter la salle des machines. Comme ça, les vigiles seront obligés d’aller voir eux-mêmes ce qu’il se passe.";
t[180] = "Vous vous rendez au vieil entrepôt, à votre arrivée, aucun vigile ne surveille les malades. Ce qui vous permet de libérer ceux qui sont encore en état de se déplacer, et vous promettez aux autres de revenir les chercher.";
t[181] = "Qui êtes-vous ? Vous ne faites pas partie du personnel soignant, si ?";
t[182] = "Je viens vous faire sortir de cet endroit. Que pensez-vous de monsieur Poskinov ?";
t[183] = "Ah, le patron… On nous a dit qu’on était malades et qu’il fallait pas qu’on contamine nos familles, donc on est enfermés ici. C’est quelqu’un de bien, il nous soigne pour qu’on puisse revoir nos parents un jour.";
t[184] = "Poskinov vous ment. Il a dit à vos familles que vous étiez morts. En plus, c’est à cause de lui que vous êtes malades, il jette les déchets toxiques à l’intérieur de Jaya’nah ! Si on le laisse continuer, sa pollution va la tuer et la ville va s’écraser. Il vous garde ici pour cacher la vérité.";
t[185] = "Non...Ce n’est pas possible… Quel salaud !"
t[186] = "Malheureusement si, et c’est pour ça que je viens vous chercher aujourd'hui. Vous devez sortir pour prouver à toute la ville que vous êtes vivants, et que votre maladie est due à la pollution de l’usine ! Si on ne fait rien, nous serons responsables de la mort de tous les habitants !";
t[187] = "J’imagine qu’il n’y a qu’un seul moyen de découvrir la vérité..";
t[188] = "Je vous donne ma parole, je n’ai aucune raison de vous mentir.";
t[189] = "Bien, ceux qui veulent te suivront, si ce que tu dis est vrai, nous reviendrons chercher les autres avec les secours.";
t[190] = "Après avoir réussi à convaincre les patients vous décider de les évacuer vers la place public.";
t[191] = "La presse est arrivée sur place lorsque vous sortez de l’usine. A l’approche des malades, vous distinguez des bribes de liesses provenant de la foule";
t[192] = "C’est Layne ! On m’avait dit qu’il était mort ! ...<br>...Caly ! elle était déclarée disparue ! Qu’est-ce que ça veut dire ?...";
t[193] = "La presse vous assaille en voyant les présumés morts marcher à vos côtés.";
t[194] = "Bonjour à tous, nous nous tenons devant vous pour prouver à la ville qu’Abraham Poskinov est un menteur. Ses usines empoisonnent Jaya’nah car les produits toxiques qu’elles émanent sont rejetées directement dans son corps.";
t[195] = "Si nous le laissons continuer, Jaya’nah finira par mourir et la ville s’écrasera sur Terre, ce qui tuera tous ceux qui n’ont pas les moyens d’acheter les dirigeables produits par les usines Poskinov elles-mêmes !";
t[196] = "En plus de ça, les enfants tombés malades par les produits toxiques étaient portés pour mort, alors qu’en réalité, ils étaient retenus dans un entrepôt insalubre.";
t[197] = "Cet homme est un criminel !...<br>Pour une fois, la justice doit faire son travail !";
t[198] = "La police étant déjà présente pour encadrer la grève, la pression exercée par la foule pousse les policiers à se rendre au bureau d’Abraham Poskinov.";
t[199] = "Trop sûr de sa victoire, Poskinov se trouvait bel et bien dans son bureau. Ce jour-là, il fut arrêté et traduit en justice. Ses usines fermèrent définitivement, et des soins furent apportés à Jaya’nah. L’affaire Poskinov a généré une prise de conscience de la part de toute la ville.";
t[200] = "Désormais, des lois ont été adoptées pour protéger Jaya’nah et pour améliorer la condition des enfants en leur interdisant le travail et la fortune de Poskinov fut réquisitionnée pour financer à ces mêmes enfants un programme d’éducation.";
t[201] = "Bien sûr...";
t[202] = "Enfin, vous vous décidez à entendre raison.";
t[203] = "Vous pensez vraiment que nous allons accepter cette offre ? Vous nous demandez de partir d’ici en sachant que tout le monde va mourir.";
t[204] = "Nous ne sommes pas comme vous. Vous n’êtes intéressé que par l’argent, mais vous enfermez des enfants pour garder un secret immonde. Vous ne méritez que la prison, et jamais je ne tolérerai ce dont vous êtes capable pour en obtenir plus.";
t[205] = "Bien, ta décision est prise. C’est courageux, mais pas très intelligent. Tu es malin, tu sais que je ne peux pas te tuer maintenant puisque la plupart de mes ouvriers savent que je suis ici avec notre ami Gareth et toi. D’ailleurs, comment va votre fille, cher ami ?";
t[206] = "Avec tout le respect que je vous dois m’sieur, je ne suis pas votre ami.";
t[207] = "Messieurs, vous regretterez votre décision. Cependant, j’ai des affaires plus urgentes à régler aujourd’hui, adieu.";
t[208] = "Petit, allons sortir les malades de leur prison.";
t[209] = "Vous vous dirigez vers l’usine avec Gareth";
t[210] = "Tu sais qui est responsable des clés de la quarantaine aujourd’hui ?";
t[211] = "Si je m’trompe pas, c’est Chuck.";
t[212] = "Il ne nous laissera jamais les prendre !";
t[213] = "Ne t’inquiète pas, je me charge de lui.";
t[214] = "En arrivant à l’usine, vous apercevez un attroupement à l’entrée, vous vous approchez pour voir de quoi il s’agit.";
t[215] = "Qu’est-ce-qu’il se passe les gars ? Vous n’êtes pas censés travailler ?";
t[216] = "Gareth ! Tu es vivant ! On a eu peur que le patron t’ait fait la peau ! On est désolés de ne pas avoir cru directement à l’histoire que tu nous avais raconté...";
t[217] = "Ne vous en faites pas pour moi. Je suis plus résistant que j’en ai l’air, alors vous nous soutenez ? Vous bloquez la production ?";
t[218] = "Bien sûr qu’on te soutient !";
t[219] = "Bien, pour prouver à tout le monde que le patron est une ordure, il faut aller chercher les clés du vieil entrepôt. C’est Chuck qui en est responsable aujourd’hui, est-ce que quelqu’un sait où il est ?";
t[220] = "Oui, suis-nous.";
t[231] = "Je vous revaudrais ça les gars !";
t[232] = "Vous vous rendez dans la salle de contrôle où se trouve Chuck accompagné de quelques ouvriers fidèles à Poskinov, il est accompagné de son second.";
t[233] = "Salut Chuck, donne nous la clé de l’entrepôt s’il te plaît.";
t[234] = "Ne fait pas l’innocent avec moi, je ne suis pas stupide, je sais ce que vous avez prévu de faire et je ne me joindrai pas à votre stupide plan. Maintenant remettez-vous au travail avant que le patron ne se fâche.";
t[235] = "Je me doutais que ça se passerait comme ça. J’ai essayé de faire ça en douceur, mais j’ai pas l’temps de discuter. Allez les gars, on va la récupérer de force.";
t[236] = "Si tu veux cette clé, viens la chercher !";
t[237] = "Malgré sa tentative de fuite, Chuck est maîtrisé par les ouvriers et vous prenez la clé.";
t[238] = "Bien, allons libérer nos camarades !";
t[239] = "Je vais saboter la salle des machines. Comme ça, les vigiles seront obligés d’aller voir eux-mêmes ce qu’il se passe.";
t[240] = "Vous vous rendez au vieil entrepôt, à votre arrivée, aucun vigile ne surveille les malades. Ce qui vous permet de libérer ceux qui sont encore en état de se déplacer, et vous promettez aux autres de revenir les chercher.";
t[241] = "Qui êtes-vous ? Vous ne faites pas partie du personnel soignant, si ?";
t[242] = "Je viens vous faire sortir de cet endroit. Que pensez-vous de monsieur Poskinov ?";
t[243] = "Ah, le patron… On nous a dit qu’on était malades et qu’il fallait pas qu’on contamine nos familles, donc on est enfermés ici. C’est quelqu’un de bien, il nous soigne pour qu’on puisse revoir nos parents un jour.";
t[244] = "Poskinov vous ment. Il a dit à vos familles que vous étiez morts. En plus, c’est à cause de lui que vous êtes malades, il jette les déchets toxiques à l’intérieur de Jaya’nah ! Si on le laisse continuer, sa pollution va la tuer et la ville va s’écraser. Il vous garde ici pour cacher la vérité.";
t[245] = "Non...Ce n’est pas possible… Quel salaud !";
t[246] = "Malheureusement si, et c’est pour ça que je viens vous chercher aujourd'hui. Vous devez sortir pour prouver à toute la ville que vous êtes vivants, et que votre maladie est due à la pollution de l’usine ! Si on ne fait rien, nous serons responsables de la mort de tous les habitants !";
t[247] = "J’imagine qu’il n’y a qu’un seul moyen de découvrir la vérité..";
t[248] = "Je vous donne ma parole, je n’ai aucune raison de vous mentir.";
t[249] = "Bien, ceux qui veulent te suivront, si ce que tu dis est vrai, nous reviendrons chercher les autres avec les secours.";
t[250] = "Après avoir réussi à convaincre les patients vous décider de les évacuer vers la place public. La presse est arrivée sur place lorsque vous sortez de l’usine. A l’approche des malades, vous distinguez des bribes de liesses provenant de la foule";
t[251] = "C’est Layne ! On m’avait dit qu’il était mort !<br>... Caly ! elle était déclarée disparue ! Qu’est-ce que ça veut dire ?...";
t[252] = "La presse vous assaille en voyant les présumés morts marcher à vos côtés.";
t[253] = "Bonjour à tous, nous nous tenons devant vous pour prouver à la ville qu’Abraham Poskinov est un menteur. Ses usines empoisonnent Jaya’nah car les produits toxiques qu’elles émanent sont rejetées directement dans son corps.";
t[254] = "Si nous le laissons continuer, Jaya’nah finira par mourir et la ville s’écrasera sur Terre, ce qui tuera tous ceux qui n’ont pas les moyens d’acheter les dirigeables produits par les usines Poskinov elles-mêmes !";
t[255] = "En plus de ça, les enfants tombés malades par les produits toxiques étaient portés pour mort, alors qu’en réalité, ils étaient retenus dans un entrepôt insalubre.";
t[256] = "Cet homme est un criminel !<br>...Pour une fois, la justice doit faire son travail !";
t[257] = "La police étant déjà présente pour encadrer la grève, la pression exercée par la foule pousse les policiers à se rendre au bureau d’Abraham Poskinov.";
t[258] = "À l’arrivée des forces de l’ordre, le bureau est vide. Poskinov s’est enfui, prévenu par votre véhémence à son encontre, il a anticipé votre plan et en a profiter pour s’échapper en dirigeable. Cependant, la prise de conscience générale a permis à Jaya’nah d’être sauvée.";
t[259] = "Un nouveau directeur a été nommé pour diriger l’usine tout en respectant la santé de la créature. Désormais, vous travaillez toujours à l’usine avec Lucy, votre meilleure amie. Malgré la satisfaction d’avoir sauvé Jaya’nah, vous êtes toujours exploité dans une usine et vous êtes toujours aussi pauvre.";
t[260] = "Votre offre est acceptable, seulement si vous promettez de vraiment agir ainsi.";
t[261] = "Je vous en prie, nul besoin de ce genre de manières, je suis un homme de parole. Je vous promets une place de haute volée à bord de ma future ville volante pour vous et votre famille.";
t[262] = "Bien, alors nous avons un accord.";
t[263] = "Formidable ! Dans ce cas, je vous souhaite une agréable journée, messieurs.";
t[264] = "Tu es sûr que c'est la bonne décision ?";
t[265] = "Je t’avoue que je ne sais pas vraiment, j’ai surtout voulu prendre le moins de risques possible.";
t[266] = "Vous avez fait le choix de ne pas sauver Jaya’nah. Comme prévu, celle-ci finit par succomber à la pollution des usines Poskinov. Vous devez donc quitter Jaya’nah. Dans quelques heures, elle s’écrasera, tuant n’importe qui se trouvant sur elle. Vous arrivez chez Lucy, votre meilleure amie";
t[267] = "Viens Lucy, allons rejoindre monsieur Poskinov. Nous devons partir.";
t[268] = "Désolée, William, mais je ne t’accompagnerai pas cette fois, je trouve révoltant de laisser mourir ces gens en n’essayant rien pour régler la situation.";
t[269] = "Quoi ? mais pourquoi ? Tu vas mourir si tu restes ici, Lucy !";
t[270] = "Peu m’importe, contrairement à toi, je ne pense pas mériter plus de vivre que Jaya’nah, ou que n’importe quel habitant de cette ville. Je te trouve très égoïste.";
t[271] = "Tu es responsable de la mort de ces gens car contrairement à eux, tu connaissais la réalité de la situation, mais tu as choisi de te taire juste pour te ranger du côté d’un homme puissant. Maintenant, pars.";
t[272] = "Choqué par les paroles de votre amie, vous vous rendez sur le quai d’embarquement seul, Abraham Poskinov vous y attend, accompagné de ses gardes du corps.";
t[273] = "Bonjour monsieur, j’espère que notre accord tient toujours.";
t[274] = "Bonjour jeune homme. Notre accord ? Bien sûr, mais vous êtes seul ? Je vous en prie, passez devant.";
t[275] = "Lorsque vous arrivez au niveau du pont qui mène au dirigeable, un des gardes du corps vous bloque le passage.";
t[276] = "Laissez-moi passer. Monsieur Poskinov m’a réservé une place.";
t[277] = "Vous ne figurez pas sur la liste des passagers, désolé.";
t[278] = "Il y a sûrement une erreur...";
t[279] = "Déconcerté, vous vous tournez vers Abraham, qui pointe alors un revolver vers vous, d’un air satisfait.";
t[280] = "Il n’y a effectivement aucun malentendu. Vous n’êtes pas sur la liste car je ne vous y ai pas inscrit.";
t[281] = "Comment ça ? Et notre accord ?";
t[282] = "Je tenais à vous faire venir ici afin de vous apprendre quelque chose, jeune homme. Lorsqu’un faible s’attaque bêtement à un fort, c’est toujours le fort qui l’emporte.";
t[283] = "Abraham Poskinov fait feu, vous vous écroulez alors et vous assistez, impuissant, à sa fuite en dirigeable.";
//------------------------Fin texte------------------------

//------------------------Avancer dans le dialgue------------------------
$('#bulle').on('click',function() {
    if (iTexte==13){iFond.attr('src','assets/usine.png');}
    if (iTexte!=6 && iTexte!=10 && iTexte!=15 && iTexte != 18 && iTexte!=32 && iTexte!=40 && iTexte!=150 && iTexte!=200 && iTexte!=259 && iTexte!=283) {
        iTexte ++;
        document.getElementById("texte").innerHTML = t[iTexte];
    }
    if (iTexte==2){iFond.attr('src','assets/villeRiche.png');}
    if (iTexte==3){iFond.attr('src','assets/basQuartier.png');}
    if (iTexte==4){iFond.attr('src','assets/foret.png');}
    if (iTexte==5){iFond.attr('src','assets/raie.gif');}
    if (iTexte==6) {
        document.getElementById("deuxChoixB").style.visibility = "visible";
        document.getElementById("dchoix1").style.visibility = "visible";
        document.getElementById("dchoix2").style.visibility = "visible";
        iFond.attr('src','assets/zzz.png');
        iPerso.attr('src','assets/garcon.png');
    }
    if (iTexte==8){iPerso.attr('src','assets/garcon.png');}
    if (iTexte==9){iTexte=14;iFond.attr('src','assets/usine.png'); iPerso2.attr('src','assets/fille.png');}
    if (iTexte==12){iTexte=14;iFond.attr('src','assets/usine.png');}
    if (iTexte==13){iFond.attr('src','assets/usine.png');}
    if (iTexte==14){iPerso.attr('src','assets/garcon.png');iPerso2.attr('src','assets/fille.png');}
    if (iTexte==15){
        document.getElementById("deuxChoixB").style.visibility = "visible";
        document.getElementById("1").innerHTML = "Demander au contremaître Gareth s'il sait ou est Lucy";
        document.getElementById("2").innerHTML = "Ne pas perdre de temps et aller travailler";
        document.getElementById("dchoix1").style.visibility = "visible";
        document.getElementById("dchoix2").style.visibility = "visible";
        iPerso2.attr('src','assets/vide.png');
        iPerso2.attr('src','assets/fille.png');
    }

    if (iTexte==18) {    
        document.getElementById("troisChoixB").style.visibility = "visible";
        document.getElementById("3").innerHTML = "Que se passe t-il avec le personnel ?";
        document.getElementById("4").innerHTML = "Je n’ai pas envie de risquer ma peau pour une machine ! Tu n’as qu’à y aller toi.";
        document.getElementById("5").innerHTML = "J’y vais tout de suite m’sieur !";
        document.getElementById("tchoix1").style.visibility = "visible";
        document.getElementById("tchoix2").style.visibility = "visible";
        document.getElementById("tchoix3").style.visibility = "visible";
        iPerso.attr('src','assets/garcon.png');
        iPerso2.attr('src','assets/fille.png');
    }
    
    if (iTexte==22){iFond.attr('src','assets/interieur_Raie.png');iPerso2.attr('src','assets/vide.png');iPerso.attr('src','assets/garcon.png')}
    if (iTexte==32) {
        document.getElementById("deuxChoixB").style.visibility = "visible";
        document.getElementById("1").innerHTML = "Y aller discrètement";
        document.getElementById("2").innerHTML = "Y aller en courant pour lui porter assistance";
        document.getElementById("dchoix1").style.visibility = "visible";
        document.getElementById("dchoix2").style.visibility = "visible";
    }
    if (iTexte==40) {    
        document.getElementById("troisChoixB").style.visibility = "visible";
        document.getElementById("3").innerHTML = "Se montrer et protester";
        document.getElementById("4").innerHTML = "Se cacher et écouter";
        document.getElementById("5").innerHTML = "Aller voir Gareth, le seul contremaître en qui vous avez confiance";
        document.getElementById("tchoix1").style.visibility = "visible";
        document.getElementById("tchoix2").style.visibility = "visible";
        document.getElementById("tchoix3").style.visibility = "visible";     
    }
    if (iTexte==41){iPerso2.attr('src','assets/fille.png');}
    if (iTexte==62){iFond.attr('src','assets/cellule.png');}
    if (iTexte==71){iFond.attr('src','assets/maisonGareth.png');}
    if (iTexte==66){iTexte=73;}
    if (iTexte==85){iFond.attr('src','assets/coucherG.png');}
    if (iTexte==86){iFond.attr('src','assets/dodoG.png');}
    if (iTexte==89){iFond.attr('src','assets/coucherG.png');}
    if (iTexte==100){iFond.attr('src','assets/temple.png');}
    if (iTexte==118){iFond.attr('src','assets/maisonGareth.png');}
    if (iTexte==150) {    
        document.getElementById("troisChoixB").style.visibility = "visible";
        document.getElementById("3").innerHTML = "Refuser catégoriquement";
        document.getElementById("4").innerHTML = "Faire semblant d'accepter";
        document.getElementById("5").innerHTML = "Accepter sa proposition";
        document.getElementById("tchoix1").style.visibility = "visible";
        document.getElementById("tchoix2").style.visibility = "visible";
        document.getElementById("tchoix3").style.visibility = "visible";
    }
     if (iTexte==32) {
        document.getElementById("deuxChoixB").style.visibility = "visible";
        document.getElementById("1").innerHTML = "Y aller discrètement"
        document.getElementById("2").innerHTML = "Y aller en courant pour lui porter assistance"
        document.getElementById("dchoix1").style.visibility = "visible";
        document.getElementById("dchoix2").style.visibility = "visible";
    }
    if (iTexte==40) {    
        document.getElementById("troisChoixB").style.visibility = "visible";
        document.getElementById("3").innerHTML = "Se montrer et protester"
        document.getElementById("4").innerHTML = "Se cacher et écouter"
        document.getElementById("5").innerHTML = "Aller voir Gareth, le seul contremaître en qui vous avez confiance"
        document.getElementById("tchoix1").style.visibility = "visible";
        document.getElementById("tchoix2").style.visibility = "visible";
        document.getElementById("tchoix3").style.visibility = "visible";
    }
    if (iTexte==66){iTexte=73;}
    if (iTexte==150) {    
        document.getElementById("troisChoixB").style.visibility = "visible";
        document.getElementById("3").innerHTML = "Refuser catégoriquement"
        document.getElementById("4").innerHTML = "Faire semblant d'accepter"
        document.getElementById("5").innerHTML = "Accepter sa proposition"
        document.getElementById("tchoix1").style.visibility = "visible";
        document.getElementById("tchoix2").style.visibility = "visible";
        document.getElementById("tchoix3").style.visibility = "visible";
    }
    if (iTexte==200 || iTexte==259 || iTexte==283) {
        document.getElementById("texte").innerHTML = "FIN";
    }
    //Italic
    if (iTexte==21 || iTexte==22 || iTexte==31 || iTexte==32 || iTexte==38 || iTexte==62 || iTexte==117 || iTexte==159 || iTexte==177 || iTexte==180 || iTexte==190 || iTexte==191 || iTexte==193 || iTexte==198 || iTexte==199 || iTexte==200 || iTexte==209 || iTexte==214 || iTexte==232 || iTexte==237 || iTexte==240 || iTexte==250 || iTexte==252 || iTexte==257 || iTexte==258 || iTexte==259 || iTexte==266 || iTexte==272 || iTexte==275 || iTexte==279 || iTexte==283) {document.getElementById("texte").style.fontStyle = "italic";}else{document.getElementById("texte").style.fontStyle = "normal";}
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
        iPerso.attr('src','assets/vide.png');
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
        iPerso.attr('src','assets/garcon.png');
        iPerso.attr('src','assets/vide.png');
    }
})
//Fin choix It 1------------------------2
//------------------------Point and click 1------------------------
$('#pac1o1').on('click',function() {
    if (iTexte==10) {
        document.getElementById("bulle").style.visibility = "visible";
        document.getElementById("texte").innerHTML = "\"Une nouvelle maladie fait rage, pour l'instant aucun remède n'a été trouvé\"";
        pac1i++;
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
        iTexte++;
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
//Choix It 4------------------------2
dchoix1.on('click',function() {
    if (iTexte==32) {
        iTexte+=2;
        document.getElementById("texte").style.fontStyle = "normal";
        document.getElementById("texte").innerHTML = t[iTexte];
        document.getElementById("deuxChoixB").style.visibility = "hidden";
        document.getElementById("dchoix1").style.visibility = "hidden";
        document.getElementById("dchoix2").style.visibility = "hidden";
    }
})
dchoix2.on('click',function() {
    if (iTexte==32) {
        iTexte++;
        document.getElementById("texte").style.fontStyle = "normal";
        document.getElementById("texte").innerHTML = t[iTexte];
        document.getElementById("deuxChoixB").style.visibility = "hidden";
        document.getElementById("dchoix1").style.visibility = "hidden";
        document.getElementById("dchoix2").style.visibility = "hidden";
    }
})
//Fin choix It 4------------------------2
//Choix It 5------------------------3
tchoix1.on('click',function() {
    if (iTexte==40) {
        iTexte++;
        document.getElementById("texte").innerHTML = t[iTexte];
        document.getElementById("troisChoixB").style.visibility = "hidden";
        document.getElementById("tchoix1").style.visibility = "hidden";
        document.getElementById("tchoix2").style.visibility = "hidden";
        document.getElementById("tchoix3").style.visibility = "hidden";
        iPerso2.attr('src','assets/fille.png');
    }
})
tchoix2.on('click',function() {
    if (iTexte==40) {
        iTexte+=27;
        document.getElementById("texte").innerHTML = t[iTexte];
        document.getElementById("troisChoixB").style.visibility = "hidden";
        document.getElementById("tchoix1").style.visibility = "hidden";
        document.getElementById("tchoix2").style.visibility = "hidden";
        document.getElementById("tchoix3").style.visibility = "hidden";
        iPerso2.attr('src','assets/fille.png');
            }
})
tchoix3.on('click',function() {
    if (iTexte==40) {
        iTexte+=31;
        document.getElementById("texte").innerHTML = t[iTexte];
        document.getElementById("troisChoixB").style.visibility = "hidden";
        document.getElementById("tchoix1").style.visibility = "hidden";
        document.getElementById("tchoix2").style.visibility = "hidden";
        document.getElementById("tchoix3").style.visibility = "hidden";
        iPerso2.attr('src','assets/fille.png');
    }
})
//Fin choix It 5------------------------3
//Choix It 5------------------------3
tchoix1.on('click',function() {
    if (iTexte==150) {
        iTexte = 201;
        document.getElementById("texte").innerHTML = t[iTexte];
        document.getElementById("troisChoixB").style.visibility = "hidden";
        document.getElementById("tchoix1").style.visibility = "hidden";
        document.getElementById("tchoix2").style.visibility = "hidden";
        document.getElementById("tchoix3").style.visibility = "hidden";
    }
})
tchoix2.on('click',function() {
    if (iTexte==150) {
        iTexte++;
        document.getElementById("texte").innerHTML = t[iTexte];
        document.getElementById("troisChoixB").style.visibility = "hidden";
        document.getElementById("tchoix1").style.visibility = "hidden";
        document.getElementById("tchoix2").style.visibility = "hidden";
        document.getElementById("tchoix3").style.visibility = "hidden";
    }
})
tchoix3.on('click',function() {
    if (iTexte==150) {
        iTexte = 260;
        document.getElementById("texte").innerHTML = t[iTexte];
        document.getElementById("troisChoixB").style.visibility = "hidden";
        document.getElementById("tchoix1").style.visibility = "hidden";
        document.getElementById("tchoix2").style.visibility = "hidden";
        document.getElementById("tchoix3").style.visibility = "hidden";
    }
})
//Fin choix It 5------------------------3