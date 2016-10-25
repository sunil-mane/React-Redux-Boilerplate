import React, { PropTypes } from 'react';
import { Link } from 'react-router'


class App extends React.Component {

	render(){
		return (

				<div>
			        <ul>
			        	<li><Link to='users'>Users</Link></li>
			        	<li><Link to='customers'>Customers</Link></li>
			        </ul>
			        {this.props.children}
			    </div>

			);
	}

}

App.PropTypes = {
	children: PropTypes.object.isRequired
}


export default App;
