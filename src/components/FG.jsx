import {useRef, useState } from 'react'
import Card from './Card'

function FG() {
    //desc, filesize, closeOrDownload, tagDetails

    const data = [
      {
        desc: 'This is a card description file with details about the card and its contents and the contents of the card.',
        fileSize: '.20mb',
        close: true,
        tag: {isOpen: true,
              tagTitle: 'Upload',
              tagColor: 'green',
             }
      },
      {
        desc: 'This is a card description file with details about the card and its contents and the contents of the card.',
        fileSize: '.20mb',
        close: true,
        tag: {isOpen: false,
              tagTitle: 'Download Now',
              tagColor: '',
             }
      },
      {
        desc: 'This is a card description file with details about the card and its contents and the contents of the card.',
        fileSize: '.20mb',
        close: false,
        tag: {isOpen: true,
              tagTitle: 'Download Now',
              tagColor: 'brown',
             }
      }
    ]

    const ref = useRef(null)

  return (
    <>
      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'> 
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>       
    </>
  )
}

export default FG