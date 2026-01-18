document.getElementById("commentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let comment = document.getElementById("comment").value;

    let commentBox = document.createElement("div");
    commentBox.classList.add("comment-box");
    commentBox.innerHTML = "<strong>" + name + "</strong><p>" + comment + "</p>";

    document.getElementById("commentList").appendChild(commentBox);

    document.getElementById("commentForm").reset();
});
