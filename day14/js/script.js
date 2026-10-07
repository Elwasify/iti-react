"use strict";

const postsContainer = document.getElementById("postsContainer");

async function displayPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let postsData = await response.json();
    postsData.forEach((post) => {
      createAndAppendPost(post);
    });
  } catch (error) {
    console.log(`Error ${error}`);
  }
}

function createAndAppendPost(post) {
  postsContainer.innerHTML += `
    <div class="col">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title text-primary">${post.title}</h5>
          <p class="card-text text-muted">${post.body}</p>
          <span class="badge bg-primary">Post ID: ${post.id}</span>
        </div>
      </div>
    </div>
  `;
}

displayPosts();