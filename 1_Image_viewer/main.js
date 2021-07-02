let imgIndex = 0;
let link = document.getElementById('link');
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('previous');
let display = document.getElementById('display');
let displayBox = document.getElementById('displayBox');

let images = ['https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/starbucks-hangover-drinks-1606246701.png?crop=0.480xw:0.959xh;0.517xw,0.0238xh&resize=640:*', 
'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/index-unhealthiest-starbucks-drinks-1572380007.jpg?crop=0.495xw:0.990xh;0,0&resize=640:*', 
'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/01/11/1/11171805.jpg&s=Y&x=0&y=720&sw=1280&sh=853&sl=W&fw=800&exp=3600&w=800']; 

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function showImg(){
	display.src = images[imgIndex];
	link.href = images[imgIndex];
	link.textContent = images[imgIndex];
}

function load(){
	display.style.opacity = 0;
	displayBox.classList.add("loading");
}

displayBox.classList.add("loading");
showImg();

function next() {
	prevButton.classList.remove("disabled");
    if (imgIndex == 2) {
		sleep(300).then(() => {
			window.alert("No more pictures!! 0_0");
		});
    }else {
    	nextButton.classList.remove("disabled");
    	imgIndex++;
  		load();
    	showImg();
    }
    if (imgIndex == 2)
    	nextButton.classList.add("disabled");
}

function previous() {
	nextButton.classList.remove("disabled");
    if (imgIndex == 0) {
        sleep(300).then(() => {
			window.alert("No more pictures!! o_o");
		});
    }else {
    	prevButton.classList.remove("disabled");
    	imgIndex--;
  		load();
		showImg();
    }
    if (imgIndex == 0)
    	prevButton.classList.add("disabled");   
}

function loadingImg() {
	display.style.opacity = 1;
    displayBox.classList.remove("loading");
}

/* window.onload = loading();

function loading(){
	document.body.style.backgroundImage="url('./images/loading.gif')";
}

window.addEventListener("load", function() {
	document.body.style.backgroundImage=none;
}); 
https://michaelchen.tech/web-programming/page-loading-timeline/
*/