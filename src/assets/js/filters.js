 export default{
 	niceDate(val){
    if (val != null) {
      let date = new Date(val),
        years = date.getFullYear() ,
        month = (date.getMonth() + 1)<10? ("0"+(date.getMonth() + 1)):date.getMonth() + 1,
        day = date.getDate()<10 ? ('0'+date.getDate()):date.getDate(),
        hours = date.getHours()<10? ('0'+date.getHours()) : date.getHours(),
        minutes = date.getMinutes()<10? ('0'+date.getMinutes()) :date.getMinutes()
      return years + '-' + month + '-' + day + ' ' + hours + ':' +minutes 
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
      return month + '-' + day + ' ' + hours + ':' +minutes 
    }
    return "";
  },
	  ddDate(val){
	    if (val != null) {
	      let date = new Date(val),
	        years = date.getFullYear() ,
	        month = (date.getMonth() + 1)<10? ("0"+(date.getMonth() + 1)):date.getMonth() + 1,
	        day = date.getDate()<10 ? ('0'+date.getDate()):date.getDate()
	      return month + '-' + day
	    }
	    return "";
	  },
	  ymdDate(val){
	    if (val != null) {
	      let date = new Date(val),
	        years = date.getFullYear() ,
	        month = (date.getMonth() + 1)<10? ("0"+(date.getMonth() + 1)):date.getMonth() + 1,
	        day = date.getDate()<10 ? ('0'+date.getDate()):date.getDate()
	      return years + '-' + month + '-' + day
	    }
	    return "";
	  	},
  getWeek(star,end){
		var week = new Date().getDay();
		var Time=new Date().getTime();
		if(week==1){
			star=Time
			end=Time + 24*11*60*60*1000
		}
		else if(week==2){
			star=Time - 24*60*60*1000
			end=Time + 24*10*60*60*1000
		}
		else if(week==3){
			star=Time - 24*2*60*60*1000
			end=Time + 24*9*60*60*1000
		}
		else if(week==4){
			star=Time - 24*3*60*60*1000
			end=Time + 24*8*60*60*1000
		}
		else if(week==5){
			star=Time - 24*4*60*60*1000
			end=Time + 24*7*60*60*1000
		}
		else if(week==6){
			star=Time - 24*5*60*60*1000
			end=Time + 24*6*60*60*1000
		}
		else if(week==0){
			star=Time - 24*6*60*60*1000
			end=Time + 24*5*60*60*1000
		}
		return{
			star,end
		} 
	},
 }
 
 
 