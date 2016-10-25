import React from 'react';
import ReactDOM from "react-dom";
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';


class Users extends React.Component {

	render(){
		return (
				<div>
			        <h2>User List</h2>
			        <UserList />
			        <hr />
			        <h2>User Details</h2>
			        <UserDetails />
			    </div>

			);
	}
}
    


export default Users;
