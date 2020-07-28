/*
 * @Descripttion: 
 * @version: 
 * @Author: Arley Lee
 * @@mail: mingleilee@126.com
 * @Contact(weChat,QQ): 10812152
 * @Date: 2019-11-22 11:09:26
 * @LastEditors: Arley Lee
 * @LastEditTime: 2019-11-22 11:09:28
 */
 // 此代码由飞云脚本圈www.feiyunjs.com整理提供
 /**
  * 作者: 家
  * 功能:  悬浮窗单选按钮demo
  */
 var w = floaty.rawWindow( <
   horizontal padding = "10"
   bg = '#00ff00' >
   <
   radiogroup id = 'fbName' >
   <
   radio text = '选项1' > < /radio> <
   radio text = '选项2' > < /radio> <
   radio text = '选项3' > < /radio> <
   /radiogroup> <
   /horizontal>
 )
 w.fbName.setOnCheckedChangeListener(
   function (radioGroup, id) {
     var count = radioGroup.getChildCount()
     var id = id % count - 1
     if (id == -1) {
       id = count - 1
     }
     log('你选择的单选按钮id=', radioGroup.getCheckedRadioButtonId())
     var radioText = radioGroup.getChildAt(id).getText()
     log('你选择的单选按钮id=', radioGroup.getCheckedRadioButtonId(), ' 单选按钮文本=', radioText)
   }
 )
 w.setPosition(300, 300)
 w.setTouchable(true)
 sleep(10000)
