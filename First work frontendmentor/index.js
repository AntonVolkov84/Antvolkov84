// data because of NO server
const data = {
  "currentUser": {
    "image": { 
      "png": "./images/avatars/image-juliusomo.png",
      "webp": "./images/avatars/image-juliusomo.webp"
    },
    "username": "antvolkov"
  },
  "comments": [
    {
      "id": 1,
      "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      "createdAt": "1 month ago",
      "score": 12,
      "user": {
        "image": { 
          "png": "./images/avatars/image-amyrobson.png",
          "webp": "./images/avatars/image-amyrobson.webp"
        },
        "username": "amyrobson"
      },
      "replies": []
    },
    {
      "id": 2,
      "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      "createdAt": "2 weeks ago",
      "score": 5,
      "user": {
        "image": { 
          "png": "./images/avatars/image-maxblagun.png",
          "webp": "./images/avatars/image-maxblagun.webp"
        },
        "username": "maxblagun"
      },
      "replies": [
        {
          "id": 3,
          "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          "createdAt": "1 week ago",
          "score": 4,
          "replyingTo": "maxblagun",
          "user": {
            "image": { 
              "png": "./images/avatars/image-ramsesmiron.png",
              "webp": "./images/avatars/image-ramsesmiron.webp"
            },
            "username": "ramsesmiron"
          }
        },
        {
          "id": 4,
          "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          "createdAt": "2 days ago",
          "score": 2,
          "replyingTo": "ramsesmiron",
          "user": {
            "image": { 
              "png": "./images/avatars/image-juliusomo.png",
              "webp": "./images/avatars/image-juliusomo.webp"
            },
            "username": "juliusomo"
          }
        }
      ]
    }
  ]
};
const {currentUser} = data;
const {comments} = data;
const blockComment = document.querySelector('.container');
const blockAddcom = document.querySelector('.addcom');
const blockReply = document.querySelector('.reply');
const submitaddcom = document.querySelector('.addcom__form__all');
const addcomInput = document.querySelector('.addcom__form__input');
const submitReply = document.querySelector('.reply__form__all');


submitaddcom.addEventListener("submit", logSubmit);
submitReply.addEventListener("submit", replySubmit);

function replySubmit(event){
event.preventDefault();

 function date_time() {
        var current_datetime = new Date();
        var day = current_datetime.getDate();
        var month = current_datetime.getMonth() + 1;
        var year = current_datetime.getFullYear();
        var hours = current_datetime.getHours();
        var minutes = current_datetime.getMinutes();
        
        return day+"."+month+"."+year+" "+hours+":"+minutes;
    }

const idComment = document.querySelector('.reply__form__id').value;
const addNewOneReply = {
      "id": 11,
      "content": document.querySelector('.reply__form__input').value,
      "createdAt": date_time(),
      "score": 0,
      "replyingTo": document.querySelector('.reply__form__name').value,
      "user": {
        "image": { 
          "png": currentUser.image.png,
          "webp": "./images/avatars/image-ramsesmiron.webp"
        },
        "username": currentUser.username
      }
    };
const commentId = comments.find(item => item.id == idComment);
commentId.replies.unshift(addNewOneReply);
submitReply.reset();
createReplyElement(addNewOneReply, idComment);
blockReply.classList.remove('activeflex');
blockAddcom.classList.add('activeflex');
}
function enableBlockReply(event){
	blockAddcom.classList.remove('activeflex');
	blockReply.classList.add('activeflex');
	const id = document.querySelector('.reply__form__id');
	id.value = (event.target.closest('.comment').id);
	const searchName = event.target.closest('.comment__body__title');
	const findName = searchName.querySelector('.comment__body__title__name');
	const name = document.querySelector('.reply__form__name');
	name.value = "@" + findName.innerText;
};

function logSubmit(event){
	event.preventDefault();
	
	 function date_time() {
        var current_datetime = new Date();
        var day = current_datetime.getDate();
        var month = current_datetime.getMonth() + 1;
        var year = current_datetime.getFullYear();
        var hours = current_datetime.getHours();
        var minutes = current_datetime.getMinutes();
        
        return day+"."+month+"."+year+" "+hours+":"+minutes;
    }

	const pushNewOne = {
		"id": 11,
     		"content": addcomInput.value,
      	"createdAt": date_time(),
      	"score": 0,
      	"user": {
        	"image": { 
         	"png": currentUser.image.png,
          	"webp": "./images/avatars/image-amyrobson.webp"
       				 },
        	"username": currentUser.username,
     			},
      	"replies": []
	};
	comments.unshift(pushNewOne);
	createComEvent(pushNewOne);
	submitaddcom.reset();
	
}

comments.forEach ((element) => createComEvent(element));

function createComEvent(element){
	blockComment.insertAdjacentHTML('afterbegin', `
<div class="container">
    <div id="${element.id}" class="comment">
      <div class="comment__points">
        <img class="comment__points__img" src="images/icon-plus.svg" alt="minus"></img>
        <span class="comment__points__point">${element.score}</span>
        <img class='comment__points__img' src='images/icon-minus.svg' alt="minus"></img>
      </div>
      <div class="comment__body">
        <div class="comment__body__title">
          <div class="comment__body__title__all">
            <img class="comment__body__title__img" src=${element.user.image.png} alt="amy">
            <span class="comment__body__title__name">${element.user.username}</span>
            <span class="comment__body__title__time">${element.createdAt}</span>
          </div> 
          <div class="comment__body__title__delete__all">
            <img class="comment__body__title__delete__img" src="images/icon-delete.svg" alt="">
            <span class="comment__body__title__delete__text">Delete</span>            
          </div> 
          <div class="comment__body__title__reply__all">
            <img src="images/icon-reply.svg" alt="reply">
            <span class="comment__body__title__reply">Reply</span>
          </div>  
        </div>
        <p class="comment__body__text">${element.content}</p>
    </div>
</div>
`);
	
	const elementId = element.id;
	if (element.replies.length > 0){
		element.replies.forEach ((element) => createReplyElement(element, elementId));
	};
	startEventListenerDinamic();
	enableDelete();
};
function createReplyElement(element, elementId){
	const block = document.getElementById(elementId); 
	block.insertAdjacentHTML('afterend', `
		<div id="${element.id}" data-id="1" class="replyto">
	      	<div class="replyto__vl">
	      	</div>
	      	<div class="replyto__comment">
		        <div class="replyto__comment__points">
			        <img class="replyto__comment__points__img" src="images/icon-plus.svg" alt="minus"></img>
			        <span class="replyto__comment__points__point">${element.score}</span>
			        <img class='replyto__comment__points__img' src='images/icon-minus.svg' alt="minus"></img>
		    	</div>
	        	<div class="replyto__comment__body">
	          		<div class="replyto__comment__body__title">
	          			<div class="replyto__flt">
	          			<img class="replyto__comment__body__title__img" src="${element.user.image.png}" alt="amy">
			            <span class="replyto__comment__body__title__name">${element.user.username}</span>
			            <span class="replyto__comment__body__title__time">${element.createdAt}</span>
			            </div>
			            <div class="replyto__comment__body__title__delete__all ${enableDeleteReply(element)}">
            				<img class="replyto__comment__body__title__delete__img" src="images/icon-delete.svg" alt="">
            				<span class="replyto__comment__body__title__delete__text">Delete</span>            
          				</div>
			            <div class="replyto__comment__body__title__reply__all">
				            <img src="images/icon-reply.svg" alt="reply">
				            <span class="replyto__comment__body__title__reply">Reply</span>
	            		</div>  
	          		</div>
	          		<p class="replyto__comment__body__text">${element.content}</p>
	        	</div>
	      	</div> 
    	</div> 
`)
	
startEventListenerDinamicReply();
};


function enableDeleteReply(element){
		if(element.user.username == currentUser.username){
		return "active";	
	}else{
		return;
	}

};

function startEventListenerDinamicReply(){
const searchDel = document.querySelectorAll('.replyto__comment__body__title__delete__all');
searchDel.forEach ((element) => element.addEventListener('click', blockDeleteReply));
};
function blockDeleteReply(){
	const delLi = (event.target.closest('.replyto'));
	delLi.classList.add('remove');
	document.querySelector('.wrapper').classList.add('active');
	const close = document.querySelector('.modal__title__all__close');
	const no = document.querySelector('.modal__buttons__no');
	no.addEventListener('click', blockDeleteRemove);
	close.addEventListener('click', blockDeleteRemove);
	const yes = document.querySelector('.modal__buttons__yes');
	yes.addEventListener('click', dellNull);	
}

function dellNull(){
const l = document.querySelector('.remove');
l.remove();
document.querySelector('.wrapper').classList.remove('active');
};

function blockDeleteRemove(){
	const del = document.querySelector('.wrapper');
	del.classList.remove('active');
	const l = document.querySelector('.remove');
	console.log(l);
	l.classList.remove('remove');
};

function startEventListenerDinamic(){
const replyComments = document.querySelectorAll('.comment__body__title__reply__all');
replyComments.forEach ((element) => element.addEventListener ('click', enableBlockReply));
};

function enableDelete(){
	if(document.querySelector('.comment__body__title__name').innerText == currentUser.username){
		document.querySelector('.comment__body__title__delete__all').classList.add('active');
		document.querySelector('.comment__body__title__delete__all').addEventListener('click', blockDelete);

	}
}
function blockDelete(){
	const delLi = (event.target.closest('.comment'));
	delLi.classList.add('remove');
	document.querySelector('.wrapper').classList.add('active');
	const close = document.querySelector('.modal__title__all__close');
	const no = document.querySelector('.modal__buttons__no');
	no.addEventListener('click', blockDeleteRemove);
	close.addEventListener('click', blockDeleteRemove);
	const yes = document.querySelector('.modal__buttons__yes');
	yes.addEventListener('click', dellNull);
}




const close = document.querySelector('.modal__title__all__close');
const no = document.querySelector('.modal__buttons__no');
no.addEventListener('click', blockDeleteRemove);
close.addEventListener('click', blockDeleteRemove);

// Прототипное наследование

// class Player2{
// 	constructor(login, score = 100){
// 		this.login = login;
// 		this. score = score;
// 	}
// 	addToData() {
// 		this.push(data);
// 	}
	
// }