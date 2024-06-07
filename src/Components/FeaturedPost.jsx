import React from 'react';
import Tag from './Tag';
import {useGlobalContext} from '../Context/context';

const FeaturedPost = () => {
	const {database} = useGlobalContext();

	const featuredPost = database.slice(-1);

	return (
		<div className='z-10 col-start-1 row-start-1 col-span-3 flex flex-col gap-5'>
			<div className='bg-transparent rounded-[18px] w-[636px] h-[458px] overflow-hidden'>
				<img
					className='w-full h-full object-cover'
					src={featuredPost[0].properties.Thumbnail.files[0].file.url}
					alt={featuredPost[0].properties.Category.select.name}
				/>
			</div>
			<div className='flex flex-col gap-5 ml-2'>
				<div className='flex flex-col gap-3'>
					<p className='text-4xl text-slate-800 font-bold dark:text-[#CCCCCC]'>
						{featuredPost[0].properties.Name.title[0].plain_text}
					</p>
					<p className='text-xl text-slate-500 font-serif dark:text-[#878787]/90'>
						{featuredPost[0].properties.Subtitle.rich_text[0].plain_text}
					</p>
				</div>
				<Tag tag={featuredPost[0].properties.Category.select.name} />
			</div>
		</div>
	);
};

export default FeaturedPost;
