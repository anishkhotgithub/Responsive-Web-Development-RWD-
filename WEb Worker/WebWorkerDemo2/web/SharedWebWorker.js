var connections=0;

self.addEventListener("connect",function(e){
   var port = e.ports[0];
   connections++;
   
   var strTime=getTime();
   
   port.addEventListener("message",function(e){
       port.postMessage("Connected With "+e.data+" "+strTime+"<br> Connection Number: "+connections);
   },false);
   
   port.start();
},false);

importScripts('myfile.js');


