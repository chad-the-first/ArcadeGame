// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = -100;
    this.collision = function(){
        if(this.y === player.y){
            if(player.x - 75 < this.x){
                if(player.x + 70 > this.x){
                    player.y = 396;
                }
            }
        }
    }
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var enemy1 = new Enemy();
enemy1.y = 230;
enemy1.speed = function(enemy){
    enemy.x = enemy.x + 1 ;
};
var enemy2 = new Enemy();
enemy2.y = 230;
enemy2.speed = function(enemy){
    enemy.x = enemy.x + 2 ;
};
var enemy3 = new Enemy();
enemy3.y = 230;
enemy3.speed = function(enemy){
    enemy.x = enemy.x + 3 ;
};

var enemy4 = new Enemy();
enemy4.y = 147;
enemy4.speed = function(enemy){
    enemy.x = enemy.x + 1 ;
};
var enemy5 = new Enemy();
enemy5.y = 147;
enemy5.speed = function(enemy){
    enemy.x = enemy.x + 2 ;
};
var enemy6 = new Enemy();
enemy6.y = 147;
enemy6.speed = function(enemy){
    enemy.x = enemy.x + 3 ;
};

var enemy7 = new Enemy();
enemy7.y = 64;
enemy7.speed = function(enemy){
    enemy.x = enemy.x + 1 ;
};
var enemy8 = new Enemy();
enemy8.y = 64;
enemy8.speed = function(enemy){
    enemy.x = enemy.x + 2 ;
};
var enemy9 = new Enemy();
enemy9.y = 64;
enemy9.speed = function(enemy){
    enemy.x = enemy.x + 3 ;
};


var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5, enemy6, enemy7, enemy8, enemy9];


var random = function(){
    var randEnemy = allEnemies[Math.floor(Math.random() * allEnemies.length)];
    var run = function(){   
        randEnemy.speed(randEnemy);
        randEnemy.collision();
        if(randEnemy.x > 505){
            window.clearInterval(int2)
            randEnemy.x = -100;
        };
    };
    var int2 = setInterval(run, 10);
};
setInterval(random, 500);

var colision = function(){
    if(Enemy)
        console.log(Enemy);
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
let Player = function() {
    this.sprite = 'images/char-boy.png';
};
Player.prototype = Object.create(Enemy.prototype);
Player.prototype.construtor = Player;
let player = new Player();
player.x = 202;
player.y = 396;

//Methode to handle player movment
player.handleInput = function(key){
    if(key === 'left' && player.x > 100){
        player.x -= 100;
    }else if(key === 'right' && player.x < 400){
        player.x += 100;
    }else if(key === 'up' && player.y > 0){
        player.y -= 83;
    }else if(key === 'down' && player.y < 380){
        player.y += 83;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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
