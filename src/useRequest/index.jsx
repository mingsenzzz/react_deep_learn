import React, { useEffect } from "react";
import request from "../request/axios.js";
function useRequest() {
  let cancelToken;
  useEffect(() => {
    const request2 = () => {
      //get请求
      return request({
        url: "/get",
        params: {
          name: "lelez",
          age: 222,
        },
      });
    };
    const request1 = () => {
      //post请求
      return request({
        url: "/post",
        data: {
          name: "yueyuec",
          age: 111,
        },
        method: "post",
      });
    };

    request
      .all([request2(), request1()])
      .then(([res1, res2]) => {
        //当两个请求同时完成时，才执行
        //分别获取请求的结果
        console.log(res1, "res1");
        console.log(res2, "res2");
      })
      .catch((error) => {
        console.log(error, "error");
      });
  }, []);

  const sendRequest = () => {
    request({
      url: "/post",
      method: "post",
      //取消请求的标识
      cancelToken: new request.CancelToken((c) => {
        console.log(c, "ccccc");
        cancelToken = c;
      }),
    }).then((res) => {
      cancelToken = null;
    });
  };

  const cancelRequest = () => {
    //执行取消请求的函数
    // 可以传入错误信息，在响应拦截器、catch函数中获取错误信息
    cancelToken && cancelToken("请求被取消了");
  };
  return (
    <div>
      <span onClick={sendRequest}>发送请求</span>
      <button onClick={cancelRequest}>取消请求</button>
    </div>
  );
}

export default useRequest;
