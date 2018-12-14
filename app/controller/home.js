'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {

  //获取银行列表
  async getBankCardList() {
    this.ctx.body = {
      "code": 200,
      "msg": null,//code !=200时，1-请求超时 2-未登录
      "data": [{
        "title": "中国银行",
        "id": 1
      }, {
        "title": "中国工商银行银行",
        "id": 2
      }]
    }
  }

  //获取支付宝信息
  async getAlipayInfo() {
    this.ctx.body = {
      "code": 200,
      "msg": null,//code !=200时，1-请求超时 2-未登录
      "data": {
        "name": "张三",
        "alipayNum": "123456",
        "imgUrl": ""
      }
    }
  }

  //获取委托策略说明
  async getEntrustIntro() {
    this.ctx.body = {
      "code": 200,
      "msg": null,//code !=200时，1-请求超时 2-未登录
      "data": {
        "name": "张三",
        "alipayNum": "123456",
        "imgUrl": ""
      }
    }
  }

  // 查询（个人信息、登陆历史、其他）
  async getEntrustDesc() {
    this.ctx.body = {
      "code": 200,
      "msg": null,//code !=200时，1-请求超时 2-未登录
      "describe": "获取委托策略说明"
    }
  }

  // 通过token获取用户信息
  async getUserInfo() {
    this.ctx.body = {
      "code": 200,
      "msg": null,//code !=200时，1-请求超时 2-未登录
      "data": {
        "auth": {
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
        "bankInfo": "1",                              //是否绑定银行卡
        "alipayInfo": "1",                              //是否绑定银行卡
        "email": "",                                  //邮箱
        "idNum": "**************4215",                //身份证号
        "integral": 0,                                //积分
        "loginType": 2,                                //登录方式 1邮箱 2手机
        "phone": "15*******68",                        //手机号
        "pwdLevel": 1,                                //密码等级分1,2,3
        "realName": "孟**",                           //真是姓名
        "tradeNum": 0                                  //30天交易额
      }
    }
  }

  // 获取用户上次登录的时间，Ip以及地址（单条）
  // 如果是中国登录的地址显示市，外国登录的地址显示国家
  async getLastLoginInfo() {
    this.ctx.body = {
      "code": 200,
      "msg": null,//code !=200时，1-请求超时 2-未登录
      "data": {
        "created": 12345468,//上次登陆时间
        "ip4": "192.168.0.1",//IP
        "loginAsign": "dsasd"//登陆地点
      }

    }
  }


  // 获取用户全部登陆历史
  // 如果是中国登录的地址显示市，外国登录的地址显示国家
  async getAllLoginInfo() {
    this.ctx.body = {
      "code": 200,
      "msg": null,//code !=200时，1-请求超时 2-未登录
      "data": [{
        "created": 12345468,//上次登陆时间
        "ip4": "192.168.0.1",//IP
        "loginAsign": "dsasd"//登陆地点
      }]
    }
  }

  // 获取钱包估值那块切换的币种
  async getCurrency() {
    this.ctx.body = {
      "code": 200,
      "msg": null,//code !=200时，1-请求超时 2-未登录
      "data": [
        {
          "currency": "BTC",//估值的币种
          "fullName": "比特币",//中文全称
        },
        {
          "currency": "BTC",//估值的币种
          "fullName": "比特币",//中文全称
        },
        {
          "currency": "BTC",//估值的币种
          "fullName": "比特币",//中文全称
        },
      ]
    }
  }

  // 根据币种获取充币地址
  async getAddress() {
    this.ctx.body = {
      "code": 200,
      "msg": null,//code !=200时，1-请求超时 2-未登录
      "data": [
        {
          "address": "dsadsadas",//充币地址
          "isUse": 1,//是否可以新增充币地址
        },
      ]
    }
  }

  // 获取充币记录
  async getAddCoinRecord() {
    this.ctx.body = {
      "code": 200,
      "msg": null,//code !=200时，1-请求超时 2-未登录
      "data": {
        "total": 180,// 总条数
        "pageNum": 2,//当前页数
        "list": [{
          "updated": 123454657,//更新时间
          "address": "",//充币地址
          "currency": "",// 币种
          "num": 123,//充值数量
          "progress": 2,// 充币进度  （1确认中，2已确认）
          "state": 1,// 充币状态 （1充币中，2成功，3失败，4提币状态，5等待提币，6撤销中，7已撤销，8提现成功，9提现失败）
        }]
      }
    }
  }

  // 充币的历史地址
  async getAddCoinHistoryList() {
    this.ctx.body = {
      "code": 200,
      "msg": null,//code !=200时，1-请求超时 2-未登录
      "data": {
        "total": 180,// 总条数
        "pageNum": 2,//当前页数
        "list": [{
          "created": 123454657,//创建时间
          "address": "",//充币地址
        }]
      }
    }
  }

  // 根据币种查询提币地址列表
  async getAddressListBycurrency() {
    this.ctx.body = {
      "code": 200,
      "msg": null,//code !=200时，1-请求超时 2-未登录
      "data": [{
        "direction": 0,//交易方向 0-卖 1-买
        "currency": "BTC",//币种
        "is_default": 1,//是否为默认地址 0-false 1-true
        "is_check": 0,//是否免验证
        "remark": "dadsa",//备注
        "address": "adssds",//地址
        "created": 123456//时间
      }]
    }
  }

  // 获取用户提币历史
  async getReduceCoinHistory() {
    this.ctx.body = {
      "code": 200,
      "msg": null,//code !=200时，1-请求超时 2-未登录
      "data": {
        "total": 12345,//总条数
        "pageSize": 10,
        "pageNum": 23,
        "list": [
          {
            "direction": 0,//交易方向
            "currency": "BTC",//币种
            "is_default": true,//是否为默认地址
            "is_check": true,//是否免验证
            "remark": "dadsa",//备注
            "address": "adssds",//地址
            "created": 123456//时间
          }
        ]
      }
    }
  }

  // 获取估值列表
  async valuation() {
    this.ctx.body = {
      "code": 200,
      "msg": null,//code !=200时，1-请求超时 2-未登录
      "data": [{
        "title": "",//币种名称
        "usdt": "",//usdt估值
        "cny": ""//人名币估值
      }]
    }
  }

  // 查询所有币种的所有钱包余额接口
  async balance() {
    this.ctx.body = {
      "code": 200,
      "msg": null,//code !=200时，1-请求超时 2-未登录
      "data": [{
        "name": "",//币种名称        
        "account": "",//钱包账户余额
        "accountBCoin": "",//币币账户余额
        "accountFCoin": "",//法币中户余额
        "accountAgent": "",//代理账户余额
        "total": ""//总资产
      }]
    }
  }

  // 查询币种的钱包账户详情
  async accountDetailsWalletType() {
    this.ctx.body = {
      "code": 200,
      "msg": null,//code !=200时，1-请求超时 2-未登录
      "data": {
        "total": 123,//总条数
        "pageNum": 1,//当前页码
        "list": [{
          "type": "",//币种名称        
          "wallet": "",//可用
          "hold": "",//冻结
          "valuation": "",//BTC估值
          "progress": "",//充币进度
          "state": ""//状态 （1充币中，2成功，3失败，4提币状态，5等待提币，6撤销中，7已撤销，8提现成功，9提现失败）
        }]
      }
    }
  }





}

module.exports = HomeController;
