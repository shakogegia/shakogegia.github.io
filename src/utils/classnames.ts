import { overrideTailwindClasses } from 'tailwind-override'

export default function classNames(...classes: any[]) {
  return overrideTailwindClasses(classes.filter(Boolean).join(' '))
}
