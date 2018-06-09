 export default{
 	niceDate(val){
    if (val != null) {
      let date = new Date(val),
        years = date.getFullYear() ,
        month = (date.getMonth() + 1),
        day = date.getDate(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds()
      return years + '-' + month + '-' + day + '   ' + hours + ':' +minutes + ':' +seconds
    }
    return "";
  }
 }
 
 
 