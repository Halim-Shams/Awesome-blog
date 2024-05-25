import React from 'react';
import Post from './Post';

const Posts = () => {
	return (
		<div className='px-20 flex flex-col gap-12'>
			<p className='text-3xl font-bold text-slate-800'>Recent Posts</p>
			<div className='grid grid-cols-3 gap-x-8 gap-y-10'>
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
		</div>
	);
};

export default Posts;
