const scrollSegment = document.querySelector('.images');
    const leftButton = document.querySelector('#leftButton');
    const rightButton = document.querySelector('#rightButton');

    leftButton.addEventListener('click', (event) => {
        scrollSegment.style.scrollBehaviour = 'smooth';
        scrollSegment.scrollLeft -= 200;
    })

    rightButton.addEventListener('click', (event) => {
        scrollSegment.scrollLeft += 200;
    })