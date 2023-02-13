const commentsHandler = async function(event) {
    event.preventDefault();

    const blog_id = document.querySelector('new-comment').dataset.blog_id;
    const description = document.querySelector('#description').value.trim;

if (description){
    await fetch('/api/comments', {
        method : 'POST',
        body: JSON.stringify({
            blog_id,
            description
        }),
        headers: {
            'content-type': 'application/json'
        }
    });
    document.location.reload();
}

};

document.querySelector('.new-comment');
document.addEventListener('submit', commentsHandler);