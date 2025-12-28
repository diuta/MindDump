import React from 'react'
import Useritems from './Useritems'
import Menu from './Menu'

export default function Sidebar() {
  return (
    <div className='w-xs border-r min-h-screen p-4 flex flex-col bg-neutral-900 gap-4 text-white border-neutral-800'>
        <Useritems/>
        <Menu/>
        <div>Log Out</div>
    </div>
  )
}
