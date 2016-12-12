var React = require('react');

var Day = React.createClass({
	render: function(){
		var number = this.props.number;
	var date = "null";
	switch(number){
		case(0):
			date = "Sunday";
			break;
		case(1):
			date = "Monday";
			break;
		case(2):
			date = "Tuesday";
			break;
		case(3):
			date = "Wednesday";
			break;
		case(4):
			date= "Thursday";
			break;
		case(5):
			date = "Friday";
			break;
		case(6):
			date = "Saturday";
			break;
		default:
			date = "";
	};
		return(
			<div style={{
				fontSize : 17
			}}>{date}</div>
		);
	}
});

module.exports = Day;
