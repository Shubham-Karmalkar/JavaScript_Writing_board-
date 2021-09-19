window.addEventListener('load',()=>{
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext("2d");

    // Resizing
    heig = 600;
    wid = 1100;
    canvas.height = heig ;
    canvas.width = wid;

    let cir = false ;
    let rect = false ;
    let li = false ;
    let t = false ;
    let l = false ;


    //     Clean the board

    const clean = document.getElementById("clear");
    clean.addEventListener("click",()=>{
        canvas.height = heig ;
        li = false;
        cir = false;
        rect = false;
        t = false;
        l = false;
    });

//        Code for Pen           //

    const line = document.getElementById("line");
    line.addEventListener("click", ()=>{
        li = true ;
        cir = false ;
        rect = false ;
        t = false ;
         l = false ;
        drawLine();
    });

    function drawLine(){
        

    let paint = false ;

    
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", endPainting);
    canvas.addEventListener("mousemove", draw);
    function startPainting(e){
        ctx.beginPath();
        paint = true ;
        if (!li) return;
        ctx.lineTo(e.clientX,e.clientY);
        ctx.lineTo(e.clientX+1,e.clientY+1);
        ctx.stroke();
    }
    function endPainting(){
        paint = false ;
    }
    function draw(e){
        if (!li) return;
        if(!paint) return ;
        ctx.lineWidth = 2;
        
        ctx.lineTo(e.clientX,e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX,e.clientY);
    }


}




//        Code For Rectangle          //
    const rectangle = document.getElementById("rect");
    rectangle.addEventListener("click", () => {
      li = false;
      cir = false;
      rect = true;
       l = false;
      t = false;
      drawRectangle();
    });

    function drawRectangle(){

        

        canvas.addEventListener("mousedown",startPainting);
        canvas.addEventListener("mouseup",endPainting);
        canvas.addEventListener("mousemove",count);
        let start = false ;
        
        let x = 0;
        let y = 0;
        let iniX = 0 ;
        let iniY = 0;
        function startPainting(e){
            
             iniX = e.clientX;
             iniY = e.clientY;
        }

        function endPainting(){
            if (!rect) return;
            ctx.rect(iniX,iniY,x-iniX,y-iniY);
            ctx.stroke();
        }

        function count(e){
            x = e.clientX;
            y = e.clientY;
        }

    }

//             Code for Circle            //    

    const circle = document.getElementById("circle");
    circle.addEventListener("click", () => {
      li = false;
      cir = true;
      rect = false;
       l = false;
      t = false;
      drawCircle();
    });


    function drawCircle(){


        canvas.addEventListener("mousedown",center);
        canvas.addEventListener("mousemove",radius);
        canvas.addEventListener("mouseup",draw);
        let x  = 0 ;
        let y = 0;
        let x1 = 0;
        let y1 = 0;

        function draw(){
            if (!cir) return;
            let rad = Math.sqrt((x-x1)**2 + (y-y1)**2);
            ctx.beginPath();
            ctx.arc(x,y,rad,0,2*Math.PI);
            ctx.stroke();
        }
        function radius(e){
            x1 = e.clientX;
            y1 = e.clientY;
        }
        function center(e){
            x = e.clientX;
            y = e.clientY;
        }
    }

//        Code for Text 

const text = document.getElementById("text");
text.addEventListener("click", () => {
  li = false;
  cir = false;
  rect = false;
   l = false;
   changeFont();
   t = true;
  drawText();
});


let sizeOfFont = 20 ;
const input = document.getElementById("fontSize");
input.addEventListener("blur",changeFont);
input.addEventListener("click",()=>{
    li = false;
    cir = false;
    rect = false;
    t = false;
    l = false;
});

function changeFont(){
    

sizeOfFont = input.value ;
}

function drawText(){

    
    canvas.addEventListener("mousedown",position);
    window.addEventListener("keydown",type);
    let x = 0;
    let y = 0;
    let txt = "";
    function position(e){
         x = e.clientX;
         y = e.clientY;
         txt = "";

    }
    function type(e){
        if (!t) return;
        ctx.font = `${sizeOfFont}px Arial`;
        if(e.keyCode == "8"){
            let temp = txt ;
            let count  = 0 ;
            while(count<5){
            ctx.fillStyle= "white";
            ctx.fillRect(x,y,txt.length*2,30);
            ctx.fillText(txt, x, y);
            count++;
            }
            txt = temp.substr(0,temp.length-1);
            ctx.fillStyle = "black"; 
        }else{
            txt += String.fromCharCode(e.keyCode);   
        }
        txt = txt.toLocaleLowerCase();
        ctx.fillText(txt, x, y);
        
         
    }
}

const ln = document.getElementById("str");
ln.addEventListener("click", () => {
  li = false;
  cir = false;
  rect = false;
  t = false;
  l = true;
  drawLn();
});

function drawLn(){
    canvas.addEventListener("mousedown",startLine);
    canvas.addEventListener("mouseup",endLine);
    let x = 0 ;
    let y = 0 ;
    
    function startLine(e){
        x = e.clientX;
        y = e.clientY ;
    }
    function endLine(e){
        if(!l) return ;
        ctx.moveTo(x,y);
        ctx.lineTo(e.clientX,e.clientY);
        ctx.stroke();
    }
}
 

//             none button //

const none = document.getElementById("none");
none.addEventListener("click",function stop(){
li = false;
cir = false;
rect = false;
t = false;
l = false;
});

});

function shadow(btn) {
  btn.style.boxShadow = "0px 0px 20px lightblue";
}
function noShadow(btn){
    btn.style.boxShadow = "";
}

