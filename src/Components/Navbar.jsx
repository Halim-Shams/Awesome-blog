import React from 'react';
import {NavLink} from 'react-router-dom';
import {useGlobalContext} from '../Context/context';

const Navbar = () => {
	const {darkTheme, themeToggler} = useGlobalContext();

	return (
		<nav className='z-10 pl-32 pr-11 py-4 flex items-center justify-between'>
			<div className='flex items-center'>
				<NavLink
					to='/'
					className='z-10 text-3xl text-transparent bg-gradient-to-tr from-yellow-400 to-orange-500 bg-clip-text font-black uppercase'>
					halim
				</NavLink>
			</div>
			<div className='flex items-center gap-8'>
				<div className='flex items-center gap-2'>
					<NavLink
						className={({isActive}) =>
							isActive
								? 'z-10 bg-slate-200/60 text-slate-800 font-medium hover:bg-slate-200/40 px-4 py-1 rounded-md transition-all active:scale-95 dark:bg-[#525252]/60 dark:text-[#C3C3C3]'
								: 'z-10 hover:bg-slate-200/60 text-slate-800 font-medium px-4 py-1 rounded-md transition-all active:scale-95 dark:text-[#C3C3C3] dark:hover:bg-[#525252]'
						}
						to='/'>
						Home
					</NavLink>
					<NavLink
						className={({isActive}) =>
							isActive
								? 'z-10 bg-slate-200/60 text-slate-800 font-medium hover:bg-slate-200/40 px-4 py-1 rounded-md transition-all active:scale-95 dark:bg-[#525252]/60 dark:text-[#C3C3C3]'
								: 'z-10 hover:bg-slate-200/60 text-slate-800 font-medium px-4 py-1 rounded-md transition-all active:scale-95 dark:text-[#C3C3C3] dark:hover:bg-[#525252]'
						}
						to='/about'>
						About
					</NavLink>
				</div>
				<button
					onClick={() => themeToggler()}
					className='z-10 bg-transparent border border-slate-200/60 rounded-full py-0.5 px-0.5 flex gap-3 outline-none active:scale-95 transition-all dark:border-[#525252]/60'>
					<p
						className={`${
							!darkTheme ? 'bg-slate-200/60 dark:bg-[#525252]/70' : ''
						} rounded-full px-0.5`}>
						☀️
					</p>
					<p
						className={`${
							darkTheme ? 'bg-slate-200/60 dark:bg-[#525252]/70' : ''
						} rounded-full px-0.5`}>
						🌙
					</p>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
