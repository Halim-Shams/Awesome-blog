import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from './Navbar';

const Sharedstyle = () => {
	return (
		<div className='px-12'>
			<Navbar />
			<section>
				<Outlet />
			</section>
		</div>
	);
};

export default Sharedstyle;
