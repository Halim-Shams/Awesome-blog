import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from './Navbar';

const Sharedstyle = () => {
	return (
		<div className='px-24'>
			<Navbar />
			<section>
				<Outlet />
			</section>
		</div>
	);
};

export default Sharedstyle;
