import React from 'react'
import Lottie from 'lottie-react'
import mail from "../animations/mail.json"
export default function SentMagicLink() {
  return (
    <div className='max-w-4xl mx-auto p-5 flex items-center justify-center h-[90vh]'>
      <Lottie animationData={mail} loop={false} style={{width:400}} />

    </div>
  )
}
