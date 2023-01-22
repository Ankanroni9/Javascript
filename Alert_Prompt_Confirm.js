// Alert in in-browser JavaScript does not return anything
// alert("This is a message"); 

// let name = prompt("What is your name?", "Guest");
// console.log(name);
// console.error("This is an error");
// console.warn("This is a warning");

let deletePost = confirm("Do you really want to delete this post?");
// console.log(deletePost);
if (deletePost) {
    // Code to delete the post
    console.log("Your post has been deleted successfully");
}
else {
    // Code to cancel deletion of the post
    console.log("Your post has not been deleted");
}