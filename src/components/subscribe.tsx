import React from 'react'
import { IoMailUnreadOutline } from 'react-icons/io5'

export default function Subscribe() {
  const [completed, setCompleted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault()
    setLoading(true)
    const data = new FormData(event.target as HTMLFormElement)

    try {
      await fetch(`${process.env.EMAIL_SUBSCRIBE_URL}?address=${data.get('email')}&list=newsletter@gegia.dev`)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
      setCompleted(true)
    }
  }

  if (completed) {
    return (
      <div className="flex justify-center text-center mx-auto font-mono">
        Thanks! Please check your inbox to confirm your subscription!
      </div>
    )
  }

  return (
    <div className="flex flex-col mx-auto">
      <div className="flex">
        <div className="mr-0 sm:mr-20">
          <p className="text-3xl font-bold">Let's chat about coding, business, learning, and teaching.</p>
          <p className="mt-4 text-lg text-gray-500">
            I send articles and thoughts occasionally and love to have conversations with folks. Lots of people like
            them, and I'd love to learn what you think as well. You can always unsubscribe.
          </p>
        </div>
        <div className="p-8">
          <IoMailUnreadOutline className="text-7xl text-gray-500" />
        </div>
      </div>
      <div className="mt-10">
        <form onSubmit={onSubmit} className="flex items-end justify-items-stretch space-x-8">
          <Input type="text" name="name" placeholder="John doe" label="Name" required />
          <Input type="email" name="email" placeholder="john@doe.com" label="Email" required />
          <div>
            <button disabled={loading} className="py-4 px-8 rounded font-mono text-white bg-indigo-500">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  )
}

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string
}

function Input(props: InputProps) {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex justify-between mb-2">
        <label className="font-mono">{props.label}</label>
        {/* <label className='font-mono text-sm text-red-500'>Required</label> */}
      </div>
      <input className="border rounded p-4 font-mono" {...props} />
    </div>
  )
}
