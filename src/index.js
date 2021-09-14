import "./styles.css";
document.getElementById("app").innerHTML = `
<h1>Hello World!</h1>
<div>
  <h2>Meal table</h2>
<table>
	<thead>
			<tr>
					<th scope="col" style="border-width: 1px; border-style: solid; border-color: rgb(51, 51, 51);">
							Name</th>
					<th scope="col" style="border-width: 1px; border-style: solid; border-color: rgb(51, 51, 51);">
							Price</th>
			</tr>
	</thead>
	<tbody>
			<tr>
					<td style="border-width: 1px; border-style: solid; border-color: rgb(51, 51, 51);">
							Double Burger Meal</td>
					<td style="border-width: 1px; border-style: solid; border-color: rgb(51, 51, 51);">
							8,30€</td>
			</tr>
			<tr>
					<td style="border-width: 1px; border-style: solid; border-color: rgb(51, 51, 51);">
							Mega-Meal
					</td>
					<td style="border-width: 1px; border-style: solid; border-color: rgb(51, 51, 51);">
							10,40€
					</td>
			</tr>
			<tr>
					<td style="border-width: 1px; border-style: solid; border-color: rgb(51, 51, 51);">
							Giant Bacon Meal
					</td>
					<td style="border-width: 1px; border-style: solid; border-color: rgb(51, 51, 51);">
							9,40€
					</td>
			</tr>
			<tr>
					<td style="border-width: 1px; border-style: solid; border-color: rgb(51, 51, 51);">
							Cheese Meal
					</td>
					<td style="border-width: 1px; border-style: solid; border-color: rgb(51, 51, 51);">
							6,00€
					</td>
			</tr>
			<tr>
					<td style="border-width: 1px; border-style: solid; border-color: rgb(51, 51, 51);">
							Chicken Meal
					</td>
					<td style="border-width: 1px; border-style: solid; border-color: rgb(51, 51, 51);">
							8,30€
					</td>
			</tr>
	</tbody>

	</table>
	<h2>Comments</h3>
	<ul id="comment-list">
	</ul>
	<textarea id="comment-text"></textarea>
	<br>
	<button id="add-comment" >Add Comment</button>
	<button id="remove-comments">Remove comments</button>.
</div>
`;


document.getElementById("add-comment").onclick = () => {
  var comment = document.getElementById("comment-text");
  var ul = document.getElementById("comment-list");
  var commentText = comment.value;
  if (commentText === "") return;
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(commentText));
  ul.appendChild(li);
  comment.value = "";
};
document.getElementById("remove-comments").onclick = () => {
  var doRemoveComments = window.confirm(
    "Are you sure you want to remove comments?"
  );
  if (doRemoveComments) {
    document.getElementById("comment-list").innerHTML = "";
  } else {
    return;
  }
};
