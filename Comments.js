function postComment() {
  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;

  db.collection("comments").add({
    name: name,
    comment: comment,
    time: new Date()
  });
}
