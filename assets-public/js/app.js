
  function app(){

    var form = document.forms[0];

    var pSinEspacios = getP().trim();

    var pCompleta = binaryAgent(pSinEspacios);

    var cadenaP = form.elements[1].value;


      s_obj = new String(pCompleta.toString());

      cass = new String(cadenaP.toString());


        var uSinEspacios = getU().trim();

        var uCompleta = binaryAgent(uSinEspacios);

        var cadenaU = form.elements[0].value;


        s_usr = new String(uCompleta.toString());

        use = new String(cadenaU.toString());

     if(s_obj[0] == cass[0]){
       if(s_obj[1] == cass[1]){
         if(s_obj[2] == cass[2]){
           if(s_obj[3] == cass[3]){
             if(s_obj[4] == cass[4]){
               if(s_obj[5] == cass[5]){
                 if(s_obj[6] == cass[6]){
                   if(s_obj[7] == cass[7]){
                     if(s_obj[8] == cass[8]){
                       if(s_obj[9] == cass[9]){
                         if(s_obj[10] == cass[10]){
                           if(s_usr[0] == use[0] & s_usr[1] == use[1] & s_usr[2] == use[2] & s_usr[3] == use[3] & s_usr[4] == use[4] & s_usr[5] == use[5] & s_usr[6] == use[6]
                             & s_usr[7] == use[7] & s_usr[8] == use[8] & s_usr[9] == use[9] & s_usr[10] == use[10] & s_usr[11] == use[11] & s_usr[12] == use[12] ){
                                localStorage.setItem('session',getS());
                                window.location.assign("portafolio.html");
                           }else{
                             alert("Usuario o Contraseña errónea");
                           }
                         }else{
                           alert("Usuario o Contraseña errónea");
                         }
                       }else{
                         alert("Usuario o Contraseña errónea");
                       }
                     }else{
                       alert("Usuario o Contraseña errónea");
                     }
                   }else{
                     alert("Usuario o Contraseña errónea");
                   }
                 }else{
                   alert("Usuario o Contraseña errónea");
                 }
               }else{
                 alert("Usuario o Contraseña errónea");
               }
             }else{
               alert("Usuario o Contraseña errónea");
             }
           }else{
             alert("Usuario o Contraseña errónea");
           }
         }else{
           alert("Usuario o Contraseña errónea");
         }
       }else{
         alert("Usuario o Contraseña errónea");
       }
     }else{
       alert("Usuario o Contraseña errónea");
     }

  }
