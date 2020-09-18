class Painter {
    constructor(){
      this.index = null;
      this.name = null;
    }
  
    getCount(){
      var painterCountRef = database.ref('painterCount');
      painterCountRef.on("value",(data)=>{
        painterCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        painterCount: count
      });
    }
  
    update(){
      var painterIndex = "painters/painter" + this.index;
      database.ref(painterIndex).set({
        name:this.name,
      });
    }
  
    static getPainterInfo(){
      var painterInfoRef = database.ref('painter');
      painterInfoRef.on("value",(data)=>{
        allPainter = data.val();
      })
    }
  }
  