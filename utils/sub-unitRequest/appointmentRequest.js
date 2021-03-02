let appointmentRequest = {
  appointment_list: {
    apiMethod: 'GET',
    apiName: '/appointment/appointment_list',
    name: '约会列表（参数: page, limit, appointment_gander, appointment_type, appointment_pay）'
  },
  appointment_details: {
    apiMethod: 'GET',
    apiName: '/appointment/appointment_details',
    name: '约会详情（参数: id）'
  }
}
module.exports = appointmentRequest