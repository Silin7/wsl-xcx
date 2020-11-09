import regular from "../../../utils/regular"
import Toast from '../../../miniprogram_npm/vant-weapp/toast/toast';

Page({
  data: {
    userName: '',
    password: '',
    password2: ''
  },

  onLoad: function (options) {
  },

  // 账号
  inputName: function (event) {
    this.setData({
      userName: event.detail.value
    })
  },

  // 密码
  inputPassword: function (event) {
    this.setData({
      password: event.detail.value
    })
  },

  // 再次输入密码
  inputPassword2: function (event) {
    this.setData({
      password2: event.detail.value
    })
  },

  // 注册
  to_register: function () {
    if (!this.data.userName) {
      Toast.fail('请输入账号')
      return
    }
    if (!this.data.password) {
      Toast.fail('请输入密码')
      return
    }
    if (!this.data.password2) {
      Toast.fail('请再次输入密码')
      return
    }
    if (!regular.APNumber(this.data.userName)) {
      Toast.fail('账号格式错误')
      return
    }
    if (!regular.APNumber(this.data.password)) {
      Toast.fail('密码格式错误')
      return
    }
    if (this.data.password !== this.data.password2) {
      Toast.fail('密码不一致')
      return
    }
    console.log(this.data)
  },

  // 去登录
  to_login: function () {
    wx.redirectTo({
      url: '/pages/loginModule/loginPage/loginPage'
    })
  }

})