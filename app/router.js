'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 获取所有可选银行列表
  router.get('/user/pay/getBankCardList', controller.home.getBankCardList);

  //获取支付宝信息
  router.get('/user/pay/getAlipayInfo', controller.home.getAlipayInfo);

  //获取委托策略说明
  router.get('/user/pay/getEntrustIntro', controller.home.getEntrustIntro);

  //查询（个人信息、登陆历史、其他）
  router.get('/user/query/getEntrustDesc', controller.home.getEntrustDesc);

  // 通过token获取用户信息
  router.get('/user/query/getUserInfo', controller.home.getUserInfo);


  // 获取用户上次登录的时间，Ip以及地址（单条）
  // 如果是中国登录的地址显示市，外国登录的地址显示国家
  router.get('/user/query/getLastLoginInfo', controller.home.getLastLoginInfo);

  // 获取用户全部登陆历史
  // 如果是中国登录的地址显示市，外国登录的地址显示国家
  router.get('/user/query/getAllLoginInfo', controller.home.getAllLoginInfo);

  // 获取币种
  router.get('/wallet/addCoin/getCurrency', controller.home.getCurrency);

  // 根据币种获取充币地址
  router.get('/wallet/addCoin/getAddress', controller.home.getAddress);

  // 根据币种获取充币地址
  router.get('/wallet/addCoin/getAddCoinRecord', controller.home.getAddCoinRecord);

  // 根据币种获取充币地址
  router.get('/wallet/addCoin/getAddCoinHistoryList', controller.home.getAddCoinHistoryList);

  // 根据币种查询提币地址列表
  router.get('/wallet/addCoin/getAddressListBycurrency', controller.home.getAddressListBycurrency);

  // 获取用户提币历史
  router.get('/wallet/reduceCoin/getReduceCoinHistory', controller.home.getReduceCoinHistory);

  // 获取估值列表
  router.get('/wallet/query/valuation', controller.home.valuation);


  // 查询所有币种的所有钱包余额接口
  router.get('/wallet/query/balance', controller.home.balance);

  // 查询币种的钱包账户详情
  router.get('/wallet/query/accountDetails/:walletType', controller.home.accountDetailsWalletType);

  // 写到了这里   








};
