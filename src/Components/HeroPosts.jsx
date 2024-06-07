import React from 'react';
import {useGlobalContext} from '../Context/context';
import Post from './Post';

const HeroPosts = () => {
	const {database} = useGlobalContext();
	const featuredDatabase = database.slice(-3);
	const miniFeaturedPosts = featuredDatabase.slice(0, 2);
	return (
		<div className='z-10 col-start-3 row-start-1 grid grid-cols-1 grid-rows-2 gap-y-8'>
			{miniFeaturedPosts.map((post) => {
				const thumbnail = post.properties.Thumbnail.files[0].file.url;
				const title = post.properties.Name.title[0].plain_text;
				const tag = post.properties.Category.select.name;

				return <Post thumbnail={thumbnail} title={title} tag={tag} />;
			})}
		</div>
	);
};

export default HeroPosts;
