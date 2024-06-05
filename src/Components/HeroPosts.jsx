import React from 'react';
import Post from './Post';

const HeroPosts = () => {
	return (
		<div className='z-10 col-start-3 row-start-1 grid grid-cols-1 grid-rows-2 gap-y-8'>
			<Post side={true} />
			<Post side={true} />
		</div>
	);
};

export default HeroPosts;
