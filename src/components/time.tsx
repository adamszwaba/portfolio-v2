import { ComponentProps } from 'react'
import { parseISO, format } from 'date-fns'
import clsx from 'clsx'

type TimeProps = ComponentProps<'time'> & {
  dateTime: NonNullable<ComponentProps<'time'>['dateTime']>
}

const Time = ({ dateTime, className, ...props }: TimeProps) => {
  return (
    <time dateTime={dateTime} className={clsx('mb-2 text-slate-500', className)} {...props}>
      {format(parseISO(dateTime), 'LLLL d, yyyy')}
    </time>
  )
}

export default Time
