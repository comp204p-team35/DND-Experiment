var React = require('react');
var PropTypes = React.PropTypes;
var ItemTypes = require('./constants').ItemTypes;
var DragSource = require('react-dnd').DragSource;

var patientSource = {
	beginDrag: function(props){
		return {};
	}
};

function collect(connect, monitor){
	return{
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}
}

var Patient = React.createClass({
  
  propTypes:{
  	connectDragSource: PropTypes.func.isRequired,
  	isDragging: PropTypes.bool.isRequired
  },

  render: function () {
  	var connectDragSource = this.props.connectDragSource;
  	var isDragging = this.props.isDragging;

    return connectDragSource(
    	<div style={{
    		opacity: isDragging ? 0.5 : 1,
    		fontSize:17,
    		fontWeight:'bold',
    		cursor: 'move'
    	}}>Patient 1</div>
    );
  }
});

module.exports = DragSource(ItemTypes.PATIENT, patientSource,collect)(Patient);