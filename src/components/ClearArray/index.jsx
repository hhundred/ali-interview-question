import { useEffect } from 'react';

function useArrayCleanup(array, cleanupFunction) {
  useEffect(() => {
    return () => {
      cleanupFunction(array);
    };
  }, [array, cleanupFunction]);
}

// 使用示例
export default function ClearArray(){
  const myArray = [1, 2, 3];

  // 定义清理函数
  const cleanupFunction = (array) => {
    console.log('Array is about to be cleaned up:', array);
    // 在这里执行你的清理操作
  };

  // 使用自定义 Hook
  useArrayCleanup(myArray, cleanupFunction);

  // 其他组件逻辑
  return (
    // JSX
    <>
    
    </>
  )
}
