"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import personalized from "../data/personalized.jpg"

const musicContent = [
  {
    title: "Discover New Music",
    description:
      "Dive into a world of new sounds and fresh tracks. Our platform brings you the latest releases from emerging artists and established stars. Stay ahead of the curve and enrich your playlist with the best music from around the globe.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
        Discover New Music
      </div>
    ),
  },
  {
    title: "Personalized Playlists",
    description:
      "Experience music tailored just for you. Our platform creates personalized playlists based on your listening habits and preferences. Whether you're in the mood for something upbeat or mellow, we've got you covered.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src= {personalized}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="personalized playlist demo"
        />
      </div>
    ),
  },
  {
    title: "Live Concert Streams",
    description:
      "Catch live performances from your favorite artists right from the comfort of your home. Our platform brings you high-quality streams of concerts and exclusive events, ensuring you never miss a beat.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--yellow-500))] flex items-center justify-center text-white">
        Live Concert Streams
      </div>
    ),
  },
  {
    title: "Music News and Reviews",
    description:
      "Stay updated with the latest happenings in the music world. Our platform provides you with news, reviews, and insights on the newest releases, industry trends, and more. Be the first to know and get in-depth analysis from our experts.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--teal-500))] flex items-center justify-center text-white">
        Music News and Reviews
      </div>
    ),
  },
];


const WhyChooseUs = () => {
  return (
    <div>
      <StickyScroll content={musicContent} />
    </div>
  )
}

export default WhyChooseUs
