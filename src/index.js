document.addEventListener('click', (e) => {
    // console.log(e.target.tagName === 'DIV');
    if (e.target.tagName === 'DIV') {
        alert(`Hi! I am: ${e.target.id}`);
    }
});