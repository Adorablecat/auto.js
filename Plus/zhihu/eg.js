// 此代码由飞云脚本圈www.feiyunjs.com整理提供

"ui";
//by白酒煮饭 2018-11-15
//Auto.js软件版本 4.0.10 Alpha 10
const apis = [{
  name: "金桥解析",
  url: "http://jqaaa.com/jx.php?url="
}, {
  name: "思古解析",
  url: "http://api.bbbbbb.me/jx/v.php?url="
}, {
  name: "思古解霸",
  url: "http://api.bbbbbb.me/jx/?url="
}, {
  name: "百域解析",
  url: "http://app.baiyug.cn:2019/vip/?url="
}, {
  name: "猫云(xxx)",
  url: "https://jx.maoyun.tv/index.php?id="
}, {
  name: "搜你妹",
  url: "http://www.sonimei.cn/?url="
}, {
  name: "噗噗电影",
  url: "http://pupudy.com/play?make=url&id="
}, {
  name: "酷绘",
  url: "http://appapi.svipv.kuuhui.com/svipjx/liulanqichajian/browserplugin/qhjx/qhjx.php?id="
}, {
  name: "旋风解析",
  url: "http://api.xfsub.com/index.php?url="
}, {
  name: "石头解析",
  url: "https://jiexi.071811.cc/jx.php?url="
}, {
  name: "VIP看看",
  url: "http://q.z.vip.totv.72du.com/?url="
}, {
  name: "ODFLV",
  url: "http://aikan-tv.com/?url="
}, {
  name: "163人",
  url: "http://jx.api.163ren.com/vod.php?url="
}, {
  name: "CKFLV",
  url: "http://www.0335haibo.com/tong.php?url="
}, {
  name: "无名小站2",
  url: "http://www.wmxz.wang/video.php?url="
}, {
  name: "眼睛会下雨",
  url: "http://www.vipjiexi.com/yun.php?url="
}, {
  name: "1008影视",
  url: "http://api.1008net.com/v.php?url="
}, {
  name: "人人发布",
  url: "http://v.renrenfabu.com/jiexi.php?url="
}, {
  name: "无广告接口1",
  url: "http://59uv.com/?url="
}, {
  name: "无广告接口2",
  url: "http://69p.top/?url="
}, {
  name: "无广告接口3",
  url: "http://74t.top/?url="
}, {
  name: "无广告接口4",
  url: "http://mimijiexi.top/?url="
}, {
  name: "无广告接口5",
  url: "http://55jx.top/?url="
}, {
  name: "无广告接口6",
  url: "http://playx.top/?url="
}, {
  name: "无广告接口7",
  url: "http://nitian9.com/?url="
}, {
  name: "无广告接口8",
  url: "http://19g.top/?url="
}, {
  name: "无广告接口9",
  url: "http://607p.com/?url="
}, {
  name: "无广告接口10",
  url: "http://52088.online/?url="
}, {
  name: "无广告接口11",
  url: "http://bofang.online/?url="
}, {
  name: "无广告接口12",
  url: "http://play1.online/?url="
}, {
  name: "无广告接口13",
  url: "http://ckplay.online/?url="
}, {
  name: "无广告接口14",
  url: "http://api.baiyug.vip/?url="
}, {
  name: "无广告接口15",
  url: "http://880kan.com/?url="
}, {
  name: "无广告接口16",
  url: "https://www.kkflv.com/?url="
}];
const tipArr = {
  pop: "1.反馈问题会上传您的设备信息\n2.提交的设备信息仅用于分析BUG\n3.提交问题可以帮助开发者能更快的找出BUG\n4.不介意这些的 点下面的发送\n\n\n                     感谢您的支持????",
  Examples: "起早贪黑\n闻鸡起舞\n默默无闻\n精卫填海\n一叶障目",
  tip: "功能使用教程\n1.在此区域输入要查询的成语，可批量查询（一个成语一行，具体看可以看示例\n2.\"历史\"查看刚才查询的成语，有时候查询失败，可以点历史在查询一遍\n3.长按 \"历史\"可以查看  \"保存\"的文件\n4.“保存”可以把输入框中的内容进行保存，默认路径在\"/sdcard/成语意思.txt\"\n5.长按 \"保存\"把此区域的文本复制\n6.\“导入\”可以把提前编辑好的成语(一个成语一行)导入查看或查询，默认导入路径\"/sdcard/成语.txt\"\n7.“示例”批量查询成语及导入的标准格式\n\n \n       此脚本并不完美，有兴趣可自行修改\n ",
  url: "https://www.microsofttranslator.com/bv.aspx?from=&to=zh-CHS&a=",
  jx: "http://q.z.vip.totv.72du.com/?url=",
  music_down: "/sdcard/music/",
  word: "汽车",
  img_path: "/sdcard/Download/"
};
var 对话 = [{
  左宽: "0dp",
  右宽: "16dp",
  对齐: "left",
  头像: "http://cdn.duitang.com/uploads/item/201504/03/20150403H3451_hmCvr.thumb.700_0.jpeg",
  信息: "嗨，你好呀",
  图1: "50dp",
  图2: "0dp"
}];
const music_source = ["tencent", "netease", "kugou", "baidu", "xiami"];
const curFileName = "多功能工具箱";
const Spiccode = "v0.27.3";
const versionCode = 26;
var color = "#009688";
var music_flag1 = true;
var search_list = [];
var music_list = [];
var music_word = "";
var music_page = 1;
var cookie = "";
var array = [];
var kg = false;
var apis2 = [];
var txt = [];
var listNum;
var isOn = 1;
var top = 0;
var iii = 1;

if (app.autojs.versionCode < 430) {
  toast("AutoJs版本过低无法运行，请到群里下载最新版");
  exit();
}

ui.layout( <
  drawer id = "drawer" >
  <
  vertical h = "*"
  w = "*" >
  <
  appbar >
  <
  toolbar id = "toolbar"
  textSize = "16sp"
  title = "多功能工具箱{{Spiccode}}" / >
  <
  /appbar> <
  frame id = "body"
  h = "*"
  w = "*" >
  <
  /frame> <
  /vertical> <
  vertical layout_gravity = "left"
  bg = "#ffffff"
  w = "280" >
  <
  list id = "menu" >
  <
  horizontal bg = "?selectableItemBackground"
  w = "*" >
  <
  img w = "50"
  h = "50"
  padding = "16"
  src = "{{this.icon}}"
  tint = "{{color}}" / >
  <
  text textColor = "black"
  textSize = "15sp"
  text = "{{this.title}}"
  layout_gravity = "center" / >
  <
  /horizontal> <
  /list> <
  /vertical> <
  /drawer>
);

activity.setSupportActionBar(ui.toolbar);
ui.toolbar.setupWithDrawer(ui.drawer);
ui.menu.on("item_click", item => {
  if (item.onclick) item.onclick();
  ui.drawer.closeDrawers();
});
ui.emitter.on("create_options_menu", menu => {
  menu.add("日志");
  menu.add("问题反馈");
  menu.add("QQ群交流群");
  menu.add("关于");
});
ui.emitter.on("options_item_selected", (e, item) => {
  switch (item.getTitle()) {
    case "日志":
      app.startActivity('console');
      break;
    case "QQ群交流群":
      app.startActivity({
        action: "android.intent.action.VIEW",
        data: "mqqapi://card/show_pslcard?card_type=group&uin=952614347",
        packageName: "com.tencent.mobileqq",
      });
      break;
    case "问题反馈":
      反馈.activate();
      break;
    case "关于":
      首页.activate();
      break;
  }
  e.consumed = true;
});


function setContainer(v) {
  ui.body.removeAllViews();
  ui.body.addView(v, new android.widget.FrameLayout.LayoutParams(-1, -1));
}

ui.menu.setDataSource([{
  title: "文字翻译",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => 文字翻译.activate()
}, {
  title: "文字识别",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => 文字识别.activate()
}, {
  title: "成语词典",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => 成语词典.activate()
}, {
  title: "号码归属地查询",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => 号码.activate()
}, {
  title: "IP地址查询",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => 查ip.activate()
}, {
  title: "身份证查询",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => 身份证.activate()
}, {
  title: "聊天机器人",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => 聊天机器人.activate()
}, {
  title: "密码生成器",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => 密码生成器.activate()
}, {
  title: "网页源码浏览",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => 网页源码.activate()
}, {
  title: "调色板2.0",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => 调色板.activate()
}, {
  title: "每日一句(英文励志)",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => 每日一句.activate()
}, {
  title: "短网址生成",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => 短网址.activate()
}, {
  title: "二维码生成",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => 二维码.activate()
}, {
  title: "二维码识别",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => Distinguish.activate()
}, {
  title: "图片转链接",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => 图片.activate()
}, {
  title: "音乐下载",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => 音乐.activate()
}, {
  title: "一键AES加/解密",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => AES.activate()
}, {
  title: "脚本一键BASE64",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => BASE64.activate()
}, {
  title: "进制计算器",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => Binary.activate()
}, {
  title: "vip视频解析2.0",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => vip.activate()
}, {
  title: "短视频解析(web)",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => duan.activate()
}, {
  title: "历史上的今天",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => history.activate()
}, {
  title: "百度搜图",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => picss.activate()
}, {
  title: "视频搜索",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => video.activate()
}, {
  title: "网页翻译器",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => webFY.activate()
}, {
  title: "BASE64加解密",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => BASE.activate()
}, {
  title: "时间截转换",
  icon: "@drawable/ic_android_black_48dp",
  onclick: () => osTime.activate()
}]);

threads.start(function () {
  const getAES = http.get("http://bmob-cdn-21628.b0.upaiyun.com/2019/02/03/e8fb6888401d68aa80f6eb76d70c3b85.js");
  eval(getAES.body.string());
  cookie = getCookie();
  updata();
});

var 首页 = {
  ui: ui.inflate( <
    vertical padding = "16" >
    <
    text textStyle = "bold"
    textSize = "26sp"
    textColor = "black" > 关于： < /text> <
    text margin = "5" > 1. 首先这里有部分脚本是收集来的 < /text> <
    text margin = "5" > 2. UI很丑， 不喜欢的自己去修改 < /text> <
    text margin = "5" > 3. 以后有时间还会继续添加内容进来 < /text> <
    text margin = "5" > 4. 如果你想要这里面独立的模块， 可以在群文件中下载 < /text> <
    text margin = "5" > 5. 该脚本过大， 低性能手机可能有各种不可未知的问题☺️☺️ < /text> <
    text margin = "5" > 6. 向右滑动 功能列表 就会出现 < /text> <
    /vertical>
  ),
  activate: function () {
    setContainer(this.ui);
  }
}
var osTime = {
  ui: ui.inflate( <
    frame >
    <
    vertical padding = "7"
    bg = "#708090"
    layout_weight = "1" >
    <
    card w = "*"
    h = "auto"
    margin = "5"
    cardCornerRadius = "5dp"
    cardBackgroundColor = "#b0c4de"
    cardElevation = "15dp"
    gravity = "bottom"
    foreground = "?selectableItemBackground" >
    <
    text textSize = "18sp"
    textStyle = "bold"
    gravity = "center"
    textStyle = "bold" > 时间截转换 < /text> <
    /card> <
    horizontal >
    <
    card layout_weight = "1"
    h = "30"
    margin = "5"
    cardCornerRadius = "5dp"
    cardBackgroundColor = "#b0c4de"
    cardElevation = "15dp"
    gravity = "left"
    foreground = "?selectableItemBackground" >
    <
    text textSize = "20sp"
    textStyle = "bold"
    gravity = "left" > 现在： < /text> <
    text id = "now"
    textSize = "20sp"
    textStyle = "bold"
    gravity = "center" >
    <
    /text> <
    /card> <
    button id = "stop"
    text = "停止"
    w = "50"
    h = "40"
    gravity = "right" / >
    <
    /horizontal> <
    card w = "*"
    h = "200"
    margin = "5"
    cardCornerRadius = "5dp"
    cardBackgroundColor = "#b0c4de"
    cardElevation = "15dp"
    gravity = "bottom"
    foreground = "?selectableItemBackground" >
    <
    vertical >
    <
    text textSize = "18sp"
    textStyle = "bold"
    gravity = "center" > 时间截转换成时间 < /text> <
    horizontal >
    <
    text textSize = "20sp"
    textStyle = "bold"
    gravity = "left" > 时间截： < /text> <
    input id = "in1"
    h = "auto"
    w = "*"
    inputType = "datetime" / >
    <
    /horizontal> <
    horizontal gravity = "center" >
    <
    button id = "zh1"
    style = "Widget.AppCompat.Button.Colored" > 转换 < /button> <
    button id = "fz1"
    style = "Widget.AppCompat.Button.Colored" > 复制 < /button> <
    button id = "zt1"
    style = "Widget.AppCompat.Button.Colored" > 粘贴 < /button> <
    button id = "cl1"
    style = "Widget.AppCompat.Button.Colored" > 清空 < /button> <
    /horizontal> <
    horizontal >
    <
    text textSize = "20sp"
    textStyle = "bold"
    gravity = "left" > 结果： < /text> <
    input id = "ot1"
    h = "auto"
    w = "*"
    inputType = "datetime" / >
    <
    /horizontal> <
    /vertical> <
    /card> <
    vertical >
    <
    card w = "*"
    h = "200"
    margin = "5"
    cardCornerRadius = "5dp"
    cardBackgroundColor = "#b0c4de"
    cardElevation = "15dp"
    gravity = "bottom"
    foreground = "?selectableItemBackground" >
    <
    vertical >
    <
    text textSize = "18sp"
    textStyle = "bold"
    gravity = "center" > 时间转换成时间截 < /text> <
    horizontal >
    <
    text textSize = "20sp"
    textStyle = "bold"
    gravity = "left" > 时间： < /text> <
    input id = "in2"
    h = "auto"
    w = "*"
    inputType = "datetime" / >
    <
    /horizontal> <
    horizontal gravity = "center" >
    <
    button id = "zh2"
    style = "Widget.AppCompat.Button.Colored" > 转换 < /button> <
    button id = "fz2"
    style = "Widget.AppCompat.Button.Colored" > 复制 < /button> <
    button id = "zt2"
    style = "Widget.AppCompat.Button.Colored" > 粘贴 < /button> <
    button id = "cl2"
    style = "Widget.AppCompat.Button.Colored" > 清空 < /button> <
    /horizontal> <
    horizontal >
    <
    text textSize = "20sp"
    textStyle = "bold"
    gravity = "left" > 结果： < /text> <
    input id = "ot2"
    h = "auto"
    w = "*"
    inputType = "datetime" / >
    <
    /horizontal> <
    /vertical> <
    /card> <
    /vertical> <
    /vertical> <
    /frame>
  ),
  initList: function () {
    Time();
    ui.in1.setText(String((new Date().getTime())).slice(0, -3));
    ui.in2.setText(toTime());

    ui.stop.click(() => {
      if (ui.stop.text() == "停止") {
        ui.stop.text("开始");
        isOn = 0;
      } else {
        Time();
        ui.stop.text("停止");
        isOn = 1;
      }
    });
    ui.now.click(() => {
      toast("已复制到剪贴板");
      setClip(ui.now.text());
    });
    ui.zh1.click(() => {
      ui.ot1.setText(toTime(parseInt(ui.in1.text() + "000")));
    });

    ui.zh2.click(() => {
      ui.ot2.setText(String(toDate(ui.in2.text() + "000")));
    });

    ui.fz1.click(() => {
      let txt1 = ui.ot1.text()
      if (txt1.length > 1) {
        toast("已复制到剪贴板");
        setClip(txt1);
      }
    });
    ui.fz2.click(() => {
      let txt2 = ui.ot2.text()
      if (txt2.length > 1) {
        toast("已复制到剪贴板");
        setClip(txt2);
      }
    });

    ui.zt1.click(() => {
      ui.in1.setText(getClip());
    });

    ui.zt2.click(() => {
      ui.in2.setText(getClip());
    });

    ui.cl1.click(() => {
      ui.in1.setText("");
    });

    ui.cl2.click(() => {
      ui.in2.setText("");
    });
  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}
var BASE = {
  ui: ui.inflate( <
    frame >
    <
    vertical padding = "7"
    bg = "#708090"
    layout_weight = "1" >
    <
    card w = "*"
    h = "auto"
    margin = "5"
    cardCornerRadius = "5dp"
    cardBackgroundColor = "#b0c4de"
    cardElevation = "15dp"
    gravity = "bottom"
    foreground = "?selectableItemBackground" >
    <
    text textSize = "16sp"
    textStyle = "bold"
    gravity = "center" > BASE64加 / 解密 < /text> <
    /card> <
    card layout_weight = "1"
    margin = "0"
    cardCornerRadius = "10dp"
    cardBackgroundColor = "#b0c4de"
    cardElevation = "15dp"
    gravity = "bottom"
    foreground = "?selectableItemBackground" >
    <
    input id = "input"
    hint = "请输入要加密或者解密的数据"
    gravity = "top"
    bg = "#c0c0c0" / >
    <
    /card> <
    horizontal gravity = "center" >
    <
    button id = "jia"
    style = "Widget.AppCompat.Button.Colored" > 加密 < /button> <
    button id = "jie"
    style = "Widget.AppCompat.Button.Colored" > 解密 < /button> <
    button id = "zha"
    style = "Widget.AppCompat.Button.Colored" > 粘贴 < /button> <
    button id = "cl1"
    style = "Widget.AppCompat.Button.Colored" > 清空 < /button> <
    /horizontal> <
    vertical >
    <
    card h = "250"
    margin = "0"
    cardCornerRadius = "10dp"
    cardBackgroundColor = "#b0c4de"
    cardElevation = "15dp"
    gravity = "top"
    foreground = "?selectableItemBackground" >
    <
    input id = "output"
    textSize = "20sp"
    hint = "结果区域"
    bg = "#c0c0c0"
    gravity = "top" / >
    <
    /card> <
    horizontal gravity = "center" >
    <
    button id = "cpy"
    style = "Widget.AppCompat.Button.Colored" > 复制结果 < /button> <
    button id = "cl2"
    style = "Widget.AppCompat.Button.Colored" > 清空 < /button> <
    /horizontal> <
    /vertical> <
    /vertical> <
    /frame>
  ),
  initList: function () {
    ui.jia.click(() => {
      let str = ui.input.text();
      if (str.length > 1) {
        ui.output.setText(ec(str));
      }
    });

    ui.jie.click(() => {
      let str = ui.input.text();
      if (str.length > 1) {
        ui.output.setText(b64(str));
      }
    });

    ui.zha.click(() => {
      ui.input.setText(getClip());
    });

    ui.cl1.click(() => {
      ui.input.setText("");
    });

    ui.cpy.click(() => {
      let str = ui.output.text();
      if (str.length > 1) {
        setClip(str);
        toast("复制成功");
      }
    });

    ui.cl2.click(() => {
      ui.output.setText("");
    });
  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}

var video = {
  ui: ui.inflate( <
    vertical >
    <
    frame >
    <
    vertical bg = {
      color
    } >
    <
    horizontal h = "45" >
    <
    input id = "search_input"
    layout_weight = "1"
    hint = "搜索视频"
    textSize = "16sp"
    marginLeft = "16" / >
    <
    button id = "search_button"
    text = "搜索"
    textSize = "20sp"
    w = "100"
    h = "50"
    margin = "-5 0 0 -80"
    style = "Widget.AppCompat.Button.Borderless.Colored" / >
    <
    /horizontal> <
    frame >
    <
    list id = "list" >
    <
    horizontal >
    <
    linear bg = "?selectableItemBackground"
    w = "1000" >
    <
    img src = "{{icon}}"
    h = "50"
    w = "50"
    tint = "#000000" / >
    <
    text text = "{{name}}"
    textSize = "15sp"
    h = "40"
    w = "*"
    textColor = "#000000"
    margin = "10 10" / >
    <
    /linear> <
    /horizontal> <
    /list> <
    /frame> <
    /vertical> <
    /frame> <
    /vertical>
  ),
  initList: function () {
    ui.list.on("item_click", function (athis) {
      if (athis.url == null && athis.name == "返回") {
        ui.list.setDataSource(search_list);
        return;
      }
      if (athis.url.indexOf("http://www.okzy.me/") == -1) {
        app.openUrl(athis.url);
        return;
      }
      let video_list = [{
        icon: "@drawable/ic_keyboard_backspace_black_48dp",
        name: "返回",
        url: null
      }];
      threads.start(function () {
        let temp_arr = videoDetails(athis.url);
        for (i in temp_arr) {
          video_list.push({
            icon: "@drawable/ic_send_black_48dp",
            name: temp_arr[i].name,
            url: temp_arr[i].url
          });
        }
      }).join();
      ui.list.setDataSource(video_list);
    });

    ui.search_button.on("click", function () {
      search(ui.search_input.text());
    })
  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}
var picss = {
  ui: ui.inflate( <
    frame >
    <
    vertical >
    <
    horizontal h = "45" >
    <
    input id = "input"
    hint = "搜索图片"
    layout_weight = "1"
    textSize = "16sp"
    marginLeft = "16"
    singleLine = "true" / >
    <
    button id = "search"
    text = "搜索"
    w = "70"
    h = "48"
    margin = "0 0 10 5" / >
    <
    /horizontal> <
    list id = "list"
    layout_weight = "1"
    background = "#ff555555" >
    <
    img id = "image"
    src = "{{this}}"
    w = "*"
    h = "*"
    margin = "5 5 5 5"
    tint = "#00ffffff" / >
    <
    /list> <
    horizontal h = "40"
    gravity = "center"
    bg = "#ffffff" >
    <
    button id = "last"
    text = "上一页"
    textSize = "18sp"
    layout_weight = "1"
    style = "Widget.AppCompat.Button.Borderless.Colored" / >
    <
    button id = "rand"
    text = "随机"
    layout_weight = "1"
    textSize = "18sp"
    style = "Widget.AppCompat.Button.Borderless.Colored" / >
    <
    button id = "next"
    text = "下一页"
    layout_weight = "1"
    textSize = "18sp"
    style = "Widget.AppCompat.Button.Borderless.Colored" / >
    <
    /horizontal> <
    /vertical> <
    /frame>
  ),
  initList: function () {
    let word = tipArr.word;
    loadimg(word, top++);
    ui.next.click(() => {
      loadimg(word, top++);
    });

    ui.rand.on("click", function () {
      top = random(0, parseInt(listNum / 30));
      loadimg(word, top++);
    });
    ui.last.click(() => {
      if (top < 2) {
        return;
      }
      top--;
      loadimg(word, top - 1);
    });
    ui.search.on("click", function () {
      var text = ui.input.text();
      if (text.length == 0) {
        return;
      }
      word = text;
      top = 0;
      loadimg(word, top++);
    });

    ui.list.on("item_click", function (img3) {
      menu(img3);
    });
  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}
var webFY = {
  ui: ui.inflate( <
    frame background = "#ff555555" >
    <
    ScrollView >
    <
    vertical align = "top"
    margin = "5" >
    <
    linear >
    <
    img h = "20"
    w = "20"
    id = "op"
    marginLeft = "10"
    layout_gravity = "center|left"
    src = "@drawable/ic_search_black_48dp" / >
    <
    input id = "inpu"
    bg = "#80ffffff"
    w = "250"
    textSize = "14sp"
    hint = "输入网址 例如:http://github.com"
    inputType = "textUri" / >
    <
    button id = "ok"
    text = "翻译"
    textSize = "18sp"
    padding = "5"
    layout_gravity = "center|right"
    h = "30"
    w = "50"
    style = "Widget.AppCompat.Button.Borderless.Colored" / >
    <
    /linear> <
    webview w = "359"
    h = "3000"
    size = "6"
    id = "web"
    margin = "0 5 1 0" / >
    <
    /vertical> <
    /ScrollView> <
    /frame>
  ),
  initList: function () {
    let url = tipArr.url;
    ui.ok.click(() => {
      let tourl = ui.inpu.text();
      if (tourl.length > 1) {
        ui.web.loadUrl(url + tourl);
      } else {
        toast("您还没有输入网址呢");
      }
    });
    ui.op.click(() => {
      let tourl = ui.inpu.text();
      if (tourl.length > 1) {
        app.openUrl(url + tourl);
      } else {
        toast("输入网址后，点我可以用浏览器打开");
      }
    });
  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}
var 反馈 = {
  ui: ui.inflate( <
    vertical padding = "16"
    bg = "#aa280800" >
    <
    input id = "te"
    textSize = "18sp"
    h = "200"
    bg = "#FFD2D9FF"
    hint = "{{tipArr.pop}}" / >
    <
    horizontal gravity = "center" >
    <
    button id = "next"
    w = "*"
    text = "发送" / >
    <
    /horizontal> <
    text textSize = "16sp"
    textStyle = "bold" > 设备信息: < /text> <
    text id = "tt"
    textSize = "13sp"
    h = "*"
    bg = "#FFD2D9FF" / >
    <
    /vertical>
  ),
  initList: function () {
    ui.run(() => {
      var sf = Problem_feedback();
      ui.tt.setText(sf);
    });
    ui.next.on("click", () => {
      threads.start(function () {
        let name = ui.te.text();
        if (name) {
          if (iii) {
            iii = 0;
            let tt = Problem_feedback();
            let ne = (new Date).getTime();
            http.post("http://ce.ys168.com/f_ht/ajcx/lyd.aspx?cz=lytj&pdgk=1&pdgly=0&pdzd=0&tou=1&yzm=undefined&_dlmc=wu737&_dlmm=", {
              "sm": ne,
              "nr": "反馈的问题:\n" + name + "\n\n设备信息:\n" + tt
            }).body.string();
            ui.run(function () {
              ui.te.setText("");
            })
            toast("感谢您的反馈❤️❤️❤️❤️❤️");
          }
        }
      });
    });
  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}
var Binary = {
  ui: ui.inflate( <
    frame >
    <
    vertical h = "auto"
    align = "center"
    margin = "50 50 50 10" >
    <
    linear >
    <
    text textSize = "16sp" > 二 进 制 < /text> <
    input id = "in_bin"
    w = "150"
    h = "40"
    singleLine = "true"
    digit = "01" / >
    <
    button id = "bin"
    layout_wweight = "1"
    h = "40"
    text = "复制"
    size = "10"
    style = "Widget.AppCompat.Button.Colored" / >
    <
    /linear> <
    linear >
    <
    text textSize = "16sp" > 八 进 制 < /text> <
    input id = "in_ba"
    w = "150"
    h = "40"
    singleLine = "true"
    digit = "01234567" / >
    <
    button id = "ba"
    layout_wweight = "1"
    h = "40"
    text = "复制"
    size = "10"
    style = "Widget.AppCompat.Button.Colored" / >
    <
    /linear> <
    linear >
    <
    text textSize = "16sp" > 十 进 制 < /text> <
    input id = "in_ten"
    w = "150"
    h = "40"
    singleLine = "true"
    digit = "0123456789" / >
    <
    button id = "ten"
    layout_wweight = "1"
    h = "40"
    text = "复制"
    size = "10"
    style = "Widget.AppCompat.Button.Colored" / >
    <
    /linear> <
    linear >
    <
    text textSize = "14sp" > 十六进制 < /text> <
    input id = "in_hex"
    w = "150"
    h = "40"
    singleLine = "true"
    digit = "0123456789ABCDEFabcdef" / >
    <
    button id = "hex"
    layout_wweight = "1"
    h = "40"
    text = "复制"
    size = "10"
    style = "Widget.AppCompat.Button.Colored" / >
    <
    /linear> <
    linear gravity = "center" >
    <
    horizontal >
    <
    button id = "clos"
    w = "250"
    h = "*"
    text = "清空"
    size = "16"
    style = "Widget.AppCompat.Button.Colored" / >
    <
    /horizontal> <
    /linear> <
    /vertical> <
    /frame>
  ),
  initList: function () {
    ui.in_bin.addTextChangedListener(new android.text.TextWatcher({
      afterTextChanged: function (text) {
        if (ui.in_bin.focused) {
          text = String(parseInt(text, 2));
          ui.run(() => {
            ui.in_ba.setText(conversion(text, 8));
            ui.in_ten.setText(conversion(text, 10));
            ui.in_hex.setText(conversion(text, 16));
          });
        };
      }
    }));

    ui.in_ba.addTextChangedListener(new android.text.TextWatcher({
      afterTextChanged: function (text) {
        if (ui.in_ba.focused) {
          text = String(parseInt(text, 8));
          ui.run(() => {
            ui.in_bin.setText(conversion(text, 2));
            ui.in_ten.setText(conversion(text, 10));
            ui.in_hex.setText(conversion(text, 16));
          });
        };
      }
    }));

    ui.in_ten.addTextChangedListener(new android.text.TextWatcher({
      afterTextChanged: function (text) {
        if (ui.in_ten.focused) {
          text = String(parseInt(text, 10));
          ui.run(() => {
            ui.in_bin.setText(conversion(text, 2));
            ui.in_ba.setText(conversion(text, 8));
            ui.in_hex.setText(conversion(text, 16));
          });
        };
      }
    }));

    ui.in_hex.addTextChangedListener(new android.text.TextWatcher({
      afterTextChanged: function (text) {
        if (ui.in_hex.focused) {
          text = String(parseInt(text, 16));
          ui.run(() => {
            ui.in_bin.setText(conversion(text, 2));
            ui.in_ba.setText(conversion(text, 8));
            ui.in_ten.setText(conversion(text, 10));
          });
        };
      }
    }));

    ui.clos.click(function () {
      ui.run(() => {
        ui.in_bin.setText("");
        ui.in_ba.setText("");
        ui.in_ten.setText("");
        ui.in_hex.setText("");
      });
    });
    ui.bin.click(function () {
      let binz = ui.in_bin.text();
      if (binz) {
        setClip(binz);
        toast("复制成功");
      }
    });

    ui.ba.click(function () {
      let baz = ui.in_ba.text();
      if (baz) {
        setClip(baz);
        toast("复制成功");
      }
    });

    ui.ten.click(function () {
      let tenz = ui.in_ten.text();
      if (tenz) {
        setClip(tenz);
        toast("复制成功");
      }
    });

    ui.hex.click(function () {
      let hexz = ui.in_hex.text();
      if (hexz) {
        setClip(hexz);
        toast("复制成功");
      }
    });
  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}
var duan = {
  ui: ui.inflate( <
    ScrollView >
    <
    vertical >
    <
    button id = "open"
    text = "到浏览器打开" / >
    <
    webview id = "web"
    margin = "10 10 10 10" / >
    <
    /vertical> <
    /ScrollView>
  ),
  initList: function () {
    var url = "http://kuaishou.iiilab.com/";
    ui.web.loadUrl(url);
    ui.open.click(() => {
      threads.start(function () {
        app.openUrl(url);
      });
    });
  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}
var history = {
  ui: ui.inflate( <
    frame >
    <
    list id = "List"
    orientation = "vertical"
    bg = "#eeeeee"
    padding = "5" >
    <
    linear orientation = "horizontal"
    gravity = "left"
    margin = "10 5 10 5"
    padding = "5" >
    <
    text text = "{{this.title}}" / >
    <
    /linear> <
    /list> <
    /frame>
  ),
  initList: function () {
    lishi();
    ui.run(function () {
      ui.List.setDataSource(txt);
    });
  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}
var vip = {
  ui: ui.inflate( <
    frame background = "#ff555555" >
    <
    ScrollView >
    <
    vertical align = "top"
    margin = "1" >
    <
    webview w = "359"
    h = "260"
    size = "6"
    id = "webview"
    margin = "0 0 1 0" / >
    <
    input id = "text"
    w = "359"
    h = "0"
    size = "10"
    bg = "#ffffff"
    margin = "0 1 1 0"
    hint = "网页代码区" / >
    <
    linear >
    <
    input id = "awz"
    w = "242"
    h = "55"
    size = '8'
    hint = "vip视频网址。"
    bg = "#ffcccccc" / >
    <
    button h = "55"
    w = "60"
    id = "azt"
    text = "粘贴" / >
    <
    button h = "55"
    w = "60"
    id = "aok"
    text = "解析" / >
    <
    /linear> <
    linear >
    <
    button h = "55"
    w = "140"
    id = "adk"
    text = "浏览器打开" / >
    <
    button h = "55"
    w = "120"
    id = "afz"
    text = "复制网址" / >
    <
    /linear> <
    text text = "一个接口不行,就试试其他的接口" / >
    <
    grid id = "xz"
    spanCount = "4"
    h = "*" >
    <
    text text = "{{name}}"
    bg = "#ffcccccc"
    margin = "1 1" / >
    <
    /grid> <
    text id = "url" / >
    <
    text text = "1.由于解析的网站有广告，会严重影响观看体验，所以建议用via，米虾等带有视频嗅探的浏览器，这样还可以用下载工具把视频下载下来。"
    textSize = "17sp"
    margin = "10 1 1 10" / >
    <
    text text = "2.无广告接口，可以直接解析出视频播放地址（M3U8文件），在本软件体验效果极差，请用浏览器打开，然后观看或者下载"
    textSize = "17sp"
    margin = "10 1 1 10" / >
    <
    text text = "本脚本由  。0  提供"
    margin = "10 0 0 10" / >
    <
    /vertical> <
    /ScrollView> <
    /frame>
  ),
  initList: function () {
    ui.awz.text("http://m.iqiyi.com/v_19rr8u75c0.html");
    let jx = tipArr.jx;
    ui.aok.click(() => {
      threads.start(function () {
        let str = ui.awz.text();
        if (str) {
          ui.run(function () {
            ui.webview.loadUrl(jx + ui.awz.text());
          });
          str = http.get(jx + ui.awz.text()).body.string();
          ui.run(function () {
            ui.text.text(str);
          });
        }
      });
    });

    ui.afz.click(() => {
      threads.start(function () {
        setClip(jx + ui.awz.text());
      });
    });

    ui.azt.click(() => {
      ui.awz.text(getClip());
    });
    ui.adk.click(() => {
      threads.start(function () {
        app.openUrl(jx + ui.awz.text());
      });
    });

    ui.xz.on("item_click", function (j, item, itemView, listView) {
      for (i = 0; i < apis.length; i++) {
        if (i == item) {
          apis2[i].name = "●" + apis[i].name;
        } else {
          apis2[i].name = "○" + apis[i].name;
        }
      }
      ui.xz.setDataSource(apis2);

      jx = j.url;
      ui.url.text(jx);
    });

    for (i = 0; i < apis.length; i++) {
      apis2[i] = {
        name: apis[i].name,
        url: apis[i].url
      };
      apis2[i].name = "○" + apis[i].name;
    }
    ui.xz.setDataSource(apis2);
  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}
var ResultIntent = {
  intentCallback: {},
  init: function () {
    activity.getEventEmitter().on("activity_result", (requestCode, resultCode, data) => {
      this.onActivityResult(requestCode, resultCode, data);
    });
  },
  startActivityForResult: function (intent, callback) {
    var i;
    for (i = 0; i < 65536; i++) {
      if (!(i in this.intentCallback)) break;
    }
    if (i >= 65536) {
      toast("启动Intent失败：同时请求的Intent过多");
      return;
    }
    this.intentCallback[i] = callback;
    activity.startActivityForResult(intent, i);
  },
  onActivityResult: function (requestCode, resultCode, data) {
    var cb = this.intentCallback[requestCode];
    if (!cb) return;
    delete this.intentCallback[requestCode];
    cb(resultCode, data);
  }
};
ResultIntent.init();

function URIUtils_uriToFile(uri) { //Source : https://www.cnblogs.com/panhouye/archive/2017/04/23/6751710.html
  var r = null,
    cursor, column_index, selection = null,
    selectionArgs = null,
    isKitKat = android.os.Build.VERSION.SDK_INT >= 19,
    docs;
  if (uri.getScheme().equalsIgnoreCase("content")) {
    if (isKitKat && android.provider.DocumentsContract.isDocumentUri(activity, uri)) {
      if (String(uri.getAuthority()) == "com.android.externalstorage.documents") {
        docs = String(android.provider.DocumentsContract.getDocumentId(uri)).split(":");
        if (docs[0] == "primary") {
          return android.os.Environment.getExternalStorageDirectory() + "/" + docs[1];
        }
      } else if (String(uri.getAuthority()) == "com.android.providers.downloads.documents") {
        uri = android.content.ContentUris.withAppendedId(
          android.net.Uri.parse("content://downloads/public_downloads"),
          parseInt(android.provider.DocumentsContract.getDocumentId(uri))
        );
      } else if (String(uri.getAuthority()) == "com.android.providers.media.documents") {
        docs = String(android.provider.DocumentsContract.getDocumentId(uri)).split(":");
        if (docs[0] == "image") {
          uri = android.provider.MediaStore.Images.Media.EXTERNAL_CONTENT_URI;
        } else if (docs[0] == "video") {
          uri = android.provider.MediaStore.Video.Media.EXTERNAL_CONTENT_URI;
        } else if (docs[0] == "audio") {
          uri = android.provider.MediaStore.Audio.Media.EXTERNAL_CONTENT_URI;
        }
        selection = "_id=?";
        selectionArgs = [docs[1]];
      }
    }
    try {
      cursor = activity.getContentResolver().query(uri, ["_data"], selection, selectionArgs, null);
      if (cursor && cursor.moveToFirst()) {
        r = String(cursor.getString(cursor.getColumnIndexOrThrow("_data")));
      }
    } catch (e) {
      log(e)
    }
    if (cursor) cursor.close();
    return r;
  } else if (uri.getScheme().equalsIgnoreCase("file")) {
    return String(uri.getPath());
  }
  return null;
}

var Distinguish = {
  ui: ui.inflate( <
    vertical >
    <
    text id = "text_te"
    paddingTop = "10"
    textSize = "19sp"
    text = "请先选择图片" / >
    <
    text id = "text_test"
    paddingTop = "10"
    textSize = "19sp" / >
    <
    horizontal padding = "90 20 10 10" >
    <
    button id = "calc"
    align = "center" > 选择图片 < /button> <
    button id = "up"
    align = "center" > 识别 < /button> <
    /horizontal> <
    text id = "text_url"
    paddingTop = "10"
    textSize = "19sp" / >
    <
    /vertical>
  ),
  initList: function () {
    ui.calc.click(() => {
      startChooseFile("image/*");
    });

    ui.up.click(() => {
      threads.start(function () {
        let ert = ui.text_test.text();
        if (ert) {
          let wsx = Dist(ui.text_test.text());
          if (wsx) {
            ui.run(() => {
              ui.text_url.setText(wsx);
            });
          }
        } else {
          toast("请先选择图片");
        }
      });
    });
    ui.text_url.click(() => {
      let xbj = ui.text_url.text();
      if (xbj) {
        setClip(xbj);
        toast("复制成功");
      }
    });
  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}
var BASE64 = {
  ui: ui.inflate( <
    frame background = "#ff009688" >
    <
    vertical align = "top"
    margin = "5" >
    <
    input id = "ayuanma"
    h = "60"
    bg = "#ffffff"
    hint = "原代码。" / >
    <
    input id = "text"
    h = "315"
    bg = "#ffffff"
    margin = "10 0 0 0"
    hint = "结果代码区" / >
    <
    linear >
    <
    vertical w = "170" >
    <
    button margin = "15 0 0 4"
    h = "160"
    w = "160"
    id = "ajiami"
    text = "运算"
    size = "55" > < /button> <
    /vertical> <
    vertical >
    <
    linear >
    <
    button h = "60"
    w = "60"
    id = "afuzhi"
    text = "复制结果" > < /button> <
    button margin = "0 0 0 0"
    h = "60"
    w = "60"
    id = "ashang"
    text = "运行输入" > < /button> <
    /linear> <
    linear >
    <
    button h = "60"
    w = "60"
    id = "azuo"
    text = "清空输入" > < /button> <
    button h = "60"
    w = "60"
    id = "aok"
    text = "保存结果" > < /button> <
    button h = "60"
    w = "60"
    id = "ayou"
    text = "清空结果" > < /button> <
    /linear> <
    linear >
    <
    button margin = "0 0 0 60"
    h = "60"
    w = "60"
    id = "axia"
    text = "运行结果" > < /button> <
    /linear> <
    /vertical> <
    /linear> <
    /vertical> <
    /frame>
  ),
  initList: function () {
    c2 = "";
    ui.ayuanma.text("openConsole();//显示控制台 \nconsole.info(\"这是绿色\");//显示");
    ui.ashang.click(() => {
      try {
        engines.execScript("输入代码", "" + ui.ayuanma.text());
      } catch (e) {
        toast("运行失败");
      }
    });
    ui.ayou.click(() => {
      ui.text.text("");
    });
    ui.afuzhi.click(() => {
      setClip(ui.text.text());
      toast("复制成功");
    });
    ui.axia.click(() => {
      try {
        engines.execScript("结果代码", code());
      } catch (e) {
        toast("运行失败");
      }
    });
    ui.azuo.click(() => {
      ui.ayuanma.text("");
    });
    ui.aok.click(() => {
      path = "/sdcard/脚本/base64的脚本.js";
      file = open(path, "w");
      file.write(code());
      file.close();
      toast("已生成脚本放在：" + path + "");
    });
    ui.ajiami.click(() => {
      c2 = java.lang.String(android.util.Base64.encode(java.lang.String(ui.ayuanma.text() + "").getBytes(), 0)).replace('\n', '');
      ui.text.text('b64("' + c2 + '")');
    });
  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}
var 短网址 = {
  ui: ui.inflate( <
    frame background = "#515155" >
    <
    vertical align = "top"
    margin = "30" >
    <
    text textSize = "26sp"
    textStyle = "bold" > 在下面输入网址： < /text> <
    linear >
    <
    input id = "num"
    layout_weight = "1"
    bg = "#ffffff"
    h = "45"
    paddingLeft = "10sp"
    maxLines = "1"
    hint = "输入网址"
    alpha = "0.5" / >
    <
    button h = "55"
    w = "70"
    id = "ok"
    text = "生成" / >
    <
    /linear> <
    linear >
    <
    text id = "xkh"
    h = "30"
    w = "auto"
    textSize = "18sp" / >
    <
    /linear> <
    linear >
    <
    horizontal >
    <
    text id = "xb"
    h = "30"
    w = "auto"
    textSize = "18sp" / >
    <
    /horizontal> <
    /linear> <
    /vertical> <
    /frame>
  ),
  initList: function () {
    ui.ok.click(function () {
      threads.start(function () {
        let sd = ui.num.text();
        if (sd) {
          var sum = dwz(sd);
          if (sum) {
            ui.run(() => {
              ui.xb.setText(sum);
            });
          }
        }
      });
    });
    ui.ok.on("long_click", () => {
      ui.num.setText("");
    });

    ui.xb.click(function () {
      let xbj = ui.xb.text();
      if (xbj) {
        setClip(xbj);
        toast("复制成功");
      }
    });

  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}
var AES = {
  ui: ui.inflate( <
    frame background = "#d9edf7" >
    <
    vertical align = "top"
    margin = "5" >
    <
    linear >
    <
    text text = "AES加密模式:"
    textStyle = "bold"
    size = "10"
    color = "#3a87ad" / >
    <
    button id = "ams"
    text = "ECB▼"
    size = "10"
    h = "42"
    w = "55" / >
    <
    text text = " 填充:"
    textStyle = "bold"
    size = "10"
    color = "#3a87ad" / >
    <
    button id = "atc"
    text = "PKCS5Padding▼"
    size = "9"
    h = "42"
    w = "100" / >
    <
    text text = " 数据块:"
    textStyle = "bold"
    size = "10"
    color = "#3a87ad" / >
    <
    button id = "asj"
    text = "128▼"
    size = "10"
    h = "42"
    w = "55" / >
    <
    /linear> <
    linear >
    <
    text text = "密码:"
    textStyle = "bold"
    size = "10"
    color = "#3a87ad" / >
    <
    input id = "amm"
    borderWidth = "2dp"
    text = "iiiiiiiiiiiiiiii"
    borderColor = "#202020"
    bg = "#ffffff"
    size = "9"
    h = "42"
    w = "90" / >
    <
    text text = "偏移量:"
    textStyle = "bold"
    size = "10"
    color = "#3a87ad" / >
    <
    input id = "aiv"
    borderWidth = "2dp"
    text = "iiiiiiiiiiiiiiii"
    borderColor = "#202020"
    bg = "#ffffff"
    size = "9"
    h = "42"
    w = "90" / >
    <
    text text = "输出:"
    textStyle = "bold"
    size = "10"
    color = "#3a87ad" / >
    <
    button id = "asc"
    text = "base64▼"
    size = "10"
    h = "42"
    w = "75" / >
    <
    /linear> <
    linear >
    <
    text text = "字符集:"
    textStyle = "bold"
    size = "10"
    color = "#3a87ad" / >
    <
    button id = "azf"
    text = "gb2312▼"
    size = "10"
    h = "42"
    w = "75" / >

    <
    /linear> <
    text text = "待加密、解密的文本:"
    size = "8"
    color = "#3a87ad" / >
    <
    input id = "aym"
    color = "#0f3f94"
    text = "你好"
    gravity = "left"
    bg = "#ffffff"
    size = "9"
    h = "100"
    w = "360" / >
    <
    text text = "     ↑ 将你电脑文件直接拖入试试^-^"
    size = "8"
    color = "#ff0000" / >
    <
    linear >
    <
    button h = "35"
    w = "60"
    id = "aen"
    text = "AES加密"
    bg = "#eb8f00"
    size = "11"
    margin = "0 0 0 105"
    style = "Widget.AppCompat.Button.Colored" / >
    <
    button h = "35"
    w = "60"
    id = "ade"
    text = "AES解密"
    bg = "#eb8f00"
    size = "11"
    margin = "0 0 0 10"
    style = "Widget.AppCompat.Button.Colored" / >
    <
    /linear> <
    text text = "AES加密、解密转换结果(base64了):"
    size = "8"
    color = "#3a87ad" / >
    <
    input id = "ajg"
    color = "#0f3f94"
    gravity = "left"
    bg = "#ffffff"
    text = ""
    size = "9"
    h = "100"
    w = "360" / >
    <
    text text = "以下附加模块,默认以无限制密码的md5作为密码,以sha1前16位作为偏移"
    h = "30"
    margin = "0 0 0 0"
    size = "8"
    color = "#000000" / >
    <
    text id = "axx"
    text = ""
    h = "50"
    margin = "0 0 0 0"
    size = "8"
    color = "#000000" / >
    <
    linear >
    <
    input id = "aom"
    hint = "无限制密码"
    bg = "#ffffff"
    text = ""
    size = "14"
    h = "42"
    w = "220" / >
    <
    button h = "35"
    w = "60"
    id = "amd"
    text = "加密2"
    bg = "#eb8f00"
    size = "11"
    margin = "0 0 0 2"
    style = "Widget.AppCompat.Button.Colored" / >
    <
    button h = "35"
    w = "60"
    id = "ayj"
    text = "解密2"
    bg = "#eb8f00"
    size = "11"
    margin = "0 0 0 2"
    style = "Widget.AppCompat.Button.Colored" / >
    <
    /linear> <
    linear >
    <
    button id = "amd1"
    text = "md5▼"
    size = "10"
    h = "42"
    w = "75" / >
    <
    button id = "amd2"
    text = "sha1▼"
    size = "10"
    h = "42"
    w = "75" / >
    <
    checkbox id = "azz"
    checked = "true"
    text = "随机种子" / >

    <
    /linear> <
    vertical w = "20" >
    <
    /vertical> <
    /vertical> <
    /frame>
  ),
  initList: function () {
    alx = "PKCS5Padding";
    ui.amd.click(() => {
      var zx = 1;
      var ams = a(ui.ams.text());
      if (ui.azz.checked) {
        var text = (java.lang.String(randomx(4) + ui.aym.text()).getBytes(a(ui.azf.text())));
      } else {
        var text = (java.lang.String(ui.aym.text()).getBytes(a(ui.azf.text())));
      }
      var aws = a(ui.asj.text());
      if (alx == "NoPadding" && (ams == "ECB" || ams == "CBC")) {
        if (text.length % 16 != 0) {
          var tmp0 = text.length;
          var tmp = 16 - (tmp0 % 16);
          text = java.util.Arrays.copyOf(text, tmp0 + tmp);
          for (i = 0; i < tmp; i++) {
            text[i + tmp0] = tmp;
          }
        }
      }
      var lx = a("AES/" + ams + "/" + alx);
      var sc = a(ui.asc.text());
      if (zx == 1) {
        var t = ui.aom.text();
        ui.axx.text("md5:" + bytestohexstring(md5(t, "md5")) + "\n" + "sha1:" + bytestohexstring(md5(t, "sha1")) + "\n" + "sha256:" + bytestohexstring(md5(t, "sha256")) + "\n" + "sha512:" + bytestohexstring(md5(t, "sha512")));
        var jg = encode(text, java.util.Arrays.copyOfRange(md5(t, a(ui.amd1.text())), 0, 16), lx, java.util.Arrays.copyOfRange(md5(t, a(ui.amd2.text())), 0, 16));
        if (sc == "base64") {
          ui.ajg.text(java.lang.String(android.util.Base64.encode(jg, 0)));
        } else if (sc == "Hex") {
          ui.ajg.text(bytestohexstring(jg));
        } else {
          ui.ajg.text("输出形式未选择");
        }
      }
    });
    ui.ayj.click(() => {
      var zx = 1;
      var sc = a(ui.asc.text());
      if (sc == "base64") {
        var text = android.util.Base64.decode(ui.ajg.text(), 0);
      } else if (sc == "Hex") {
        var text = hexstringtobytes(ui.ajg.text());
      } else {
        ui.aym.text("输出形式未选择");
        zx = 0;
      }
      var ams = a(ui.ams.text());
      var aws = a(ui.asj.text());
      var lx = a("AES/" + ams + "/" + alx);
      if (zx == 1) {
        var t = ui.aom.text();
        ui.axx.text("md5:" + bytestohexstring(md5(t, "md5")) + "\n" + "sha1:" + bytestohexstring(md5(t, "sha1")) + "\n" + "sha256:" + bytestohexstring(md5(t, "sha256")) + "\n" + "sha512:" + bytestohexstring(md5(t, "sha512")));
        try {
          var jg = java.lang.String(decode(text, java.util.Arrays.copyOfRange(md5(t, a(ui.amd1.text())), 0, 16), lx, java.util.Arrays.copyOfRange(md5(t, a(ui.amd2.text())), 0, 16)), a(ui.azf.text()));
          if (ui.azz.checked) {
            ui.aym.text(jg.substring(4, jg.length()));
          } else {
            ui.aym.text(jg);
          }
        } catch (e) {
          ui.aym.text("解密错误");
        }
      }
    });
    ui.ams.click(() => {
      var xx = ["ECB", "CBC", "CTR", "OFB", "CFB"];
      threads.start(function () {
        var t = dialogs.singleChoice("", xx);
        if (t != -1) {
          ui.run(function () {
            ui.ams.text(xx[t] + "▼");
          });
        }
      });
    });
    ui.amd1.click(() => {
      var xx = ["md5", "sha1", "sha256", "sha512"];
      threads.start(function () {
        var t = dialogs.singleChoice("", xx);
        if (t != -1) {
          ui.run(function () {
            ui.amd1.text(xx[t] + "▼");
          });
        }
      });
    });
    ui.amd2.click(() => {
      var xx = ["md5", "sha1", "sha256", "sha512"];
      threads.start(function () {
        var t = dialogs.singleChoice("", xx);
        if (t != -1) {
          ui.run(function () {
            ui.amd2.text(xx[t] + "▼");
          });
        }
      });
    });
    ui.atc.click(() => {
      var xx = ["PKCS5Padding", "NoPadding", "ISO10126Padding"];
      threads.start(function () {
        var t = dialogs.singleChoice("", xx);
        if (t != -1) {
          ui.run(function () {
            alx = xx[t];
            ui.atc.text(xx[t] + "▼");
          });
        }
      });
    });
    ui.asj.click(() => {
      var xx = ["128"];
      threads.start(function () {
        var t = dialogs.singleChoice("", xx);
        if (t != -1) {
          ui.run(function () {
            ui.asj.text(xx[t] + "▼");
          });
        }
      });
    });
    ui.asc.click(() => {
      var xx = ["base64", "Hex"];
      threads.start(function () {
        var t = dialogs.singleChoice("", xx);
        if (t != -1) {
          ui.run(function () {
            ui.asc.text(xx[t] + "▼");
          });
        }
      });
    });
    ui.azf.click(() => {
      var xx = ["utf-8", "gb2312", "gbk", "gb18030"];
      threads.start(function () {
        var t = dialogs.singleChoice("", xx);
        if (t != -1) {
          ui.run(function () {
            ui.azf.text(xx[t] + "▼");
          });
        }
      });
    });
    ui.aen.click(() => {
      var zx = 1;
      var ams = a(ui.ams.text());
      var text = java.lang.String(ui.aym.text()).getBytes(a(ui.azf.text()));
      var mm = java.lang.String(ui.amm.text()).getBytes(a(ui.azf.text()));
      var aws = a(ui.asj.text());
      if (alx == "NoPadding" && (ams == "ECB" || ams == "CBC")) {
        if (text.length % 16 != 0) {
          var tmp0 = text.length;
          var tmp = 16 - (tmp0 % 16);
          text = java.util.Arrays.copyOf(text, tmp0 + tmp);
          for (i = 0; i < tmp; i++) {
            text[i + tmp0] = tmp;
          }
        }
      }

      if (mm.length != aws / 8) {
        ui.ajg.text("密码长度必须为" + aws / 8 + "位!");
        zx = 0;
      }
      var iv = "";
      if (ams != "ECB") {
        var iv = java.lang.String(ui.aiv.text()).getBytes();
        if (iv.length != aws / 8) {
          ui.ajg.text("偏移量长度必须为" + aws / 8 + "位!");
          zx = 0;
        }
      }
      var lx = a("AES/" + ams + "/" + alx);
      var sc = a(ui.asc.text());
      if (zx == 1) {
        var jg = encode(text, mm, lx, iv);
        if (sc == "base64") {
          ui.ajg.text(java.lang.String(android.util.Base64.encode(jg, 0)));
        } else if (sc == "Hex") {
          ui.ajg.text(bytestohexstring(jg));
        } else {
          ui.ajg.text("输出形式未选择");
        }
      }
    });
    ui.ade.click(() => {
      var zx = 1;
      var sc = a(ui.asc.text());
      if (sc == "base64") {
        var text = android.util.Base64.decode(ui.ajg.text(), 0);
      } else if (sc == "Hex") {
        var text = hexstringtobytes(ui.ajg.text());
      } else {
        ui.aym.text("输出形式未选择");
        zx = 0;
      }
      var ams = a(ui.ams.text());
      var mm = java.lang.String(ui.amm.text()).getBytes();
      var aws = a(ui.asj.text());
      if (mm.length != aws / 8) {
        ui.ajg.text("密码长度必须为" + aws / 8 + "位!");
        zx = 0;
      }
      var iv = "";
      if (ams != "ECB") {
        var iv = java.lang.String(ui.aiv.text()).getBytes();
        if (iv.length != aws / 8) {
          ui.ajg.text("偏移长度必须为" + aws / 8 + "位!");
          zx = 0;
        }
      }
      var lx = a("AES/" + ams + "/" + alx);
      if (zx == 1) {
        try {
          var jg = decode(text, mm, lx, iv);
          ui.aym.text(java.lang.String(jg, a(ui.azf.text())));
        } catch (e) {
          ui.aym.text("解密错误!");
        }
      }
    });

  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}
var 二维码 = {
  ui: ui.inflate( <
    frame background = "#515155" >
    <
    vertical align = "top"
    margin = "30" >
    <
    text textSize = "16sp"
    textStyle = "bold" > 输入内容： < /text>

    <
    input id = "num"
    layout_weight = "1"
    bg = "#ffffff"
    paddingLeft = "10sp"
    hint = "输入网址"
    alpha = "0.5" / >
    <
    button h = "55"
    id = "ok"
    text = "生成" / >

    <
    img id = "rounded_img"
    gravity = "center"
    padding = "10"
    src = "http://www.autojs.org/assets/uploads/profile/1-profileavatar.jpeg"
    w = "200"
    h = "200"
    radius = "20dp"
    scaleType = "fitXY" / >
    <
    /vertical> <
    /frame>
  ),
  initList: function () {
    var aad;
    ui.ok.click(function () {
      threads.start(function () {
        let sd = ui.num.text();
        if (sd) {
          ui.run(() => {
            aad = ("http://mobile.qq.com/qrcode?url=" + sd);
            ui.rounded_img.setSource(aad);
          });
        }
      });
    });
    ui.ok.on("long_click", () => {
      ui.num.setText("");
    });
    ui.rounded_img.on("click", () => {
      threads.start(function () {
        let name = (new Date).getTime();
        if (aad) {
          files.writeBytes("/sdcard/" + name + ".jpg", http.get(aad).body.bytes());
          media.scanFile("/sdcard/" + name + ".jpg");
          toast("保存成功!");
        }
      });
    });

  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}

var 图片 = {
  ui: ui.inflate( <
    vertical >
    <
    text id = "text_test"
    paddingTop = "10"
    textSize = "19sp"
    text = "选择图片后点击上传" / >
    <
    horizontal padding = "90 20 10 10" >
    <
    button id = "calc"
    align = "center" > 选择图片 < /button> <
    button id = "up"
    align = "center" > 上传 < /button> <
    /horizontal> <
    text id = "text_url"
    paddingTop = "10"
    textSize = "19sp" / >
    <
    /vertical>
  ),
  initList: function () {
    ui.calc.click(() => {
      startChooseFile("*/*");
    });

    ui.up.click(() => {
      threads.start(function () {
        let wsx = 上传图片(ui.text_test.text());
        ui.run(() => {
          ui.text_url.setText(wsx);
        });
      });
    });
    ui.text_test.click(() => {
      let xllj = ui.text_test.text();
      if (xllj) {
        setClip(xllj);
        toast("复制成功");
      }
    });

    ui.text_url.click(() => {
      let xbj = ui.text_url.text();
      if (xbj) {
        setClip(xbj);
        toast("复制成功");
      }
    });
  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}
var 文字识别 = {
  ui: ui.inflate( <
    frame >
    <
    vertical align = "top"
    margin = "0"
    bg = "#ff555555" >
    <
    text id = "text_test"
    textSize = "12sp" / >
    <
    linear >
    <
    button id = "awz"
    layout_weight = "1"
    h = "45"
    hint = "选择图片" / >
    <
    button h = "45"
    w = "60"
    id = "ok"
    text = "识别" / >
    <
    button h = "45"
    w = "60"
    id = "copy"
    text = "复制" / >
    <
    /linear> <
    input id = "text"
    gravity = "left"
    size = "16"
    bg = "#ffffff"
    w = "358"
    h = "566"
    margin = "5 1 5 1" / >
    <
    /vertical> <
    /frame>
  ),
  initList: function () {

    ui.awz.click(() => {
      startChooseFile("image/*");
    });
    ui.copy.click(() => {
      let xbj = ui.text.text();
      if (xbj) {
        setClip(xbj);
        toast("复制成功");
      }
    });

    ui.ok.click(() => {
      threads.start(function () {
        let ert = ui.text_test.text();
        if (ert) {
          let wsx = Text_Orc(ui.text_test.text());
          if (wsx) {
            ui.run(() => {
              ui.text.setText(wsx);
            });
          }
        } else {
          toast("请先选择图片");
        }
      });
    });
  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}

var 查ip = {
  ui: ui.inflate( <
    frame background = "#515155" >
    <
    vertical align = "top"
    margin = "30" >
    <
    linear >
    <
    text textSize = "20sp"
    textStyle = "bold" > 当前的IP地址： < /text> <
    text id = "iip"
    textSize = "26sp" / >
    <
    /linear>    <
    linear >
    <
    input id = "num"
    layout_weight = "1"
    bg = "#ffffff"
    h = "45"
    paddingLeft = "10sp"
    maxLines = "1"
    hint = "IP地址"
    alpha = "0.5" / >
    <
    button h = "55"
    w = "70"
    id = "ok"
    text = "查询" / >
    <
    /linear> <
    linear >
    <
    text textSize = "26sp"
    text = "您查询的的IP：" / >
    <
    text id = "ipp"
    h = "30"
    w = "auto"
    textSize = "18sp" / >
    <
    /linear>             <
    linear >
    <
    text textSize = "26sp"
    text = "国家：" / >
    <
    text id = "gjia"
    h = "30"
    w = "auto"
    textSize = "18sp" / >
    <
    /linear> <
    linear >
    <
    horizontal >
    <
    text textSize = "26sp"
    text = "省份：" / >
    <
    text id = "sff"
    h = "30"
    w = "auto"
    textSize = "18sp" / >
    <
    /horizontal> <
    /linear> <
    linear >
    <
    horizontal >
    <
    text textSize = "26sp"
    text = "地区：" / >
    <
    text id = "dqq"
    h = "30"
    w = "auto"
    textSize = "18sp" / >
    <
    /horizontal> <
    /linear> <
    linear >
    <
    horizontal >
    <
    text textSize = "26sp"
    text = "运营商：" / >
    <
    text id = "ysss"
    h = "40"
    w = "auto"
    textSize = "18sp" / >
    <
    /horizontal> <
    /linear> <
    /vertical> <
    /frame>
  ),
  initList: function () {
    threads.start(function () {
      var iipp = iip();
      ui.post(() => {
        ui.iip.setText(iipp);
      });
      asd(iipp);
    });
    ui.ok.click(function () {
      threads.start(function () {
        let sd = ui.num.text();
        if (sd) {
          asd(sd);
        }
      });
    });
    ui.ok.on("long_click", () => {
      ui.num.setText("");
    });
    ui.iip.click(function () {
      let ssj = ui.iip.text();
      if (ssj) {
        setClip(ssj);
        toast("复制成功");
      }
    });
    ui.gjia.click(function () {
      let cvb = ui.gjia.text();
      if (cvb) {
        setClip(cvb);
        toast("复制成功");
      }
    });
    ui.sff.click(function () {
      let sffj = ui.sff.text();
      if (sffj) {
        setClip(sffj);
        toast("复制成功");
      }
    });

    ui.sff.click(function () {
      let sffj = ui.sff.text();
      if (sffj) {
        setClip(sffj);
        toast("复制成功");
      }
    });
    ui.dqq.click(function () {
      let dqqd = ui.dqq.text();
      if (dqqd) {
        setClip(dqqd);
        toast("复制成功");
      }
    });

    ui.ysss.click(function () {
      let qhh = ui.ysss.text();
      if (qhh) {
        setClip(qhh);
        toast("复制成功");
      }
    });
  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}

var 身份证 = {
  ui: ui.inflate( <
    frame background = "#515155" >
    <
    vertical align = "top"
    margin = "30" >
    <
    text textSize = "26sp"
    textStyle = "bold" > 身份证号码： < /text> <
    linear >
    <
    input id = "num"
    layout_weight = "1"
    bg = "#ffffff"
    h = "45"
    paddingLeft = "10sp"
    maxLines = "1"
    inputType = "number"
    emsMax = "11"
    hint = "输入身份证号码"
    alpha = "0.5" / >
    <
    button h = "55"
    w = "70"
    id = "ok"
    text = "查询" / >
    <
    /linear> <
    linear >
    <
    text id = "xkh"
    h = "30"
    w = "auto"
    textSize = "18sp" / >
    <
    /linear> <
    linear >
    <
    horizontal >
    <
    text id = "xb"
    h = "30"
    w = "auto"
    textSize = "18sp" / >
    <
    /horizontal> <
    /linear> <
    linear >
    <
    horizontal >
    <
    text id = "csrq"
    h = "30"
    w = "auto"
    textSize = "18sp" / >
    <
    /horizontal> <
    /linear> <
    linear >
    <
    horizontal >
    <
    text id = "fzd"
    h = "40"
    w = "auto"
    textSize = "18sp" / >
    <
    /horizontal> <
    /linear> <
    /vertical> <
    /frame>
  ),
  initList: function () {
    ui.ok.click(function () {
      threads.start(function () {
        let sd = ui.num.text();
        if (sd) {
          var sum = sfz(sd);
          if (sum) {
            ui.run(() => {
              ui.xb.setText(sum[1]);
              ui.csrq.setText(sum[2]);
              ui.fzd.setText(sum[3]);
            });
          }
        }
      });
    });

    ui.ok.on("long_click", () => {
      ui.num.setText("");
    });

    ui.xb.click(function () {
      let xbj = ui.xb.text();
      if (xbj) {
        setClip(xbj);
        toast("复制成功");
      }
    });
    ui.csrq.click(function () {
      let csrqd = ui.csrq.text();
      if (csrqd) {
        setClip(csrqd);
        toast("复制成功");
      }
    });

    ui.fzd.click(function () {
      let qhh = ui.fzd.text();
      if (qhh) {
        setClip(qhh);
        toast("复制成功");
      }
    });
  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}
var 号码 = {
  ui: ui.inflate( <
    frame background = "#515155" >
    <
    vertical align = "top"
    margin = "30" >
    <
    text textSize = "26sp"
    textStyle = "bold" > 手机号码(段)： < /text> <
    linear >
    <
    input id = "num"
    layout_weight = "1"
    bg = "#ffffff"
    h = "45"
    paddingLeft = "10sp"
    maxLines = "1"
    inputType = "number"
    emsMax = "11"
    hint = "输入手机号码"
    alpha = "0.5" / >
    <
    button h = "55"
    w = "70"
    id = "ok"
    text = "查询" / >
    <
    /linear> <
    linear >
    <
    text h = "20"
    w = "auto"
    text = "手机号码段："
    textSize = "18sp" / >
    <
    text id = "sj"
    h = "30"
    w = "auto"
    textSize = "18sp" / >
    <
    /linear> <
    linear >
    <
    horizontal >
    <
    text h = "20"
    w = "auto"
    text = "卡号归属地："
    textSize = "18sp" / >
    <
    text id = "gsd"
    h = "30"
    w = "auto"
    textSize = "18sp" / >
    <
    /horizontal> <
    /linear> <
    linear >
    <
    horizontal >
    <
    text h = "20"
    w = "auto"
    text = "卡类型："
    textSize = "18sp" / >
    <
    text id = "klx"
    h = "30"
    w = "auto"
    textSize = "18sp" / >
    <
    /horizontal> <
    /linear> <
    linear >
    <
    horizontal >
    <
    text h = "20"
    w = "auto"
    text = "区号："
    textSize = "18sp" / >
    <
    text id = "qh"
    h = "30"
    w = "auto"
    textSize = "18sp" / >
    <
    /horizontal> <
    /linear> <
    linear >
    <
    horizontal >
    <
    text h = "20"
    w = "auto"
    text = "邮政编码："
    textSize = "18sp" / >
    <
    text id = "yzbm"
    h = "30"
    w = "auto"
    textSize = "18sp" / >
    <
    /horizontal> <
    /linear> <
    /vertical> <
    /frame>
  ),
  initList: function () {
    ui.ok.click(function () {
      threads.start(function () {
        let sd = ui.num.text();
        if (sd) {
          var sum = query(sd);
          if (sum) {
            ui.run(() => {
              ui.sj.setText(sd);
              ui.gsd.setText(sum[2]);
              ui.klx.setText(sum[4]);
              ui.qh.setText(sum[6]);
              ui.yzbm.setText(sum[8]);
            });
          }
        }
      });
    });
    ui.ok.on("long_click", () => {
      ui.num.setText("");
    });
    ui.sj.click(function () {
      let sjj = ui.sj.text();
      if (sjj) {
        setClip(sjj);
        toast("复制成功");
      }
    });
    ui.gsd.click(function () {
      let gsdd = ui.gsd.text();
      if (gsdd) {
        setClip(gsdd);
        toast("复制成功");
      }
    });
    ui.klx.click(function () {
      let klxx = ui.klx.text();
      if (klxx) {
        setClip(klxx);
        toast("复制成功");
      }
    });
    ui.qh.click(function () {
      let qhh = ui.qh.text();
      if (qhh) {
        setClip(qhh);
        toast("复制成功");
      }
    });
    ui.yzbm.click(function () {
      let yzbmm = ui.yzbm.text();
      if (yzbmm) {
        setClip(yzbmm);
        toast("复制成功");
      }
    });
  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}

var 音乐 = {
  ui: ui.inflate( <
    vertical >
    <
    horizontal >
    <
    input id = "music_search_input"
    hint = "搜索音乐"
    layout_weight = "1"
    textSize = "16sp"
    marginLeft = "16" / >
    <
    button id = "music_search_button"
    text = "搜索"
    textSize = "20sp"
    w = "100"
    h = "50"
    margin = "-5 0 0 -80"
    style = "Widget.AppCompat.Button.Borderless.Colored" / >
    <
    spinner id = "music_sp1"
    textSize = "20sp"
    h = "50"
    entries = "QQ|网易|酷狗|百度|虾米" / >
    <
    /horizontal> <
    frame >
    <
    list id = "music_list" >
    <
    horizontal >
    <
    linear bg = "?selectableItemBackground"
    w = "1000" >
    <
    img src = "{{pic}}"
    h = "50"
    w = "50" / >
    <
    vertical h = "50" >
    <
    text text = "{{name}}"
    textSize = "15sp"
    textColor = "#000000"
    h = "20"
    w = "*"
    margin = "10 0 5 10" / >
    <
    text text = "{{artist}}"
    textSize = "10sp"
    h = "20"
    w = "*"
    margin = "0 0 0 10" / >
    <
    /vertical> <
    /linear> <
    /horizontal> <
    /list> <
    /frame> <
    /vertical>
  ),
  initList: function () {

    threads.start(function () {
      netease_hot();
    });

    ui.music_list.setDataSource(music_list);

    ui.music_search_button.on("click", function () {
      music_flag1 = false;
      music_page = 1;
      threads.start(function () {
        var len = music_list.length;
        for (let i = 0; i < len; i++) {
          music_list.pop();
        }
        var i = ui.music_sp1.getSelectedItemPosition();
        toast(music_source[i]);
        getMusic(ui.music_search_input.text(), music_source[i], music_page, 20);
      });
    });

    ui.music_list.on("item_click", function (m) {
      if (m.id == 0) {
        threads.start(function () {
          getMusic(ui.music_search_input.text(), m.source, ++music_page, 10);
        });
      } else {
        threads.start(function () {
          let music_d;
          if (music_flag1) {
            music_d = download_music(m.id, "netease");
          } else {
            music_d = download_music(m.id, m.source);
          }
          download(m.name + " - " + m.artist, music_d.url)
        });
      }
    });

  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}



var 网页源码 = {
  ui: ui.inflate( <
    vertical align = "top"
    margin = "0"
    bg = "#ff555555" >
    <
    linear >
    <
    input id = "awz"
    w = "302"
    bg = "#ffffff"
    h = "45"
    hint = "输入网址。" > http: //www.autojs.org</input>
    <
    button h = "55"
    w = "60"
    id = "aok"
    text = "浏览" / >
    <
    /linear> <
    input id = "text"
    gravity = "left"
    size = "10"
    bg = "#ffffff"
    w = "358"
    h = "566"
    margin = "0 1"
    hint = "网页代码区" / >
    <
    /vertical>
  ),
  initList: function () {
    atext0 = 0;
    ui.aok.click(() => {
      if (atext0 != 2) {
        atext0 = 2;
        url = ui.awz.text();
        awy(url);
        downloadId = setInterval(() => {
          if (atext0 == 1) {
            atext0 = 0;
            ui.text.text(atext);
            clearInterval(downloadId);
            return;
          }
        }, 10);
      } else {
        ui.text.text("上次获取还没结束，要等待");
      }
    });
  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}

var 成语词典 = {
  ui: ui.inflate( <
    vertical padding = "8" >
    <
    horizontal >
    <
    text textColor = "black"
    textSize = "18sp"
    layout_weight = "1" > 成语字典 v1 .5 < /text> <
    button id = "lishi"
    text = "历史"
    w = "50"
    style = "Widget.AppCompat.Button.Borderless.Colored" / >
    <
    button id = "del"
    text = "删除"
    w = "50"
    style = "Widget.AppCompat.Button.Borderless.Colored" / >
    <
    button id = "baocun"
    text = "保存"
    textSize = "15sp"
    w = "50"
    style = "Widget.AppCompat.Button.Borderless.Colored" / >
    <
    /horizontal> <
    input id = "text"
    layout_weight = "1"
    hint = "{{tipArr.tip}}"
    gravity = "top"
    bg = "#00FF00"
    alpha = "0.5" / >
    <
    horizontal >
    <
    button layout_weight = "1"
    text = "查询"
    id = "chaxun" / >
    <
    button layout_weight = "1"
    text = "清空"
    id = "qingkong" / >
    <
    button layout_weight = "1"
    text = "导入"
    id = "daoru" / >
    <
    button layout_weight = "1"
    text = "示例"
    id = "shili" / >
    <
    /horizontal> <
    /vertical>
  ),
  initList: function () {
    ui.lishi.click(() => {
      ui.text.setText(str.toString());
      return true;
    });
    ui.lishi.longClick(() => {
      if (files.exists("/sdcard/成语意思.txt")) {
        ui.text.setText(files.read("/sdcard/成语意思.txt"));
        toast('导入成功!!');
      } else {
        toast("你还没有保存过呢");
      }
      return true;
    });
    ui.baocun.click(() => {
      var txt = ui.text.text();
      if (txt) {
        files.append("/sdcard/成语意思.txt", txt + "\n\n\n");
        toast('保存成功!\n"/sdcard/成语意思.txt"');
      } else {
        toast("还没有内容呢✺◟(∗❛ัᴗ❛ั∗)◞✺");
      }
      return true;
    });
    ui.baocun.longClick(() => {
      let txt = ui.text.text();
      if (txt) {
        toast("复制成功！");
        setClip(txt);
        return true;
      }
    });
    ui.del.click(() => {
      if (files.exists("/sdcard/成语意思.txt")) {
        files.remove("/sdcard/成语意思.txt");
        toast('删除成功!!');
        return true;
      }
    });
    ui.chaxun.click(() => {
      files.remove("/sdcard/.temp.txt")
      str = [];
      str.push(ui.text.text());
      查询();
      return true;
    });
    ui.qingkong.click(() => {
      ui.text.setText("");
      return true;
    });
    ui.daoru.click(() => {
      if (files.exists("/sdcard/成语.txt")) {
        ui.text.setText(files.read("/sdcard/成语.txt"));
        toast('导入成功!!\n"/sdcard/成语.txt');
      } else {
        toast("把你要导入的成语放到  /sdcard/成语.txt   里面");
      }
      return true;
    });
    ui.shili.click(() => {
      ui.text.setText(tipArr.Examples);
      return true;
    });
  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}

var 文字翻译 = {
  ui: ui.inflate( <
    vertical padding = "16"
    bg = "#DCDCDC" >
    <
    text textSize = "16sp"
    textStyle = "bold" > 文字翻译 v0 .1 < /text> <
    horizontal >
    <
    text textSize = "19sp" > < /text> <
    spinner id = "sp1"
    entries = "AUTO|中文|英文|粤语|文言文|日语|韩语|法语|繁体中文" / >
    <
    text textSize = "16"
    text = "       翻译成" / >
    <
    text textSize = "16sp"
    text = "      " / >
    <
    spinner id = "sp2"
    entries = "中文|英语|粤语|文言文|日语|韩语|法语|繁体中文"
    spinnerMode = "dialog" / >
    <
    /horizontal> <
    input id = "get"
    textColor = "red"
    layout_weight = "1"
    h = "100"
    gravity = "top"
    bg = "#BEBEBE"
    alpha = "1" / >
    <
    horizontal >
    <
    button id = "ok" > 开始翻译 < /button> <
    button id = "copy" > 复制结果 < /button> <
    button id = "song" > 朗读 < /button> <
    button id = "clos" > 清空 < /button> <
    /horizontal> <
    input id = "te"
    textSize = "20sp"
    textColor = "red"
    layout_weight = "1"
    h = "100"
    bg = "#BEBEBE"
    alpha = "1" / >
    <
    /vertical>
  ),
  initList: function () {
    var list = ["auto", "zh", "en", "yue", "wyw", "jp", "kor", "fra", "cht"];
    ui.ok.on("click", () => {
      let txt = ui.get.text();
      var fo = ui.sp1.getSelectedItemPosition();
      var to = ui.sp2.getSelectedItemPosition();
      if (txt) {
        var ok1 = threads.start(function () {
          let as = Baidu_To(txt, list[fo], list[to + 1]);
          if (as) {
            ui.run(() => {
              ui.te.setText(as);
            });
          } else {
            ui.te.setText(ui.get.text())
          };
        });
      }
    });

    ui.copy.on("click", () => {
      let tt = ui.te.text();
      if (tt) {
        toast("已复制");
        setClip(tt);
      }
    });
    ui.clos.on("click", () => {
      ui.get.setText("");
      ui.te.setText("");
    });
  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}
var 聊天机器人 = {
  ui: ui.inflate( <
    linear orientation = "vertical"
    gravity = "top|center" >
    <
    linear orientation = "horizontal"
    w = "*"
    bg = "#a3a1a1"
    gravity = "center" >
    <
    /linear> <
    linear layout_weight = "1"
    w = "*" >
    <
    list id = "List"
    orientation = "vertical"
    w = "*"
    h = "*"
    bg = "#eeeeee"
    padding = "5" >
    <
    linear orientation = "horizontal"
    h = "auto"
    w = "*"
    gravity = "top|center"
    margin = "0 5 22 5"
    padding = "5" >
    <
    linear w = "50"
    h = "50" >
    <
    img w = "{{this.图1}}"
    h = "{{this.图1}}"
    scaleType = "fitXY"
    circle = "true"
    src = "{{this.头像}}" / >
    <
    /linear> <
    linear layout_weight = "1"
    gravity = "{{this.对齐}}"
    margin = "10"
    paddingLeft = "{{this.左宽}}"
    paddingRight = "{{this.右宽}}" >
    <
    text text = "{{this.信息}}"
    textSize = "19sp"
    w = "auto"
    textColor = "#555555"
    padding = "5"
    bg = "#dbcbb8" / >
    <
    /linear> <
    linear w = "50"
    h = "50" >
    <
    img w = "{{this.图2}}"
    h = "{{this.图2}}"
    scaleType = "fitXY"
    circle = "true"
    src = "{{this.头像}}" / >
    <
    /linear> <
    /linear> <
    /list> <
    /linear> <
    linear orientation = "horizontal"
    h = "auto"
    w = "*" >
    <
    input id = "内容"
    h = "auto"
    layout_weight = "20" / >
    <
    button id = "发送"
    text = "发送"
    h = "50"
    layout_weight = "1"
    gravity = "center"
    style = "Widget.AppCompat.Button.Colored" / >
    <
    /linear> <
    /linear>
  ),
  initList: function () {
    ui.List.setDataSource(对话);
    ui.发送.on("click", () => {
      var str = ui.内容.text();
      if (str.length > 0) {
        我(str);
        机器人(str);
        ui.内容.setText("");
        ui.List.setDataSource(对话);
      } else {
        toast("你还没有输入内容呢");
      }
    });

    ui.List.on("item_click", function (item, pos) {
      let a = ["复制", "取消"];
      dialogs.select(null, a, function (i) {
        switch (i) {
          case 0:
            toast("已复制到剪贴板");
            setClip(item.信息);
            break;
        }
      });
    });

  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}
var 密码生成器 = {
  ui: ui.inflate( <
    vertical >
    <
    vertical >
    <
    text w = "*"
    h = "56"
    gravity = "center"
    color = "#4D3D26"
    size = "24sp"
    textStyle = "bold" > 复杂密码生成器 < /text> <
    /vertical> <
    vertical marginTop = "13" >
    <
    text marginLeft = "16"
    color = "#1E1E1E"
    size = "18sp"
    textStyle = "bold" > 设置要生成密码的长度和数量 < /text> <
    linear > a <
    input id = "passlength"
    paddingLeft = "5"
    inputType = "number"
    maxLength = "2"
    marginTop = "8"
    singleLine = "true"
    marginLeft = "16"
    h = "*"
    w = "154"
    hint = "长度[6-32位]" / >
    <
    input id = "passnum"
    paddingLeft = "5"
    inputType = "number"
    maxLength = "3"
    marginTop = "8"
    singleLine = "true"
    marginLeft = "16"
    h = "*"
    w = "154"
    hint = "数量[选填]" / >
    <
    /linear> <
    /vertical> <
    linear >
    <
    checkbox id = "str"
    text = "小写字母"
    color = "#684D38"
    marginLeft = "16" / >
    <
    checkbox id = "STR"
    text = "大写字母"
    color = "#684D38"
    marginLeft = "16" / >
    <
    /linear> <
    linear >
    <
    checkbox id = "num"
    text = "数字"
    color = "#684D38"
    marginLeft = "16" / >
    <
    checkbox id = "sym"
    text = "特殊符号"
    color = "#684D38"
    marginLeft = "44" / >
    <
    /linear>

    <
    input id = "text_output"
    paddingLeft = "5"
    gravity = "top"
    color = "#000000"
    size = "15"
    margin = "15 16 0 16"
    w = "*"
    h = "200" / >

    <
    linear gravity = "center" >
    <
    button id = "make"
    h = "55"
    text = "生成"
    margin = "16" > < /button> <
    button id = "copy"
    h = "55"
    text = "复制"
    margin = "16" > < /button> <
    /linear> <
    /vertical>
  ),
  initList: function () {
    ui.str.setChecked(true);
    ui.STR.setChecked(true);
    ui.num.setChecked(true);
    ui.sym.setChecked(true);
    ui.text_output.setCursorVisible(false);
    ui.text_output.setFocusable(false);
    ui.text_output.setHint('        本程序是百度应用"随机密码生成器"的移植版,唯一不同的是,本程序可以一次性生成多条密码.');

    var str = 'abcdefghijklmnopqrstuvwxyz';
    var STR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var num = '0123456789';
    var sym = '+=-@#~,.[]()!%^*$';

    ui.make.click(function () {
      var PassLength = ui.passlength.text();
      var PassNum = ui.passnum.text();
      if (PassLength == '') {
        toast('密码长度不能为空!');
        return;
      }
      if (PassNum == '') {
        PassNum = 1;
      }
      if (PassLength < 6 || PassLength > 32) {
        toast('长度设置非法!');
        return;
      } else if (PassNum == 0) {
        toast('生成数量不可为"0"!');
        return;
      }

      var text = new Array();
      if (ui.str.isChecked()) {
        text.push(str);
      }
      if (ui.STR.isChecked()) {
        text.push(STR);
      }
      if (ui.num.isChecked()) {
        text.push(num);
      }
      if (ui.sym.isChecked()) {
        text.push(sym);
      }
      if (!ui.str.isChecked() && !ui.STR.isChecked() && !ui.num.isChecked() && !ui.sym.isChecked()) {
        toast('请选择密码的组合元素');
        return;
      }

      function randPassword() {
        var pw = '';
        for (i = 0; i < PassLength; i++) {
          var strpos = random(0, text.length - 1);
          pw += text[strpos].charAt(random(0, text[strpos].length - 1));
        }
        return pw;
      }
      var Result1 = '';
      for (var j = 0; j < PassNum; j++) {
        var Result = randPassword();
        if (j > 0) {
          Result1 += '\n';
        }
        Result1 += Result;

      }
      ui.text_output.setText(Result1);
    });

    ui.copy.click(function () {
      var PasswordText = ui.text_output.text();
      if (PasswordText != null && PasswordText != '') {
        setClip(PasswordText);
        var ClipText = getClip();
        if (ClipText == PasswordText) {
          toast('已复制到剪贴板!')
        } else {
          toast('写入剪贴板失败!')
        }
      } else {
        toast('请先生成密码!');
      }
      return;
    });
  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}

var 调色板 = {
  ui: ui.inflate( <
    vertical bg = "#ffffff"
    padding = "16" >
    <
    vertical w = "*"
    margin = "10"
    gravity = "center" >
    <
    horizontal >
    <
    button id = "copy1"
    text = "复制"
    style = "Widget.AppCompat.Button.Borderless.Colored" / >
    <
    input id = "valueHex"
    w = "200" / >
    <
    /horizontal> <
    horizontal >
    <
    button id = "copy2"
    text = "复制"
    style = "Widget.AppCompat.Button.Borderless.Colored" / >
    <
    input id = "valueInt"
    w = "200" / >
    <
    /horizontal> <
    /vertical> <
    horizontal margin = "10" >
    <
    text text = "A"
    w = "50px"
    textColor = "black" / >
    <
    text id = "valueA"
    w = "100px"
    textColor = "black"
    gravity = "right" / >
    <
    seekbar id = "seekbarA"
    w = "*"
    h = "*"
    max = "255" / >
    <
    /horizontal> <
    horizontal margin = "10" >
    <
    text text = "R"
    w = "50px"
    textColor = "black" / >
    <
    text id = "valueR"
    w = "100px"
    textColor = "black"
    gravity = "right" / >
    <
    seekbar id = "seekbarR"
    w = "*"
    h = "*"
    max = "255" / >
    <
    /horizontal> <
    horizontal margin = "10" >
    <
    text text = "G"
    w = "50px"
    textColor = "black" / >
    <
    text id = "valueG"
    w = "100px"
    textColor = "black"
    gravity = "right" / >
    <
    seekbar id = "seekbarG"
    w = "*"
    h = "*"
    max = "255" / >
    <
    /horizontal> <
    horizontal margin = "10" >
    <
    text text = "B"
    w = "50px"
    textColor = "black" / >
    <
    text id = "valueB"
    w = "100px"
    textColor = "black"
    gravity = "right" / >
    <
    seekbar id = "seekbarB"
    w = "*"
    h = "*"
    max = "255" / >
    <
    /horizontal> <
    img w = "*"
    h = "*"
    margin = "10"
    id = "preview" / >
    <
    /vertical>
  ),
  initList: function () {

    ui.copy1.click(() => {
      setClip(ui.valueHex.text());
      toast("已复制");
    });

    ui.copy2.click(() => {
      setClip(ui.valueInt.text());
      toast("已复制");
    });

    function getBWGridDrawable(size, color1, color2) {
      var baseBmp = android.graphics.Bitmap.createBitmap(size * 2, size * 2, android.graphics.Bitmap.Config.ARGB_8888);
      var cv = new android.graphics.Canvas(baseBmp);
      var paint = new android.graphics.Paint();
      paint.setColor(color1);
      cv.drawRect(0, 0, size, size, paint);
      cv.drawRect(size, size, size * 2, size * 2, paint);
      paint.setColor(color2);
      cv.drawRect(0, size, size, size * 2, paint);
      cv.drawRect(size, 0, size * 2, size, paint);
      var drawable = new android.graphics.drawable.BitmapDrawable(activity.getResources(), baseBmp);
      drawable.setTileModeXY(android.graphics.Shader.TileMode.REPEAT, android.graphics.Shader.TileMode.REPEAT);
      return drawable;
    }
    var c = [0xff, 0xff, 0, 0];
    var updating = false;
    var colorDrawable = new android.graphics.drawable.ColorDrawable();

    function update(source) {
      var colorInt;
      if (updating) return;
      updating = true;
      colorInt = colors.argb.apply(colors, c);
      if (source != 1) {
        ui.valueHex.setError(null);
        ui.valueHex.setText(colors.toString(colorInt));
      }
      if (source != 2) {
        ui.valueInt.setError(null);
        ui.valueInt.setText(String(colorInt));
      }
      if (source != 3) {
        ui.seekbarA.progress = c[0];
        ui.seekbarR.progress = c[1];
        ui.seekbarG.progress = c[2];
        ui.seekbarB.progress = c[3];
      }
      ui.valueA.setText(String(c[0]));
      ui.valueR.setText(String(c[1]));
      ui.valueG.setText(String(c[2]));
      ui.valueB.setText(String(c[3]));
      colorDrawable.setColor(colorInt);
      ui.preview.setImageDrawable(colorDrawable);
      updating = false;
    }
    ui.valueHex.addTextChangedListener(new android.text.TextWatcher({
      afterTextChanged: function (s) {
        try {
          if (updating) return;
          var result = NaN;
          try {
            result = colors.parseColor(s);
          } catch (e) {}
          if (isNaN(result)) {
            ui.valueHex.setError("不合法的颜色代码");
          } else {
            ui.valueHex.setError(null);
            c[0] = colors.alpha(result);
            c[1] = colors.red(result);
            c[2] = colors.green(result);
            c[3] = colors.blue(result);
            update(1);
          }
        } catch (e) {
          console.error(e)
        }
      }
    }));
    ui.valueInt.addTextChangedListener(new android.text.TextWatcher({
      afterTextChanged: function (s) {
        try {
          if (updating) return;
          var result = parseInt(s);
          if (isNaN(result)) {
            ui.valueInt.setError("不是数字");
          } else {
            ui.valueInt.setError(null);
            c[0] = colors.alpha(result);
            c[1] = colors.red(result);
            c[2] = colors.green(result);
            c[3] = colors.blue(result);
            update(2);
          }
        } catch (e) {
          console.error(e)
        }
      }
    }));
    var seekbarListener = new android.widget.SeekBar.OnSeekBarChangeListener({
      onProgressChanged: function (v, progress, fromUser) {
        try {
          if (updating) return;
          if (v == ui.seekbarA) {
            c[0] = progress;
          } else if (v == ui.seekbarR) {
            c[1] = progress;
          } else if (v == ui.seekbarG) {
            c[2] = progress;
          } else if (v == ui.seekbarB) {
            c[3] = progress;
          }
          update(3);
        } catch (e) {
          console.error(e)
        }
      }
    });
    ui.seekbarA.setOnSeekBarChangeListener(seekbarListener);
    ui.seekbarR.setOnSeekBarChangeListener(seekbarListener);
    ui.seekbarG.setOnSeekBarChangeListener(seekbarListener);
    ui.seekbarB.setOnSeekBarChangeListener(seekbarListener);
    ui.preview.setScaleType(android.widget.ImageView.ScaleType.FIT_XY);
    ui.preview.setBackgroundDrawable(getBWGridDrawable(20, colors.GRAY, colors.WHITE));
    ui.preview.setImageDrawable(colorDrawable);
    update(0);
  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}
var 每日一句 = {
  ui: ui.inflate( <
    vertical padding = "16"
    bg = "#aa280800" >
    <
    text id = "te"
    textSize = "18sp"
    h = "200"
    bg = "#FFD2D9FF" / >
    <
    horizontal gravity = "center" >
    <
    button id = "next"
    text = "刷新" / >
    <
    button id = "copy"
    text = "复制"
    w = "auto" / >
    <
    /horizontal> <
    /vertical>
  ),
  initList: function () {
    一句();
    ui.copy.on("click", () => {
      let tex = ui.te.text();
      if (tex) {
        toast("已经复制!!!");
        setClip(tex);
      }
    });
    ui.next.on("click", () => {
      一句();
    });

  },
  activate: function () {
    setContainer(this.ui);
    if (!this.inited) this.initList();
    this.inited = true;
  }
}


首页.activate();

function 一句() {
  threads.start(function () {
    array = [];
    let res = http.post("http://route.showapi.com/1211-1", {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      "showapi_appid": '79304',
      "showapi_sign": 'dc57036459004b369823957c97e01f14',
      "count": "1"
    });
    let html = res.body.json().showapi_res_body.data;
    array.push(html[0].english + "\n" + html[0].chinese + "\n\n");
    ui.post(function () {
      ui.te.setText(array.toString());
    });
  });
};

function Baidu_To(str, from, to) {
  function getMd5(string) {
    return java.math.BigInteger(1, java.security.MessageDigest.getInstance("MD5").digest(java.lang.String(string).getBytes())).toString(16)
  }
  let salt = (new Date).getTime();
  let sign = getMd5("20180125000118573" + str + salt + "O_PrebY0tsdbHjKNOaDf");
  let res = http.post("http://api.fanyi.baidu.com/api/trans/vip/translate?", {
    q: str,
    appid: "20180125000118573",
    salt: salt,
    from: from,
    to: to,
    sign: sign
  });
  try {
    str = JSON.parse(res.body.string()).trans_result.map(val => val.dst).join('\n');
    return str;
  } catch (e) {
    log(e);
    toastLog("翻译出现错误！！");
  }
}

function Text_Orc(picpath) {
  var 链接 = "http://pic.sogou.com/pic/upload_pic.jsp";
  var 获取 = http.postMultipart(链接, {
    "file": open(picpath),
  });
  var 返回 = 获取.body.string();
  获取 = http.get("http://pic.sogou.com/pic/ocr/ocrOnline.jsp?query=" + 返回);
  数据 = 获取.body.string();
  const json = JSON.parse(数据);
  处理 = json.result.map(val => val.content);
  处理 = 处理.join('\n');
  return 处理;
}

function 文本(输入) {
  识别.push({
    内容: 输入
  })
}

function cutstr(a, b, c, f, e) {
  a = a.split(b);
  var d = "";
  if (e < a.length && e != null) {} else {
    e = a.length;
  }
  if (f == null) {
    f = 1;
  }
  for (i = f; i < e; i++) {
    tmp = a[i].split(c);
    if (tmp.length > 1) {
      d += tmp[0];
    }
  }
  return d;
}

function 机器(说) {
  对话.push({
    左宽: "0dp",
    右宽: "16dp",
    对齐: "left",
    头像: "http://cdn.duitang.com/uploads/item/201504/03/20150403H3451_hmCvr.thumb.700_0.jpeg",
    信息: 说,
    图1: "50dp",
    图2: "0dp"
  });
}

function 我(说) {
  对话.push({
    左宽: "16dp",
    右宽: "0dp",
    对齐: "right",
    头像: "http://q4.qlogo.cn/g?b=qq&nk=1641763174&s=140",
    信息: 说,
    图1: "0dp",
    图2: "50dp"
  });
}

function 机器人(输入) {
  threads.start(function () {
    var 链接 = "http://www.tuling123.com/openapi/api";
    var 获取 = http.post(链接, {
      "key": "f48dd9f7a5284994bddcc546ae66cbd4",
      "info": 输入,
      "userid": "086500"
    });
    var 源码 = 获取.body.string();
    eval("b=" + 源码);
    机器(b.text);
    ui.run(() => {
      ui.List.scrollToPosition(ui.List.adapter.itemCount - 1);
    });
  });
}

function show(lg) {
  ui.run(() => {
    files.append("/sdcard/.temp.txt", lg);
    ui.text.setText(files.read("/sdcard/.temp.txt"));;
  });
}

function 查询() {
  threads.start(function () {
    log(files.remove("/sdcard/.temp.txt"));
    var txt = ui.text.text();
    if (txt) {
      var info = txt.split("\n");
      for (let a = 0; a < info.length; a++) {
        var url = "http://m.dict.cn/hanyu/search.php?q=";
        var res = http.get(url + info[a]);
        var html = res.body.string();
        html = cutstr(html, "<dl", "</dl>", 1, 20);
        html = cutstr(html, "<dd", "</dd>", 1, 20);
        html = html.split(">");
        var txt = info[a] + "\n【释义】" + html[1] + "\n";
        show(txt);
        sleep(300);
      }
    } else {
      toast("没有内容!!");
    }
  });
}

function awy(url) {
  threads.start(function () {
    try {
      var res = http.get(url, {
        headers: {
          "Cookie": cookie
        }
      });
      if (res.statusCode == 200) {
        atext = (res.body.string());
      } else {
        atext = ("请求失败:" + res.statusMessage);
      }
    } catch (e) {
      atext = "请求不到";
    }
    atext0 = 1;
  });
}

function download(name, url1) {
  let a = ["下载", "播放", "取消"];
  let music_down = tipArr.music_down;
  dialogs.select(name, a, function (i) {
    switch (i) {
      case 0:
        dirlist = files.listDir(music_down);
        let j;
        for (j = 0; j < dirlist.length; j++) {
          if (dirlist[j] == name + ".mp3") {
            break;
          }
        }
        if (j == dirlist.length) {
          threads.start(function () {
            toast(name + "  开始下载。。。");
            files.writeBytes(music_down + "/" + name + ".mp3", http.get(url1).body.bytes()); //
            toastLog(name + " 下载成功！");
          });
        } else {
          toast("音乐已存在!")
        }
        break;
      case 1:
        if (files.exists(music_down + "/" + name + ".mp3")) {
          toast(name);
          app.viewFile(music_down + "/" + name + ".mp3");
        } else {
          toast("还没有下载 ⊙ω⊙");
        }
        break;
    }
  });
}

function getMusic(word, source, page, num) {
  if (!word) {
    return;
  }
  url = "https://y.xuelg.com/api.php?callback=jQuery111305475340320325446_1529241763041&types=search&count=" + num + "&source=" + source + "&pages=" + page + "&name=" + word;
  let m = http.get(url).body.string();
  eval("m = " + m.substr(m.indexOf('(')));
  music_list.pop();
  if (m.length == 0) {
    toast("没有更多了");
  }
  for (i in m) {
    url = "https://y.xuelg.com/api.php?callback=jQuery111306503234710876828_1529243003818&types=" + "pic" + "&id=" + m[i].pic_id + "&source=" + m[i].source;
    mstr = http.get(url).body.string();
    eval(mstr = mstr.substr(mstr.indexOf('(')));
    mstr = mstr.replace(/\\/g, "");
    m[i]["pic"] = mstr.match(/http[^"]*/g)[0];
    music_list.push(m[i]);
  }
  music_list.push({
    name: "                              加载更多",
    pic: "#ffffff",
    artist: "",
    id: "0"
  });
  return m;
}

function download_music(id, source) {
  url = "https://y.xuelg.com/api.php?callback=jQuery111306503234710876828_1529243003818&types=" + "url" + "&id=" + id + "&source=" + source;
  mstr = http.get(url).body.string();
  eval(mstr = mstr.substr(mstr.indexOf('(')));
  mstr = mstr.replace(/\\/g, "");
  m = [];
  try {
    m["url"] = mstr.match(/url\":\"[^"]*/g)[0].match(/http.*/g)[0];
    m["size"] = mstr.match(/size\":[^,]*/g)[0].match(/\d.*/g)[0];
    m["br"] = mstr.match(/br\":[^}]*/g)[0].match(/\d.*/g)[0];
  } catch (e) {
    log(e)
  }
  return m;
}

function netease_hot() {
  url = "https://y.xuelg.com/api.php?callback=jQuery111305475340320325446_1529241763034&types=playlist&id=3778678";
  hot = http.get(url).body.string();
  hot = hot.match(/"tracks":.*/g)[0];
  eval("hot = " + hot.substr(9).replace(/,"trackIds".*/g, ""));
  for (i in hot) {
    music_list.push({
      id: hot[i].id,
      name: hot[i].name,
      artist: hot[i].ar[0].name,
      pic: hot[i].al.picUrl
    });

  }
  return hot;
}

function query(numbel) {
  ui.run(() => {
    ui.sj.setText("");
    ui.gsd.setText("");
    ui.klx.setText("");
    ui.qh.setText("");
    ui.yzbm.setText("");
  });
  let url = "http://m.ip138.com/mobile.asp?mobile=";
  let html = http.get(url + numbel).body.string();
  html = cutstr(html, "<tr", "</tr>", 2, 20);
  if (html) {
    str = html.replace(/[<>\/tdspan]+/g, "\n").split("\n");
    return str;
  } else {
    toast("您输入的号码有误，请重新输入！");
    return false;
  }
}

function sfz(ble) {
  ui.run(() => {
    ui.xb.setText("");
    ui.csrq.setText("");
    ui.fzd.setText("");
  });
  let url = "http://qq.ip138.com/shenfenzheng/search.asp";
  let html = http.post(url, {
    "userid": ble,
    "action": "idcard"
  }).body.string();
  html = cutstr(html, "<li", "</li>", 12, 16);
  html = html.split(">");
  if (html.length > 2) {
    return html;
  } else {
    toast("身份证号码错误或不存在！");
    return false;
  }
}

function iip() {
  var getIp_api = http.get('http://pv.sohu.com/cityjson?ie=utf-8');
  var InetIP = getIp_api.body.string();
  eval(InetIP);
  return returnCitySN.cip;
}

function chaip(ble) {
  ui.run(() => {
    ui.sff.setText("");
    ui.dqq.setText("");
    ui.ysss.setText("");
  });
  let url = "http://ip.taobao.com/service/getIpInfo.php?ip=";
  let html = http.get(url + ble, {
    headers: {
      'Accept-Language': 'zh-cn,zh;q=0.5',
      'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
    }
  }).body.json();
  return html;
}

function asd(dd) {
  let sum = chaip(dd);
  if (sum) {
    ui.run(() => {
      ui.ipp.setText(sum.data.ip);
      ui.gjia.setText(sum.data.country);
      ui.sff.setText(sum.data.region);
      ui.dqq.setText(sum.data.city);
      ui.ysss.setText(sum.data.isp);
    });
  }
}

function 上传图片(path) {
  var url = "http://pic.sogou.com/pic/upload_pic.jsp";
  var res = http.postMultipart(url, {
    "file": open(path),
  });
  var t = res.body.string();
  return t;
}


function dwz(url) {
  ui.run(() => {
    ui.xb.setText("");
  });
  let html = http.get("http://api.c7.gg/api.php?url=" + url).body.string();
  return html;
}


function Problem_feedback() {
  var str = "";
  str += "软件版本名称:" + app.versionName;
  str += "\n软件版本号:" + app.versionCode;
  str += "\n屏幕宽度:" + device.width;
  str += "\n屏幕高度:" + device.height;
  str += "\n主板:" + device.board;
  str += "\n制造商:" + device.brand;
  str += "\n型号:" + device.model;
  str += "\n产品名称:" + device.product;
  str += "\n唯一标识码:" + device.fingerprint;
  str += "\nIMEI: " + device.getIMEI();
  str += "\nAndroidId: " + device.getAndroidId();
  str += "\nMac: " + device.getMacAddress();
  str += "\nAPI: " + device.sdkInt;
  str += "\n电量: " + device.getBattery();
  return str;
}

function updata() {
  threads.start(function () {
    let res = http.get("http://1024.luaapp.top/data.json", {
      headers: {
        'Cookie': cookie
      }
    });
    if (res.statusCode != 200) {
      toast("更新失败: " + res.statusCode + " " + res.statusMessage);
      return;
    }
    let json = res.body.json();
    if (versionCode < json["versionCode"]) {
      if (json["code"] == 0) {
        confirm(json["title"] + json["versionName"], json["content"], (value) => {
          if (value) {
            toast("正在更新。。请稍候。。。。");
            basePath = engines.myEngine().cwd();
            codePath = basePath + "/" + curFileName + ".js";
            downloadCode(json["url"], codePath);
          }
        });
      }
    }
  });
}

function downloadCode(url, localPath) {
  threads.start(function () {
    try {
      http.get("https://www.apiopen.top/addStatistics?appKey=bb915a1e008921683029b94219b7d9bf&type=123&typeId=1&count=1");
      let res = http.get(url, {
        headers: {
          'Cookie': cookie
        }
      });
      if (res.statusCode != 200) {
        toast("下载失败: " + res.statusCode + " " + res.statusMessage);
        return;
      }
      str = res.body.string();
      files.write(localPath, str);
      toast("脚本更新完成，正在重新加载。。");
      ui.finish();
      engines.execScriptFile(localPath);
    } catch (e) {
      log(e);
      toast("更新失败");
      return false;
    }
  });
}

function lishi() {
  threads.start(function () {
    let now = new Date();
    let res = http.get("https://api.avatardata.cn/HistoryToday/LookUp?key=f7b28a4506af42b297a7925bfb0d9b89&yue=" + (now.getMonth() + 1) + "&ri=" + now.getDate() + "&type=1&page=1&rows=40").body.string();
    return Handle(res);
  })
};

function code() {
  return 'engines.execScript("hello world",' + ui.text.text() + ');' + b64;
}

function ec(str) {
  return java.lang.String(android.util.Base64.encode(java.lang.String(str).getBytes(), 2));
}

function b64(str) {
  return java.lang.String(android.util.Base64.decode(java.lang.String(str).getBytes(), 0));
}

function encode(byteContent, password, lx, iv) {
  var key = javax.crypto.spec.SecretKeySpec(password, "AES");
  var cipher = javax.crypto.Cipher.getInstance(lx);
  if ((ui.ams.text() + "") == "ECB▼") {
    cipher.init(javax.crypto.Cipher.ENCRYPT_MODE, key);
  } else {
    cipher.init(javax.crypto.Cipher.ENCRYPT_MODE, key, javax.crypto.spec.IvParameterSpec(iv));
  }
  return cipher.doFinal(byteContent);
}

function decode(byteContent, password, lx, iv) {
  var key = javax.crypto.spec.SecretKeySpec(password, "AES");
  var cipher = javax.crypto.Cipher.getInstance(lx);
  if ((ui.ams.text() + "") == "ECB▼") {
    cipher.init(javax.crypto.Cipher.DECRYPT_MODE, key);
  } else {
    cipher.init(javax.crypto.Cipher.DECRYPT_MODE, key, javax.crypto.spec.IvParameterSpec(iv));
  }
  return cipher.doFinal(byteContent);
}

function md5(str, lx) {
  var md5 = java.security.MessageDigest.getInstance(lx);
  md5.update(java.lang.String(str).getBytes());
  return md5.digest();
}

function randomx(n) {
  var str = "";
  for (var i = 0; i < n; i++) {
    str += String.fromCharCode(random(0, 65535));
  }
  return str;
}

function bytestohexstring(bytes) {
  var val = "";
  for (var i = 0; i < bytes.length; i++) {
    var tmp = bytes[i];
    if (tmp < 0) {
      tmp = 256 + tmp;
    }
    tmp = tmp.toString(16);
    if ((tmp + "").length == 1) {
      tmp = "0" + tmp;
    }
    val += tmp;
  }
  return val;
}

function hexstringtobytes(str) {
  var val = [];
  str = str.split("");
  for (var i = 0; i < str.length; i++) {
    var tmp = "" + str[i] + str[i + 1];
    tmp = parseInt(tmp, 16);

    if (tmp <= 127) {
      val[i / 2] = tmp;
    } else {
      val[i / 2] = tmp - 256;
    }
  }
  return val;
}

function a(str) {
  return str.replace("▼", "");
}


function Dist(imgPath) {
  deypath = "/sdcard/Android/dey.dex";
  if (files.isFile(deypath)) {
    try {
      runtime.loadDex(deypath);
      importPackage(com.google.zxing);
      importPackage(com.google.zxing.common);
      importPackage(com.google.zxing.client.j2se);
      var pixels = images.readPixels(imgPath);
      var w = pixels.width;
      var h = pixels.height;
      var binaryBitmap = new BinaryBitmap(new HybridBinarizer(
        new RGBLuminanceSource(w, h, pixels.data)));
      var qrCodeResult = new MultiFormatReader().decode(binaryBitmap);
      let edc = qrCodeResult.getText();
      toastLog(edc);
      return edc;
    } catch (e) {
      toast("识别错误!!");
      return false;
    }
  } else {
    confirm("插件下载", "识别二维码需要下载插件，下载？", (value) => {
      if (value) {
        down();
      } else {
        toast("不下载将无法使用二维码识别功能")
      }
    })
  }
}

function down() {
  threads.start(function () {
    let url = "http://bmob-cdn-21628.b0.upaiyun.com/2018/11/18/20cefe4640fa37fa8032197d0d502a7b.dex";
    let res = http.get(url);
    if (res.statusCode != 200) {
      toast("下载失败");
    }
    files.writeBytes("/sdcard/Android/dey.dex", res.body.bytes());
    toast("下载成功");
  });
}

function startChooseFile(mimeType, callback) {
  var i = new android.content.Intent(android.content.Intent.ACTION_GET_CONTENT);
  i.setType(mimeType);
  ResultIntent.startActivityForResult(i, function (resultCode, data) {
    if (resultCode != activity.RESULT_OK) return;
    var f = URIUtils_uriToFile(data.getData());
    ui.run(() => {
      ui.text_test.setText(f);
    });
  });
}

function conversion(text, num) {
  if (!parseInt(text)) {
    return ""
  };
  return Number(text).toString(num);
};



function search(word) {
  threads.start(function () {
    let temp_arr = searchVideo(word);
    len = search_list.length;
    for (i = 0; i < len; i++) {
      search_list.pop();
    }
    if (temp_arr.length == 0) {
      toast("未找到该视频");
    }
    for (i in temp_arr) {
      search_list.push({
        icon: "@drawable/ic_play_circle_filled_white_black_48dp",
        name: temp_arr[i].name,
        url: temp_arr[i].url
      });
    }
  });
  ui.list.setDataSource(search_list);

}

function videoDetails(url) {
  html = http.get(url).body.string();
  while (html.length < 2000) {
    sleep(1000);
    html = http.get(url).body.string();
  }
  zhez1 = /checked=\"\" \/>[^$]*.http[^<]*/g //链接和名称
  html = html.match(zhez1);
  result = [];
  for (i in html) {
    temp_arr = html[i].split('$');
    result.push({
      name: temp_arr[0].substr("/checked=\"\" \/>".length - 1),
      url: temp_arr[1]
    });
  }
  return result;
}

function searchVideo(word) {
  url = "http://www.okzy.me/index.php?m=vod-search&wd=" + word;
  html = http.get(url).body.string();
  while (html.length < 3000) {
    sleep(200);
    html = http.get(url).body.string();
  }
  zhez1 = /class=\"xing_vb4\"><a href=[^<]*<\/a><\/span>/g //链接和名称
  html = html.match(zhez1);
  zhez2 = /[^"]*(?=.html)/g //链接
  zhez3 = /[^>]*(?=<\/a>)/g //名称
  result = [];

  for (i in html)
    result.push({
      name: html[i].match(zhez3)[0],
      url: "http://www.okzy.me/" + html[i].match(zhez2)[0] + ".html"
    });
  return result;
}



function loadimg(word, num) {
  newimgs = []
  threads.start(function () {
    newimgs1 = getimages(word, num++);
    for (i in newimgs1) {
      newimgs.push(newimgs1[i]);
    }
  });
  ui.list.setDataSource(newimgs);
}

function getimages(word, num) {
  pn = num * 30;
  url = "https://image.baidu.com/search/index?tn=baiduimage&ipn=r&ct=201326592&cl=2&lm=-1&st=-1&fr=&sf=1&fmq=1526269427171_R&pv=&ic=0&nc=1&z=&se=1&showtab=0&fb=0&width=&height=&face=0&istype=2&ie=utf-8&word=" + word + "&pn=" + pn;
  htmltext = http.get(url).body.string();
  thumbzhz = /app.setData\('imgData',.+}/g;
  htmltext = htmltext.match(thumbzhz);
  if (htmltext == null) {
    toast("没有图了");
    top--;
    return null;
  }
  imgstr = htmltext[0].substr("app.setData('imgData',".length, htmltext[0].length);
  eval(" var imgjson = [" + imgstr + '][0];');
  len = imgjson.data.length;
  listNum = imgjson.listNum;
  images = [];
  for (i = 0; i < len - 1; i++) {
    images[i] = imgjson.data[i].objURL;
  }
  return images;
}

function menu(url1) {
  let a = ["下载", "取消"];
  let img_path = tipArr.img_path;
  dialogs.select(null, a, function (i) {
    switch (i) {
      case 0:
        name = url1.replace(/\//g, "_");
        dirlist = files.listDir(img_path);
        let j;
        for (j = 0; j < dirlist.length; j++) {
          if (dirlist[j] == name) {
            break;
          }
        }
        if (j == dirlist.length) {
          threads.start(function () {
            files.writeBytes(img_path + name, http.get(url1).body.bytes());
            toast("已下载到" + img_path);
          });
        } else {
          toast("图片已存在")
        }
        break;
    }
  });
}

function Handle(str) {
  var json = JSON.parse(str);
  for (let i = 0; i < json.result.length; i++) {
    txt.push({
      title: json.result[i].year + "-" + json.result[i].month + "-" + json.result[i].day + "      " + json.result[i].title
    });
  }
}

function Time() {
  var nowTime = threads.start(function () {
    while (isOn) {
      sleep(100);
      ui.run(function () {
        ui.now.setText(String((new Date().getTime())).slice(0, -3));
      });
    }
  });
}

function toTime(time) {
  if (time) {
    return new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date(time));
  } else {
    return new java.text.SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
  }
}

function toDate(endTime) {
  var date = new Date();
  date.setFullYear(endTime.substring(0, 4));
  date.setMonth(endTime.substring(5, 7) - 1);
  date.setDate(endTime.substring(8, 10));
  date.setHours(endTime.substring(11, 13));
  date.setMinutes(endTime.substring(14, 16));
  date.setSeconds(endTime.substring(17, 19));
  return Date.parse(date) / 1000;
}
