let tabphoto = ["#picnourriture1", '#picnourriture2', '#picnourriture3', '#picnourriture4', '#picnourriture5','#picnourriture6','#picnourriture7','#picnourriture8'];
let tabpar   =[".paraphoto1",".paraphoto2",".paraphoto3",".paraphoto4",".paraphoto5",".paraphoto6",".paraphoto7",".paraphoto8"]; 

/* tableaux sur les photos de nourriture en italie*/
let tabphoto1=['photo-nourriture-italie/Tiramisù.jpg','photo-nourriture-italie/margarita.jpg','photo-nourriture-italie/pattechampi.jpg','photo-nourriture-italie/lazagne.jpg','photo-nourriture-italie/pate-carbonara.jpg','photo-nourriture-italie/patebolo.jpg','photo-nourriture-italie/tiramisufraise.jpg','photo-nourriture-italie/pizzatomate.jpg'];
let tabphoto2=['photo-nourriture-italie/pizza-poivrons-tomates.jpg','photo-nourriture-italie/pizza-legumes.jpg','photo-nourriture-italie/pizza-pepperoni.jpg','photo-nourriture-italie/pizza-chorizzos.jpg','photo-nourriture-italie/proscuitto-fromages.jpg','photo-nourriture-italie/pizza-legumes-fromage.jpg','photo-nourriture-italie/pates-pesto.jpg','photo-nourriture-italie/risotto.jpg'];
let tabtext1 = ['Tiramisù.','Pizza margarita.','Pâtes aux champigions.','Lazagnes.','Pâtes aux carbonaras.','Patebolo.','Tiramisù aux fraises.','Pizza à la tomate.'];
let tabtext2 = ['pizza poivrons rouges et tomates.','pizza aux légumes.','pizza pepperoni et oeufs.','pizza aux chorizos.','Pizza au prosciutto et fromages.','Pizza aux légumes et fromages.','Pâtes au pesto.','Risotto aux légumes.'];

/* tableaux sur les photos de paysage en italie*/
let tabphoto3=["photo-paysage-italie/capri.jpg","photo-paysage-italie/florence.jpg","photo-paysage-italie/milan.jpg","photo-paysage-italie/bologne.jpg","photo-paysage-italie/siennes.jpg","photo-paysage-italie/turin.jpg","photo-paysage-italie/venise.jpg","photo-paysage-italie/naples-vesuve.jpg","photo-paysage-italie/sycile.jpg"];
let tabphoto4=['photo-paysage-italie/alberobello.jpg',"photo-paysage-italie/bologne.jpg","photo-paysage-italie/cinque-terres.jpg","photo-paysage-italie/colysé.jpg","photo-paysage-italie/volcan-etna.jpg","photo-paysage-italie/pise.jpg","photo-paysage-italie/region-pouilles.jpg","photo-paysage-italie/romes.jpg"];
let tabtext3=['Ile de capri','Ville de Florence','Ville de Milan','Ville de Bologne','Ville de Siennes','Ville de Turin','Ville de Venise','Naples + volcan le Vésuve','La Sycile'];
let tabtext4=['Ville d\'arberobello','Ville de Bologne','Région des cinques terres','Le colysé de Rome','Le volcan de l\'Etna','Ville de Pise','Région des Pouilles','Ville de Rome'];

/* tableaux sur les photos de nourriture en France*/
let tabphoto5=['photo-nourriture-france/brie.jpg','photo-nourriture-france/fromage-bleu.jpg','photo-nourriture-france/vin-blanc.jpg','photo-nourriture-france/vin-rouge.jpg','photo-nourriture-france/baguette.jpg','photo-nourriture-france/pain-campagne.jpg','photo-nourriture-france/sandwich-crudites.jpg','photo-nourriture-france/sandwich-jambons.jpg'];
let tabphoto6=['photo-nourriture-france/escargot.jpg','photo-nourriture-france/huitres.jpg','photo-nourriture-france/gratin-dauphinois.jpg','photo-nourriture-france/steak-tartare.jpg','photo-nourriture-france/crepes-sirop-d\'erable.jpg','photo-nourriture-france/crepes-natures.jpg','photo-nourriture-france/crepes-fruits-rouges.jpg','photo-nourriture-france/crepes-salees.jpg'];
let tabtext5 = ['fromage : brie','fromage : bleu','Vin blanc','Vin rouge','Baguette','Pain de campagne','Sandwitch aux crudités','Sandwitch jambons,fromages et tomates'];
let tabtext6 = ['Escargots','Huîtres','Gratin d\'auphinois ','Steak tartare','Crêpes au sirop d\'érable','Crêtes natures','Crêpes aux fruits rouges','Crêpes salées'];

/* tableaux sur les photos de paysage en France*/
let tabphoto7=["photo-paysage-france/mont-saint-michel.jpg","photo-paysage-france/nice.jpg","photo-paysage-france/paris.jpg","photo-paysage-france/pyrenees.jpg","photo-paysage-france/saint-malo.jpg","photo-paysage-france/strasbourg.jpg","photo-paysage-france/toulouse.jpg","photo-paysage-france/tour-eiffel.jpg"];
let tabphoto8=["photo-paysage-france/alpes.jpg","photo-paysage-france/amiens.jpg","photo-paysage-france/arc-de-triomphe.jpg","photo-paysage-france/bordeaux.jpg","photo-paysage-france/fort-boyard.jpg","photo-paysage-france/lille.jpg","photo-paysage-france/lyon.jpg","photo-paysage-france/marseille.jpg"];
let tabtext7=['Mont saint michel',"Ville de nice","Ville de Paris","Les pyrénées","Saint-malo","Ville de strasbourg","Ville de Toulouse","La tour Eiffel"];
let tabtext8=["Les Alpes","Ville d'amiens","L'arc de triomphe","Ville de bordeaux","Le fort boyard","Ville de Lille","Ville de Lyon","Ville de Marseille"];

let nombre1=0;


function repartitionphotos(tableau1,tableau2,tableau3,tableau4){
    $('#autrephoto').click(function(){
        nombre1++;
        console.log(nombre1);   
        if((nombre1 % 2)==!0){
            for(k=0;k<=7;k++){
                $(tabphoto[k]).attr('src',tableau1[k]);
                $(tabphoto[k]).removeClass('animate__animated animate__fadeInLeft'); 
                $(tabphoto[k]).addClass('animate__animated animate__fadeInRight'); 
                $(tabpar[k]).text(tableau3[k]);
            }
            $('#autrephoto').text('photos précédentes');
        }

        if((nombre1 % 2)==0){
            for(k=0;k<=7;k++){
                $(tabphoto[k]).attr('src',tableau2[k]);
                $(tabphoto[k]).removeClass('animate__animated animate__fadeInRight'); 
                $(tabphoto[k]).addClass('animate__animated  animate__fadeInLeft'); 
                $(tabpar[k]).text(tableau4[k]);
            }
            $('#autrephoto').text('Autres photos');
        }
    })
}
    

      
function ajoutphoto(){
    if($('#picnourriture1').attr('src') == "photo-nourriture-italie/pizza-poivrons-tomates.jpg"){

        repartitionphotos(tabphoto1,tabphoto2,tabtext1,tabtext2);
        
    }

    if($('#picnourriture1').attr('src') == "photo-nourriture-france/escargot.jpg"){

        repartitionphotos(tabphoto5,tabphoto6,tabtext5,tabtext6);
        
    }

    if($('#picnourriture1').attr('src') == 'photo-paysage-italie/alberobello.jpg'){

        repartitionphotos(tabphoto3,tabphoto4,tabtext3,tabtext4);
        
    }

    if($('#picnourriture1').attr('src') == 'photo-paysage-france/alpes.jpg'){

        repartitionphotos(tabphoto7,tabphoto8,tabtext7,tabtext8);
        
    }
} 


function photoSourisIn(){
    for(let k=0;k<=7;k++){
        $(tabphoto[k]).mouseenter(function(){
            $(this).css('filter','brightness(65%)');
            $(tabpar[k]).css('z-index','1');
        })
    }
}

function photoSourisOut(){
    for(let k=0;k<=7;k++){
        $(tabphoto[k]).mouseleave(function(){
           $(this).css('filter','brightness(100%)');
           $(tabpar[k]).css('z-index','-1');
        })
    }
}


function boutonSourisIn(){
    $('#autrephoto').mouseenter(function(){
        $(this).css('text-decoration','underline');
        $(this).css('cursor','pointer');
    
    })
}

function boutonSourisOut(){
    $('#autrephoto').mouseleave(function(){
        $(this).css('text-decoration','none');
        $(this).css('cursor','auto');
    })
}
      

photoSourisIn();
photoSourisOut();
boutonSourisIn();
boutonSourisOut();
ajoutphoto();


