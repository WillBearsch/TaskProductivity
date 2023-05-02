<?php
session_start();
if (!isset($_SESSION["user"])) {
   header("Location: login.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="dex.css">
    <title>User Dashboard</title>
</head>
<body>
<input type="checkbox" id="check">
    <label for="check">
      <i class="fas fa-bars" id="btn"></i>
      <i class="fas fa-times" id="cancel"></i>
    </label>
    <div class="sidebar">
    <header>My App</header>
    <ul>
     <li><a href="index.php"><i class="fas fa-qrcode"></i>Dashboard</a></li>
     <li><a href="http://localhost:3000/"><i class="fas fa-link"></i>Tasks</a></li>
     <li><a href="games.php"><i class="fas fa-stream"></i>Games</a></li>
     <a href="logout.php" class="link-with-icon"><i class="fas fa-sign-out-alt"></i> Logout</a>
    </ul>
   </div>

   
   <div id="my-component"></div>
   <script src="path/to/react.js"></script>
   <script src="path/to/react-dom.js"></script>
   <script src="path/to/my-component.js"></script>
   <script>
     ReactDOM.render(
       React.createElement(MyComponent),
       document.getElementById('my-component')
     );
   </script>
   
</body>
</html>