
function Beer(canvas, x, y) {
  var self = this;
  self.size = 20;
  self.canvasElement = canvas;
  self.x = x;
  self.y = y;
  self.ctx = canvas.getContext('2d');
  self.state = 'beer';
}

Beer.prototype.update = function () {
  var self = this;
  
}

Beer.prototype.render = function () {
  var self = this;
  self.ctx.fillStyle = '#f33323';
  if (self.state === 'wall') {
    self.ctx.fillStyle = '#001af5';
  }
  self.ctx.fillRect(self.x, self.y, self.size, self.size);
}

Beer.prototype.collided = function () {
  var self = this;

  self.state = 'wall';

}

