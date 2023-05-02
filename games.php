
<!DOCTYPE html>
<html>
<head>
	<title>My Website</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
	<link rel="stylesheet" type="text/css" href="games.css">
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
     <li><a href="index.php"><i class="fas fa-qrcode"></i>Home</a></li>
     <li><a href="http://localhost:3000/"><i class="fas fa-link"></i>Tasks</a></li>
     <li><a href="games.php"><i class="fas fa-stream"></i>Games</a></li>
     <a href="logout.php" class="link-with-icon"><i class="fas fa-sign-out-alt"></i> Logout</a>
    </ul>
   </div>



   <section id="section2">
    <h2>Welcome to our games page! Complete your tasks and earn tokens to play our fun games.
 The more tasks you complete, the more tokens you earn. Use your tokens wisely to maximize your fun!</h2>
</section>



    <section id="section3">
        <div class="game-container">
          <div class="game-item">
            <div class="image-container">
              <img src="DummyPic/quiz.png" alt="Quiz">
            </div>
            <h5>Are you a trivia whiz? Test your knowledge with our Quiz Game</h5>
            <a href="quiz.php"><button id="button1" style="
            margin-top: 10px; padding: 10px 20px; font-size: 18px; background-color: #1e2749; color: #fff; border: none; border-radius: 5px; cursor: pointer; display: inline-block;">Play Quiz</button></a>
            
      

          </div>
        </div>
      
        <div class="game-container">
          <div class="game-item">
            <div class="image-container">
              <img src="pictures/tictactoe.png" alt="TicTacToe">
            </div>
            <h5>Xs and Os, here we go! Tic Tac Toe time!</h5>
            <a href="tictactoe.php"><button id="button1" style="
            margin-top: 10px; padding: 10px 20px; font-size: 18px; background-color: #1e2749; color: #fff; border: none; border-radius: 5px; cursor: pointer; display: inline-block;">Play TicTacToe</button></a>
       
          </div>
        </div>
      
        <div class="game-container">
          <div class="game-item">
            <div class="image-container">
              <img src="pictures/quiz.png" alt="Snake">
            </div>
            <h5>Are you fast enough to dodge the bullets in Bullet Hall?</h5>
            <a href="bulletHell.php"><button   id="button1" style="
            margin-top: 10px; padding: 10px 20px; font-size: 18px; background-color: #1e2749; color: #fff; border: none; border-radius: 5px; cursor: pointer; display: inline-block;">Play Snake</button></a>
          <a href="bulletHell_tutorial.php">
            <button id="tutorial-btn" style="background-color: blue; font-size: 12px;">Tutorial</button>
          </a>
          </div>
        </div>
      </section>



    <section id="section4">
    <div class="game-container">
          <div class="game-item">
            <div class="image-container">
              <img src="DummyPic/spellingbee.png" alt="Snake">
            </div>
            <h6>Challenge your brain and spell your way to victory with the Spelling Bee!</h5>
            <a href="snake.php"><button  id="button1" style="
            margin-top: 10px; padding: 10px 20px; font-size: 18px; background-color: #e4d9ff; color: #30343f; border: none; border-radius: 5px; cursor: pointer; display: inline-block;">Play Spelling Bee</button></a>
        
          </div>
        </div>

        <div class="game-container">
          <div class="game-item">
            <div class="image-container">
              <img src="DummyPic/wordle.png" alt="Snake">
            </div>
            <h6>Get ready to flex those vocabulary muscles with Wordle!</h5>
            <a href="DummyPic/wordle.png"><button  id="button1" style="
            margin-top: 10px; padding: 10px 20px; font-size: 18px; background-color: #e4d9ff; color: #30343f; border: none; border-radius: 5px; cursor: pointer; display: inline-block;">Play Wordle</button></a>
         
          </div>
        </div>


        <div class="game-container">
          <div class="game-item">
            <div class="image-container">
              <img src="DummyPic/letterboxed.png" alt="Snake">
            </div>
            <h6>Unleash your inner wordsmith and conquer this letter-filled adventure!</h5>
            <a href="snake.php"><button  id="button1" style="
            margin-top: 10px; padding: 10px 20px; font-size: 18px; background-color: #e4d9ff; color: #30343f; border: none; border-radius: 5px; cursor: pointer; display: inline-block;">Play Letterboxed</button></a>
            
          </div>
        </div>
      
    

      


	</section>
    <section id="section5">
      
    <div class="game-container">
          <div class="game-item">
            <div class="image-container">
              <img src="DummyPic/tiles.png" alt="Snake">
            </div>
            <h5>Think you're good at tile games? Prove it</h5>
            <a href="snake.php"><button  id="button1" style="
            margin-top: 10px; padding: 10px 20px; font-size: 18px; background-color: #1e2749; color: #fff; border: none; border-radius: 5px; cursor: pointer; display: inline-block;">Play Tiles</button></a>
           
          </div>
        </div>

        <div class="game-container">
          <div class="game-item">
            <div class="image-container">
              <img src="DummyPic/vortex.png" alt="Snake">
            </div>
            <h5>Get sucked into the fun with Vortex</h5>
            <a href="DummyPic/wordle.png"><button  id="button1" style="
            margin-top: 10px; padding: 10px 20px; font-size: 18px; background-color: #1e2749; color: #fff; border: none; border-radius: 5px; cursor: pointer; display: inline-block;">Play Vortex</button></a>
        
           
          </div>
        </div>


        <div class="game-container">
          <div class="game-item">
            <div class="image-container">
              <img src="DummyPic/sudoku.png" alt="Snake">
            </div>
            <h5>Not just for grandmas anymore </h5>
            <a href="snake.php"><button  id="button1" style="
            margin-top: 10px; padding: 10px 20px; font-size: 18px; background-color: #1e2749; color: #fff; border: none; border-radius: 5px; cursor: pointer; display: inline-block;">Play Sudoku</button></a>
          
          </div>
        </div>
      






</body>
</html>