<?php
// Archivo donde se guardarán los datos
$archivo = 'admin/registros_cursos.csv';

// Obtener datos del POST
$nombre = htmlspecialchars($_POST["name"] ?? '');
$correo = htmlspecialchars($_POST["email"] ?? '');
$profesion = htmlspecialchars($_POST["profesion"] ?? '');
$telefono = 'Tel: '.htmlspecialchars($_POST["phone"] ?? '');
$fecha = htmlspecialchars($_POST["fecha"] ?? '');
$mensaje = htmlspecialchars($_POST["textarea"] ?? '');
$fechaEnvio = date('Y-m-d H:i:s');

// Armar la línea en formato CSV
$linea = [$fechaEnvio, $nombre, $correo, $profesion, $telefono, $fecha, $mensaje];

// Guardar en el archivo (modo append)
$fp = fopen($archivo, 'a');
if ($fp) {
    fputcsv($fp, $linea,';');
    fclose($fp);
    echo 'ok';
} else {
    echo 'error';
}
?>
