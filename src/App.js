import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './contexts/ProductContext';
import { v4 as uuidv4 } from 'uuid'; 

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { CartonContext } from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart,{
			tite:item.tite,
			price: item.price,
			image:item.image,
			 id: uuidv4()
			}]);
	};

	const removeItem = id => {
		setCart(cart.filter(it=>(id !== it.id)));
	}

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem}}>
				<CartonContext.Provider value={{cart,  removeItem }}>
					<Navigation />

					{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</CartonContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
