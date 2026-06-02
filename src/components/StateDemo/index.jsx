import React,{ useState} from 'react'
import LoopComponent from '../LoopComponent'
import './style.scss'
import data from '../../state/loopData'

function StateDemo(props) {
  const [count,setCount]= useState(0)
  const [time,setTime] = useState(10)
  const [list,setList] =useState([
    {
      id:1,
      txt:'银渐层'
    },
    {
      id:2,
      txt:'蓝猫'
    },
  ])  
  const deleteItem = (id)=>{
    let newList = list.filter(item=>{
      return item.id!==id
    })
    setList(newList)
  }

  return (
    <div>
      <h3>useState的使用方式</h3>
      <h5>建议使用回调函数，入参preState，并return新state</h5>
      <p>{count}</p>
      <button onClick={()=>{
        setCount((preState)=>{
          return preState+1
        })
      }}>点我加一</button>
      <hr />
      <h1>倒计时：{time}</h1>
      <button disabled={time<10}
        onClick={()=>{
          const timer = setInterval(()=>{
            setTime((pre)=>{
              if(pre===0){
                clearInterval(timer)
                return 0
              }else{
                return pre-1
              }
            })
          },1000)
      }}>点我开始倒计时</button>
      <hr />
      <input type="text" placeholder='请输入内容' onKeyUp={(e)=>{
        if(e.keyCode===13){
          console.log(Date.now(),new Date());
          setList([...list,{id:Date.now(),txt:e.currentTarget.value}])
          e.currentTarget.value = ''
        }
      }}/>
      <ul>
        {list.map(item=>{
          return <li key={item.id}>{item.txt} <button onClick={()=>deleteItem(item.id)}>删除</button></li>
        })}
      </ul>
      <hr />
      <p className='loopTxt'>这里是又大又圆的世界</p>
      {data.filter(item=>{return item.parentid===""}).map(item=>{
        return <LoopComponent key={item.id} {...item} />
      })}
    </div>

  )
}

export default StateDemo