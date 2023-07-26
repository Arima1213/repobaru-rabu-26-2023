import React from 'react';
import { MdWeb } from 'react-icons/md';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export default [
	{
		title: 'Web Design',
		icon: <MdWeb className="w-full h-full" />,
		description:
			'Web design is the process of creating the visual appearance, structure, and user interactions of a website to deliver an engaging and functional user experience. It involves selecting colors, typography, images, and layouts that align with the websites objectives',
	},
	{
		title: 'Ui Design',
		icon: <FaHandHoldingHeart className="w-full h-full" />,
		description:
			'UI design (User Interface) focuses on crafting graphical and interactive elements that facilitate user interaction with the website, including the creation of buttons, icons, and navigation.',
	},
	{
		title: 'Web Development',
		icon: <VscCode className="w-full h-full" />,
		description:
			'web development encompasses the coding and implementation of the web design into a functional form, using programming languages like HTML, CSS, and JavaScript to ensure the website operates smoothly and responsively across various devices.',
	},
];
