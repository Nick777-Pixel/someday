import React from 'react'
import Lottie from 'lottie-react'
import mail from "../animations/mail.json"
export default function SentMagicLink() {
  return (
    <div className='max-w-4xl mx-auto p-5 flex flex-col font-quicksand items-center text-center justify-center h-[90vh]'>
      <h1>Magic Link Sent!!! Check your mailbox, make sure to check the spams folder because sometimes mails may end up in spams</h1>
      <Lottie animationData={mail} loop={false} style={{width:400}} />

    </div>
  )
}
