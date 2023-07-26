import React from 'react';
import myImg from '../images/hero.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">
				As a Web Developer with expertise in UI/UX, I possess profound knowledge and strong skills in web
				development. Additionally, I have experience in designing several design projects on both mobile and web
				platforms. I have a good understanding of programming languages.Although I don't have
				formal work experience, I previously interned as an IT Support at PT PBJ Company. I am responsible, committed
				to competency in my work, and ready to contribute to the advancement of the company.
				</p>
				<a
					href="mailto:webcifar.com"
					className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
				>
					arima3992@gmail.com
				</a>
			</div>

			<img
				src={myImg}
				alt="ari"
				className="w-full md:w-6/12 rounded-lg object-cover"
			/>
		</div>
	);
}

export default About;
