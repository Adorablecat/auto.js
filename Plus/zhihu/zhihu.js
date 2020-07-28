/*
 * @Descripttion: 知乎自动私聊
 * @version: for xiaomi5
 * @Author: Arley Lee
 * @@mail: mingleilee@126.com
 * @Contact(weChat,QQ): 10812152
 * @Date: 2019-11-08 15:43:27
 * @LastEditors: Arley Lee
 * @LastEditTime: 2019-11-21 17:48:29
 */

/*
手动部分：

 选择大V页面

 话题评论区

 自动部分：

 大V粉丝页自动发私信

 评论区自动评论

 某回答点赞人员发私信

 评论区自动对评论发起二次评论

 评论区自动对评论者发私信
 */

 
toast("ArleyLee");

var wait_second = 3; // 界面等待时间：s
var message = "你好~" //设置聊天文本

auto();
auto.waitFor();
/*
// 大v粉丝点击
id("follower_list").findOne().click();
toastLog("大v粉丝已点击");
sleep(wait_second * 1000)
*/

// 点击粉丝私聊
// 粉丝列表当前页
// 获取当前屏幕粉丝头像id
var u = id("avatar").find();
// 获得当前屏幕粉丝个数
var e = u.length-1;
log(e);
var w = id("text").findOne(3000);
log(w);
if (w != null){
  log("存在");
}else {
  log("不存在");
}
className("android.support.v7.widget.RecyclerView").scrollForward();
sleep(500);
className("android.support.v7.widget.RecyclerView").scrollBackward();
// sleep(500);
// 对粉丝个数进行遍历
while (w != true){
  log('while');
  sleep(1500);
  for (var i = 0; i < e; i++) {
    // 局部变量存粉丝头像
    var idx = i;
    var tv = u[i];
    // 如果粉丝头像存在
    if (tv) {
      // 获取头像 屏幕的显示范围
      var tr = tv.bounds();
      // 点击坐标元素
      click(tr.centerX(), tr.centerY());
      // 休眠1.5秒
      sleep(1500);
      // 点击聊天窗口
      id("inbox_btn").findOne().click();
      // 等待1s
      sleep(1000);
      // 点击输入框
      id("input").findOne().click();
      // 输入框文字
      setText(message);
      // 发送文本消息
      // id("send").findOne().click();
      // 休眠及聊天窗口返回
      sleep(1000);
      // 粉丝聊天窗口退出
      click(84, 84);
      // 休眠及返回粉丝列表
      // 输出控制台
      log("点击了" + i + "次");
      sleep(1000);
      back();
      // 睡眠
      sleep(1500);
    }
    log(idx);
    if (idx == e-1) {
      className("android.support.v7.widget.RecyclerView").scrollForward();
      sleep(2500);
    }
  }
}

