// 菜单数据
export const list = [
  {
    key: "a",
    value: "菜单一",
    children: [
      { key: "b", value: "菜单一1", link: "a/b" },
      {
        key: "c",
        value: "菜单一2",
        children: [
          { key: "q", value: "菜单一一1", link: "a/b/c" },
          { key: "w", value: "菜单一一2", link: "a/b/d" },
          { key: "e", value: "菜单一一3", link: "a/b/e" }
        ]
      }
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
          { key: "q1", value: "菜单二一1", link: "a/b/f" },
          { key: "w1", value: "菜单二一2", link: "a/b/g" },
          { key: "e1", value: "菜单二一3", link: "a/b/h" }
        ]
      },
      { key: "f", value: "菜单二2", link: "a/b/j" }
    ]
  }
];
