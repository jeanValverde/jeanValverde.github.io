
var u =  localStorage.getItem("session");
router();

  function router(){

    if(u != null){
      if(validarS(u)){

      }else{
          window.location.assign("index.html");
      }

    }else{
      window.location.assign("index.html");
    }
  }
