import React from 'react';
import ImageOne from '../images/videographer1.webp';
import ImageTwo from '../images/videographer2.jpg';

const Content = () => {
	return (
		<>
			<div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
				<img
					src={ImageOne}
					alt="videographer"
					className="h-full rounded mb-10 shadow"
				/>
				<div className="flecx flex-col justify-center items-center">
					<h2 className="text-2xl mb-2"> Wedding Videography, done right.</h2>
					<p className="mb-2">
						This February, we're offering half price on all bookings.
					</p>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
				<img
					src={ImageTwo}
					alt="WebP rules."
					className="h-full rounded mb-10 shadow"
				/>
				<div className="flecx flex-col justify-center items-center">
					<h2 className="text-2xl mb-2">
						Half price!! <strike>€1400</strike> €700!!!
					</h2>
					<p className="mb-2">
						This February, we're offering half price on all bookings.
					</p>
				</div>
			</div>
		</>
	);
};

export default Content;
