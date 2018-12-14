# 个人中心

## 注册相关

### /user/register/imgcode

`功能说明`

获取图片验证码

`请求头参数`

无

`路由参数`

无

`post参数`

无

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-操作太频繁 ...
    "data": "http://dad"//图片地址
}
```

### /user/register/phonecode

`功能说明`

获取手机验证码（通过有没有token判断是注册时还是已登录情况）

`请求头参数`

若用户已登陆需要token

`路由参数`

无

`post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| phone | "15911111111"|手机号 |用户未登录时


`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-手机号已注册 3-未登录 ...
    "data": "已发送验证码至 129****113"//登陆情况
}
```


### /user/register/emailcode

`功能说明`

获取邮箱验证码（通过有没有token判断是注册还是已登录情况）

`请求头参数`

若用户已登陆需要token

`路由参数`

无

`post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| email | "123@123.com"|邮箱 |用户未登录|


`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-邮箱已注册 3.未登录...
    "data": "已发送验证码至 129****113"//登陆情况
}
```

### /user/register/phone

`功能说明`

手机注册

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| areaCode | "86"|国籍码 |
| phone  | "15911111111"|手机号 |  |
| code   | "1234" |验证码|   |
| pwd|"dsadsa"|密码|   |
| pwdcfm|"dsadsa"|密码确认| |

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-手机号已注册 ...
    "data":null
}
```

### /user/register/email

`功能说明`

邮箱注册

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| email | "123@123.com"|邮箱 |
| pwd|"dsadsa"|密码|   |
| pwdcfm|"dsadsa"|密码确认| |

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时
    "data":null
}
```


### /user/register/email/validate

`功能说明`

*  邮箱注册验证接口 
*  通过邮件调整至平台完成注册

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| email | "123@123.com"|邮箱 |

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时
    "data":null
}
```

## 登陆相关
### /user/login/phone

`功能说明`

*  手机号登陆接口

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| areaCode | "86"|国际码 | |
| phone | "15911111111"|手机号 | |
| pwd | "asd"| 登陆 | |

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时
    "data":null
}
```
### /user/login/logout

`功能说明`

*  退出登陆

`请求头参数`

token

`路由参数`

无

`Post参数`

无

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时
    "data":null
}
```
### /user/login/email

`功能说明`

*  邮箱登陆

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| email | "86"|邮箱 | |
| pwd | "15911111111"|密码 | |

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时
    "data":null
}
```

## 支付相关

### /user/pay/bindAliPay

`功能说明`

*  绑定支付宝信息

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| name | "张三"|名称 | |
| alipayNum | "1223"|支付宝账号 | |
| imgUrl | "http://12131354"|收款二维码 | |
| phoneCode | "1234"|手机验证码 | |

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时
    "data":null
}
```

### /user/pay/bindBankCard

`功能说明`

*  绑定银行卡

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| name | "张三"|名称 | |
| cardNo | "12231213"|卡号 | |
| cardNoConfirm | "12134521212"|卡号确认 | |
| phoneCode | "1234"|手机验证码 | |
| bankName | "招商银行"|所属银行 | |
| openBank | "金宝街------"|开户行 | |
| type | 0 | 操作状态 | 0-修改 1-添加|

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时
    "data":null
}
```

### /user/pay/getBankCardList

`功能说明`

*  获取所有可选银行列表

`路由参数`

无

`Post参数`

无

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":[{
        "title":"中国银行",
        "id":1
    },{
        "title":"中国工商银行银行",
        "id":2
    }]
}
```


### /user/pay/getAlipayInfo

`功能说明`

*  获取支付宝信息

`路由参数`

无

`Post参数`

无

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":{
        "name":"张三",
        "alipayNum":"123456",
        "imgUrl":""
    }
}
```

### /user/pay/getAlipayInfo

`功能说明`

*  获取委托策略说明

`路由参数`

无

`Post参数`

无

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":{
        "name":"张三",
        "alipayNum":"123456",
        "imgUrl":""
    }
}
```


## 查询（个人信息、登陆历史、其他）

### /user/query/getEntrustDesc

`功能说明`

*  获取委托说明

`路由参数`

无

`Post参数`

无

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":{
         "describe":"获取委托策略说明"
    }
}
```

### /user/query/getUserInfo

`功能说明`

*  通过token获取用户信息

`路由参数`

无

`Post参数`

无

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":{
        "auth":{
            "cardType": null,
            "created": "1213245454",   //创建时间
            "emailValidFlag": 0,//邮箱认证状态
            "faceFlag": 0,                         //人脸识别状态
            "googleExist": 0,                      //是否设置谷歌验证
            "googleFlag": 0,                      //谷歌验证是否开启
            "state": 0,                          //是否删除
            "phoneValidFlag": 1,                  //手机验证是否开启
            "pictureFlag": 0,                    //身份证上传是否成功
                                               
            "tradeExist": 1,                        //资金密码是否设置
            "tradePwdFlag": 1,                      //资金密码是否开启
            "userId": "183251156010100000",               //用户id
            "userLevel": 1                            //用户权限等级
        },
        "authLevel": 1,                                //用户身份认证等级
        "bankInfo": "1" ,                              //是否绑定银行卡
        "alipayInfo": "1" ,                              //是否绑定银行卡
        "email": "" ,                                  //邮箱
        "idNum": "**************4215" ,                //身份证号
        "integral": 0 ,                                //积分
        "loginType": 2 ,                                //登录方式 1邮箱 2手机
        "phone": "15*******68" ,                        //手机号
        "pwdLevel": 1  ,                                //密码等级分1,2,3
        "realName": "孟**" m                            //真是姓名
        "tradeNum": 0                                  //30天交易额
    }
}
```

### /user/query/getLastLoginInfo

`功能说明`

*  获取用户上次登录的时间，Ip以及地址（单条）
*  如果是中国登录的地址显示市，外国登录的地址显示国家

`路由参数`

无

`Post参数`

无

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":{
        "created":12345468,//上次登陆时间
        "ip4":"192.168.0.1",//IP
        "loginAsign":"dsasd"//登陆地点
    }
}
```

### /user/query/getAllLoginInfo

`功能说明`

*  获取用户全部登陆历史
*  如果是中国登录的地址显示市，外国登录的地址显示国家

`路由参数`

无

`Post参数`

无

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":[{
        "created":12345468,//上次登陆时间
        "ip4":"192.168.0.1",//IP
        "loginAsign":"dsasd"//登陆地点
    }]
}
```

## 资金密码

此模块为钱包模块

## 收藏币对

### /user/coinpair/oprate

`功能说明`

*  收藏、取消收藏币对

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| type | 1 |操作类型 | 1-收藏 2-取消收藏 |
| basecurrency | "BTC" | 交易币 |   |
| quotecurrency | "USDT" | 计价币 |   |

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":null
}
```


## 个人中心修改用户信息、认证信息、找回密码等先不做




# 钱包

### /wallet/addCoin/getCurrency

`功能说明`

* 获取币种

`请求头参数`

token

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| dic_id | 1 |这参数是干嘛的 |  |

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":{
        "currency":"BTC",//估值的币种
        "fullName":"比特币",//中文全称
    }
}
```

## 资金密码

### /wallet/pwd/control

`功能说明`

* 资金密码开关

`请求头参数`

token

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| tradePass | "123456" |资金密码 |  |
| verifycode | "123456" |验证码 | 手机验证码 > 谷歌验证码 |

`返回值`

```json
{
    "code": 200,
    "msg" : "success",//code !=200时，1-请求超时 2-未登录
    "data": {}
}
```

### /wallet/pwd/add

`功能说明`

* 设置资金密码

`请求头参数`

token

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| pwd | "123456" |密码 |  |
| pwdCfm | "123456" |密码确认 |  |
| verifycode | "123456" |验证码 | 手机验证码 > 谷歌验证码 |

`返回值`

```json
{
    "code": 200,
    "msg" : "success",//code !=200时，1-请求超时 2-未登录
    "data": null
}
```

### /wallet/pwd/update

`功能说明`

* 修改资金密码

`请求头参数`

token

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| oldPwd | "123456" |原始密码 |  |
| pwd | "123456" |密码 |  |
| pwdCfm | "123456" |密码确认 |  |
| verifycode | "123456" |验证码 | 手机验证码 > 谷歌验证码 |

`返回值`

```json
{
    "code": 200,
    "msg" : "success",//code !=200时，1-请求超时 2-未登录
    "data": {}
}
```

### /wallet/pwd/forget

`功能说明`

* 忘记资金密码、重置资金密码

`请求头参数`

token

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| pwd | "123456" |密码 |  |
| pwdCfm | "123456" |密码确认 |  |
| verifycode | "123456" |验证码 | 手机验证码 > 谷歌验证码 |

`返回值`

```json
{
    "code": 200,
    "msg" : "success",//code !=200时，1-请求超时 2-未登录
    "data": {}
}
```


## 充币

### /wallet/addCoin/getAddress

`功能说明`

* 根据币种获取充币地址

`请求头参数`

token

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| currency | "BTC" |币种 |  |

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":{
        "address":"dsadsadas",//充币地址
        "isUse":1,//是否可以新增充币地址
    }
}
```
### /wallet/addCoin/addAddress

`功能说明`

* 新增充币地址(只有充币成功情况下才可以新增)

`请求头参数`

token

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| userId | "1234546" |用户id |  |
| currency | "BTC" |币种 |  |
| address | "asdasd" |充币地址 |  |

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":{
        "address":"dsadsadas",//充币地址
        "isUse":true,//是否可以新增充币地址
    }
}
```

### /wallet/addCoin/getAddCoinRecord

`功能说明`

* 获取充币记录

`请求头参数`

token

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| userId | "1234546" |用户id |  |
| currency | "BTC" |币种 | 不传时查询全部 |
| pageNum | 1 |当前页 |  |
| pageSize | 10 |每页显示条数 |  |

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":[
        "total" : 180,// 总条数
        "pageNum": 2,//当前页数
        "list" :[{
            "updated" : 123454657,//更新时间
            "address" : "",//充币地址
            "currency" : "",// 币种
            "num" : 123 ,//充值数量
            "progress" :,// 充币进度  （1确认中，2已确认）
            "state" : 1,// 充币状态 （1充币中，2成功，3失败，4提币状态，5等待提币，6撤销中，7已撤销，8提现成功，9提现失败）
        }]
    ]
}
```
### /wallet/addCoin/getAddCoinHistoryList

`功能说明`

* 充币的历史地址

`请求头参数`

token

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| userId | "1234546" |用户id |  |
| currency | "BTC" |币种 | 不传时查询全部 |

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":[
        "total" : 180,// 总条数
        "pageNum": 2,//当前页数
        "list" :[{
            "created" : 123454657,//创建时间
            "address" : "",//充币地址
        }]
    ]
}
```


## 提币

### /wallet/reduceCoin/operate

`功能说明`

* 提币

`请求头参数`

token

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| currency | "BTC" |币种 |  |
| address | "dssa" |地址 |  |
| msg | "dsadsadasd"|描述|  |
| price |12.23|提币手续费|   |
| num |123 |提币数量|   |

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":null
}
```

### /wallet/reduceCoin/addAddress

`功能说明`

* 新增提币地址

`请求头参数`

token

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| currency | "BTC" |币种 |  |
| isDefault | true |是否为默认地址 |  |
| isCheck | true |是否免验证|  |
| remark |"dsad"|备注|   |
| address |"sdads" |地址|   |
| emailCode |1234 |邮箱验证码|   |
| phoneCode |1234 |手机验证码|   |

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":null
}
```

### /wallet/reduceCoin/getAddressListBycurrency

`功能说明`

* 根据币种查询提币地址列表

`请求头参数`

token

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| currency | "BTC" |币种 |  |

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":[{
        "direction": 0,//交易方向 0-卖 1-买
        "currency":"BTC",//币种
        "is_default":1,//是否为默认地址 0-false 1-true
        "is_check":0,//是否免验证
        "remark":"dadsa",//备注
        "address":"adssds",//地址
        "created":123456//时间
    }]
}
```

### /wallet/reduceCoin/getReduceCoinHistory

`功能说明`

* 获取用户提币历史

`请求头参数`

token

`路由参数`

无

`Post参数`


| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| currency | "BTC" |币种 |  |
| address | "dsadsada" |地址 |  |
| pageNum | 1 |当前页 |  |
| pageSize | 15 |条数 |  |

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":[
        "total":12345,//总条数
        "pageSize":10,
        "pageNum":23,
        "list":{
        "direction": 0,//交易方向
        "currency":"BTC",//币种
        "is_default":true,//是否为默认地址
        "is_check":true,//是否免验证
        "remark":"dadsa",//备注
        "address":"adssds",//地址
        "created":123456//时间
    }]
}
```

### /wallet/reduceCoin/setNoCheck

`功能说明`

* 设置免验证提币

`请求头参数`

token

`路由参数`

无

`Post参数`


| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| isCheck | 1 |是否免验证 |  |
| id | 1 |地址id |  |

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":[
        "total":12345,//总条数
        "pageSize":10,
        "pageNum":23,
        "list":{
        "direction": 0,//交易方向
        "currency":"BTC",//币种
        "is_default":true,//是否为默认地址
        "is_check":true,//是否免验证
        "remark":"dadsa",//备注
        "address":"adssds",//地址
        "created":123456//时间
    }]
}
```

## 地址

### /wallet/address/setDefault

`功能说明`

* 设置某一币种的默认地址服务

`请求头参数`

token

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| currency | "BTC" |币种 |  |
| address | "dsadsada" |地址 |  |

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":null
}
```

### /wallet/address/delete

`功能说明`

* 删除某一地址服务

`请求头参数`

token

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| currency | "BTC" |币种 |  |
| address | "dsadsada" |地址 |  |

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":null
}
```

## 查询

### /wallet/query/valuation

`功能说明`

* 估值列表

`请求头参数`

token

`路由参数`

无

`Post参数`

无

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":[{
        "title":"",//币种名称
        "usdt":"",//usdt估值
        "cny":""//人名币估值
    }]
}
```

### /wallet/query/balance

`功能说明`

* 查询所有币种的所有钱包余额接口

`请求头参数`

token

`路由参数`

无

`Post参数`

无

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":[{
        "name":"",//币种名称        
        "account":"",//钱包账户余额
        "accountBCoin":"",//币币账户余额
        "accountFCoin":"",//法币中户余额
        "accountAgent":"",//代理账户余额
        "total":""//总资产
    }]
}
```

### /wallet/query/accountDetails/{walletType}

`功能说明`

* 查询币种的钱包账户详情

`请求头参数`

token

`路由参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| walletType | "bcoin" |币种 |bcoin-币币 fcoin-法币 agent-代理 integral-积分  |

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| pageNum | 1 |当前页 |   |
| pageSize | 15 |每页显示条数 |   |

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":{
        "total":123,//总条数
        "pageNum":1,//当前页码
        "list":[{
        "type":"",//币种名称        
        "wallet":"",//可用
        "hold":"",//冻结
        "valuation":"",//BTC估值
        "progress":"",//充币进度
        "state":""//状态 （1充币中，2成功，3失败，4提币状态，5等待提币，6撤销中，7已撤销，8提现成功，9提现失败）
    }]
    }
}
```

### /wallet/query/valuationConditions

`功能说明`

* 估值 （select下拉选项）

`请求头参数`

token

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| dicId | 1 |不知道干嘛的 |   |

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":[{
        "currency":"BTC",//币种
        "minHide：":1,//最小e
    }]
}
```

### /wallet/query/accountDetails/{currency}

`功能说明`

* 通过币种获取钱包账户的详情（有钱的放到前面排序）

`请求头参数`

token

`路由参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| dicId | 1 |不知道干嘛的 |   |

`Post参数`

无

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":[{
        "currency":"BTC",//币种
        "available":1,//可用
        "hold":123,//冻结
        "valuation":113,//估值
        "fullName":"比特币"//币种全称
    }]
}
```

### /wallet/query/record/type

`功能说明`

* 获取资金记录类型 （查询列表的条件，应该是字典项）

`请求头参数`

token

`路由参数`

无

`Post参数`

无

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":[{
        "id":53,//唯一标识
        "dicId":1,//不知道干嘛的？
        "name":"充值",//冻结
        "val":"11",//不知道干嘛的
        "seq":1//不知道干嘛的
    }]
}
```
### /wallet/query/record/details

`功能说明`

* 获取资金记录详情

`请求头参数`

token

`路由参数`

无

`Post参数`
以下可传可不传

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| currency | 'BTC' |币种 |   |
| type | 1 |类型 |对应资金记录的类型   |
| startTime | int | 开始时间 |   |
| endTime | int |结束时间 |   |
`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":{
        "total":123,//总条数
        "list":[{
            "currency":53,//币种
            "updated":1234545,//更新时间
            "type": ,//对应资金记录的类型
            "size":123,//金额数量
            "balance":1,//余额
            "charge":1//手续费
        }]
    }
}
```

## 资金划转

### /wallet/transfer/account

`功能说明`

* 查询可以转账的账户

`请求头参数`

token

`路由参数`

无

`Post参数`
无
`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":[{
        "title":"我的钱包",//名称
        "id":1,//更新时间
    }]
}
```


### /wallet/transfer/operate

`功能说明`

* 资金划转
*  从哪个钱包转到哪个钱包

`请求头参数`

token

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| currency | 'BTC' |币种 |   |
| from | 1 |转出钱包id |   |
| to | 2 | 转入钱包id |   |
| num | 10 |数量 |   |

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":{}
}
```


# 撮合

### /match/operate

`功能说明`

*  委托下单接口 

`请求头参数`

token

`路由参数`

无

`Post参数`
*  委托类型 限价单和市价单 参数不完全一样
| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| direction | 1 |交易方向 | 1-买 2-卖  |
| entrustType | 1 |交易类型 | 1-限价单 2-市价单  |
| baseCurrency | "BTC" |交易币 |   |
| quoteCurrency | "USDT" | 计价币 |   |
| price | 10 |价格 |   |
| num | 10 |数量 |   |
| notional | 10 | 金额 |   |

`返回值`

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":[{
        "title":"我的钱包",//名称
        "id":1,//钱包id
    }]
}
```
# 撤单

### /kill/removeSingle

`功能说明`

*  撤销一个委托单

`请求头参数`

token

`路由参数`

无



### /kill/removeAll

`功能说明`

*  撤销全部委托单

`请求头参数`

token

`路由参数`

无


# 币币

### /bCoin/getCoinPair

`功能说明`

*  根据基准货币（计价币）查询对应币对

`请求头参数`

token

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| quoteCurrency | 1 |计价币id |      |

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":[{
        "id":1,//币对id
        "baseCurrency":"ETC",        //交易/基准币种 
        "quoteCurrency":"USDT",        //计价/报价币种   
        "created":"创建时间",           //创建时间
        "updated":"更新时间",           //更新时间
        "isLike":true,                 //是否喜欢            
        "instrumentId":'',             //币对名称   (自己拼)
        "minSize":'',                  //最小交易数量（小数位数）
        "tickSize":'',                 //交易价格精度（小数位数）
        "sizeIncrement":'',            //交易货币数量精度（小数位数）
        "baseMinSize":'',              //交易币最小值（小数位数）
        "quoteIncrement":'',           //计价币交易精度（小数位数）
        "baseIncrement":'',            //交易币精度（小数位数）

        "newPrice":123456,//最新成交价
        "averagePrice":12345,//24小时前分钟均价
        "type":1,//1-主区 2-创业区
    }]
}
```

### /bCoin/getTicker

`功能说明`

*  根据币对获取行情

`请求头参数`

token

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| baseCurrency | "BTC" |交易币 |      |
| quoteCurrency | "USDT" |计价币id |      |

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":[{
        "nycPrice":1,//人名币价格
        "topPrice":12.34,        //24小时最高价
        "bottomPrice":12.34,        //24小时最低价 
        "finish":22222,           //24小时成交量
        "newPrice":23.34,           //最新成交价
        "averagePrice":true,                 //24小时前分钟均价            
        "direction":1,             //方向 1-涨 2-跌
        "exchangeRate":'',                  //转换成人名币汇率
    }]
}
```

### /bCoin/getChartData

`功能说明`

*  根据币对获取折线图相关数据

`请求头参数`

token

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| baseCurrency | "BTC" |交易币 |      |
| quoteCurrency | "USDT" |计价币 |      |

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":[{
        "price":1,//单位时间内的均价
        "time":123445645,        //返回时间戳
    }]
}
```

### /bCoin/getNewestTrade

`功能说明`

*  获取最新成交列表

`请求头参数`

token

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| baseCurrency | "BTC" |交易币 |      |
| quoteCurrency | "USDT" |计价币 |      |

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":[{
        "price":1,//单位时间内的均价
        "time":123445645,        //返回时间戳
        "count":12,//数量
        "direction": 1,//1-买 2-卖
        "time" : 1212//交易时间
    }]
}
```

### /bCoin/getDeep

`功能说明`

*  获取深度成交列表

`请求头参数`

token

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| baseCurrency | "BTC" |交易币 |      |
| quoteCurrency | "USDT" |计价币 |      |

```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":{
        "asks":[{
            "price":123.23 ,              //交易单价
            "num": 123,                //交易数量
            "averagePrice":12.35,        //成交均价
            "finishNum":456           //已完成数量
        }],
        "bids":[{
            "price":123.23 ,              //交易单价
            "num": 123,                //交易数量
            "averagePrice":12.35,        //成交均价
            "finishNum":456           //已完成数量
        }]
    }
}
```

### /bCoin/getCurrencyDesc

`功能说明`

*  获取币种介绍

`请求头参数`

token

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| currency | "BTC" |币种 |      |


```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":[{
            "currency":"BTC" ,              //币种
            "nameZh": "比特币",              //中文名
            "nameEn":"dsads",        //英文全称
            "issueTime":456,           //发行时间
            "issueSize":456,           //发行数量
            "flowSize":456,           //流通总量
            "fundPrice":456,           //众筹价格
            "website":456,           //官网
            "whitePaper":456,           //白皮书
            "introduce":456,           //介绍
        }]
    
}
```

### /bCoin/getEntrustList

`功能说明`

*  获取委托列表

`请求头参数`

token

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| direction | 1 |订单方向 |1-买 2-卖      |
| baseCurrency | "USDT" |计价币 |      |
| quoteCurrency | "BTC" |交易币 |      |
| isHide | 0 |隐藏其他币对 | 0-隐藏 1-显示     |
| startTime | 123456 |开始时间 |      |
| endTime | 123456 | 结束时间 |      |
| entrustType | 1 |委托类型 |  1-限价单 2-市价单    |
| stateType | 1 |订单状态 |      |
| pageNum | 1 |页码 |      |
| pageSize | 15 | 每页显示条数 |      |


```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":[{
            "roleId":1 ,              //用户级别
            "direction": 1,              //订单方向
            "baseCurrency":"BTC",        //交易币种
            "quoteCurrency":"USDT",           //计价币种
            "price":456,           //交易单价
            "size":456,           //交易数量
            "notional":456,           //交易总价
            "state":1,           //订单状态
            "marginTrading":1,           //交易类型
            "isDel":1,           //是否删除
            "created":456664,           //创建时间
            "updated":456121241,           //更新时间
            "filledNotional":456,           //成交均价
            "filledSize":456,           //已完成数量
        }]
    
}
```

### /bCoin/getRecordList

`功能说明`

*  获取币币交易流水

`请求头参数`

token

`路由参数`

无

`Post参数`

| 参数      |示例| 功能   |备注|  
| -------- | -- | -- | --|
| currency | "BTC" |币种 |      |
| type | 0 |交易类型 | 0-买 1-卖     |
| startTime | 123456 |开始时间 |      |
| endTime | 123456 | 结束时间 |      |     |
| pageNum | 1 |页码 |      |
| pageSize | 15 | 每页显示条数 |      |


```json
{
    "code": 200,
    "msg" : null,//code !=200时，1-请求超时 2-未登录
    "data":[{
            "direction": 1,              //订单方向
            "baseCurrency":"BTC",        //交易币种
            "quoteCurrency":"USDT",           //计价币种
            "price":456,           //交易单价
            "size":456,           //交易数量
            "notional":456,           //交易总价
            "state":1,           //订单状态
            "marginTrading":1,           //交易类型
            "entrustType":1,//委托类型
            "isDel":1,           //是否删除
            "created":456664,           //创建时间
            "updated":456121241,           //更新时间
            "filledNotional":456,           //成交均价
            "filledSize":456,           //已完成数量
        }]
    
}
```











