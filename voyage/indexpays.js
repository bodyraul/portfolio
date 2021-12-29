
    $(document).ready(function(){
        $('.titre').fadeTo(3000,1,function(){
            $('.p1').fadeTo(3000,1,);
        })
    });

    let couleur1= 'white';
    let couleur2= '#F1F7F9';

   function sourisIn (class1,class2,class3,color1){
        class1.mouseenter(function(){
            class2.fadeTo(300,1);
            class3.fadeTo(300,1);
            class1.animate({'background-color':color1},300);
        })
   }
   
   function sourisOut (class1,class2,class3,color1){
    class1.mouseleave(function(){
        class1.animate({'background-color': color1},300);
        class2.fadeTo(0,0,function(){
            class3.fadeTo(0,0,);
            });
        });
    
    }

    function apparitionbloc(class1,ofset,opacite1){
        class1.waypoint(function(){
            class1.fadeTo(0,opacite1);
        },{offset : ofset});
    }
    
    function apparitionphoto(class1,ofset,opacite1){
        $(class1).waypoint(function(){
            $(class1).addClass('animate__animated animate__zoomIn');
            $(class1).css('opacity',opacite1);
        },{offset:ofset});
    }
   
    function changementDeTexte(class1,text1){
        $(class1).text(text1);
    }

    
    /* fonction qui fait apparaitre les paragraphes et change la couleur au survole de la souris*/
    sourisIn($('#nourritureitalie'),$('#nourritureitalie :nth-child(2)'),$('#nourritureitalie :nth-child(3)'),couleur1);
    sourisIn($('#nourriturefrance'),$('#nourriturefrance :nth-child(2)'),$('#nourriturefrance :nth-child(3)'),couleur1);
    sourisIn($('#voyageitalie'),$('#voyageitalie :nth-child(2)'),$('#voyageitalie :nth-child(3)'),couleur1);
    sourisIn($('#voyagefrance'),$('#voyagefrance :nth-child(2)'),$('#voyagefrance :nth-child(3)'),couleur1);

    /* fonction qui fait disparaitre les paragraphes et change la couleur au survoleout de la souris*/
    sourisOut($('#nourritureitalie'),$('#nourritureitalie :nth-child(2)'),$('#nourritureitalie :nth-child(3)'),couleur2);
    sourisOut($('#nourriturefrance'),$('#nourriturefrance :nth-child(2)'),$('#nourriturefrance :nth-child(3)'),couleur2);
    sourisOut($('#voyageitalie'),$('#voyageitalie :nth-child(2)'),$('#voyageitalie :nth-child(3)'),couleur2);
    sourisOut($('#voyagefrance'),$('#voyagefrance :nth-child(2)'),$('#voyagefrance :nth-child(3)'),couleur2);

    /*fonction qui fait apparaitre petit a petit les blocs en fonction de la position du scroll */
    apparitionbloc($('#italie'),'90%',0.5);
    apparitionbloc($('#italie'),'70%',1);
    apparitionbloc($('#france'),'90%',0.5);
    apparitionbloc($('#france'),'70%',1);
    apparitionbloc($('#nourritureitalie'),'90%',0.5);
    apparitionbloc($('#nourritureitalie'),'70%',1);
    apparitionbloc($('#nourriturefrance'),'90%',0.5);
    apparitionbloc($('#nourriturefrance'),'70%',1);
    apparitionbloc($('#voyageitalie'),'90%',0.5);
    apparitionbloc($('#voyageitalie'),'70%',1);
    apparitionbloc($('#voyagefrance'),'90%',0.5);
    apparitionbloc($('#voyagefrance'),'70%',1);

    /*fonction qui fait apparaitre les photos en fonction de la position du scroll */
    apparitionphoto('#photoitalie','50%','1');
    apparitionphoto('#photofrance','50%','1');
    

    /*fonction qui permet de changer le texte d'un paragraphe */
    changementDeTexte('#introfrance :nth-child(1)','Voyage en France');
    changementDeTexte('#introfrance :nth-child(2)','Si la France vous intrigue par sa diversité culturelle et/ou culinaire, cette partie est faite pour vous.');
    changementDeTexte('#nourriturefrance :nth-child(2)','A base de simples produits frais, la cuisine française est l\'une des plus surprenante d\'Europe, de part son élégance et son gout.');
    changementDeTexte('#voyagefrance :nth-child(2)','  La france est composée de villages authentiques, de montagnes, bords de mer, parcs naturels et bien sur de villes comme Paris qui est l\'une des plus belles du monde. ');
  
   

  

    
        
  

        
   
        
       
    