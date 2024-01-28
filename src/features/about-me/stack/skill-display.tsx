import { StackItem } from './stack-item'
import { clsx } from 'clsx'

const SkillDisplay = (stackItem: StackItem) => {
  return (
    <div className="flex flex-col">
      <h4 className="font-bold truncate text-sm mb-1">{stackItem.name.toUpperCase()}</h4>
      <div className="h-2 overflow-hidden rounded-full dark:bg-gray-600 bg-gray-300">
        <div
          className={clsx('h-full bg-green-500 rounded', {
            'w-full': stackItem.level === 'expert',
            'w-3/4': stackItem.level === 'advanced',
            'w-1/2': stackItem.level === 'intermediate',
            'w-1/4': stackItem.level === 'beginner',
          })}
        />
      </div>
      <p className="mt-1 text-xs uppercase text-white">{stackItem.level}</p>
    </div>
  )
}

export default SkillDisplay
