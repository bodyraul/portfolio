
<!DOCTYPE html>
<html lang="en">
<head>
    <link type="text/css" rel="stylesheet" href="pays.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<div class="hautdepage">
    <video muted="" autoplay="autoplay" loop="infinite" src="plage.m4v"></video>
    <h1 class="titre">
    Voyage au bout de la Terre
    </h1>
    <p class="p1" >
      Pour ceux qui aiment voyager tout en restant chez eux, ce site est fait pour vous.
    </p>
  </div>
<?php
  $cliqueNourriture = "photosNourritureItalie.php";
  $intropays = 'introitalie';
  $voyagepays = 'voyageitalie';
  $paysnourriture = 'nourritureitalie'; 
  $drapeaupays = 'photoitalie';
  $pays = 'italie';
  $photo = "photo-nourriture-italie/fontaine-trevi.jpg";
  $cliquevoyage = "photosVoyageItalie.php";
  require "templatepays.php";
?>

<?php
  $cliqueNourriture = "photosNourritureFrance.php";
  $intropays = 'introfrance';
  $voyagepays = 'voyagefrance';
  $paysnourriture = 'nourriturefrance'; 
  $drapeaupays = 'photofrance';
  $pays = 'france';
  $photo = "photo-nourriture-italie/tour-eiffel.jpg";
  $cliquevoyage = "photosVoyageFrance.php";
  require "templatepays.php";
?>
 
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="//cdn.jsdelivr.net/jquery.color-animation/1/mainfile"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.js"></script>
  <script type="text/javascript" src="indexpays.js"></script>
</body>
</html>