var React = require('react');
var PropTypes = React.PropTypes;
var Square = require('./square');
var Knight = require('./knight');
var moveKnight = require('./game').moveKnight;
var DragDropContext = require('react-dnd').DragDropContext;
var HTML5Backend = require('react-dnd-html5-backend');
var BoardSquare = require('./boardsquare');
var canMove = require('./game').canMove;
var Day = require('./date');

var Board = React.createClass({
  propTypes: {
    knightPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired
  },

  renderSquare: function (i) {
    var x = i%8;
    var y = Math.floor(i/8);
    if(y !== 0){
    	return (
      	  <div key={i}
          	 style={{width:"100", height:"100"}}>
             <BoardSquare x={x} y={y}>
              {this.renderPiece(x,y)}
             </BoardSquare>
          </div>
        );
    }
    else{
    	return (
    		<div key={i}
          	   style={{width:"100", height:"100"}}>
               <BoardSquare x={x} y={y}>
                 <Day number={x-1}/>
               </BoardSquare>
            </div>
        );
    }
    
  },

  renderPiece: function(x,y){
  	var knightX = this.props.knightPosition[0];
    var knightY = this.props.knightPosition[1];
    if(x === knightX && y === knightY){
    	return <Knight />;
    }
  },
  handleSquareClick: function(toX, toY){
  	if(canMove(toX, toY)){
  		moveKnight(toX,toY);
  	}
  },

  render: function () {
    var squares = [];
    for (let i = 0; i < 16; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {squares}
      </div>
    );
  }
});

module.exports = DragDropContext(HTML5Backend)(Board);