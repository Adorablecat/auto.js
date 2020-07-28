/*
 * @Descripttion: 局部功能测试
 * @version: 
 * @Author: Arley Lee
 * @@mail: mingleilee@126.com
 * @Contact(weChat,QQ): 10812152
 * @Date: 2019-11-18 11:46:48
 * @LastEditors: Arley Lee
 * @LastEditTime: 2019-11-25 09:19:05
 */

auto.waitFor();
// toast("topo-test");
/*
    // 返回按钮
// var backPage = className("android.widget.imageButton");
// log(backPage);
// click(84,84);
// sleep(1500);
// click(84,84);
*/
/*滑动模块
className("android.support.v7.widget.RecyclerView").scrollForward();
log("has clicked");
*/
/* 知乎粉丝  底部测试
*/

// toast("测试开始 ");

var w = id("text").findOne(3000);
sleep(500);
if (w != null) {
    log('zai');
} else {
    
    //否则提示没有找到
    log("meiyou");
    toast("没有找到日志图标");
}

// if(text("没有更多内容").exists()){
//     toast("没有更多内容");
// }
sleep(1000)
textContains("没有更多内容").waitFor();

