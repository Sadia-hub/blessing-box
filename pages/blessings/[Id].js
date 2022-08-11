import React from 'react'
import { useRouter } from 'next/router'

function Id() {

    const router = useRouter()
    const { donation } = router.query

  return (
    <div><h1>Congratulations, You earned 100's of Blessings just in {donation} Rupees</h1></div>
  )
}

export default Id