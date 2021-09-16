import './styles.css';
document.getElementById('add-comment').onclick = () => {
  var commentText = document.getElementById('comment-input');
  var rating = document.getElementById('select-rating');
  var commentList = document.getElementById('comment-list');
  var template = `
			<div class="comment-rating">
				${rating.value}
			</div>
			<div class="comment-text">${commentText.value}</div>

		`;
  var div = document.createElement('div');
  div.classList.add('comment');
  div.innerHTML = template;
  let button = document.createElement('button');
  button.className = 'remove-comment';
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
  var buttons = document.getElementsByClassName('remove-comment');
  for (let index = 0; index < buttons.length; index++) {
    buttons[index].style.visibility = 'visible';
  }
};
