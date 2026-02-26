import { PropsWithChildren } from 'react'

export default function Container({ children }: PropsWithChildren) {
  return (
    <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
      {children}
    </div>
  )
}
