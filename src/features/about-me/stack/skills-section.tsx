import { Stack } from "./stack";
import SkillDisplay from "./skill-display";

const SkillsSection = (stack: Stack) => {
  return (
    <>
      <h3 className="mb-2 text-xl font-bold text-gray-600">Skills</h3>
      {Object.entries(stack).map(([name, stackItems]) => (
        <div key={name}>
          <h3 className="font-bold capitalize">{name}</h3>
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4">
            {stackItems.map((stackItem) => (
              <SkillDisplay key={stackItem.name} {...stackItem} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default SkillsSection;
