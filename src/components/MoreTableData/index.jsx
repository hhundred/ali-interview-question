import React from 'react';
import { FixedSizeList as List } from 'react-window';
// react-window：一个轻量级的虚拟滚动库，适合处理大型列表和表格。
// 虚拟滚动技术（又称虚拟列表、虚拟渲染）
// 只渲染当前视窗中可见的数据行，而不是一次性渲染所有数据。这种方法可以显著提高渲染性能。
const Row = ({ index, style }) => (
  <div style={style}>Row {index}</div>
);
const data = [{
  "name":"hh",
  "age":18
},{
  "name":"gg",
  "age":11
},{
  "name":"hh",
  "age":18
},{
  "name":"gg",
  "age":11
},{
  "name":"hh",
  "age":18
},{
  "name":"gg",
  "age":11
}
]
const MoreTableData = () => (
  <List
    height={400} // 表格的高度
    itemCount={data.length}
    itemSize={35} // 每一行的高度
    width={800} // 表格的宽度
  >
    {Row}
  </List>
);
export default MoreTableData;