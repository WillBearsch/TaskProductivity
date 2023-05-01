// Config
const BOSS_GRACE_PERIOD = 120;
const BOSS_SPAWN_DELAY = 120;
const INVULN_TIME = 20;
let   MAP_HEIGHT = 760;
const MODEL_LINE_ALPHA = 127;
const NUM_STARS = 300;
const PLAYER_FIRE_RATE = 8;
const PLAYER_HP = 2;
const PLAYER_RADIUS = 3;
const PLAYER_SPEED = 4;
const STARFIELD_LERP = 0.2;
const STARFIELD_SPEED = 10;
const UI_PANEL_HEIGHT = 60;
const WORLD_CEILING = -50;

// Background
let starfield;

// Cooldowns
let bossTime;
let flashTime;

// Entities
let boss;
let bullets;
let pl;
let ps;
let walls;
let items;
let inv = new Inventory();
let item_list = ['dualFire', 'tripleFire'];
let item_weight = [ITEM['dualFire'].weight, ITEM['tripleFire'].weight];
let boss_list = ['boss_bounce', 'boss_bomb', 'boss_s'];

// Game state
let curLevel;
let paused = false;
let toSpawn;
let toSpawnBoss;


// Display a health bar for a boss
function bossHealthBar() {
    let h = boss.hp / boss.maxHp;
    if (h === 0) return;

    let c = color(215, 60, 44, 191);
    fill(c);
    noStroke();
    rectMode(CENTER);
    rect(width/2 - 0.5, 10, h * (width - 200), 10);
}

// Draw heart
function drawHeart(x, y, empty) {
    fill(empty ? 0 : '#D73C2C');
    stroke(0, MODEL_LINE_ALPHA);
    rectMode(CORNER);
    rect(x, y, 20, 20);
}

// Draw player health
function uiHealth() {
    let empty = pl.maxHp - (pl.hp - 1);
    for (let i = pl.maxHp; i >= 0; i--) {
        drawHeart(20 + 30*i, height - UI_PANEL_HEIGHT + 20, --empty > 0);
    }
}

// Draw the UI panel
function uiPanel() {
    // Draw grey rectangle
    fill(48);
    stroke(241, 196, 15);
    rectMode(CORNER);
    rect(0, height - UI_PANEL_HEIGHT, width, UI_PANEL_HEIGHT);

    // Draw all UI panel elements
    strokeWeight(2);
    uiHealth();
    strokeWeight(1);
}

// Clear all entities (except player)
function clearEntities() {
    boss = null;
    bullets = [];
    items = [];
    ps = [];
    walls = [];
}

// Update all cooldowns
function cooldown() {
    if (!paused) {
        if (bossTime > 0) {
            bossTime -= dt();
            if (bossTime <= 0) spawnBoss();
        }

        if (toSpawnBoss) {
            toSpawnBoss = false;
            bossTime = BOSS_SPAWN_DELAY;
        }
    }
}

// Return current dt
function dt() {
    if (paused) {
        return 0;
    } 
    return 1;
}

// Return to the game page once the user claims the reward
document.getElementById("claim_reward").addEventListener("click", function() {
    window.location.href = "Games.html";
});

// Spawn a boss
function spawnBoss() {
    boss = new Boss(width/2, WORLD_CEILING);
    let type = boss_list[Math.floor(Math.random()*boss_list.length)];
    applyTemplate(boss, BOSS[type]);
    boss.init();
}

// Spawn an item
function spawnItem(x, y) {
    if (typeof x === 'undefined' || typeof y === 'undefined') {
        x = random(width);
        y = WORLD_CEILING;
    }
    let type = randWeight(item_list, item_weight);
    items.push(new Item(x, y, ITEM[type]));
}

// Spawn the player at the correct coords
function spawnPlayer() {
    pl = new Player(width/2, MAP_HEIGHT * 3/4);
    pl.init();
}

// Start the game
function start() {
    curLevel = LEVEL[0];
    clearEntities();
    spawnPlayer();
    toSpawnBoss = true;
}

/* Main p5.js functions */
function setup() {
    // Ensure game can fit vertically inside screen
    let maxSize = MAP_HEIGHT + 2;
    let h = windowHeight > maxSize ? maxSize : windowHeight;
    MAP_HEIGHT = h - UI_PANEL_HEIGHT - 2;
    let c = createCanvas(600, h - 2);
    c.parent('game');

    // Configure p5.js
    angleMode(DEGREES);
    ellipseMode(RADIUS);

    // Start background starfield
    starfield = new Starfield(NUM_STARS, STARFIELD_SPEED);

    // Begin level
    start();
}

function draw() {
    // Draw the background and starfield
    flashTime > 0 ? background(255) : background(starfield.bg);
    starfield.display();

    // Update and draw all entities
    loopOver(items);
    loopOver(bullets);
    if (boss) boss.act();
    pl.act();
    loopOver(walls);
    loopOver(ps);

    // Update all cooldowns
    cooldown();

    // Draw UI panel
    uiPanel();

    // Draw boss health bar
    if (boss) bossHealthBar();

    // Check for boss death
    if (boss && boss.dead) {
        boss.onDeath();
        boss = null;
    }

    // Check for player death
    if (pl.dead) pl.onDeath();
}

function keyPressed() {
    // Pause
    if (key === 'P') paused = !paused;
}
