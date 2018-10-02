'use scrict'

//Game has a player
function Game(parent) {
  var self = this;

  self.parentElement = parent;
  self.gameElement = null
  self.onGameOverCallback = null;

  self._init();
  self._startLoop();
}

Game.prototype._init = function () {
  var self = this;

  self.gameElement = buildDom(`
    <main class="game container">
      <header class="game__header">
        <div class="lives">
          <span class="label">Lives:</span>
          <span class="value"></span>
        </div>
        <div class="score">
          <span class="label">Score:</span>
          <span class="value"></span>
        </div>
      </header>
      <div id="game_c" class="game__canvas">
        <canvas></canvas>
      </div>
    </main>
  `)

  self.parentElement.appendChild(self.gameElement);

  self.canvasParentElement = document.querySelector('.game__canvas');
  self.canvasElement = document.querySelector('canvas');

  self.scoreElement = document.querySelector(".score .value");

  self.width = self.canvasParentElement.clientWidth;
  self.height = self.canvasParentElement.clientHeight;

  self.canvasElement.setAttribute('width', self.width);
  self.canvasElement.setAttribute('height', self.height);

  self.ctx = self.canvasElement.getContext('2d');
}

Game.prototype._startLoop = function () {
  var self = this;

  self.beer = new Beer(self.canvasElement);
  self.player = new Player(self.canvasElement);
  self.score = 0;

  self.handleKeyDown = function (evt) {
    if (evt.key === "ArrowDown") {
      self.player.setDirection(0, 1)
    }
    if (evt.key === "ArrowUp") {
      self.player.setDirection(0, -1)
    }
    if (evt.key === "ArrowLeft") {
      self.player.setDirection(-1, 0)
    }
    if (evt.key === "ArrowRight") {
      self.player.setDirection(1, 0)
    }
  }

  document.addEventListener('keydown', self.handleKeyDown);
  //ToDelete
  var isPlayerAlive = true;

  function loop() {
    self._clearAll();
    self._updateAll();
    self._renderAll();
  
    if (isPlayerAlive) {
      requestAnimationFrame(loop);
    } else {
      self.onGameOverCallback();
    }
  }

  requestAnimationFrame(loop);
}

Game.prototype._updateAll = function () {

  var self = this;
 
  self.player.update();
  self._checkAllCollision();

  self._updateUI();
}

Game.prototype._renderAll = function () {
  var self = this;

  self.beer.render();
  self.player.render();

}

Game.prototype._clearAll = function () {
  var self = this;

  self.ctx.clearRect(0, 0, self.width, self.height);
}

Game.prototype._checkAllCollision = function() {
  var self = this;
  if(self.player.checkCollision(self.beer)) {
       self.beer = new Beer(self.canvasElement);
       self.score += 1;
       self.player.collided();
    }
}

Game.prototype.onOver = function (callback) {
  var self = this;

  self.onGameOverCallback = callback;
}

Game.prototype.destroy = function () {
  var self = this;

  self.gameElement.remove();
  self.onGameOverCallback = null;
}

Game.prototype._updateUI = function () {
  var self = this;

  self.scoreElement.innerText = self.score;
}