import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='px-32 py-4 flex items-center justify-between'>
			<div className='flex items-center'>
				<NavLink to='/' className='text-xl text-slate-800 font-black uppercase'>
					halim
				</NavLink>
			</div>
			<div className='flex items-center gap-2'>
				<NavLink
					className={({isActive}) =>
						isActive
							? 'bg-slate-200/60 text-slate-800 font-medium hover:bg-slate-200/40 px-4 py-1 rounded-md transition-all active:scale-95'
							: 'hover:bg-slate-200/60 text-slate-800 font-medium px-4 py-1 rounded-md transition-all active:scale-95'
					}
					to='/'>
					Home
				</NavLink>
				<NavLink
					className={({isActive}) =>
						isActive
							? 'bg-slate-200/60 text-slate-800 font-medium hover:bg-slate-200/40 px-4 py-1 rounded-md transition-all active:scale-95'
							: 'hover:bg-slate-200/60 text-slate-800 font-medium px-4 py-1 rounded-md transition-all active:scale-95'
					}
					to='/about'>
					About
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
