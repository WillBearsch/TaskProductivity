// Config
const BOSS_GRACE_PERIOD = 120;
const BOSS_SPAWN_DELAY = 120;
const INVULN_TIME = 20;
let   MAP_HEIGHT = 700;
const MODEL_LINE_ALPHA = 127;
const NUM_STARS = 300;
const PLAYER_FIRE_RATE = 8;
const PLAYER_HP = 20;
const PLAYER_RADIUS = 3;
const PLAYER_SPEED = 4;
const SPAWN_GRACE_PERIOD = 60;
const STARFIELD_LERP = 0.2;
const STARFIELD_SPEED = 10;
const WORLD_CEILING = -50;

// Background
let starfield;

// Cooldowns
let bossTime;
let flashTime;
let slowTime;
let spawnTime;

// Debug mode
let blackStarfield = false;
let showHitboxes = false;
let showStars = true;

// Entities
let boss;
let bullets;
let pl;
let ps;
let walls;
let items;
let inv;

// Game state
let curLevel;
let level;
let levelScore;
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

// Spawn a boss
function spawnBoss() {
    if (curLevel.boss) {
        boss = new Boss(width/2, WORLD_CEILING);
        applyTemplate(boss, BOSS[curLevel.boss]);
        boss.init();
    } else {
        start();
    }
}

function spawnItem(x, y) {
    if (typeof x === 'undefined' || typeof y === 'undefined') {
        x = random(width);
        y = WORLD_CEILING;
    }
    let type = randWeight(curLevel.item, curLevel.itemWeight);
    items.push(new Item(x, y, ITEM[type]));
}

// Spawn the player at the correct coords
function spawnPlayer() {
    pl = new Player(width/2, MAP_HEIGHT * 3/4);
    pl.init();
}

// Start the game
function start() {
    level = Math.floor(Math.random()*LEVEL.length);
    curLevel = LEVEL[level];
    clearEntities();
    spawnPlayer();
    toSpawnBoss=true;
    inv = new Inventory();
    inv.addItem('test', 'this is a test');
    inv.display();
}

/* Main p5.js functions */

function setup() {
    // Ensure game can fit vertically inside screen
    let maxSize = MAP_HEIGHT + 2;
    let h = windowHeight > maxSize ? maxSize : windowHeight;
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

    // Spawn enemies or boss
    if (!paused && spawnTime === 0) {
        toSpawnBoss = true;
    }

    // Update and draw all entities
    loopOver(items);
    loopOver(bullets);
    if (boss) boss.act();
    pl.act();
    loopOver(walls);
    loopOver(ps);

    // Update all cooldowns
    cooldown();

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
    // Toggle hitbox display
    if (key === 'H') showHitboxes = !showHitboxes;

    // Pause
    if (key === 'P') paused = !paused;
}
