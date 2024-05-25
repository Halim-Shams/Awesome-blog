import React from 'react';
import FeaturedPost from '../Components/FeaturedPost';
import Posts from '../Components/Posts';

const Home = () => {
	return (
		<div className='mt-6 flex flex-col gap-20'>
			<FeaturedPost />
			<Posts />
		</div>
	);
};

export default Home;
