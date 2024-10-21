import { experience } from "@/features/about-me/experience/experience";
import ExperienceSection from "@/features/about-me/experience/experience-section";
import Image from "next/image";
import { stack } from "@/features/about-me/stack/stack";
import SkillsSection from "@/features/about-me/stack/skills-section";

export default function AboutMe() {
  return (
    <div className="max-w-4xl mx-auto my-12 p-3">
      <div className="not-prose mb-6 flex items-center space-x-4 justify-between rounded-lg bg-gray-700 p-3  dark:bg-white shadow-lg shadow-gray-700 dark:shadow-white">
        <div>
          <h1 className="text-xl sm:text-3xl font-bold text-gray-100 dark:text-gray-800">
            @Adam Szwaba
          </h1>
          <p className="text-gray-300 dark:text-gray-500 text-xs sm:text-lg">
            Typescript & Go fullstack dev | Team leader
          </p>
        </div>
        <Image
          alt="Avatar"
          className="h-16 w-16 rounded-full object-cover shadow-slate-700 shadow-sm"
          height="64"
          width="64"
          src="/profile.jpg"
        />
      </div>
      <article className="text-gray-500">
        <header>
          <h2 className="mb-2 text-2xl font-bold text-gray-600">About Me</h2>
        </header>
        <section className="mb-6">
          <p className="mb-4">
            I&apos;m famously bad at self promotion, so I&apos;ll keep it short
            and to the point: whether you need a full stack dev or a team lead
            (or both!), I&apos;ve probably done it. Due to my extensive
            experience in software houses, where I worked on one demanding
            project after another, as well as every self-made freelance,
            fullstack project I&apos;ve made, you can be sure I&apos;ll be there
            for you, your team and your product to deliver the stuff you need
            and guide you through the whole development process.
          </p>
          <p className="mb-4">
            Wow, that really sounded like a commercial blurb. Anyway - I believe
            in simplicity and honesty, two principles that govern the way I lead
            projects and teams. If you would like to learn more, feel free to
            reach out, and also, hey, here&apos;s a list of my skills and
            experiences:
          </p>
        </section>
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-bold text-gray-600">Experience</h2>
          {experience.map((ex) => (
            <ExperienceSection key={ex.company} {...ex} />
          ))}
        </section>
        <section className="mb-6">
          <SkillsSection {...stack} />
        </section>
        <section className="mb-6">
          <h3 className="mb-2 text-xl font-bold">Contact Me</h3>

          <a href="mailto:szwaba.adam@gmail.com" className="text-teal-500">
            szwaba.adam@gmail.com
          </a>
        </section>
      </article>
    </div>
  );
}
