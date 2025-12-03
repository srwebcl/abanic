<?php
header('Content-Type: application/json');

// CONFIGURACIÓN
$recaptcha_secret = '6LedayAsAAAAAP0I7Gs4wsMe7NUDdv8zEso94vM9'; // Clave secreta integrada
$to_email = 'contacto@abanic.cl'; // Correo donde llegarán las notificaciones
$from_email = 'no-reply@abanic.cl'; // Correo desde donde se envían (debe ser del dominio)

// Verificar método
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

// Obtener datos JSON
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Datos inválidos']);
    exit;
}

// Verificar reCAPTCHA
$recaptcha_token = $input['token'] ?? '';
if (empty($recaptcha_token)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Falta el token de reCAPTCHA']);
    exit;
}

$verify_url = 'https://www.google.com/recaptcha/api/siteverify';
$data = [
    'secret' => $recaptcha_secret,
    'response' => $recaptcha_token
];

$options = [
    'http' => [
        'header' => "Content-type: application/x-www-form-urlencoded\r\n",
        'method' => 'POST',
        'content' => http_build_query($data)
    ]
];

$context = stream_context_create($options);
$response = file_get_contents($verify_url, false, $context);
$result = json_decode($response);

if (!$result->success || $result->score < 0.5) {
    // Score bajo 0.5 se considera bot o sospechoso
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Verificación de seguridad fallida (reCAPTCHA)']);
    exit;
}

// Sanitizar y preparar datos del correo
$name = filter_var($input['name'] ?? '', FILTER_SANITIZE_STRING);
$email = filter_var($input['email'] ?? '', FILTER_SANITIZE_EMAIL);
$phone = filter_var($input['phone'] ?? '', FILTER_SANITIZE_STRING);
$service = filter_var($input['service'] ?? '', FILTER_SANITIZE_STRING);
$message = filter_var($input['message'] ?? '', FILTER_SANITIZE_STRING);

$subject = "Nuevo Contacto Web: $name ($service)";

$email_content = "Has recibido un nuevo mensaje desde el sitio web:\n\n";
$email_content .= "Nombre: $name\n";
$email_content .= "Email: $email\n";
$email_content .= "Teléfono: $phone\n";
$email_content .= "Servicio de Interés: $service\n";
$email_content .= "Mensaje:\n$message\n";

$headers = "From: $from_email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Enviar correo
if (mail($to_email, $subject, $email_content, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Mensaje enviado correctamente']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Error al enviar el correo']);
}
?>