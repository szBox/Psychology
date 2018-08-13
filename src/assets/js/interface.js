/**
 * Created by Administrator on 2017/11/22.
 */
//let host='http://112.74.100.48';
// let host='http://120.24.178.171';
// let host='http://192.168.0.208';

//let host='http://119.23.41.124:8099/';  //线上地址
//let host='https://119.23.41.124/heart/' //线上地址 new
let host='https://heart.jingjing100.com/heart/' //线上地址 new2
//let host='http://192.168.0.111:8099/';
export default {
  //登录
  getlogin:host+"auth/app/login",
  //index1  心灵阅读  头部nav
  index1Nav:host+'articleColumn/list',
  
  index1List: host+'article/list',  //最新 第一个参数不传
  
  //index1  进入详情
  index1Info: host+'article/get/',
  //index1  进入详情 -- 评论列表
  index1InfobbList: host+'articleComment/list',
  //index1  进入详情 -- 评论
  index1Infobb: host+'articleComment/add',
    //index1  进入详情 -- 点赞
  index1Zan: host+'articlePraise/add/',
    //index1  进入详情 -- 取消点赞
  index1Zanquxiao: host+'articlePraise/delete/',
    //index1  进入详情 -- 收藏
  index1Soucang: host+'articleFavorite/add/',
    //index1  进入详情 -- 取消收藏
  index1SQuxiao: host+'articleFavorite/delele/',
  //组团列表
  activityList:host+'activity/list/page',
  //组团列表 -详情
  activityListInfo:host+'activity/app/get/',
  //组团列表 -详情 - 报名列表
  activityInfoBaoming:host+'activityDetail/list/page',
  //组团列表 -详情 - 报名
  activityInfoBao:host+'activityDetail/add',
  //组团列表 -详情 - 审核操作
  activityCaozuo:host+'activityDetail/edit',
  //组团  - 发起
  activityAdd:host+'activity/add',
  
  
  //图书漂流 -- 列表
  bookList:host+'bookExchange/list/page',
  //图书漂流 - 发起
  bookFaqi: host+'bookExchange/add',
  
  //点歌台 -- 列表
  mp3List:host+'song/list/page',
  //点歌台 -- 发布
  mp3Add:host+'song/add',
  
  //留言板 -- 列表
  speakList:host+'topic/list/page',
  //留言板 -- 发布
  speakAdd:host+'topic/add',
  //留言板 -- 详情
  speakInfo:host+'topic/get/',
  
  //留言板 -- 分页信息
  speakPage:host+'topicComment/list/page',
  
  //留言板-- 留言
  speakBB:host+'topicComment/add',
  
  
  
  //index2
  //学生  头部
  navTeacher:host+'teacher/list/page',
  //查看 老师信息
  navTeacherInfo:host+'teacher/get/',
  //预约周期
  tableWeek:host+'subscribe/list/week',
  //学生给老师点赞
  TeacherZan:host+'teacherPraise/add/',
   //学生给老师点赞   取消
  TeacherZanQx:host+'teacherPraise/delete/',
  //预约记录列表
  yuyueJilu:host+'subscribeRecord/list/page',
  //可预约
  yuyueClick : host+'subscribeRecord/add',
  
  
  //index2
   //老师
   navTeacherInfo:host+'teacher/get/',
   //预约周期
  tableWeek:host+'subscribe/list/week',
  //预约设置
  yuyueSet :host+'subscribe/add',
  //查看预约名单
  stuNameList:host+'subscribeRecord/list/teacher',
  //老师查看排行榜
  teacherPHP:host+'teacher/list/ranking',
  
  
  
  
  
  //index4 我的
  //验证身份
	roleType:host+'auth/identity',
	
	//我的话题
	speakList:host+'topic/list/page',
	
	//话题审核
	speakShenhe: host+'topic/edit',
	//活动审核
	activiShenhe: host+'activity/edit',
	//我的收藏
	soucangList:host+'article/list/favorite',
	//修改个人信息  学生
	xiugaiStuden :host + 'student/edit',
	//修改个人信息  老师
	xiugaiTeacher :host + 'teacher/edit',
	
}
