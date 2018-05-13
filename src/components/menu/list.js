// 菜单数据
export const list = [
  {
    key: "a",
    value: "基础组件",
    children: [
      { key: "table", value: "表格", link: "/base/table" },
    ]
  },
  {
    key: "d",
    value: "菜单二",
    children: [
      {
        key: "e",
        value: "菜单二1",
        children: [
          { key: "q1", value: "菜单二一1", link: "/a/b/f" },
          { key: "w1", value: "菜单二一2", link: "/a/b/g" },
          { key: "e1", value: "菜单二一3", link: "/a/b/h" }
        ]
      },
      { key: "f", value: "菜单二2", link: "/a/b/j" }
    ]
  }
];
