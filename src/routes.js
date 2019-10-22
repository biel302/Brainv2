import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Home from './View/FormView'
import Themes from './View/Themes'


export default class Routes extends Component {
	constructor() {
		super();

    render() {
    	return (
	        <BrowserRouter>
				<Switch>
					<Route 
						path='/' 
						exact 
						render={props => (
							<Home {... props} />
							)}

						/>
	
					<Route 
						path='/home' 
						exact 
						render={props => (
							<Home {... props} 
								logged_in = {this.state.logged_in}
								departamento={this.state.departamento} 
								handleLogout = {this.handleLogout.bind(this)}/>
							)}

						/>
					<Route 
						path='/forgot' 
						exact 
						render={props => (
							<Forgot {... props}/>
							)}

						/>
					<Route 
						path='/reset' 
						exact 
						render={props => (
							<Reset {... props}/>
							)}

						/>
				</Switch>
	        </BrowserRouter>
    	);
	}
}