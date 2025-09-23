<?php
include('View/commun/header.php');

$page = isset($_GET['page']) ? $_GET['page'] : 'accueil';

// début du body
switch($page){
    case 'accueil':
        include('View/accueil.php');
        break;
        
    case 'accueil':
        include('View/accueil.php');
        break;


    default:
        include('View/accueil.php');
        break;
}



// fin du body
include('View/commun/footer.php');
?>