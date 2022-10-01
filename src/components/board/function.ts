
const createPost = (method: String, title: String, content: String) => {
    fetch('http://localhost:8000/boards/', {
    method: `${method}`,
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    'title': title,
    'content': content,
    'writer': 'test'
    })
    })
    .then(response => response.json())
    .catch(err => console.log(err));
};

export { createPost } ;