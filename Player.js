function Player(canvas) {
  var self = this;

  self.x = 0;
  self.y = 0;
  self.vel = 10;
  self.size = 20;
  self.dx = 0;
  self.dy = 0;
  self.score = 0;
  self.ctx = canvas.getContext('2d');
}

Player.prototype.update = function () {
  var self = this;

  self.y += (self.vel * self.dy);
  self.x += (self.vel * self.dx);

  self._checkLimits();
}

Player.prototype.render = function () {
  var self = this;

  self.ctx.fillStyle = 'greenyellow';
  self.ctx.fillRect(self.x, self.y, self.size, self.size);
}

Player.prototype.setDirection = function (dx, dy) {
  var self = this;

  self.dx = dx;
  self.dy = dy;
  
}

Player.prototype.invertDirection = function() {
  var self = this;

  self.dx = -self.dx;
  self.dy = -self.dy;
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


  // if(self.score=+1) {
  // }
  // else {
  //   self.head = body.pop();
  //   self.head.x = self.body.x;
  //   self.head.y = self.body.y;
  // }


  // for(var i = 0; i < self.body.length; i++) {
  //      self.body(head[i].x, head[i].y);
    // Beer(body.x, body.y);
  }




