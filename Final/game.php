<?php
  echo '<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Game</title>
    <link href="style.css" rel="stylesheet">

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
    <script src="scripts/inventory/inventory.js" defer></script>
    <script src="scripts/main.js" defer></script>

    <style>
      #game {
        float: left;
        width: 40%;
      }

      #instructions {
        float: left;
        width: 40%;
        margin-left:280px;
      }
    </style>
  </head>
  <body id="game_page">
    <div id="game"></div>
    <div id="instructions">
      <h2>Instructions</h2>
      <p>Use the arrow keys to move.</p>
      <p>Press space to fire.</p>
    </div>
  </body>
  </html>';
?>