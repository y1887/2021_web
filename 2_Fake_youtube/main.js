let text = document.getElementById("comment-input");
let cancel = document.getElementById("cancel-button");
let comment = document.getElementById("comment-button");
let num = document.getElementById("comment-num");
var numComment = 1;
var typingTimer;
var doneTypingInterval = 3000;

let dom_string = `  <div class="comment">
                        <img class="comment-img" src="images/user-icon.jpg"/>
                        <div class="comment-right">
                            <div>
                                <span class="comment-name">Toby Chen</span>
                                <span class="comment-time">現在</span>
                            </div>
                            <p class="comment-text">I am Toby Chen. This is a comment.</p>
                        </div>
                    </div>`;

comment.style.display = "none";
cancel.style.display = "none";

// Typing
text.addEventListener("keydown", function(){
	clearTimeout(typingTimer);
	comment.style.background = "#065fd4";
});

// Not typing
text.addEventListener("keyup", function(){
	clearTimeout(typingTimer);
	typingTimer = setTimeout(doneTyping, doneTypingInterval);

	if (text.value === '' || text.value.trim() ===''){
		comment.style.background = "#cccccc"; //comment is empty
		comment.disabled=true; // commentButton disable
	}
	else
		comment.disabled=false;
});

function doneTyping(){
	text.value = text.value.trim();
	if (text.value !== '')
		comment.disabled=false;
}

function commentButton(){
	comment.style.background = "#cccccc";
	if (text.value !== '' && text.value.trim() !== ''){
		addComment();
		comment.style.display = "block";
		cancel.style.display = "block";
		comment.disabled = true;
		numComment += 1;
		num.innerHTML = numComment+'則留言';
	}
	else{
		comment.disabled = true;
	}
	text.value = '';
}

function Texting(){
	comment.style.display = "block";
	cancel.style.display = "block";
}

function cancelButton(){
	text.value = '';
	comment.style.display = "none";
	cancel.style.display = "none";
}

function addComment(){
	let doc = new DOMParser().parseFromString(dom_string, "text/html");
	let new_comment = doc.body.firstChild;
	new_comment.lastElementChild.lastElementChild.innerHTML = text.value.trim();
	document.getElementById('comment-group').appendChild(new_comment);
/*
	const div = document.createElement('div');
	div.className = 'comment';
	div.innerHTML = `
	<img class="comment-img" src="images/user-icon.jpg"/>
	<div class="comment-right">
		<div>
	  		<span class="comment-name">Toby Chen</span>
        	<span class="comment-time">現在</span>
        </div>
        <p class="comment-text">`;
    var str = text.value.trim() +'</p>' +'</div>';
	div.innerHTML += str;
	document.getElementById('comment-group').appendChild(div);
*/
}