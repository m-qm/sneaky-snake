function Player(canvas) {
  var self = this;

  self.x = 0;
  self.y = 0;
  self.vel = 5;
  self.size = 20;
  self.dx = 0;
  self.dy = 0;
  self.score = 0;
  self.body = [{x: 0, y: 0}];
  self.ctx = canvas.getContext('2d');
}

Player.prototype.update = function () {
  var self = this;

  if (self.dx === 1 && self.dy === 0) { 
    body[0, 1]; 
  } else if (self.dx === -1 && self.dy === 0) { 
    body[0, -1]; 
  } else if (self.dx === 0 && self.dy === -1) { 
    body[0, -1]; 
  } else if(self.dx === 0 && self.dy === 1) { 
    body[0, 1]; 
  }

  self.y += (self.vel * self.dy);
  self.x += (self.vel * self.dx);
  self._checkLimits();
}

Player.prototype.render = function () {
  var self = this;

  self.ctx.fillStyle = 'black';

  self.body.forEach(function (item) {
    self.ctx.fillRect(item.x, item.y, self.size, self.size);
  });
}

Player.prototype.setDirection = function (dx, dy) {
  var self = this;

  self.dx = dx;
  self.dy = dy;
  
}

Player.prototype._checkLimits = function () {
  var self = this;
  if (self.y < 0) {
    self.y = self.ctx.canvas.height - self.size;
  }
  else if (self.y > self.ctx.canvas.height - self.size) {
    self.y = 0;
  }
  if (self.x < 0) {
    self.x = self.ctx.canvas.width - self.size;
  }
  else if (self.x > self.ctx.canvas.width - self.size) {
    self.x = 0;
  }
}

Player.prototype.checkCollision = function (object) {
  var self = this;

  var crashRight = self.x + self.size > object.x;
  var crashBottom = self.y + self.size > object.y;
  var crashTop = self.y < object.y + object.size;
  var crashLeft = self.x < object.x + object.size;

  if (crashLeft && crashRight && crashTop && crashBottom) {
    return true;
  
  }

  return false;
}

Player.prototype.collided = function () {
  var self = this;


}

