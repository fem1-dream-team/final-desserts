import React, { Component } from 'react'
// import axios from 'axios'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import 'typeface-roboto'
import {Home, Products} from './components'
// import {SimpleSlider} from './components'
import { Footer, Header } from './commons'
import { Cart } from './components/ComponentsForNavigation/Cart'

import LoginPage from './commons/Header/ContainerSearchLoginPage/LoginPage';
// import Button from '@material-ui/core/Button';
import { ContainerNavigation } from './commons/ContainerNavigation/ContainerNavigation'
import { BuyProductCart } from './components/BuyProductCart/BuyProductCart'

class App extends Component {
	componentDidMount () {
		// axios.get('http://localhost:3001/api/getData');
	}

	inputChanged = (param) => {
		console.log(param)
	};

	render () {
		return (
			<BrowserRouter>
				<div>
					<Header/>
					<ContainerNavigation/>
					<Switch>
						<Route exact path='/' component={Home}/>
						<Route path='/home' render={() => <Home/>}/>

						<Route
							path='/search'
							component={props => <Products {...props} category={'search'} />}
						/>

						<Route
							path='/cakes'
							component={props => <Products {...props} category={'cakes'} />}
						/>
						<Route
							path='/tarts'
							component={props => <Products {...props} category={'tarts'} />}
						/>

						<Route
							path='/cupcakes'
							component={props => <Products {...props} category={'cupcakes'} />}
						/>

						<Route
							path='/cookies'
							component={props => <Products {...props} category={'cookies'} />}
						/>

						<Route
							path='/desserts'
							component={props => <Products {...props} category={'desserts'} />}
						/>

						<Route
							path='/macaroons'
							component={props => <Products {...props} category={'macaroons'} />}
						/>

						<Route path='/buyProductCart/:category/:_id' render={() => <BuyProductCart/>}/>
						<Route path='/cart' render={() => <Cart/>}/>
						{/* <Route  path='*' component={Page404}/> */}
						<Route exect path='/customer' component={LoginPage}/>

					</Switch>

					<Footer/>
				</div>
			</BrowserRouter>
		)
	}
}
export default App