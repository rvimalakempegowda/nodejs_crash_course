import { getPosts } from "./postController.js";

let post = getPosts();
console.log(post[0].id);
