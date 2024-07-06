

import React from 'react'

function CardShimmer() {
  return (
    <div className='flex justify-between'>
      {
              [1, 2, 3, 4].map((item,index) => (
              
                  <>
                  
                      <div key={ index}  className='w-[22%] h-48 mb-4 rounded-lg overflow-hidden bg-zinc-900'>
                         

                      </div>
                  
                  </>
              ) )
      }
    </div>
  )
}

export default CardShimmer
