var React = require('react');
var PropTypes = React.PropTypes;
var Square = require('./square');
var moveKnight = require('./game').moveKnight;
var ItemTypes = require('./constants').ItemTypes;
var DropTarget = require('react-dnd').DropTarget;
var canMove = require('./game').canMove;

var squareTarget = {
	canDrop: function(props){
		return canMove(props.x, props.y);
	},

	drop: function(props, monitor){
		moveKnight(props.x, props.y);
	}
};

function collect(connect, monitor){
	return{
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop()
	};
}

var BoardSquare = React.createClass({
	propTypes:{
		x : PropTypes.number.isRequired,
		y : PropTypes.number.isRequired,
		isOver: PropTypes.bool.isRequired,
		canDrop: PropTypes.bool.isRequired
	},

	render: function(){
		var x = this.props.x;
		var y = this.props.y;
		var connectDropTarget = this.props.connectDropTarget;
		var isOver = this.props.isOver;
		var black = (x+y)%2 === 1;

		return connectDropTarget(
			<div style={{
				position:'relative',
				width:'100%',
				height:'100%'
			}}>
			<Square black={black}>
				{this.props.children}
			</Square>
			{isOver && <div style={{
				position: 'absolute',
				top:0,
				left:0,
				height:'100%',
				width:'100%',
				zIndex : 1,
				opacity:0.5
			}} />
		}
		</div>
		);
	}
});

module.exports = DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare);