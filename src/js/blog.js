const postsContainer = document.querySelector(".posts-container");
const postForm = document.querySelector(".create");
const editPostBtn = document.querySelector('.edit-post');

// Hàm thêm post
const addPost = (title, content, imgPath) => {
  let current_user_data = JSON.parse(localStorage.getItem('current_user_data'))
  db.collection("posts")
    .add(
      {
        author: current_user_data.displayName,
        title: title,
        content: content,
        imgPath: imgPath,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      }
    )
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      removeCreateForm();
      fetchPosts();
      alert("Post added successfully!");
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      alert("Failed to add post.");
    });
};

// Hàm xóa post
const deletePost = (postId) => {
  if (confirm("Do you want to delete this post?")) {
    db.collection("posts")
      .doc(postId)
      .delete()
      .then(() => {
        console.log("Document successfully deleted!");
        alert("Post deleted successfully!");
        fetchPosts();
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
        alert("Failed to delete post.");
      });
  }
};

// Hàm lấy danh sách post từ Firebase về
const fetchPosts = () => {
  db.collection("posts")
    .orderBy("createdAt", "desc")
    .get()
    .then((querySnapshot) => {
      const posts = [];
      querySnapshot.forEach((doc) => {
        posts.push({ id: doc.id, ...doc.data() });
      });

      // Gọi hàm để render
      renderPosts(posts);
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
};

// Render dữ liệu
const renderPosts = (posts) => {
  let html = ``;
  for (let i in posts) {
    html +=
      `
    <div class="post">
        <h2>Được đăng bởi: ${posts[i].author}</h2>
        <h1>${posts[i].title}</h2>
        <p>${posts[i].content}</p>
        <div class="img" style="background-image: url(${posts[i].imgPath});"></div>
      `;
    if(posts[i].author == currentUser.displayName){
      html += 
      `
        <button class="edit-post bg-[orange]" onclick="callEditForm('${posts[i].id}', '${posts[i].title}', '${posts[i].content}', '${posts[i].imgPath}')">Edit</button>
        <button class="delete-post bg-[red]" onclick="deletePost('${posts[i].id}')">Delete</button>
      </div>
      `
    }
    else{
      html += 
      `
      </div>
      `
    }
  }
  postsContainer.innerHTML = html;
};

// Function to update a post
const updatePost = async (id, title, content, imgPath) => {
  const updatedData = {
    title: title,
    content: content,
    imgPath: imgPath,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
  };

  console.log(updatedData);

  db.collection("posts")
    .doc(id)
    .update(updatedData)
    .then(() => {
      console.log("Document successfully updated!");
      alert("Post updated successfully!");
      fetchPosts();
      removeEditForm();
    })
    .catch((error) => {
      console.error("Error updating document: ", error);
      alert("Failed to update post.");
    });
};

// Add post
postForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#create-title").value;
  const content = document.querySelector("#create-content").value;
  const imgPath = document.querySelector("#create-image").value;
  addPost(title, content, imgPath);
  postForm.reset();
});

// Event listener to handle form submission for editing a post
editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#edit-title").value;
  const content = document.querySelector("#edit-content").value;
  const imgPath = document.querySelector("#edit-image").value;
  updatePost(currentPostId, title, content, imgPath);
});


// Lắng nghe sự kiện: Nếu DOM của tất cả file đã được load 
window.addEventListener("DOMContentLoaded", fetchPosts);