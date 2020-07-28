/*
 * @Descripttion: 
 * @version: 
 * @Author: Arley Lee
 * @@mail: mingleilee@126.com
 * @Contact(weChat,QQ): 10812152
 * @Date: 2019-11-25 09:19:28
 * @LastEditors: Arley Lee
 * @LastEditTime: 2019-11-25 11:14:05
 */

auto.waitFor();

var  message = "优秀~";

// 点击 话题 首页 评论
// click(1314,2320);


// 滑动组块

// className("android.support.v7.widget.RecyclerView").scrollForward();
// sleep(500);
// className("android.support.v7.widget.RecyclerView").scrollBackward();
sleep(1500);
var wComment = id("text").findOne(3000);
log(wComment);
if (wComment != null) {
  log(wComment != true);
  log("存在");
} else {
  log("不存在");
}

wCommentOne()

function wCommentOne() {
  log("wCommentOne");
}



while (wComment != true){
  log(wComment);
  sleep(500);
  var uComment = id("comment").find();
  // 获得当前屏幕评论组
  var eComment = uComment.length - 1;
  log(eComment);
  log("wComment ed");
  sleep(1000);
  for (var i = 0; i < eComment;i++){
    var idx = i;
    var tvComment = uComment[i];
    if (tvComment){
      // id("comment").findOne().click();
      tvComment.click();
      sleep(500);
      // 输入框文字
      setText(message);
      // click(1349,1342);
      sleep(1000);
      click(853, 536);
      sleep(800);
    }
    log(idx);
    if (idx == eComment-1){
      if (wComment != null){
        log("底部");
        break;
      }
      className("android.support.v7.widget.RecyclerView").scrollForward();
      sleep(2500);
    }
    
  }
}
/*
// 话题评论作者
// 评论页面 评论框点击
id("comment_status_layout_view").findOne().click();
// 输入框文字
setText(message);
// 发送文本消息
click(1357,1335);
*/
// 休眠及评论窗口返回
// sleep(1500);
// className("android.widget.ImageButton").desc("返回").findOne().click();