<?php

if (isset($_POST['submit']) ){
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $password = $_POST['password'];
    $address = $_POST['address'];
    $country = $_POST['country'];
    $zipcode = $_POST['zipcode'];
    $email = $_POST['email'];
    $about = $_POST['about'];
    $sex = $_POST['radio'];
    $language = "";
    if(!empty($_POST['lang'])) {
//        foreach($_POST['lang'] as $value){
//            $language .= $value.', ';
//        }
        foreach($_POST['lang'] as $key => $value) {
            $language .= "$value";
            if (next($_POST['lang'])==true){
                $language .= ", ";
            }

        }
    }

    if (empty($name)) {
        $name = "Not Provided";
    }
    if (empty($surname)) {
        $surname = "Not Provided";
    }
    if (empty($password)) {
        $password = "Not Provided";
    }
    if (empty($address)) {
        $address = "Not Provided";
    }
    if (empty($country)) {
        $country = "Not Provided";
    }
    if (empty($zipcode)) {
        $zipcode = "Not Provided";
    }
    if (empty($email)) {
        $email = "Not Provided";
    }
    if (strlen(trim($about)) == 0) {
        $about = "Not Provided";
    }
}

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Activity 5 Preview</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
    <h1>Preview</h1>

    <p><b>Name:</b> <?php echo $name; ?></p>
    <p><b>Surname:</b> <?php echo $surname; ?></p>
    <p><b>Password:</b> <?php echo $password; ?></p>
    <p><b>Address:</b> <?php echo $address; ?></p>
    <p><b>Country:</b> <?php echo $country; ?></p>
    <p><b>ZIP Code:</b> <?php echo $zipcode; ?></p>
    <p><b>Email:</b> <?php echo $email; ?></p>
    <p><b>Sex:</b> <?php echo $sex; ?></p>
    <p><b>Language:</b> <?php echo $language; ?></p>
    <p><b>About:</b> <?php echo $about; ?></p>


</body>
</html>
