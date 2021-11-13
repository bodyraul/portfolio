let para = [$("#p1"),$("#p2"),$("#p3"),$("#p4"),$("#p5"),$("#p6"),$("#p7"),$("#p8")];
let cer = [$("#para1"),$("#para2"),$("#para3"),$("#para4"),$("#para5"),$("#para6"),$("#para7"),$("#para8")]
let nbtourvenus =1;let nbtourmercure =1;let nbtourterre =1;let nbtourmars =1;
let nbtourjupiter =1;let nbtoursaturne =1;let nbtoururanus =1;let nbtourneptune =1;


function cercles(){
      for(let k=0;k<8;k++){
            para[k].mouseenter(function(){
                  cer[k].css("opacity","1");
                    
            });
                  
             para[k].mouseleave(function(){
                  cer[k].css("opacity","0.2");
                    
            }); 
      }
}

function tourmercure(){
      $("#p1>strong").text(nbtourmercure);
      nbtourmercure++;
}
function tourvenus(){
      $("#p2>strong").text(nbtourvenus);
      nbtourvenus++;
}
function tourterre(){
      $("#p3>strong").text(nbtourterre);
      nbtourterre++;
}
function tourmars(){
      $("#p4>strong").text(nbtourmars);
      nbtourmars++;
}
function tourjupiter(){
      $("#p5>strong").text(nbtourjupiter);
      nbtourjupiter++;
}
function toursaturne(){
      $("#p6>strong").text(nbtoursaturne);
      nbtoursaturne++;
}
function toururanus(){
      $("#p7>strong").text(nbtoururanus);
      nbtoururanus++;
}
function tourneptune(){
      $("#p8>strong").text(nbtourneptune);
      nbtourneptune++;
}
  
setInterval(tourmercure,2000); 
setInterval(tourvenus,4500);
setInterval(tourterre,8280);
setInterval(tourmars,15600);
setInterval(tourjupiter,98280);
setInterval(toursaturne,243000);
setInterval(toururanus,692000);
setInterval(tourneptune,1300000);
cercles();      
      

 
