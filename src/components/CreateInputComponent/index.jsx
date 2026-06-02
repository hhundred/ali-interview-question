import React, {useEffect, useState} from 'react';

// 实现一个input并不改变其原生事件 并添加maxLength, defaultValue, value, onChange
export default function CreateInputComponent(props) {
  let { maxLength, defaultValue, value, onChange } = props || {};
  defaultValue = '123';
  maxLength = 10;
  const [inputValue, setInputValue] = useState(defaultValue);
  
  const changeValue = (e) => {
    setInputValue(e.target.value);
  }

  useEffect(()=>{
    setInputValue(value);
  }, [value]);

  return (
    <div>
    <input value={inputValue} maxLength={maxLength} onChange={onChange ? onChange : changeValue}/>
    </div>
  )
}
