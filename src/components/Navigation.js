import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartonContext } from '../contexts/CartContext';

const Navigation = () => {
	const {cart} = useContext(CartonContext);
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
