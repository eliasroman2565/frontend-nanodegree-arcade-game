// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x = this.x + 101 * dt;
    this.x = this.x + this.speed;
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x > 505) {
        this.x = 0;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Define Player Class
var Player = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-boy.png';
};
// Rest Function back to starting position
Player.prototype.reset = function() {
    this.x = 303;
    this.y = 303;
};

Player.prototype.update = function(dt) {
    this.x = this.x;
    this.y = this.y;
    // Check if player goes off map
    if (this.x > 505) {
        player.reset();
    }
    if (this.x < 0) {
        player.reset();
    }
    if (this.y > 450) {
        player.reset();
    }
    if (this.y < 0) {
        player.reset();
        alert("You Win, Bitch");
    }

    // Check for Collisions

    allEnemies.forEach(function(Enemy) {
        if (player.x < Enemy.x + 50 &&
            player.x > Enemy.x &&
            player.y < Enemy.y + 50 &&
            player.y > Enemy.y) {
            player.reset();
            console.log("collision");
        }

    });

};
// Draw Player on Canvas
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//Function for Player Controls
Player.prototype.handleInput = function(keyPress) {
    if (keyPress == 'left') {
        player.x -= player.speed;
    }
    if (keyPress == 'up') {
        player.y -= player.speed - 20;
    }
    if (keyPress == 'right') {
        player.x += player.speed;
    }
    if (keyPress == 'down') {
        player.y += player.speed - 20;
    }
    console.log('keyPress is: ' + keyPress);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [new Enemy(0, 41.5, 1), new Enemy(0, 124.5, 5), new Enemy(0, 207.5, 3)];
// Player Variable
var player = new Player(303, 303, 101);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
