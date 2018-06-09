
import $ from 'jquery'
export default{
  get_data(url,params, callback){
    $.ajax({
      type:'get',
      data:params,
      url:url,
      dataType:"json",
      async:true,
      timeout:10000,
      contentType: 'application/json;charset=UTF-8',
      headers: {
        Authentication :localStorage.getItem('token'),
      },
      success: function (d) {
        if (callback) {          
          callback(d);
        }
      },
      error: function (err) {
        console.log('错误信息：' + JSON.stringify(err));
      }
    })
  },
  post_data(url,params, callback){
    $.ajax({
      type:'POST',
      dataType:"json",
      data:JSON.stringify(params),
      url:url,
      async:true,
      timeout:10000,
      contentType: 'application/json;charset=UTF-8',
      headers: {
        Authentication:localStorage.getItem('token'),
      },
      success: function (d) {
        if (callback) {          
          callback(d);
        }
      },
      error: function (err) {
        console.log('错误信息：' + JSON.stringify(err));
      }
    })
  },
  put_data(url,params, callback){
    $.ajax({
      type:'PUT',
      dataType:"json",
      data:JSON.stringify(params),
      url:url,
      async:true,
      timeout:10000,
      contentType: 'application/json;charset=UTF-8',
      headers: {
        Authentication:localStorage.getItem('token'),
      },
      success: function (d) {
        if (callback) {          
          callback(d);
        }
      },
      error: function (err) {
        console.log('错误信息：' + JSON.stringify(err));
      }
    })
  },
 
}
