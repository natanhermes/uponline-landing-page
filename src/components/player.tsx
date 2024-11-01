"use client";
import ReactPlayer from "react-player";

export const Player = ({ videoUrl }: { videoUrl: string }) => {
    return <ReactPlayer url={videoUrl} width="100%" height="100%" loop playing muted />
}