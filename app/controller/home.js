'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  /*
   *获取列表
   */
  async list() {
    const { ctx } = this;
    ctx.body = {
      msg: 'success',
      data: [{ name: 'like', age: 20 }],
    };
  }
}

module.exports = HomeController;
