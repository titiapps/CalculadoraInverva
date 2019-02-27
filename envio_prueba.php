<?php

include "./mailjet-apiv3-php-simple/src/Mailjet/php-mailjet-v3-simple.class.php";

$apiKey = '1b373d6ba45810a586fff68abf1d8444';
$secretKey = '1c7fc41493b3b32294278c065e515382';

$mj = new Mailjet($apiKey, $secretKey);
/*  if (isset($_POST['pdf'])) {
echo ($_POST["pdf"]);
}  */

if (isset($_POST['para']) && !empty($_POST["para"])) {

    $array_envios = array();
    $pdf = $_POST['pdf'];

    array_push($array_envios, ["Email" => "rodrigoh00per@hotmail.com", "Name" => "Email Inverva"]);

    $array_envios_fin = json_encode($array_envios);

    $destinarios = array();

    array_push($destinarios, ["FromEmail" => "rodrigo.guerrero@titi-apps.com",
        "FromName" => "Invervá Calculo",
        "Subject" => "Estimacion desde la Calculadora Invervá ",
        "Text-part" => "Hola te enviamos los Resultados de la Estimación que solicitaste en nuestra pagina Web ",
        "Recipients" => [["Email" => $_POST['para'], "Name" => "Email Cliente"]],
        'Attachments' => [
            [
                'Content-type' => "application/pdf",
                'Filename' => "test.pdf",
                'Content' => $_POST['pdf'],
            ]]]);

    array_push($destinarios, ["FromEmail" => "rodrigo.guerrero@titi-apps.com",
        "FromName" => "Invervá Calculo",
        "Subject" => "Estimacion desde la Calculadora Invervá ",
        "Text-part" => "Esta es la estimación de la Persona: " . $_POST['persona'] . "\n  Correo electronico: " . $_POST['para'] . "\n Numero de telefono: " . $_POST['telefono'],
        "Recipients" => [["Email" => "jose.moreno@inverva.mx", "Name" => "Email Inverva"]],
        'Attachments' => [
            [
                'Content-type' => "application/pdf",
                'Filename' => "Inverva.pdf",
                'Content' => $_POST['pdf'],
            ]]]);

    array_push($destinarios, ["FromEmail" => "rodrigo.guerrero@titi-apps.com",
        "FromName" => "Invervá Calculo",
        "Subject" => "Estimacion desde la Calculadora Invervá ",
        "Text-part" => "Esta es la estimación de la Persona: " . $_POST['persona'] . "\n  Correo electronico: " . $_POST['para'] . "\n Numero de telefono: " . $_POST['telefono'],
        "Recipients" => [["Email" => "servando.escamilla@inverva.mx", "Name" => "Email Inverva"]],
        'Attachments' => [
            [
                'Content-type' => "application/pdf",
                'Filename' => "Inverva.pdf",
                'Content' => $_POST['pdf'],
            ]]]);

    $destinarios_fin = json_encode($destinarios);

    $params = array(
        "method" => "POST",
        "Messages" => json_decode($destinarios_fin),

    );
    echo ("TODO BIEN");

    $result = $mj->send($params);
    var_dump($result);

    echo ($mj->_response_code);
} else {
    echo ("Hubo un problema al recibir para recibir la data");
}
