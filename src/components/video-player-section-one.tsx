"use client"
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import playIcon from '../../public/assets/play-button-svg.svg';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const VideoPlayerSectionOne = () => {
	const videoUrls = [
		'https://firebasestorage.googleapis.com/v0/b/uptime-videos.appspot.com/o/section-one%2Fuptime-english.mp4?alt=media&token=b8d3124d-f48b-4487-8ae0-9c689a6d05af',
		'https://firebasestorage.googleapis.com/v0/b/uptime-videos.appspot.com/o/section-one%2Fuponline-method.mp4?alt=media&token=2eeeb2f5-a092-4f95-b9c5-a1465ffbdb82',
		'https://firebasestorage.googleapis.com/v0/b/uptime-videos.appspot.com/o/section-one%2Fthe-uponline.mp4?alt=media&token=0fe12784-4cbd-4c88-bd57-40a52ea4a058'
	];

	const [indexUrlToWatch, setIndexUrlToWatch] = useState({
		rightIndex: 0,
		mainIndex: 2,
		leftIndex: 1
	});

	const [isVideoReady, setIsVideoReady] = useState(false);

	useEffect(() => {
		setIsVideoReady(true);
	}, []);

	return (
		<div className="flex gap-12 items-center flex-col py-8 relative">
			<div className="uptime-ellipse-blue absolute top-20 right-20 -z-20" />
			<div className="uptime-ellipse-blue absolute top-40 right-20 -z-20" />
			<div className="flex gap-6 items-center justify-center w-full mx-64">
				<div className="w-3/4 rounded-3xl overflow-hidden relative">
					{isVideoReady && (
						<ReactPlayer
							url={videoUrls[indexUrlToWatch.mainIndex]}
							controls
							width="100%"
							height="100%"
						/>
					)}
				</div>
			</div>

			<div className='flex relative justify-around'>
				<div className="uptime-ellipse-blue absolute -top-20 -left-40 -z-20" />
				<div className="uptime-ellipse-blue absolute -top-20 -left-40 -z-20" />
				<div className="uptime-ellipse-blue absolute -bottom-40 -right-40 -z-20" />
				<div className="uptime-ellipse-blue absolute -bottom-40 -right-40 -z-20" />
				<div className="bg-black lg:h-[12rem] xl:h-[16rem] 2xl:h-[24rem] rounded-3xl relative overflow-hidden w-[40%]">
					{isVideoReady && (
						<ReactPlayer
							url={videoUrls[indexUrlToWatch.leftIndex]}
							className="max-w-full max-h-full"
							width="100%"
							height="100%"
							muted
						/>
					)}
					<div className="absolute inset-0 flex items-center justify-center">
						<Image
							src={playIcon}
							alt="Play Icon"
							className="w-16 h-16 cursor-pointer transition-transform duration-150 ease-in-out hover:scale-110 active:scale-95 active:shadow-lg"
							onClick={() => {
								setIndexUrlToWatch(prev => ({
									...prev,
									leftIndex: prev.mainIndex,
									mainIndex: prev.leftIndex,
								}));
							}}
						/>
					</div>
				</div>

				<div className="bg-black lg:h-[12rem] xl:h-[16rem] 2xl:h-[24rem] rounded-3xl relative overflow-hidden w-[40%]">
					{isVideoReady && (
						<ReactPlayer
							url={videoUrls[indexUrlToWatch.rightIndex]}
							className="max-w-full max-h-full"
							width="100%"
							height="100%"
							muted
						/>
					)}
					<div className="absolute inset-0 flex items-center justify-center">
						<Image
							src={playIcon}
							alt="Play Icon"
							className="w-16 h-16 cursor-pointer transition-transform duration-150 ease-in-out hover:scale-110 active:scale-95 active:shadow-lg"
							onClick={() => {
								setIndexUrlToWatch(prev => ({
									...prev,
									rightIndex: prev.mainIndex,
									mainIndex: prev.rightIndex,
								}));
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoPlayerSectionOne;
