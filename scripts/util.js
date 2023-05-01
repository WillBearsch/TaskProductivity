// Add a new particle system
function addParticleSystem(x, y, minSpeed, maxSpeed, num, template) {
    ps.push(new ParticleSystem(x, y, minSpeed, maxSpeed, num, template));
}

// Substitute properties from a template
function applyTemplate(obj, template) {
    let keys = Object.keys(template);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        obj[key] = template[key];
    }
}

// Emit bullets
function emitBullets(x, y, baseAngle, angles, minSpeed, maxSpeed, template, fromPlayer) {
    for (let i = 0; i < angles.length; i++) {
        let a = baseAngle + angles[i];
        let b = new Bullet(x, y, a, random(minSpeed, maxSpeed), fromPlayer);
        applyTemplate(b, template);
        b.init();
        bullets.push(b);
    }
}

// Loop over an array of entities
function loopOver(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        let e = arr[i];
        e.act();
        if (e.dead) {
            arr.splice(i, 1);
            e.onDeath();
        }
    }
}

// Returns a random integer, using the same arguments as p5.js random()
function randInt() {
    return floor(random(...arguments));
}

// Randomly returns either -1 or 1
function randSign() {
    return random() < 0.5 ? -1 : 1;
}

// Returns a random item from an array using a second array of weights
function randWeight(arr, weight) {
    // Get total weight
    let total = weight.reduce(function(prev, cur) {
        return prev + cur;
    });

    let r = random(total);
    let weightSum = 0;
    for (let i = 0; i < arr.length; i++) {
        weightSum += weight[i];
        if (r <= weightSum) return arr[i];
    }
}

// Show or hide element in html
function show_hide(element) {
    let show = document.getElementById(element);
    if (show.style.visibility === 'hidden') {
        show.style.visibility = 'visible';
    }else{
        show.style.visibility = 'hidden';
    }
}

// Write text in html
function writeMessage(msg, element) {
    let txt = document.getElementById(element);
    txt.innerHTML = msg;
}

// If a button was clicked or not
function buttonClick(element) {
    let check = document.getElementById(element);
    if (check.style.visibility === 'hidden') {
        return true;
    }else{
        return false;
    }
}

function btnClick() {
    return true;
}