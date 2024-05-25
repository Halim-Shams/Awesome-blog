import React from 'react';

const Post = () => {
	return (
		<div className='bg-slate-300 rounded-xl w-full h-56 overflow-hidden relative'>
			<span className='z-20 top-3 left-4 bg-slate-800/60 text-sm text-slate-300 absolute rounded-full px-2 py-0.5'>
				Features
			</span>
			<p className='z-20 absolute bottom-4 left-4 text-lg leading-snug font-medium text-slate-300 text-wrap w-11/12'>
				How to Use Message Apps to Communicate, and Share
			</p>
			<div className='bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent w-full h-full absolute z-10'></div>
			<img
				className='object-cover w-full h-full'
				src='https://images.unsplash.com/photo-1716094978950-e2e9213da449?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				alt='img'
			/>
		</div>
	);
};

export default Post;
