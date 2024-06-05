import React from 'react';

const Tag = ({tag, mini}) => {
	return (
		<div
			className={`${
				mini ? 'rounded-l-[1px] pl-1.5 pr-2.5' : 'rounded-l-sm pl-2 pr-3'
			} py-0.5 rounded-r-full self-start flex items-center justify-center bg-[#FFD600]/60 dark:bg-[#525252]/60`}>
			<p
				className={`${
					mini ? 'text-[10px] font-thin' : 'text-[14px] font-extralight'
				} text-slate-900 dark:text-[#CCCCCC]`}>
				{tag}
			</p>
		</div>
	);
};

export default Tag;
