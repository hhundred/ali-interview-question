import React,{useRef, useState} from 'react'
import axios from 'axios'

function UploadImg() {
  const fileCtrl = useRef(null)
  const [img,setImg] = useState('')

  const changeHandle=()=>{
    const formData = new FormData()
    // console.log(fileCtrl.current,'123');
    formData.append('file',fileCtrl.current?.files[0])
    axios.post('http://localhost:3003/api/v1/common/file',formData).then(res=>{
      // console.log(res,'res');
      setImg('http://localhost:3003'+res.data.data)
    })
  }

  return (
    <div>
      <h3>图片上传</h3>
      <input type='file' onChange={changeHandle} ref={fileCtrl}/>
      <img src={img} alt="暂无图片" style={{height:450,width:300}}/>
    </div>
  )
}

export default UploadImg