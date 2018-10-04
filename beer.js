
function Beer(canvas, x, y) {
  var self = this;
  self.size = 20;
  self.canvasElement = canvas;
  self.x = x;
  self.y = y;
  self.ctx = canvas.getContext('2d');
  self.state = 'beer';

  self.currentIdx = 0;
  self.offsetIdx = 1;
}

Beer.prototype.update = function () {
  var self = this;
  
}

//Don't do this


Beer.prototype.render = function () {
  var self = this;

  self.currentIdx += self.offsetIdx;
  if (self.currentIdx > globalColors.length - 1 || self.currentIdx === 0) {
    self.offsetIdx *= -1;
  }

  self.ctx.fillStyle = globalColors[self.currentIdx];
  
  if (self.state === 'wall') {
    self.ctx.fillStyle = '#001af5';
  }
  self.ctx.fillRect(self.x, self.y, self.size, self.size);
}

Beer.prototype.collided = function () {
  var self = this;

  self.state = 'wall';

}

