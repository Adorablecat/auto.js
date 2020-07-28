/*
 * @Descripttion:局部测试专用
 * @version: 
 * @Author: Arley Lee
 * @@mail: mingleilee@126.com
 * @Contact(weChat,QQ): 10812152
 * @Date: 2019-11-20 17:45:40
 * @LastEditors: Arley Lee
 * @LastEditTime: 2019-11-21 17:23:33
 */
auto.waitFor();
// var browseTime = 6;
// var browseTimeStatus = true;
// var browse = setTimeout(function () {
//     browseTimeStatus = false;
//     log(browseTimeStatus)
// }, browseTime*1000);
toast("start-");

// id("a_o").findOne().click();
// var aq = id("a_o").findOne();

// 点击坐标元素
// click(1270, 1270);
// 评论相关
// 坐标位置
// click(1342, 1342)
// 评论文本窗坐标
// 588,2204,851,2376
// click(1482, 1527)
// id("bc6").findOne().click();
// desc("表情").findOne().click();
// left top bottom right
// 1246,1120,1421,1295
// click(1332, 1470);
// sleep(1500);
// click(700,2300);
// sleep(500);
// input("input");
// setText("优秀~");
// sleep(2500);

// click(1355,1040);
// sleep(897,386);

// 点赞相关
var likeUp = {};
// 红心位置
// left top bottom right
// 1246,1120,1421,1295
// 点击喜欢

likeUp.handleLike = function () {
  click(1270, 1270);
}
// click(1270, 1270);

// 评论相关
var discussMessage = [
  "优秀~",
  "好球",
  "2333",
  "美~"
]
likeUp.handleDiscuss = function () {
  // 评论左侧坐标位置
  click(1332, 1470);
  sleep(1500);
  // 评论底部
  click(700, 2300);
  sleep(500);
  // 评论文本
  input("input");
  setText(discussMessage[random(0, 3)]);
  sleep(2500);
  // 评论发送
  click(1355, 1040);
  sleep(500);
  // 退出评论
  click(897, 386);
}
likeUp.handleLike();
sleep(1500);
likeUp.handleDiscuss();
