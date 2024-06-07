import React from 'react';
import FeaturedPost from '../Components/FeaturedPost';
import Posts from '../Components/Posts';
import Loading from '../Components/Loading';
import {useGlobalContext} from '../Context/context';
import HeroPosts from '../Components/HeroPosts';

const Home = () => {
	const {loading} = useGlobalContext();

	if (loading) {
		return <Loading />;
	} else {
		return (
			<div className='py-6 flex flex-col gap-44'>
				<div className='grid grid-cols-3 grid-rows-1 gap-x-16 self-center justify-items-start'>
					<FeaturedPost />
					<HeroPosts />
				</div>
				<Posts />
			</div>
		);
	}
};

export default Home;
