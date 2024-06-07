import React from 'react';
import Tag from './Tag';

const Post = ({title, thumbnail, tag}) => {
	return (
		<div className='flex flex-col gap-2 w-full'>
			<div className='rounded-[12px] w-[340px] h-[240px] bg-transparent overflow-hidden'>
				<img className='w-full h-full object-cover' src={thumbnail} alt={tag} />
			</div>
			<div className='flex flex-col gap-1 ml-1'>
				<div className='flex flex-col gap-3'>
					<p className='text-[20px] text-slate-800 font-semibold dark:text-[#CCCCCC]'>
						{title}
					</p>
				</div>
				<Tag tag={tag} mini={true} />
			</div>
		</div>
	);
};

export default Post;
