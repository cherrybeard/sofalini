<?
	if (count($_POST)!=0) {
		$msg = 'Новая заявка с лендинга Sofalini #1<br>';
		if (isset($_POST['phone'])) {
			$msg .= 'Телефон: '.$_POST['phone'].'<br>';
		}
		if (isset($_POST['email'])) {
			$msg .= 'E-mail: '.$_POST['email'].'<br>';
		}
		if (isset($_POST['message'])) {
			$msg .= 'Хочу: '.$_POST['message'].'<br>';
		}
		$title = 'Заявка с лендинга Sofalini #1';
		if (!empty($_POST['msg'])) $msg .= '<br>'.$_POST['msg'];
    $to = 'stephen.gusev@gmail.com';
		$header = 'MIME-Version: 1.0' . "\n" .
			'Content-type: text/html; charset=UTF-8'. "\n" .
			'From: ColorEvent <' . $to . ">\n";
    $toCc = 'palan17teer@gmail.com';
		$headerCc = 'MIME-Version: 1.0' . "\n" .
			'Content-type: text/html; charset=UTF-8'. "\n" .
			'From: ColorEvent <' . $toCc . ">\n";
    if (mail($to, $title, $msg, $header) && mail($toCc, $title, $msg, $headerCc))
    	die('1');
	}
	if (count($_POST)!=0) die('0');
?>
