nasa_img_array=["nasa_img_1.jpg","nasa_img_2.jpg","nasa_img_3.jpg","nasa_img_4.jpg"];

random_no= Math.floor(Math.random()*4)

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

rover_width=100
rover_height=90
rover_x=10
rover_y=10

background_image=nasa_img_array[random_no]
rover_image="rover.png"

function add(){
background_imagetag=new Image();
background_imagetag.onload=upload_background;
background_imagetag.src=background_image;

rover_imagetag=new Image();
rover_imagetag.onload=uppload_rover;
rover_imagetag.src=rover_image;
}

function upload_background(){
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height);
}

function uppload_rover(){
    ctx.drawImage(rover_imagetag,rover_x,rover_y,rover_width,rover_height)
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
 keypressed=e.keyCode
 console.log(keypressed);

 if(keypressed=='38'){
     console.log("up")
     up();
 }
 if(keypressed=='40'){
     console.log("down")
     down();
 }
 if(keypressed=='37'){
     console.log("left")
    left();
 }
 if(keypressed=='39'){
     console.log("right")
     right();
 }
}

function up(){
    if( rover_y>=0){
      rover_y-=10
      console.log("when up arrow is pressed x="+rover_x+"|| y is="+ rover_y);
      upload_background();
      uppload_rover();
    }
}

function down(){
    if(rover_y <=500){
    rover_y+=10
    console.log("when down arrow is pressed x="+rover_x+"|| y is="+ rover_y);
      upload_background();
      uppload_rover();
    }
}

function left(){
    if(rover_x>=0){
    rover_x-=10
    console.log("when left arrow is pressed x="+rover_x+"|| y is="+ rover_y);
      upload_background();
      uppload_rover();
    }
}

function right(){
    if(rover_x<=700){
     rover_x+=10
     console.log("when up right is pressed x="+rover_x+"|| y is="+ rover_y);
      upload_background();
      uppload_rover();
    }
}

