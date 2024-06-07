import React from 'react';
import Post from './Post';
import {useGlobalContext} from '../Context/context';

const Posts = () => {
	const {database} = useGlobalContext();
	return (
		<div className='flex flex-col gap-12'>
			<p className='z-10 text-3xl font-bold text-slate-800 dark:text-[#dbdbdb]'>
				Recent Posts
			</p>
			<div className='grid grid-cols-3 gap-x-8 gap-y-10'>
				{/* {database.map((item) => {
					const title = item.properties.Name.title[0].plain_text;
					const thumbnail = item.properties.Thumbnail.files[0].file.url;
					return <Post title={title} thumbnail={thumbnail} />;
				})} */}
				<Post
					title='The Future of AI and Developers'
					thumbnail='https://images.unsplash.com/photo-1716980197262-ce400709bf0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D'
				/>
				<Post
					title='The Future of AI and Developers'
					thumbnail='https://images.unsplash.com/photo-1716980197262-ce400709bf0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D'
				/>
				<Post
					title='The Future of AI and Developers'
					thumbnail='https://images.unsplash.com/photo-1716980197262-ce400709bf0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D'
				/>
				<Post
					title='The Future of AI and Developers'
					thumbnail='https://images.unsplash.com/photo-1716980197262-ce400709bf0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D'
				/>
				<Post
					title='The Future of AI and Developers'
					thumbnail='https://images.unsplash.com/photo-1716980197262-ce400709bf0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D'
				/>
				<Post
					title='The Future of AI and Developers'
					thumbnail='https://images.unsplash.com/photo-1716980197262-ce400709bf0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D'
				/>
				<Post
					title='The Future of AI and Developers'
					thumbnail='https://images.unsplash.com/photo-1716980197262-ce400709bf0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D'
				/>
				<Post
					title='The Future of AI and Developers'
					thumbnail='https://images.unsplash.com/photo-1716980197262-ce400709bf0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D'
				/>
				<Post
					title='The Future of AI and Developers'
					thumbnail='https://images.unsplash.com/photo-1716980197262-ce400709bf0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D'
				/>
				<Post
					title='The Future of AI and Developers'
					thumbnail='https://images.unsplash.com/photo-1716980197262-ce400709bf0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D'
				/>
			</div>
		</div>
	);
};

export default Posts;
