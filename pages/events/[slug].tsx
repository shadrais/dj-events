import React from 'react'
import { useRouter } from 'next/router'

const Event = () => {
    const router = useRouter()
    
  return (
    <div>Event {router.query.slug}</div>
  )
}

export default Event