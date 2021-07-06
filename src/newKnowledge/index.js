/**
 * 在同步函数中使用
 */
//生成器函数
function* test() {
  console.log(11111);
  yield "testtttt1111";

  console.log(22222);
  yield "testtttt2222";

  console.log(33333);
  yield "testtttt3333";

  console.log(44444);
  yield "testtttt4444";
}

//迭代器
const iterator = test();

//使用迭代器
const res = iterator.next();

// ==>>> { value: 'testtttt1111', done: false } res
// console.log(res, "res");

iterator.next();
iterator.next();
iterator.next();
const res5 = iterator.next();

// ==>>> { value: undefined, done: true } res5
console.log(res5, "res5");

/**
 *
 * 用在异步函数中
 */
function* fakeRequest() {
  const result = yield new Promise((resolve) => {
    setTimeout(() => {
      resolve("得到结果啦！！！！");
    }, 3000);
  });

  console.log(result, "result");
}

const iteraRequest = fakeRequest();

iteraRequest.next().value.then((res) => {
  console.log(res, "res");
  iteraRequest.next(res);
});
