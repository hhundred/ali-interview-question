import React,{useState} from 'react'
import cascaderData from '../../utils/cascaderData'
import {CascadePicker,Button } from 'antd-mobile'


export default function Cascader() {
  const [visible, setVisible] = useState(false)
  const [value, setValue] = useState([])
  return (
    <div>
        <Button
        onClick={() => {
          setVisible(true)
        }}
      >
        选择
      </Button>
      <CascadePicker
        options={cascaderData}
        visible={visible}
        onClose={() => {
          setVisible(false)
        }}
        value={value}
        onConfirm={setValue}
        onSelect={(val, extend) => {
          // console.log('onSelect', val, extend.items)
        }}
      >
        {items => {
          if (items.every(item => item === null)) {
            return '未选择'
          } else {
            return items.map(item => item?.label ?? '未选择').join('-')
          }
        }}
      </CascadePicker>
    </div>
  )
}
