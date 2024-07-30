'use client';
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
import { Button } from "./ui/moving-border";

export function FeaturedWebinars() {

    const featuredWebinars = [
        {
          title: "Discover Weekly",
          description:
            "A personalized playlist updated every week with new tracks tailored to your music taste.",
          link: "https://yourmusicwebsite.com/discover-weekly",
        },
        {
          title: "Live Sessions",
          description:
            "Watch live performances from top artists around the world, streamed directly to your device.",
          link: "https://yourmusicwebsite.com/live-sessions",
        },
        {
          title: "Top Charts",
          description:
            "Stay updated with the latest trending songs and albums across various genres.",
          link: "https://yourmusicwebsite.com/top-charts",
        },
        {
          title: "Artist Spotlight",
          description:
            "Discover new and emerging artists featured every week, with exclusive interviews and performances.",
          link: "https://yourmusicwebsite.com/artist-spotlight",
        },
        {
          title: "Music News",
          description:
            "Get the latest updates on new releases, industry news, and music events happening around the world.",
          link: "https://yourmusicwebsite.com/music-news",
        },
        {
          title: "Genre Explorer",
          description:
            "Explore music from different genres and discover tracks that suit your mood and style.",
          link: "https://yourmusicwebsite.com/genre-explorer",
        },
      ];
      

  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
          FEATURED WEBINARS
        </h2>
        <p className="mt-2 text-3xl leading-8  font-extrabold tracking-tight text-white sm:text-4xl">
          Enhance your music journey
        </p>
      </div>
      <div className="mt-10">
        {/* <HoverEffect items={featuredWebinars} /> */}
        <HoverEffect items={featuredWebinars.map(webinar => {
            return {
                title: webinar.title,
                description: webinar.description,
                link: webinar.link
            }
        })} />
      </div>

      <div className="mt-20 text-center">
          <Link href="/courses">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              View All Webinars
            </Button>
          </Link>
        </div>
      {/* <HoverEffect items={projects} /> */}
    </div>
  );
}
export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
