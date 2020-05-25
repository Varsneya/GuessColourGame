var numOfSquares=6;
var colors=[];
var pickedColor;
var squares=document.querySelectorAll(".square");
var button=document.querySelector("#reset");
var h1=document.getElementsByTagName("h1")[0];
var message=document.querySelector("#message");
var colorDisplay=document.getElementById("colorDisplay");
var mode=document.querySelectorAll(".mode")
init();
function init(){
    for(var i=0;i<mode.length;i++){
        mode[i].addEventListener("click",function(){
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            this.classList.add("selected");
            numOfSquares=this.textContent==="Easy"?3:6;
            reset();
        });
    }
    for(var i=0;i<squares.length;i++){
        // add colors on squares
       
        //add click listeners to squares
        squares[i].addEventListener("click",function(){
            var clickedColor=this.style.backgroundColor;
            if(clickedColor===pickedColor){
            message.textContent="Correct";
            button.textContent="Play Again";
            changeColors(pickedColor);
            h1.style.backgroundColor=pickedColor;
            }
            else{ 
                this.style.backgroundColor="#232323";
                message.textContent="Try Again!!";
            }
        });
    }
    reset();
}
for(var i=0;i<mode.length;i++){
    mode[i].addEventListener("click",function(){
        mode[0].classList.remove("selected");
        mode[1].classList.remove("selected");
        this.classList.add("selected");
        numOfSquares=this.textContent==="Easy"?3:6;
        reset();
    });
}
function reset(){
    h1.style.backgroundColor="steelblue";
    colors=colorArray(numOfSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    message.textContent="";
    button.textContent="New Colors";
    for(var i=0;i<squares.length;i++){
        // add colors on squares
        squares[i].style.display="block";
        if(colors[i])
        squares[i].style.backgroundColor=colors[i];
        else
        squares[i].style.display="none";
    
        //add click listeners to squares
        squares[i].addEventListener("click",function(){
            var clickedColor=this.style.backgroundColor;
            if(clickedColor===pickedColor){
            message.textContent="Correct";
            changeColors(pickedColor);
            h1.style.backgroundColor=pickedColor;
            }
            else{ 
                this.style.backgroundColor="#232323";
                message.textContent="Try Again!!";
            }
        });
    }
}
button.addEventListener("click",function(){
    reset();
});
function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}
function pickColor(){
    var index=Math.floor(Math.random()*colors.length);
    return colors[index];
}
function colorArray(len){
    var arr=[];
    for(var i=0;i<len;i++){
        var r=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);
        var ans="rgb("+r +", "+g+", "+b+")";
        arr.push(ans);
        //squares[i].style.backgroundColor=arr[i];
    }
    return arr;
}
