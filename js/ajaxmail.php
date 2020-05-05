<?php
	$emisor = $_POST['emisor'];
	$destinatario = $_POST['destinatario'];
	$mensaje = $_POST['mensaje'];

	//Estoy recibiendo el formulario, compongo el cuerpo
	$cuerpo = "///////// Un mensaje de la web //////////// \n";
	$cuerpo .= "Nombre: " . $emisor . ", te envia este mensaje.\n";
	$cuerpo .= "Mail: " . $destinatario . "\n";
	$cuerpo = $cuerpo.$mensaje;
  $headers = "De: ".$email;
	//mando el correo...
	mail("rnxo@xinopsis.com", "Mensaje de la web", $cuerpo, $headers);
	//doy las gracias por el envio
	echo "<div style=\"background-color:#fff;color:#7300e1;padding:10px 6px;text-align:center;font-family:'Poppins',sans-serif;\">Gracias por contactarse con nosotros. Pronto responderemos al mail indicado.</div>";

?>
