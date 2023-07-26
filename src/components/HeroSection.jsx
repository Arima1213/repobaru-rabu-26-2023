import React from 'react';

function HeroSection() {
	return (
		<div id="hero" className="flex items-center justify-center flex-col py-20">
			<div className="text-center">
				<h1 className="sm:text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold">
					ARI MAHENDRA FAUZI
				</h1>
				<p className="text-md md:text-xl max-w-2xl mb-3 text-gray-600 dark:text-gray-300">

				I am a versatile and driven individual with a profound passion for UI Design, Web Development, and Front-end Web Programming. My commitment to excellence, combined with my technical prowess, makes me a valuable asset in any project or team. I look forward to taking on new challenges and making a positive impact on the digital landscape.
				{' '}
				</p>
				<a
					href="#works"
					className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md "
				>
					See Works
				</a>
			</div>
		</div>
	);
}

export default HeroSection;
