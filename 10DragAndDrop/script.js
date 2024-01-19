const itemsList = document.querySelectorAll('.items');
const rightContainer = document.querySelector('.rightContainer');
const leftContainer = document.querySelector('.leftContainer');

        for (item of itemsList){
            item.addEventListener('dragstart', (event) => {
                let selected = event.target;

                rightContainer.addEventListener('dragover',(event) => {
                    event.preventDefault();
                })
                rightContainer.addEventListener('drop', () => {
                    rightContainer.appendChild(selected)
                    selected = null
                })
            })
        }

    for (item of itemsList){
        item.addEventListener('dragstart', (event) => {
            let selected = event.target;

            leftContainer.addEventListener('dragover',(event) => {
                event.preventDefault();
            })
            leftContainer.addEventListener('drop', () => {
                leftContainer.appendChild(selected)
                selected = null
            })
        })

    }