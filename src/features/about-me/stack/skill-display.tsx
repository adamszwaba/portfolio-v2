import { StackItem } from "./stack-item";

const SkillDisplay = (stackItem: StackItem) => {
  const width = {
    beginner: "1/4",
    intermediate: "1/2",
    advanced: "3/4",
    expert: "full",
  }[stackItem.level];
  return (
    <div className="flex flex-col">
      <h4 className="font-bold">{stackItem.name.toUpperCase()}</h4>
      <div className="mt-auto h-2 overflow-hidden rounded-full bg-gray-700">
        <div className={`h-full bg-green-500 w-${width}`} />
      </div>
      <p className="text-xs">{stackItem.level}</p>
    </div>
  );
};

export default SkillDisplay;
