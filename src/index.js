import './styles.css';
document.getElementById('add-comment').onclick = () => {
  var commentText = document.getElementById('comment-input');
  var ratingValue = document.getElementById('select-rating');
  var commentList = document.getElementById('comment-list');
  var ratingTemplate = buildRatingStars(ratingValue.value);
  var template = `
			<div class="comment-rating">
				${ratingTemplate}
			</div>
			<div class="comment-text">${commentText.value}</div>
		`;
  var div = document.createElement('div');
  div.classList.add('comment');
  div.innerHTML = template;
  let button = document.createElement('button');
  button.className = 'remove-button';
  button.onclick = () => {
    div.parentNode.removeChild(div);
  };
  button.innerText = 'Remove';
  button.style.visibility = 'hidden';
  div.appendChild(button);

  commentList.appendChild(div);
  commentText.value = '';
};
document.getElementById('remove-comments').onclick = () => {
  var buttons = document.getElementsByClassName('remove-button');
  for (let index = 0; index < buttons.length; index++) {
    buttons[index].style.visibility = 'visible';
  }
};
function buildRatingStars(rating) {
  var ratingTemplate = ``;
  let stars = 4;
  for (let index = 0; index < rating; index++) {
    ratingTemplate += `<span class="fa fa-star checked"></span>`;
    stars -= 1;
  }
  for (let index = 0; index < stars; index++) {
    ratingTemplate += `<span class="fa fa-star"></span>`;
  }
  return ratingTemplate;
}
// function removeComment(event) {
//   var dom = this;
//   var p_dom = this.parentNode;
//   var parent_node = p_dom.parentNode;
//   parent_node.removeChild(p_dom);
// }
