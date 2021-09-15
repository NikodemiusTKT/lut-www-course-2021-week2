import './styles.css';

document.getElementById('add-comment').onclick = () => {
  var comment = document.getElementById('comment-text');
  var ul = document.getElementById('comment-list');
  var commentText = comment.value;
  var li = document.createElement('li');
  li.appendChild(document.createTextNode(commentText));
  ul.appendChild(li);
  comment.value = '';
};
document.getElementById('remove-comments').onclick = () => {
  var doRemoveComments = window.confirm('Are you sure you want to remove comments?');
  if (doRemoveComments) {
    document.getElementById('comment-list').innerHTML = '';
  } else {
    return;
  }
};
