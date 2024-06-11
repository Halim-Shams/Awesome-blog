import React from 'react';
import Post from './Post';
import {useGlobalContext} from '../Context/context';

const Posts = () => {
	const {database} = useGlobalContext();
	const databaseLength = database.length;
	const recentPosts = database.slice(0, databaseLength - 3);
	return (
		<div className='flex flex-col gap-12'>
			<p className='z-10 text-3xl font-bold text-slate-800 dark:text-[#dbdbdb]'>
				Recent Posts
			</p>
			<div className='grid grid-cols-3 gap-x-8 gap-y-10'>
				{recentPosts.map((item) => {
					const title = item.properties.Name.title[0].plain_text;
					const thumbnail = item.properties.Thumbnail.files[0].file.url;
					const tag = item.properties.Category.select.name;
					return <Post title={title} thumbnail={thumbnail} tag={tag} />;
				})}
			</div>
		</div>
	);
};

export default Posts;
