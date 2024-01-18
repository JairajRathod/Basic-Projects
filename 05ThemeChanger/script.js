document.querySelector('#theme').addEventListener('click',() => {
    document.querySelector('body').classList.toggle('dark-mode');
    document.querySelector('#container').classList.toggle('container-dark')
  })