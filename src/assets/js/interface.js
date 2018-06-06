/**
 * Created by Administrator on 2017/11/22.
 */
//let host='http://112.74.100.48';
// let host='http://120.24.178.171';
// let host='http://192.168.0.208';
let host='http://119.23.41.124:8099/';
export default {
  //登录
  getlogin:host+"auth/app/login",
  
  //组团列表
  activityList:host+'activity/list/page',
  //组团列表 -详情
  activityListInfo:host+'activity/app/get/',
  //组团 发起
  activityAdd:host+'activity/add',
}
