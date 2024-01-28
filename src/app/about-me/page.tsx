import { experience } from '@/features/about-me/experience/experience'
import ExperienceSection from '@/features/about-me/experience/experience-section'
import Image from 'next/image'
import { stack } from '@/features/about-me/stack/stack'
import SkillsSection from '@/features/about-me/stack/skills-section'

export default function AboutMe() {
  return (
    <div className="max-w-4xlp-6 mx-auto my-12 p-6">
      <div className="not-prose mb-6 flex items-center space-x-4 rounded-lg bg-gray-700 p-4 shadow-lg dark:bg-white">
        <Image
          alt="Avatar"
          className="h-16 w-16 rounded-full object-cover"
          height="64"
          src="/profile.jpg"
          style={{
            aspectRatio: '64/64',
            objectFit: 'cover',
          }}
          width="64"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-100 dark:text-gray-800">@Adam Szwaba</h1>
          <p className="text-gray-300 dark:text-gray-500">
            Web Developer | Tech Enthusiast | Writer
          </p>
        </div>
      </div>
      <article className="text-gray-500">
        <header>
          <h2 className="mb-2 text-2xl font-bold text-gray-600">About Me</h2>
        </header>
        <section className="mb-6">
          <p className="mb-4">
            I&apos;m a seasoned software engineer based in Wrocław, Poland, specializing in
            developing high-quality websites and applications. Over 5 years of professional
            experience, I have worked with a wide range of clients, from startups to large
            corporations, for projects concerning fields such as finance, education, petrochemicals,
            and more. It quickly turned out I have a talent for web development, and I promptly
            became a senior developer.
          </p>
          <p className="mb-4">
            I&apos;m currently working as a freelance web developer, helping businesses to improve
            their online presence and reach their goals.
          </p>
          <p className="mb-4">
            I have a passion for building intuitive, dynamic user experiences, and first and
            foremost taking care of the current and future developer. I always strive to write
            clean, maintainable code, and I&apos;m a strong advocate for the best UX out there.
            Whether you&apos;re looking to build a new web app from scratch, or improve an existing
            one, I&apos;d love to help you out!
          </p>
        </section>
        <section className="mb-6">
          <h2 className="mb-2 text-xl font-bold text-gray-600">Experience</h2>
          <p className="mb-4">Here&apos;s a brief overview of my professional experience:</p>
          {experience.map((ex) => (
            <ExperienceSection key={ex.company} {...ex} />
          ))}
        </section>
        <section className="mb-6">
          <SkillsSection {...stack} />
        </section>
        <section className="mb-6">
          <h3 className="mb-2 text-xl font-bold">Contact Me</h3>
          <p className="mb-4">
            I&apos;m always looking for new projects. If you have an idea you&apos;d like to
            discuss, or you&apos;re looking for a developer to join your team, feel free to contact
            me:
          </p>
          <a href="mailto:szwaba.adam@gmail.com" className="text-teal-500">
            szwaba.adam@gmail.com
          </a>
        </section>
      </article>
    </div>
  )
}
