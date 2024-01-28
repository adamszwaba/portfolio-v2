const Logo = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 60 90" {...props}>
      <circle cx="0" cy="24.97" r="2.22" className="fill-teal-200" />
      <circle cx="17.33" cy="16.19" r="1.04" className="fill-teal-200" />
      <circle cx="26.04" cy="28.66" r="1.75" className="fill-teal-200" />
      <circle cx="20.12" cy="49.80" r="1.5" className="fill-teal-200" />
      <circle cx="35.23" cy="79.41" r="2.33" className="fill-teal-200" />
      <circle cx="6.43" cy="84.52" r="1.57" className="fill-teal-200" />
      <circle cx="12.48" cy="57.63" r="1.71" className="fill-teal-200" />
      <circle cx="51.90" cy="15.10" r="0.54" className="fill-teal-200" />
      <circle cx="55.69" cy="19.42" r="0.66" className="fill-teal-200" />
      <circle cx="55.45" cy="31.00" r="0.93" className="fill-teal-200" />
      <circle cx="52.96" cy="42.14" r="0.92" className="fill-teal-200" />
      <circle cx="49.25" cy="44.73" r="0.61" className="fill-teal-200" />

      <line
        x1="0"
        y1="24.97"
        x2="17.33"
        y2="16.19"
        strokeWidth="1"
        className="dark:stroke-slate-100 stroke-slate-300"
      />
      <line
        x1="17.33"
        y1="16.19"
        x2="26.04"
        y2="28.66"
        className="dark:stroke-slate-100 stroke-slate-300"
        strokeWidth="1"
      />
      <line
        x1="26.04"
        y1="28.66"
        x2="20.12"
        y2="49.80"
        className="dark:stroke-slate-100 stroke-slate-300"
        strokeWidth="1"
      />
      <line
        x1="20.12"
        y1="49.80"
        x2="35.23"
        y2="79.41"
        className="dark:stroke-slate-100 stroke-slate-300"
        strokeWidth="1"
      />
      <line
        x1="35.23"
        y1="79.41"
        x2="6.43"
        y2="84.52"
        className="dark:stroke-slate-100 stroke-slate-300"
        strokeWidth="1"
      />
      <line
        x1="6.43"
        y1="84.52"
        x2="12.48"
        y2="57.63"
        className="dark:stroke-slate-100 stroke-slate-300"
        strokeWidth="1"
      />
      <line
        x1="12.48"
        y1="57.63"
        x2="0"
        y2="24.97"
        className="dark:stroke-slate-100 stroke-slate-300"
        strokeWidth="1"
      />
      <line
        x1="26.04"
        y1="28.66"
        x2="55.53"
        y2="26.32"
        className="dark:stroke-slate-100 stroke-slate-300"
        strokeWidth="1"
      />
      <line
        x1="55.53"
        y1="26.32"
        x2="51.90"
        y2="15.10"
        className="dark:stroke-slate-100 stroke-slate-300"
        strokeWidth="1"
      />
      <line
        x1="51.90"
        y1="15.10"
        x2="55.69"
        y2="19.42"
        className="dark:stroke-slate-100 stroke-slate-300"
        strokeWidth="1"
      />
      <line
        x1="55.69"
        y1="19.42"
        x2="55.45"
        y2="31.00"
        className="dark:stroke-slate-100 stroke-slate-300"
        strokeWidth="1"
      />
      <line
        x1="55.45"
        y1="31.00"
        x2="52.96"
        y2="42.14"
        className="dark:stroke-slate-100 stroke-slate-300"
        strokeWidth="1"
      />
      <line
        x1="52.96"
        y1="42.14"
        x2="49.25"
        y2="44.73"
        className="dark:stroke-slate-100 stroke-slate-300"
        strokeWidth="1"
      />
    </svg>
  )
}

export default Logo
