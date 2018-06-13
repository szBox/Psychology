 export default{
 	niceDate(val){
    if (val != null) {
      let date = new Date(val),
        years = date.getFullYear() ,
        month = (date.getMonth() + 1)<10? ("0"+(date.getMonth() + 1)):date.getMonth() + 1,
        day = date.getDate()<10 ? ('0'+date.getDate()):date.getDate(),
        hours = date.getHours()<10? ('0'+date.getHours()) : date.getHours(),
        minutes = date.getMinutes()<10? ('0'+date.getMinutes()) :date.getMinutes()
      return years + '-' + month + '-' + day + '   ' + hours + ':' +minutes 
    }
    return "";
  	},
 	mdDate(val){
    if (val != null) {
      let date = new Date(val),
        years = date.getFullYear() ,
        month = (date.getMonth() + 1)<10? ("0"+(date.getMonth() + 1)):date.getMonth() + 1,
        day = date.getDate()<10 ? ('0'+date.getDate()):date.getDate(),
        hours = date.getHours()<10? ('0'+date.getHours()) : date.getHours(),
        minutes = date.getMinutes()<10? ('0'+date.getMinutes()) :date.getMinutes()
      return month + '-' + day + '   ' + hours + ':' +minutes 
    }
    return "";
  }
 }
 
 
 