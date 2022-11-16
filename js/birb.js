
function unicorn () {
    "use strict";
  
      // type 'birb' on your keyboard
      var key = [66,73,82,66];
      var ck = 0;
      var max = key.length;
  
      var unicorn = function() {
  
        var shock = document.createElement('div');
        var img = new Image();
        img.src = data;
        img.style.pointerEvents = "none";
        img.style.width = '600px';
        img.style.height = '338px';
        img.style.transition = '13s all';
        img.style.position = 'fixed';
        img.style.right = '-374px';
        // img.style.bottom = 'calc(-50% + 280px)';
        img.style.top= '100px';
        img.style.zIndex = 999999;
  
        document.body.appendChild(img);
  
        window.setTimeout(function(){
          img.style.right = 'calc(100% + 500px)';
        }, 50);
  
        // window.setTimeout(function(){
        //   img.style.right = 'calc(100% + 375px)';
        // }, 4500);
  
        window.setTimeout(function(){
          img.parentNode.removeChild(img);
        }, 10300);
  
      };
  
      var record = function(e) {
  
        if ( e.which === key[ck] ) {
          ck++;
        } else {
          ck = 0;
        }
  
        if ( ck >= max ) {
          unicorn();
          ck = 0;
        }
  
      };
  
      var init = function(data) {
  
        document.addEventListener('keyup', record);
  
      };
  
      var data = "https://raw.githubusercontent.com/birbbbbbbie/birbbbbbbie.github.io/main/F99F9B71-C188-41FE-ABF1-5A383781363E.gif"
  
      init(data)
  }

  unicorn();