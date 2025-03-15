<?php 

$cotaValue = $_POST['cota'];

switch($cotaValue[0]){

    case 'cota50':
      header('Location:https://mpago.la/2jRkrVM');
        break;
    case 'cota100':

        header('Location:  https://mpago.la/1aNvzw7');
        break;
    case 'cota150':
        header('Location:  https://mpago.la/1o9UbYP');
        break;
    case 'cota200':

        header('Location: https://mpago.la/32vyF6S');
        break;
    case 'outro':

        header('Location:http://link.mercadopago.com.br/nnovoconceito');
        break;
};





?>