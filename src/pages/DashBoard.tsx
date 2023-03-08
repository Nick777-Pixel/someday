import React from 'react'
import History from '../components/History'

export default function DashBoard() {
  return (
    <div className='max-w-4xl p-5 font-quicksand mx-auto'>
        <h1 className='font-bold text-2xl'>My Message History</h1>
        <History/>
    </div>
  )
}
