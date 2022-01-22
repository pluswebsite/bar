function sumeBar(sume){
  var toSume = sume * 10
  var bar = document.getElementById('bar');
 var barn = bar.style.width;
var bara = barn.replace("px","");
var baro = parseInt(bara);
  var okprepare = toSume + baro;
 bar.style.width = okprepare;
}
