"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';

import arrowLeftPlayer from '../../public/assets/arrow-left-player.svg'
import arrowRightPlayer from '../../public/assets/arrow-right-player.svg'
import ReactPlayer from 'react-player';

const VideoPlayerSectionTwo = () => {
	const videoUrls = [
		'https://firebasestorage.googleapis.com/v0/b/uptime-videos.appspot.com/o/section-two%2Fepis%C3%B3dio%201%20-.mp4?alt=media&token=f3605c53-ba08-4281-a9bc-15ab9b79caa9',
		'https://firebasestorage.googleapis.com/v0/b/uptime-videos.appspot.com/o/section-two%2Fepis%C3%B3dio%202-.mp4?alt=media&token=65cb6153-376c-400e-add4-f84571add5b0',
		'https://firebasestorage.googleapis.com/v0/b/uptime-videos.appspot.com/o/section-two%2Fepis%C3%B3dio%203%20-.mp4?alt=media&token=e3ee9c26-5f4e-4774-a6c7-46bf5145f0fa',
		'https://firebasestorage.googleapis.com/v0/b/uptime-videos.appspot.com/o/section-two%2Fepis%C3%B3dio%204%20-.mp4?alt=media&token=007ddf98-2779-448c-9f2b-df209ac6e208',
		'https://firebasestorage.googleapis.com/v0/b/uptime-videos.appspot.com/o/section-two%2Fepis%C3%B3dio%205%20.mp4?alt=media&token=89dcd5a9-de42-4a5f-b0d3-eef1b968abf1',
		'https://firebasestorage.googleapis.com/v0/b/uptime-videos.appspot.com/o/section-two%2Fepis%C3%B3dio%206%20-.mp4?alt=media&token=77e9f429-2c80-4193-af92-e288eb917645',
		'https://firebasestorage.googleapis.com/v0/b/uptime-videos.appspot.com/o/section-two%2Fepis%C3%B3dio%207%20-.mp4?alt=media&token=8752e83d-bc58-4cd1-a334-cd69319d7e64',
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % videoUrls.length);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + videoUrls.length) % videoUrls.length);
	};

	const getLeftVideoIndex = () => {
		return (currentIndex - 1 + videoUrls.length) % videoUrls.length;
	};

	const getRightVideoIndex = () => {
		return (currentIndex + 1) % videoUrls.length;
	};

	const [isVideoReady, setIsVideoReady] = useState(false);

	useEffect(() => {
		setIsVideoReady(true);
	}, []);

	return (
		<div className="flex gap-4 items-center relative overflow-hidden py-8 w-full">
			<div className="lg:h-[12rem] xl:h-[16rem] rounded-r-3xl absolute -left-56 hidden lg:block">
				{isVideoReady && (
					<ReactPlayer
						url={videoUrls[getLeftVideoIndex()]}
						width="100%"
						height="100%"
						muted
					/>
				)}
			</div>

			<div className="flex gap-6 items-center mx-auto px-6">
				{isVideoReady && (
					<>
						<Image src={arrowLeftPlayer} alt="" onClick={handlePrev} className="cursor-pointer" />
						<div className=" lg:h-[20rem] xl:h-[25rem] w-full rounded-3xl">
							<ReactPlayer
								url={videoUrls[currentIndex]}
								controls
								width="100%"
								height="100%"
							/>
						</div>
						<Image src={arrowRightPlayer} alt="" onClick={handleNext} className="cursor-pointer" />
					</>
				)}
			</div>

			<div className="h-72 lg:h-[12rem] xl:h-[16rem] rounded-l-3xl absolute -right-56 hidden lg:block">
				{isVideoReady && (
					<ReactPlayer
						url={videoUrls[getRightVideoIndex()]}
						width="100%"
						height="100%"
						muted
					/>
				)}
			</div>
		</div>
	);
};

export default VideoPlayerSectionTwo;
