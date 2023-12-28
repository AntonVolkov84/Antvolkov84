// data because of NO server
const data = {
  "currentUser": {
    "image": { 
      "png": "./images/avatars/image-juliusomo.png",
      "webp": "./images/avatars/image-juliusomo.webp"
    },
    "username": "juliusomo"
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
const submitaddcom = document.getElementById('addcom');
const addcomInput = document.querySelector('.addcom__form__input');
const submitReply = document.querySelector('.reply__form__all');

submitReply.addEventListener("submit", replySubmit);

function replySubmit(event, closestId){
console.log(event);
console.log(closestId);
};


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



submitaddcom.addEventListener("submit", logSubmit);
function logSubmit(event){
	const pushNewOne = {
		"id": 11,
     		"content": addcomInput.value,
      	"createdAt": "Now",
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
	comments.push(pushNewOne);
	createComEvent(pushNewOne);
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
};
function createReplyElement(element, elementId){
	const block = document.getElementById(elementId); 
	block.insertAdjacentHTML('afterend', `
		<div class="replyto">
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
			            <img class="replyto__comment__body__title__img" src="${element.user.image.png}" alt="amy">
			            <span class="replyto__comment__body__title__name">${element.user.username}</span>
			            <span class="replyto__comment__body__title__time">${element.createdAt}</span>
			            <div class="replyto__comment__body__title__reply__all">
				            <img src="images/icon-reply.svg" alt="reply">
				            <span class="replyto__comment__body__title__reply">Reply</span>
	            		</div>  
	          		</div>
	          		<p class="replyto__comment__body__text">${element.content}</p>
	        	</div>
	      	</div> 
    	</div> 
		`)};
const replyComments = document.querySelectorAll('.comment__body__title__reply__all');
replyComments.forEach ((element) => element.addEventListener ('click', enableBlockReply));
