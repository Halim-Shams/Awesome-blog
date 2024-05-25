import React from 'react';
import Post from './Post';

const Posts = () => {
	return (
		<div className='px-20 flex flex-col gap-12'>
			<p className='text-3xl font-bold text-slate-800'>Recent Posts</p>
			<Post />
		</div>
	);
};

export default Posts;
