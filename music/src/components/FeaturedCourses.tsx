"use client";
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { Button } from "./ui/moving-border";
import { BackgroundGradient } from "./ui/background-gradient";
import musictheory from "../data/music_theory.jpg"
import guitarlessons from "../data/Guitar_Lessons.jpg"
import pianolessons from "../data/Piano_Lessons.jpg"
import singinglessons from "../data/Singing_Lessons.jpg"
import musicproduction from "../data/Music_Production.jpg"
import musicbusiness from "../data/Muisc_Business.jpg"
import musichistory from "../data/Music_History.jpg"
import musiccomposition from "../data/Music_Composition.jpg"
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
}

const FeaturedCourses = () => {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);
  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="ext-base text-teal-600 font-semibold tracking-wide uppercase">
          Featured Courses
        </h2>
        <p className="mt-2 text-3xl leading-8  font-extrabold tracking-tight text-white sm:text-4xl">
          Learn with the best
        </p>
      </div>
      {/* provide div with grid classes to show courses here in the form of cards  should be ib typescript form*/}

      <div className="mt-10">
        <div className="grid grid-cols-1 gap-8 mx-[100px] justify-center mt-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCourses.map((course: Course) => (
            <div
              key={course.id}
              className="bg-white dark:bg-zinc-900 rounded-[22px] overflow-hidden shadow-lg"
            >
                <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 md:h-200px">
                    {course.image === "guitarlessons" && <Image src= {guitarlessons} alt={course.image} />}
                    {course.image === "pianolessons" && <Image src= {pianolessons} alt={course.image} />}
                    {course.image === "singinglessons" && <Image src= {singinglessons} alt={course.image} />}
                    {course.image === "musicproduction" && <Image src= {musicproduction} alt={course.image} />}
                    {course.image === "musicbusiness" && <Image src= {musicbusiness} alt={course.image} />}
                    {course.image === "musichistory" && <Image src= {musichistory} alt={course.image} />}
                    {course.image === "musiccomposition" && <Image src= {musiccomposition} alt={course.image} />}
                    {course.image === "musictheory" && <Image src= {musictheory} alt={course.image} />}
        <p className="mt-5 text-xs text-neutral-500 dark:text-neutral-400">
            {course.instructor}
        </p>
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {course.title}
        </p>
 
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {course.description}
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            {course.price}
          </span>
        </button>
      </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="mt-20 text-center">
          <Link href="/courses">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              View all courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
