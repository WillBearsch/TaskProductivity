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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="index.css">
    <title>User Dashboard</title>
</head>
<body>
  <!--Navigation Bar-->
  <nav>
			<div class="logo"><a href="#">My Logo</a></div>
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">Tasks</a></li>
				<li><a href="games.php">Games</a></li>
				
			</ul>
		</nav>

		<header>
			<h1>Welcome to my webpage</h1>
		  </header>
		  
		  <section>
			<h2>Intro</h2>
			<p>This is the first section of my webpage.</p>
		  </section>
		  
		  <section>
			<h2>Productivity Tips</h2>
			<p>This is the second section of my webpage.</p>
		  </section>
		  
		  <section>
			<h2>Remainders</h2>
			<p>This is the third section of my webpage.</p>
		  </section>
		  
		  <section>
			<h2>Qoutes</h2>
			<p>This is the fourth section of my webpage.</p>
		  </section>
		  
		  <footer>
			<p>&copy; 2023 My Company, Inc.</p>
		  </footer>


    <div class="container">
        <h1>Welcome to Dashboard</h1>
        <a href="logout.php" class="btn btn-warning">Logout</a>
   </div>
</body>
</html>