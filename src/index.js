import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Board from './board';
import Knight from './knight';
import Square from './square';
var observe = require('./game').observe;

observe(function(knightPosition){
	ReactDOM.render(
		<Board knightPosition={knightPosition}/>,document.getElementById('root'));
	
})
