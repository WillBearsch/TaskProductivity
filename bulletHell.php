<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Game</title>
  <link href="bulletHell_style.css" rel="stylesheet">

  <script src="scripts/lib/p5.min.js" defer></script>
  <script src="scripts/util.js" defer></script>
  <script src="scripts/template/models.js" defer></script>
  <script src="scripts/template/bosses.js" defer></script>
  <script src="scripts/template/bullets.js" defer></script>
  <script src="scripts/template/items.js" defer></script>
  <script src="scripts/template/levels.js" defer></script>
  <script src="scripts/template/particles.js" defer></script>
  <script src="scripts/template/weapons.js" defer></script>
  <script src="scripts/class/entity.js" defer></script>
  <script src="scripts/class/bullet.js" defer></script>
  <script src="scripts/class/emitter.js" defer></script>
  <script src="scripts/class/item.js" defer></script>
  <script src="scripts/class/particle.js" defer></script>
  <script src="scripts/class/particle_system.js" defer></script>
  <script src="scripts/class/ship.js" defer></script>
  <script src="scripts/class/boss.js" defer></script>
  <script src="scripts/class/player.js" defer></script>
  <script src="scripts/class/starfield.js" defer></script>
  <script src="scripts/class/wall.js" defer></script>
  <script src="scripts/class/inventory.js" defer></script>
  <script src="scripts/main.js" defer></script>
</head>
<body id="game_page">
  <div id="game"></div>
  <button id="tutorial_close" 
          type="button" 
          onclick="document.getElementById('tutorial').style.visibility='hidden';
                   getElementById('tutorial_close').style.visibility='hidden'"
          style="float: right; visibility: hidden">X</button>
  <div id="tutorial" style="visibility: hidden"></div>
  <button id="claim_reward"
          type="button"
          style="visibility: hidden">Claim reward</button>
  <div id="reward" style="visibility: hidden"></div>
  <img id="reward_image" src="assets/Chest.png" alt="Chest.png" style="visibility: hidden">
</body>
</html>