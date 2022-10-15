import { NextPage } from 'next'
import React from 'react'

const Events:NextPage = () => {
    const apiCall = async () => {
        const res = await fetch('/api/hello')
        const data = await res.json()
        console.log(data)
    }
  return (
    <>
    <div>Events</div>
    <button onClick={apiCall}>Test</button>
    </>
  )
}

export default Events