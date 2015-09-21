## 1.项目介绍
 该项目为控制台订阅功能项目，为react框架的首次使用。
 项目起于 2015.04.10，首次部署时间

## 2.项目结构

    +index.html     //app 启动页面
    +app.css        //转化生成的最终css文件
    +app.bundle.js  //打包压缩后的js文件
    +scss           //scss 样式文件目录
        -app.scss   //主要的scss文件，用于scss 编译
        -...        //其他scss 文件
    +js             //js 文件目录
        -app.js     //React 入口js文件
        +actions    //组件触发事件
        +components //组件jsx文件,all React components, both views and controller-views
        +constants  //事件列表
        +dispatcher //转发器
        +stores     //组件数据操作
        +ui         //自定义UI组件
        +utils      //组件逻辑处理单元
        +webapi     //组件ajax事件


## 3.数据结构
    查看 js/utils/AppDataUtils.js
    









































