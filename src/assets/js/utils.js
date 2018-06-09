import OSS from 'ali-oss'

export default{
  install(Vue, options){
    Vue.prototype.mergeArrsSame = function (arr) {
      let arr2 = arr

      for (var i in arr) {
        for (var j in arr) {
          if (arr[i].studentid == arr[j].studentid && i != j) {
            arr2[i].course += '、' + arr[j].course
            arr2.splice(j, 1)
          }
        }
      }
      return arr2

    }
   
   
    
      
      Vue.prototype.alyConfig = {
        region: 'oss-cn-shenzhen',
        accessKeyId: 'FN5pVhS5XZLsdOb9',
        accessKeySecret: 'GshUhE05420TGLUu4y4CDus5z3A7qH',
        bucket: 'hyjy',
        newClient(){
          console.log(this)
          return new OSS.Wrapper({
            region: this.region,
            accessKeyId: this.accessKeyId,
            accessKeySecret: this.accessKeySecret,
            bucket: this.bucket
          });
        },
        uploadToAliyun(f,cb){
          let file = f , key = 'xiliyuyue/'+new Date().getTime()


          let client = this.newClient()

          return client.multipartUpload(key, file, {
            progress: function(p){
              return function (done) {
//              console.log('progress:',p)
                done();
              }

            }
          }).then(function (res) {
//          console.log('upload success: %j', res);
            let fileUrl = res.res.requestUrls[0].split('?')[0]
            cb ? cb(fileUrl) : ''
//          return listFiles(client);
          });
        }
      }

      
  }
}
