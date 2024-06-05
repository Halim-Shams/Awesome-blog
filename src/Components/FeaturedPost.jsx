import React from 'react';
import Tag from './Tag';

const FeaturedPost = ({thumbnail, title, subtitle, tag}) => {
	return (
		<div className='z-10 col-start-1 row-start-1 col-span-3 flex flex-col gap-5'>
			<div className='bg-slate-200/60 rounded-[18px] w-[636px] h-[458px] overflow-hidden'>
				<img
					className='w-full h-full object-cover'
					src='https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='communication'
				/>
			</div>
			<div className='flex flex-col gap-5 ml-2'>
				<div className='flex flex-col gap-3'>
					<p className='text-4xl text-slate-800 font-bold dark:text-[#CCCCCC]'>
						The Magic Behind Wanting Less
					</p>
					<p className='text-xl text-slate-500 font-serif dark:text-[#878787]/90'>
						Why wanting less is actually more?
					</p>
				</div>
				<Tag tag='Advice' />
			</div>
		</div>
	);
};

export default FeaturedPost;
