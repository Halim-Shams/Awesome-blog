import React from 'react';
import Tag from './Tag';

const Post = ({title, thumbnail, tag, side}) => {
	return (
		<div className='flex flex-col gap-2 w-full'>
			<div
				className={`${
					side
						? 'rounded-[12px] w-[340px] h-[240px]'
						: 'rounded-[12px] w-[340px] h-[240px]'
				} bg-slate-200/60 overflow-hidden`}>
				<img
					className='w-full h-full object-cover'
					src='https://images.unsplash.com/photo-1716847214624-1e8787d98b6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='mini post'
				/>
			</div>
			<div className='flex flex-col gap-1 ml-1'>
				<div className='flex flex-col gap-3'>
					<p className='text-[20px] text-slate-800 font-semibold dark:text-[#CCCCCC]'>
						The Future of AI and Developers
					</p>
				</div>
				<Tag tag='Advice' mini={true} />
			</div>
		</div>
	);
};

export default Post;
