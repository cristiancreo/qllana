<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST["name"] ?? '');
    $correo = htmlspecialchars($_POST["email"] ?? '');
    $telefono = htmlspecialchars($_POST["phone"] ?? '');
    $fecha = htmlspecialchars($_POST["fecha"] ?? '');
    $mensaje = htmlspecialchars($_POST["textarea"] ?? '');

    $destinatario = "cristian_creo@hotmail.com"; // Cambialo por tu dirección real
    $asunto = "Nuevo registro al curso desde la web";

    $cuerpo = "Nombre: $nombre\n";
    $cuerpo .= "Correo: $correo\n";
    $cuerpo .= "Teléfono: $telefono\n";
    $cuerpo .= "Fecha seleccionada: $fecha\n";
    $cuerpo .= "Mensaje:\n$mensaje\n";

    $headers = "From: $correo";

    if (mail($destinatario, $asunto, $cuerpo, $headers)) {
        echo "ok";
    } else {
        echo "error";
    }
} else {
    http_response_code(403);
    echo "Método no permitido";
}
?>
