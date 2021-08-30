/* Add JavaScript code here! */
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(<div>"HELLO WORLD"</div>, document.getElementById('root'));
import App from './App.jsx';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);