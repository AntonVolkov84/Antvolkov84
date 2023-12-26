import {data} from "./data"; 
const replyInput = document.querySelector('.reply__form__input');
const replySubmit = document.getElementById('form');
const blockComment = document.querySelector('.comment');
console.log (data);

replySubmit.addEventListener('submit', createReply);


function createReply(event){
	event.preventDefault();
	blockComment.insertAdjacentHTML('afterend', `
		<div class="replyto">
	      	<div class="replyto__vl">
	      	</div>
	      	<div class="replyto__comment">
		        <div class="replyto__comment__points">
			        <img class="replyto__comment__points__img" src="images/icon-plus.svg" alt="minus"></img>
			        <span class="replyto__comment__points__point">12</span>
			        <img class='replyto__comment__points__img' src='images/icon-minus.svg' alt="minus"></img>
		    	</div>
	        	<div class="replyto__comment__body">
	          		<div class="replyto__comment__body__title">
			            <img class="replyto__comment__body__title__img" src="images/avatars/image-amyrobson.png" alt="amy">
			            <span class="replyto__comment__body__title__name">amyrobson</span>
			            <span class="replyto__comment__body__title__time">1 month ego</span>
			            <div class="replyto__comment__body__title__reply__all">
				            <img src="images/icon-reply.svg" alt="reply">
				            <span class="replyto__comment__body__title__reply">Reply</span>
	            		</div>  
	          		</div>
	          		<p class="replyto__comment__body__text">${replyInput.value}</p>
	        	</div>
	      	</div> 
    	</div> 
		`)}
	