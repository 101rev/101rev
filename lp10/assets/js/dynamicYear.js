"use strict";

(function () {
   var  setCurrentYear = function(){
   var currentYear = new Date().getFullYear();

   if (document.getElementById("copyright")) {
      document.getElementById("copyright").innerHTML = currentYear;
   }
   if (document.getElementsByClassName('currentYear').length > 0) {
      for (var i = 0; i < document.getElementsByClassName('currentYear').length; i++) {
         document.getElementsByClassName('currentYear')[i].innerHTML = currentYear;
      }
   }
}

document.addEventListener('DOMContentLoaded', function(event) {
      setCurrentYear();
   });

}());