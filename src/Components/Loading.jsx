import React from 'react';

const Loading = () => {
	return (
		<div className='pt-6 h-[124vh] grid grid-cols-3 grid-rows-1 gap-x-16 self-center justify-items-start'>
			<div className='z-10 col-start-1 row-start-1 col-span-3 flex flex-col gap-5'>
				<div className='bg-[#525252]/40 rounded-[18px] w-[636px] h-[458px] overflow-hidden dark:bg-[#525252]/40 animate-pulse'></div>
				<div className='flex flex-col gap-3 px-2'>
					<div className='flex flex-col gap-2'>
						<div className='h-6 w-11/12 rounded-full bg-slate-800 dark:bg-[#525252]/40 animate-pulse'></div>
						<div className='h-4 w-2/3 rounded-full bg-slate-500 dark:bg-[#525252]/40 animate-pulse'></div>
					</div>
				</div>
			</div>
			<div className='z-10 col-start-3 row-start-1 flex flex-col gap-16'>
				<div className='flex flex-col gap-2'>
					<div className='bg-slate-200/60 overflow-hidden rounded-[12px] w-[340px] h-[240px] dark:bg-[#525252]/40 animate-pulse'></div>
					<div className='h-4 w-11/12 rounded-full bg-slate-800 dark:bg-[#525252]/40 animate-pulse'></div>
				</div>
				<div className='flex flex-col gap-2'>
					<div className='bg-slate-200/60 overflow-hidden rounded-[12px] w-[340px] h-[240px] dark:bg-[#525252]/40 animate-pulse'></div>
					<div className='h-4 w-11/12 rounded-full bg-slate-800 dark:bg-[#525252]/40 animate-pulse'></div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
