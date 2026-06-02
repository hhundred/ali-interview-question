const memuData = [
  {
    key: "aliInterview",
    label: "阿里面试题",
  },
  {
    key: "lazyComponent",
    label: "React懒加载组件",
  },
  {
    key: "moreTableData",
    label: "MoreTableData",
  },
  {
    key: "useStateDemo",
    label: "小试牛刀",
    children: [
      {
        key: "/useStateDemo/demoList",
        label: "useState的使用",
      },
      {
        key: "/useStateDemo/cascader",
        label: "省市级联mobile",
      },
      {
        key: "/useStateDemo/createInput",
        label: "利用react实现Input",
      },
      {
        key: "/useStateDemo/uploadImg",
        label: "上传图片",
      },
    ],
  },
  {
    key: "testCss",
    label: "测试CSS",
  },
];
export default memuData;
