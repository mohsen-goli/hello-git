let count=0;

    document.getElementById("button1").onclick=function(){
        count-=1;
        if(count%2==0){
            document.getElementById("counter").style.color="darkblue"
        }
        else{document.getElementById("counter").style.color="darkblue"}
        document.getElementById("counter").innerHTML=count;
         if(count%3==0){
            document.getElementById("counter").style.color="red"
         }
         if(count%5==0){
            document.getElementById("counter").style.color="blue"
        
         }
         if(count%3==0,count%5==0){
            document.getElementById("counter").style.color="orange"
         }
    }
    document.getElementById("button3").onclick=function(){
        count=0;
        if(count==0){
            document.getElementById("counter").style.color="yellow"
        }
        document.getElementById("counter").innerHTML=count;
    }
    document.getElementById("button2").onclick=function(){
        count+=1;
        if(count%2==0){
            document.getElementById("counter").style.color="darkblue"
        }
        else{document.getElementById("counter").style.color="darkblue"}
        document.getElementById("counter").innerHTML=count;
    
    if(count%3==0){
        document.getElementById("counter").style.color="red"
     }
     if(count%5==0){
        document.getElementById("counter").style.color="blue"
    
     }
     if(count%3==0,count%5==0){
        document.getElementById("counter").style.color="orange"
     }
     }


   

