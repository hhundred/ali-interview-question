import React from 'react'
import data from '../../state/loopData'
import './style.scss'

function LoopComponent({content,id}) {
  return (
    <div className='txt'>
      {content}
      {data.filter(item=>{return item.parentid===id}).map(item=>{
        return <LoopComponent key={item.id} {...item} />
      })}
    </div>
  )
}

export default LoopComponent