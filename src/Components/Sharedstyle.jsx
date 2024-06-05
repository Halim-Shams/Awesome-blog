import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from './Navbar';

const Sharedstyle = () => {
	return (
		<div className='relative dark:bg-[#262626]'>
			<div className='z-0 absolute w-full h-[124vh] overflow-hidden'>
				<img
					className='w-full h-full object-cover'
					src='../../public/bg-yellow-circles.png'
					alt='bg'
				/>
			</div>
			<div className='px-36'>
				<Navbar />
				<section>
					<Outlet />
				</section>
			</div>
		</div>
	);
};

export default Sharedstyle;
