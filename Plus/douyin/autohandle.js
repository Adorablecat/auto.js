/*
 * @Descripttion: 
 * @version: 
 * @Author: Arley Lee
 * @@mail: mingleilee@126.com
 * @Contact(weChat,QQ): 10812152
 * @Date: 2019-11-20 15:13:59
 * @LastEditors: Arley Lee
 * @LastEditTime: 2019-11-21 17:42:20
 */
/*
*功能：
* 自动浏览 浏览时长 15s-50s
* 随机点赞
* 随机评论
*参数：
*设置间隔区间
*加入乱码，符号,随机生产术语
*/
//  手动打抖音
//  随机事件滑动
// x:678 y:1791   x:720 y:470
auto.waitFor();
// 养号参数定义
// 浏览相关 browse
var browse = {};
// 总的浏览时长 browseTime
var browseTime = 3;
// 浏览swipe所用时间 /分钟
var browseSwipeDuration = 500;

// 浏览一个视频的随机时间 /秒
var browseWitingTimeMin = 15;
var browseWitingTimeMax = 50;
var waitingTime = random(browseWitingTimeMin * 1000, browseWitingTimeMax * 1000);

// 浏览时间状态
var browseTimeStatus = true;
var browse = setTimeout(function () {
  browseTimeStatus = false;
  log(browseTimeStatus)
}, browseTime * 1000 * 60);

//是否点赞
var likeStatus = false;

// 点赞间隔时间
var likeTimeMin = 150;
var likeTimeMax = 500;
var likeTime = random(likeTimeMin, likeTimeMax);

browse.like = setTimeout(function () {
  browseTimeStatus = true;
  log(browseTimeStatus);
}, likeTime * 1000);



// 点赞相关
var likeUp = {};
// 红心位置
// left top bottom right
// 1246,1120,1421,1295
// 点击喜欢
likeUp.handleLike = function(){
  click(1270, 1270);
}
// click(1270, 1270);

// 评论相关
//是否点赞
var discussStatus = false;

// 点赞间隔时间
var discussTimeMin = 150;
var discussTimeMax = 500;
var discussTime = random(discussTimeMin, discussTimeMax);

browse.discuss = setTimeout(function () {
  browseTimeStatus = true;
  log(browseTimeStatus);
}, discussTime * 1000);


// 评论语言组
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
  setText(discussMessage[random(0,3)]);
  sleep(2500);
  // 评论发送
  click(1355, 1040);
  sleep(500);
  // 退出评论
  click(897, 386);

} 

// 逻辑：
//   定义浏览时间
//   浏览时间内
//   ->滑动浏览(滑动时长随机)
//   ->根据随机点赞状态点赞(取消点赞)
//   ->根据评论状态随机评论(取消评论状态)

while (browseTimeStatus) {
  swipe(678, 1790, 720, 470, browseSwipeDuration);
  log(waitingTime);
  sleep(waitingTime);
}