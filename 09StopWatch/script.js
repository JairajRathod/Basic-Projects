const watchTime = document.querySelector('.watchTime');
    const pauseButton = document.querySelector('.pause');
    const startButton = document.querySelector('.start');
    const restartButton = document.querySelector('.restart');

    let houre = 0, minute = 0, second = 0;
    let start = null;

    

    function stopWatch(){
        second++;
        if(second === 60){
            second = 0;
            minute++;
        }else if(minute === 60){
            minute = 0;
            houre++;
        }

        let hourev = houre < 10 ? '0'+houre : houre;
        let minutev = minute < 10 ? '0'+minute : minute;
        let secondv = second < 10 ? '0'+second : second;

        watchTime.innerHTML = `${hourev}:${minutev}:${secondv}`;
    }

    startButton.addEventListener('click', () => {
        start = setInterval(stopWatch, 1000);
    })

    pauseButton.addEventListener('click', () => {
        clearInterval(start);
    })

    restartButton.addEventListener('click', () => {
        houre = 0;
        minute = 0;
        second = 0;
        clearInterval(start);
        watchTime.innerHTML = `0${houre}:0${minute}:0${second}`;
    })