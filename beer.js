
function Beer(canvas) {
  var self = this;
  self.size = 20;
  self.canvasElement = canvas;
  self.x = Math.floor(Math.random() * (self.canvasElement.width - self.size));
  self.y = Math.floor(Math.random() * (self.canvasElement.height - self.size));
  self.ctx = canvas.getContext('2d');
}

Beer.prototype.update = function () {
  var self = this;
  
}

Beer.prototype.render = function () {
  var self = this;
  self.ctx.fillStyle = 'red';
  self.ctx.fillRect(self.x, self.y, self.size, self.size);

}

Beer.prototype.isDeath = function () {
  var self = this;

  return (self.x + self.size) < 0;
}

