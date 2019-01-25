function text2Binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
};

function binaryAgent(str) {

var strArray = str.split(" ");
var text ="";
for(var i = 0 ; i<strArray.length ; i++){
  var char = parseInt(strArray[i],2).toString(10);
  char = String.fromCharCode(char);
  text += char;
}
return text;

};

function getS(){

  var se = [
     "01100101",
     "00111000",
     "00110101",
     "00110011",
     "01100100",
     "01100011",
     "01100110",
     "00110011",
     "01100110",
     "00111000",
     "00110010",
     "00110010",
     "00101101",
     "01100101",
     "00110001",
     "01100011",
     "00111001",
     "00101101",
     "00110100",
     "00111000",
     "01100101",
     "00110100",
     "00101101",
     "00110100",
     "00110101",
     "00110110",
     "01100001",
     "00101101",
     "00111001",
     "01100011",
     "00110001",
     "00110001",
     "00111000",
     "00110110",
     "00110010",
     "00110001"
  ];

  var sa = se.reverse();

  var d = "";

  for(var i = 0 ; i< 36 ; i++){
    d = d + ' ' + sa[i];
  }

  return d;

}

function getP(){
  var pas1 = ["110110", "110010", "110111", "111001", "111001",  "110001" ];

  var pas2 = [ "100011","1001010","1100101","1100001","1101110"];

  var t = pas1.reverse();

  var part1 = "";

  for(var i = 0 ; i< 5 ; i++){
    part1 = part1 + ' ' + pas2[i];
  }

  var part2 = "";

  for(var i = 0 ; i< 6 ; i++){
    part2 = part2 + ' ' + pas1[i];
  }

  var te  = part1 + part2;

  return te;

};


 function validarS(textb){

   var e = new String(textb.toString());

   var i = new String(getS().toString());

   var t = e.split(' ');

   var eq = i.split(' ');


   t.splice(0, 1);
   eq.splice(0, 1);

   t.reverse();
   eq.reverse();

   var agetS1 = "";
   var agetS2 = "";

   for (var i = 0; i < t.length; i++) {
     agetS2 = agetS2 + ' ' + t[i];
     agetS1 = agetS1 + ' ' + eq[i];
   }

   if(verificar(agetS2, agetS1)){
     return true;
   }else{
     return false;
   }

 }

 function verificar(p1 , p2 ){
   var i = false;
   if(p1[0] == p2[0] &&
     p1[1] == p2[1] &&
     p1[2] == p2[2] &&
     p1[3] == p2[3] &&
     p1[4] == p2[4] &&
     p1[5] == p2[5] &&
     p1[6] == p2[6] &&
     p1[7] == p2[7] &&
     p1[8] == p2[8] &&
     p1[9] == p2[9] &&
     p1[10] == p2[10] &&
     p1[11] == p2[11] &&
     p1[12] == p2[12] &&
     p1[13] == p2[13] &&
     p1[14] == p2[14] &&
     p1[15] == p2[15] &&
     p1[16] == p2[16] &&
     p1[17] == p2[17] &&
     p1[18] == p2[18] &&
     p1[19] == p2[19] &&
     p1[20] == p2[20] &&
     p1[21] == p2[21] &&
     p1[22] == p2[22] &&
     p1[23] == p2[23] &&
     p1[24] == p2[24] &&
     p1[25] == p2[25] &&
     p1[26] == p2[26] &&
     p1[27] == p2[27] &&
     p1[28] == p2[28] &&
     p1[29] == p2[29] &&
     p1[30] == p2[30] &&
     p1[31] == p2[31] &&
     p1[32] == p2[32] &&
     p1[33] == p2[33] &&
     p1[34] == p2[34] &&
     p1[35] == p2[35] &&
     p1[36] == p2[36]){
     i = true;
   }
   return i;
 }


 function getU(){
   var pas1 = ["1100101", "1100100", "1110010", "1100101", "1110110", "1101100", "1100001", "1110110", "101110", "1101110", "1100001", "1100101", "1101010"];
   var t = pas1.reverse();
   var re = "";
   for(var i = 0 ; i< 13 ; i++){
     re = re + ' ' + pas1[i];
   }

   return re;

 }

 if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
      return this.replace(/^\s+|\s+$/g, '');
  }
}

if (!String.prototype.trim) {
  (function() {
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      String.prototype.trim = function() {
      return this.replace(rtrim, '');
      };
  })();
}

String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g, ""); };
