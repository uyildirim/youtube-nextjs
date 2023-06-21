import Button from '@/src/components/button/Button';
import React from 'react'

export default function page({params}) {
    console.log(params);
  return (
    <div>
      <h1>{params.category}</h1>
      <div>
        <div>
          <h1>TEst</h1>
          <p>Dist</p>
          <Button text="See More" url="#" />
        </div>
      </div>
    </div>
  )
}
