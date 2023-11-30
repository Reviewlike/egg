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
  async userInfo() {
    const { ctx } = this;
    ctx.body = {
      msg: 'success',
      data: [{ name: 'like', age: 20 }],
    };
  }

  async userCreate() {
    console.log('create');
    const { ctx } = this;
    ctx.body = {
      msg: 'success',
      data: [{ name: 'like', age: 20 }],
    };
  }
}

module.exports = HomeController;
