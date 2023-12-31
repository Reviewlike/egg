'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  // 获取列表
  router.get('/user/info', controller.home.userInfo);

  // 获取列表
  router.post('/user/create', controller.home.userCreate);
};
