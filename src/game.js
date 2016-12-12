var knightPosition = [0, 1];
var observer = null;

function emitChange() {
  observer(knightPosition);
}

exports.observe = function (o) {
  if (observer) {
    throw new Error('Multiple observers not implemented.');
  }

  observer = o;
  emitChange();
}

exports.moveKnight = function (toX, toY) {
  knightPosition = [toX, toY];
  emitChange();
}

exports.canMove = function(toX, toY){
  return(toY !== 0);
}

