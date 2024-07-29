"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">

      <h2 className="text-3xl font-bold z-10 text-center mb-10">Hear Our Harmony: Voices of Success</h2>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
    {
      quote:
        "This platform has completely transformed the way I discover new music. The personalized playlists are spot on, and I've found so many new favorite artists!",
      name: "Alex Johnson",
      title: "Music Enthusiast",
    },
    {
      quote:
        "I love being able to watch live concerts from my favorite bands without leaving home. The quality is amazing, and it feels like I'm right there in the crowd.",
      name: "Jamie Lee",
      title: "Concert Lover",
    },
    {
      quote: "The music news and reviews section keeps me up to date with all the latest trends. It's my go-to source for industry insights.",
      name: "Taylor Smith",
      title: "Music Blogger",
    },
    {
      quote:
        "As an artist, having a platform that supports emerging talents is invaluable. I've gained so much exposure and connected with a wider audience.",
      name: "Chris Martin",
      title: "Independent Musician",
    },
    {
      quote:
        "The user interface is incredibly intuitive. Navigating through different genres and discovering new tracks has never been this easy and enjoyable.",
      name: "Morgan Brown",
      title: "User Experience Designer",
    },
  ];

