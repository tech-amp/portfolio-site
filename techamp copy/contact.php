<?php
    
    if( isset($_POST['name']) && isset($_POST['email']) && isset($_POST['msg']) ){
        
        $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
        $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
        $subj = filter_var($_POST["subj"], FILTER_SANITIZE_STRING);
        $msg = filter_var($_POST["msg"], FILTER_SANITIZE_STRING);
        $to = "durvalbatista@yahoo.com.br";	 // Tape Your Email Here 
        $from = $email;
        $subject = 'Contact Form from website'; // Tape Title Of Message Here
        $message = '<b>Name:</b> '.$name.' <br><b>Email:</b> '.$email.' <br><b>Subject:</b> '.$subj.' <p>'.$msg.'</p>';
        $headers = "From: $from\n";
        $headers .= "MIME-Version: 1.0\n";
        $headers .= "Content-type: text/html; charset=iso-8859-1\n";
        
        if( mail($to, $subject, $message, $headers) ){
            
            echo "success";
            
        } else {
            
            echo "The server failed to send the message. Please try again later.";
            
        }
    }

?>