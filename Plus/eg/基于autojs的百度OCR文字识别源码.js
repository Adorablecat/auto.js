requestScreenCapture();

var img = captureScreen();

var result = BaiDu_ocr(img, true);

log(result.words_result[2]);

//此代码由飞云脚本圈整理提供（www.feiyunjs.com）

function BaiDu_ocr(img, is位置) {

  var imag64 = images.toBase64(img, "png", 100);
  //本代码。key值，属于，大维万，所有。每天可用1000次。
  var API_Key = "IMi7uTlPbISgrYCkBnUZxREn";
  var Secret_Key = "NRE9cT0SA9qeEyadk7e0wzHH2LHiQTeS";

  var getTokenUrl = "https://aip.baidubce.com/oauth/2.0/token";
  //token获取地址。
  var token_Res = http.post(getTokenUrl, {
    grant_type: "client_credentials",
    client_id: API_Key,
    client_secret: Secret_Key,
  });

  var token = token_Res.body.json().access_token;
  //log(token);
  var ocrUrl1 = "https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic"; //每天可用5000次。
  //文字识别。
  var ocrUrl2 = "https://aip.baidubce.com/rest/2.0/ocr/v1/general"; //每天可用500次。
  //含位置信息。
  var ocrUrl = ocrUrl1;
  if (is位置) {
    ocrUrl = ocrUrl2;
  };
  var ocr_Res = http.post(ocrUrl, {
    headers: {
      "Content - Type": "application/x-www-form-urlencoded"
    },
    access_token: token,
    image: imag64,
  });

  var json = ocr_Res.body.json();
  //log(json);
  return json;
};


/*
//token获取方法～～～～～～～～～～～～～～～～～～～～～
请求URL数据格式

向授权服务地址https://aip.baidubce.com/oauth/2.0/token发送请求（推荐使用POST），并在URL中带上以下参数：

grant_type： 必须参数，固定为client_credentials；
client_id： 必须参数，应用的API Key；
client_secret： 必须参数，应用的Secret Key；

//图片文字识别方法。～～～～～～～～～～～～～～～～～～～～～
请求示例

HTTP 方法：POST

请求URL： https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic

URL参数：

参数	值
access_token	通过API Key和Secret Key获取的access_token,参考“Access Token获取”
Header如下：

参数	值
Content-Type	application/x-www-form-urlencoded
Body中放置请求参数，参数详情如下：

请求参数

参数	是否必选	类型	可选值范围	说明
image	和url二选一	string	-	图像数据，base64编码后进行urlencode，要求base64编码和urlencode后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式，当image字段存在时url字段失效
url	和image二选一	string	-	图片完整URL，URL长度不超过1024字节，URL对应的图片base64编码后大小不超过4M，最短边至少15px，最长边最大4096px,支持jpg/png/bmp格式，当image字段存在时url字段失效，不支持https的图片链接
language_type	false	string	CHN_ENG、ENG、
POR、FRE、
GER、ITA、
SPA、RUS、
JAP、KOR	识别语言类型，默认为CHN_ENG。可选值包括：
- CHN_ENG：中英文混合；
- ENG：英文；
- POR：葡萄牙语；
- FRE：法语；
- GER：德语；
- ITA：意大利语；
- SPA：西班牙语；
- RUS：俄语；
- JAP：日语；
- KOR：韩语
detect_direction	false	string	true、false	是否检测图像朝向，默认不检测，即：false。朝向是指输入图像是正常方向、逆时针旋转90/180/270度。可选值包括:
- true：检测朝向；
- false：不检测朝向。
detect_language	false	string	true、false	是否检测语言，默认不检测。当前支持（中文、英语、日语、韩语）
probability	false	string	true、false	是否返回识别结果中每一行的置信度
language	false	int32	当detect_language=true时存在	-1:未知、0:英文、1:日文、2:韩文、3:中文
请求代码示例

请参考通用文字识别（含位置信息版）的代码内容，并更换请求地址。

返回说明
返回参数

字段	是否必选	类型	说明
direction	否	int32	图像方向，当detect_direction=true时存在。
- -1:未定义，
- 0:正向，
- 1: 逆时针90度，
- 2:逆时针180度，
- 3:逆时针270度
log_id	是	uint64	唯一的log id，用于问题定位
words_result	是	array()	识别结果数组
words_result_num	是	uint32	识别结果数，表示words_result的元素个数
+words	否	string	识别结果字符串
probability	否	object	识别结果中每一行的置信度值，包含average：行置信度平均值，variance：行置信度方差，min：行置信度最小值
返回示例

HTTP/1.1 200 OK
x-bce-request-id: 73c4e74c-3101-4a00-bf44-fe246959c05e
Cache-Control: no-cache
Server: BWS
Date: Tue, 18 Oct 2016 02:21:01 GMT
Content-Type: application/json;charset=UTF-8
{
"log_id": 2471272194, 
"words_result_num": 2,
"words_result": 
    [
        {"words": " TSINGTAO"}, 
        {"words": "青島睥酒"}
    ]
}


*/
