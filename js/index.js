
var app = {
   
  capture: function(){
      
      navigator.camera.getPicture(onSuccess,onFall,{
          quality:50,
          destinationType:Camera.DestinationType:DATA_URL,
          salvarToPhontoAlbum:true,
          cameraDirection:Camera,FRONT,
          targetHeight:1000,
          TargetWidth:1000
      });
      fumction onSuccess(imageDATA){
          var image=document.getElementById("minha imagem");
          image.style.display="block";
          image.src="data:image/jpeg;base64," imageData;
      }
      function onFail(messagem){
          alert('Failed because:'+message);
      }
  }
};