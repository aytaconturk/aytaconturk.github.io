<?php


?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Activity 5 PHP</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
    <h1>Registration Form</h1>
    <form action="Activity5-preview.php" method="POST">
        <div class="form-group">
            <label for="name">Name:</label>
            <input name="name" id="name" type="text">
        </div>
        <div class="form-group">
            <label for="">Username:</label>
            <input name="surname" type="text" autocomplete="off">
        </div>
        <div class="form-group">
            <label for="">Password:</label>
            <input name="password" type="password" autocomplete="off">
        </div>
        <div class="form-group">
            <label for="">Address:</label>
            <input name="address" type="text">
        </div>
        <div class="form-group">
            <label for="">Country:</label>
            <select name="country" id="">
                <option value="" selected>Please select a country</option>
                <option value="">Turkey</option>
                <option value="">Germany</option>
                <option value="">United States</option>
            </select>
        </div>
        <div class="form-group">
            <label for="">ZIP Code:</label>
            <input name="zipcode" type="number">
        </div>
        <div class="form-group">
            <label for="">Email:</label>
            <input name="email" type="email">
        </div>
        <div class="form-group">
            <label for="">Sex:</label>
            <label class="radio">
                <input type="radio" name="radio" value="Male" checked>Male
            </label>
            <label class="radio">
                <input type="radio" name="radio" value="Female">Female
            </label>
        </div>
        <div class="form-group">
            <label for="">Language:</label>
            <div class="input-group">
                <label for="">English:
                    <input name="lang[]" type="checkbox" checked value="English">
                </label>
            </div>
            <div class="input-group">
                <label for="">French:</label>
                <input name="lang[]" type="checkbox" value="French">
            </div>
            <div class="input-group">
                <label for="">Germany:</label>
                <input name="lang[]" type="checkbox" value="Germany">
            </div>
        </div>
        <div class="form-group">
            <label for="">About:</label>
            <textarea name="about">
            </textarea>
        </div>

        <div class="submit">
            <button name="submit" type="submit">Submit</button>
        </div>
    </form>
</div>


</body>
</html>
