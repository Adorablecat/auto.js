/*
 * @Descripttion: 
 * @version: 
 * @Author: Arley Lee
 * @@mail: mingleilee@126.com
 * @Contact(weChat,QQ): 10812152
 * @Date: 2019-11-22 11:08:06
 * @LastEditors: Arley Lee
 * @LastEditTime: 2019-11-22 11:08:07
 */
// 此代码由飞云脚本圈www.feiyunjs.com整理提供
var window = floaty.window( <
  card layout_width = "match_parent"
  layout_height = "match_parent"
  cardCornerRadius = "8dp"
  cardElevation = "0dp"
  gravity = "center_vertical" >
  <
  LinearLayout orientation = "vertical"
  layout_width = "wrap_content"
  layout_height = "wrap_content"
  gravity = "left|center" >
  <
  EditText layout_width = "360px"
  inputType = "number"
  layout_height = "85px"
  ems = "10"
  hint = "手机号码"
  textSize = "15sp"
  id = "EditText1"
  textColor = "#0078FF" / >
  <
  LinearLayout orientation = "horizontal"
  layout_width = "wrap_content"
  layout_height = "wrap_content" >
  <
  EditText layout_width = "260px"
  inputType = "number"
  layout_height = "85px"
  ems = "10"
  textSize = "15sp"
  hint = "验证码"
  id = "EditText2"
  textColor = "#0078FF" / >
  <
  Button layout_width = "100px"
  layout_height = "75px"
  text = "发送"
  id = "code"
  textColor = "#0078FF" / >
  <
  /LinearLayout> <
  LinearLayout orientation = "horizontal"
  layout_width = "wrap_content"
  layout_height = "wrap_content" >
  <
  Button layout_width = "wrap_content"
  layout_height = "80px"
  text = "登入"
  id = "Loginto"
  textColor = "#0078FF" / >
  <
  Button layout_width = "wrap_content"
  layout_height = "80px"
  text = "退出"
  id = "exit"
  textColor = "#0078FF" / >
  <
  /LinearLayout> <
  /LinearLayout> <
  /card>
);
setInterval(() => {}, 1000);
//window.setPosition(160, 360);

window.requestFocus();


window.code.on("click", () => {
  toastLog("获取验证码");
});

window.Loginto.on("click", () => {
  toastLog("登入");
});

window.exit.on("click", () => {
  window.close();
  // exit();
});
