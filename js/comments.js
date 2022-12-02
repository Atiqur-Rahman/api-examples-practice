const loadComments = () => {
    const url = `https://jsonplaceholder.typicode.com/comments`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayComments(data));
};

const displayComments = (comments) => {
    comments.forEach((comment) => {
        console.log(comment);
        const showComments = document.getElementById('show-comments');
        const div = document.createElement('div');
        div.classList.add('comment');
        div.onclick = 'loadCommentsDetail(${comment.id})';
        div.innerHTML = `
            <div onclick = "loadCommentsDetail(${comment.id})">
                <h3>Name: ${comment.name}</h3>
                <p>Comment: ${comment.body}</p>
            </div>
        `;
        showComments.appendChild(div);
    });
};

const loadCommentsDetail = async (commentId) => {
    const url = `https://jsonplaceholder.typicode.com/comments?id=${commentId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayCommentsDetail(data[0]);
};

const displayCommentsDetail = (comment) => {
    // console.log(comment);
    const commentDetails = document.getElementById('comment-details');
    commentDetails.innerHTML = `
        <h3>ID: ${comment.id}</h3>
        <p>Name: ${comment.name}</p>
        <p>Email: ${comment.email}</p>
        <p>Comment: ${comment.body}</p>
    `;
};
