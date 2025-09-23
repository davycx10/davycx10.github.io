<?php
include('View/commun/header.php');

$page = isset($_GET['page']) ? $_GET['page'] : 'accueil';

// début du body
switch($page){
    case 'accueil':
        include('View/accueil.php');
        break;
        
    case 'BTS SIO':
        include('View/bts_sio.php');
        break;

    case 'Entreprise':
        include('View/entreprise.php');
        break;

    case 'Projets':
        include('View/projets.php');
        break;

    case 'Vieille techno':
        include('View/vieille_techno.php');
        break;

    case 'Contact':
        include('View/contact.php');
        break;



    default:
        include('View/accueil.php');
        break;
}



// fin du body
include('View/commun/footer.php');
?>