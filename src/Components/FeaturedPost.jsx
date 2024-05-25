import React from 'react';

const FeaturedPost = () => {
	return (
		<div className='bg-slate-200/60 w-full h-[82vh] rounded-2xl overflow-hidden relative'>
			<span className='z-20 bottom-[156px] left-12 bg-slate-400/20 text-slate-300 absolute rounded-full px-3 py-1'>
				Features
			</span>
			<p className='z-20 absolute bottom-16 left-12 text-4xl font-medium w-1/2 text-slate-100 text-wrap'>
				How to Use Message Apps to Communicate, and Share
			</p>
			<div className='bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent w-full h-full absolute z-10'></div>
			<img
				className='w-full h-full object-cover z-0'
				src='https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				alt='communication'
			/>
		</div>
	);
};

export default FeaturedPost;
