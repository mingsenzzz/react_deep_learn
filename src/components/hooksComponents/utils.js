export function makeData(number) {
  let arr = [];
  for (let index = 0; index < number; index++) {
    arr = [
      ...arr,
      {
        name: "测试水水水水是",
        key: index,
        age: index,
        address: `西湖区湖底公园1号${index}`,
      },
    ];
  }
  return arr;
}
