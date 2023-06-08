import React from 'react'
import { UserButton } from '@clerk/nextjs'

const protectedPage = () => {
  return (
    <div>
        <p>
        protectedPage
        </p>
        <UserButton /> 
    </div>
  )
}

export default protectedPage