import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
	return (
		<div className="bg-white h-screen flex flex-col justify-center items-center">
			<h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-black mb-14">
				Wedding Video Ireland
			</h1>
			<Link className="py-6 px-10 bg-gray-300 rounded-full text-3xl hover:bg-gray-200 transition duration-200 ease-in-out flex items-center animate-bounce">
				Book your date now!
				<svg
					className="w-6 h-6 ml-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
					/>
				</svg>
			</Link>
		</div>
	);
};

export default Hero;
