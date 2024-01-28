import { Experience } from "./experience";

const ExperienceSection = (experience: Experience) => {
  return (
    <>
      <h2 className="mb-2 text-xl font-bold text-gray-400">
        {experience.company} – {experience.role}
      </h2>
      <p className="mb-2 text-gray-500">
        {experience.startDate} - {experience.endDate}
      </p>
      <p className="mb-4">{experience.description}</p>
    </>
  );
};

export default ExperienceSection;
