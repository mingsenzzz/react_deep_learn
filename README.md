/\_
需要复用的组件的单独打包的应用
1.src 下面的文件是需要打包的组件。  
2.调试时，可以在/demo/app.js 中开发，调试。  
3.在 demo/app 中开发组件时，可以使用 antd 中的组件，打包时，已经做了处理，不将 antd 打包出去。但是，使用时请查看（注意 1）

\_/

//注意  
1.如果组件中使用了 antd，则需要在引用该组件的应用中，安装 antd，并且引用样式 21.
