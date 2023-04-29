<!DOCTYPE html>
<html>
<head>
	<title>My Website</title>
	<link rel="stylesheet" type="text/css" href="games.css">
</head>
<body>
	<nav>
		<div class="logo"><a href="#">My Logo</a></div>
		<ul>
			<li><a href="#">Home</a></li>
			<?php
				// Add dynamic menu items using PHP code
				$menu_items = array("About", "Contact", "Blog");
				foreach ($menu_items as $item) {
					echo "<li><a href='#'>$item</a></li>";
				}
			?>
		</ul>
	</nav>
	<header>
		<h1>Games</h1>
	</header>
	<section id="section1">
		<h2>Leaderboards</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed</p>
	</section>
	<section id="section2">
		<h2>Achievements</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed</p>
	</section>
    <section id="section3">
        <div class="game-container">
          <div class="game-item">
            <div class="image-container">
              <img src="pictures/quiz.png" alt="Quiz">
            </div>
            <a href="quiz.php"><button>Play Quiz</button></a>
          </div>
        </div>
      
        <div class="game-container">
          <div class="game-item">
            <div class="image-container">
              <img src="pictures/tictactoe.png" alt="TicTacToe">
            </div>
            <a href="tictactoe.php"><button>Play TicTacToe</button></a>
          </div>
        </div>
      
        <div class="game-container">
          <div class="game-item">
            <div class="image-container">
              <img src="pictures/quiz.png" alt="Snake">
            </div>
            <a href="snake.php"><button>Play Snake</button></a>
          </div>
        </div>
      </section>



    <section id="section4">
      <div class="image-container">
        <img src="DummyPic/spellingbee.png" alt="Image 1">
      </div>


      <div class="image-container">
        <img src="DummyPic/wordle.png" alt="Image 2">
      </div>
	 

      <div class="image-container">
        <img src="DummyPic/letterboxed.png" alt="Image 3">
      </div>


	</section>
    <section id="section5">
      <div class="image-container">
        <img src="DummyPic/tiles.png" alt="Image 4">
      </div>
      <div class="image-container">
        <img src="DummyPic/vortex.png" alt="Image 5">
      </div>
      <div class="image-container">
        <img src="DummyPic/sudoku.png" alt="Image 6">
        </div>
	</section>
    <section id="section6">
		<h2>Section 6</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed</p>
	</section>






	<footer>
		<p>&copy; 2023 My Website</p>
	</footer>
</body>
</html>