const MODEL = {};
MODEL.bullet = {};
MODEL.item = {};
MODEL.particle = {};
MODEL.inventory = {};
MODEL.ship = {};

// Bullet models
MODEL.bullet.basic = function() {
    fill(this.color);
    stroke(0, MODEL_LINE_ALPHA);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
};


MODEL.bullet.egg = function() {
    fill(this.color);
    stroke(0, MODEL_LINE_ALPHA);
    ellipse(this.pos.x, this.pos.y, this.r, this.r * 4/3);
};

MODEL.bullet.needle = function() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);

    fill(this.color);
    stroke(0, MODEL_LINE_ALPHA);
    let back = -this.r * 3/2;
    let front = this.r * 4;
    let side = this.r * 3/2;
    triangle(back, side, back, -side, front, 0);

    pop();
};


// Item models
MODEL.item.square = function() {
    fill(this.color);
    stroke(0, MODEL_LINE_ALPHA);
    rectMode(RADIUS);
    rect(this.pos.x - 0.5, this.pos.y - 0.5, this.r/2, this.r/2);
};

MODEL.item.box = function() {
    fill('#8f5215');
    stroke(0, MODEL_LINE_ALPHA);
    rectMode(RADIUS);
    rect(this.pos.x - 0.5, this.pos.y - 0.5, this.r/2, this.r/2);
};

// Particle models 
MODEL.particle.square = function() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.angle);

    fill(this.color.concat(this.lifespan));
    stroke(0, this.lifespan * MODEL_LINE_ALPHA/255);
    rectMode(RADIUS);
    rect(0, 0, this.r, this.r);

    pop();
};


// Ship models
MODEL.ship.basic = function(isPlayer) {
    push();
    translate(this.pos.x, this.pos.y);

    // Glow
    fill(255, 0, 0, 4);
    for(i = 0; i < 14; i++){
        ellipse(0, 1, i*3);
        noStroke();
    }

    // Exhaust
    let xOff = 0;
    let yOff = 0;
    if (this.vel.x > 0) {
        xOff = -2;
    } else if (this.vel.x < 0) {
        xOff = 2;
    }
    if (this.vel.y > 0) {
        yOff = -4;
    } else if (this.vel.y < 0) {
        yOff = 4;
    }
    fill('#E74C3C');
    noStroke();
    triangle(-3, 14, 3, 14, random(-2, 2) + xOff, random(20, 24) + yOff);

    // Thruster
    fill('#7C8A99');
    stroke(0, MODEL_LINE_ALPHA);
    strokeWeight(2);
    rectMode(RADIUS);
    rect(-0, 3, 6, 10);

    // Rear fins
    fill('#ACBAC9');
    triangle(3, 2, 3, 10, 15, 16);
    triangle(-3, 2, -3, 10, -15, 16);


    // Wings
    fill('#BDC3C7');
    triangle(1, 3, 1, -24, 12, 6);
    triangle(-1, 3, -1, -24, -12, 6);

    // Core
    fill('#ff3224');
    ellipse(0, 1, 4, 4);
    noStroke();

    pop();
};


// Boss models
MODEL.ship.boss1 = function(isPlayer) {
    push();
    translate(this.pos.x, this.pos.y);
    if (!isPlayer) rotate(180);

    // Exhaust
    fill('#E74C3C');
    noStroke();
    triangle(9, 26, 23, 26, random(14, 18), random(32, 36));
    triangle(-9, 26, -23, 26, random(-14, -18), random(32, 36));

    // Thrusters
    fill('#7C8A99');
    stroke(0, MODEL_LINE_ALPHA);
    strokeWeight(2);
    rectMode(RADIUS);
    rect(15.5, 26, 8, 3);
    rect(-16.5, 26, 8, 3);

    // Front fins
    fill('#7F8C8D');
    triangle(4, 0, 4, -38, 24, 0);
    triangle(-4, 0, -4, -38, -24, 0);

    // Wings
    fill('#BDC3C7');
    triangle(0, 4, 10, 24, 36, -16);
    triangle(0, 4, -10, 24, -36, -16);

    // Rear fin
    fill('#95A5A6');
    beginShape();
    vertex(0, 0);
    vertex(30, 16);
    vertex(30, 26);
    vertex(-30, 26);
    vertex(-30, 16);
    endShape(CLOSE);

    // Canopy
    fill(this.color);
    ellipse(0, 4, 15, 17);

    pop();
};

MODEL.ship.heavyBomber = function(isPlayer) {
    push();
    translate(this.pos.x, this.pos.y);
    if (!isPlayer) rotate(180);

    // Exhaust
    fill('#E74C3C');
    noStroke();
    triangle(8, 48, -8, 48, random(-4, 4), random(52, 56));
    triangle(40, 52, 24, 52, random(28, 36), random(56, 60));
    triangle(-40, 52, -24, 52, -random(28, 36), random(56, 60));

    // Thrusters
    fill('#7C8A99');
    stroke(0, MODEL_LINE_ALPHA);
    strokeWeight(2);
    rectMode(RADIUS);
    rect(0, 42, 12, 6);
    rect(32, 44, 12, 8);
    rect(-32, 44, 12, 8);

    // Front wings
    fill('#7F8C8D');
    triangle(0, -10, 10, 40, 80, -40);
    triangle(0, -10, -10, 40, -80, -40);

    // Rear wings
    fill('#657576');
    triangle(6, -50, 6, 30, 70, 60);
    triangle(-6, -50, -6, 30, -70, 60);

    // Frame
    fill('#95A5A6');
    arc(0, -22, 64, 64, 20, 160, CHORD);

    // Canopy
    fill(this.color);
    ellipse(0, 4, 20, 26);

    pop();
};

MODEL.ship.boss_tutorial = function(isPlayer) {
    push();
    translate(this.pos.x, this.pos.y);
    if (!isPlayer) rotate(180);

    // Exhaust
    fill('#E74C3C');
    noStroke();
    triangle(3, 32, 8, 32, random(2, 8), random(46, 50));
    triangle(-3, 32, -8, 32, random(-2, -8), random(46, 50));

    // Thrusters
    fill('#7C8A99');
    stroke(0, MODEL_LINE_ALPHA);
    strokeWeight(2);
    rectMode(RADIUS);
    rect(5, 30, 4, 3);
    rect(-5, 30, -4, 3);

    // Side wings
    fill('#7F8C8D');
    beginShape();
        vertex(30, -15);
        vertex(4, -10);
        vertex(0, 15);
    endShape(CLOSE);
    beginShape();
        vertex(-30, -15);
        vertex(-4, -10);
        vertex(0, 15);
    endShape(CLOSE);

    // Front wings
    fill('#7F8C8D');
    triangle(2, 15, 4, -38, 24, 15);
    triangle(-2, 15, -4, -38, -24, 15);

    // Back part
    fill('#7F8C8D');
    arc(0, 15, 24, 15, 20, 160, CHORD)

    // Back wings
    fill('#95A5A6');
    triangle (-30, 25, 0, -5, 30, 25);

    // Body
    fill('#04c92c');
    ellipse(0, 4, 15, 17);

    pop();
};

MODEL.ship.boss_s = function(isPlayer) {
    push();
    translate(this.pos.x, this.pos.y);
    if (!isPlayer) rotate(180);

    // Exhaust
    fill('#E74C3C');
    noStroke();
    triangle(3, 32, 8, 32, random(2, 8), random(46, 50));
    triangle(-3, 32, -8, 32, random(-2, -8), random(46, 50));

    // Thrusters
    fill('#7C8A99');
    stroke(0, MODEL_LINE_ALPHA);
    strokeWeight(2);
    rectMode(RADIUS);
    rect(5, 30, 4, 3);
    rect(-5, 30, -4, 3);

    // Side wings
    fill('#7F8C8D');
    beginShape();
        vertex(30, -15);
        vertex(4, -10);
        vertex(0, 15);
    endShape(CLOSE);
    beginShape();
        vertex(-30, -15);
        vertex(-4, -10);
        vertex(0, 15);
    endShape(CLOSE);

    // Front wings
    fill('#7F8C8D');
    triangle(2, 15, 4, -38, 24, 15);
    triangle(-2, 15, -4, -38, -24, 15);

    // Back part
    fill('#7F8C8D');
    arc(0, 15, 24, 15, 20, 160, CHORD)

    // Back wings
    fill('#95A5A6');
    triangle (-30, 25, 0, -5, 30, 25);

    // Body
    fill('#04c92c');
    ellipse(0, 4, 15, 17);

    pop();
}