window.onload=function(){
    const entities = [
        {
            city: `Rostov-on-Don
            LCD admiral`,
            area: '81 m2',
            time: '3.5 months',
            cost: 'Upon request',
            img: './images/sl0.png'
        },
        {
            city: `Sochi
            Thieves`,
            area: '105 m2',
            time: '4 months',
            cost: 'Upon request',
            img: './images/sl1.png'
        },
        {
            city: `Rostov-on-Don
            Patriotic`,
            area: '93 m2',
            time: '3 months',
            cost: 'Upon request',
            img: './images/sl2.png'
        }
    ]
    
    const city = document.querySelector('.city')
    const area = document.querySelector('.area')
    const time = document.querySelector('.time')
    const cost = document.querySelector('.cost')
    const img = document.querySelector('.block-2-img')
    
    const element = document.querySelectorAll('.slider-line-element')
    const circle = document.querySelectorAll('.circle')
    
    const setEntity = (index) => {
        city.innerText = entities[index].city;
        area.innerText = entities[index].area;
        time.innerText = entities[index].time;
        cost.innerText = entities[index].cost;
        img.src = `${entities[index].img}`
    }
    
    const changeActive = () => {
        element[prevIndex].classList.remove('active');
        element[prevIndex].classList.add('passive');
        element[currentIndex].classList.remove('passive');
        element[currentIndex].classList.add('active');
        circle[prevIndex].classList.remove('active');
        circle[prevIndex].classList.add('passive');
        circle[currentIndex].classList.remove('passive');
        circle[currentIndex].classList.add('active');
    }
    
    const prev = document.querySelector('.arrow-left')
    const next = document.querySelector('.arrow-right')
    const select0 = document.querySelectorAll('.select-0')
    const select1 = document.querySelectorAll('.select-1')
    const select2 = document.querySelectorAll('.select-2')
    let currentIndex = 0
    let prevIndex = 0
    setEntity(currentIndex);
    
    prev.addEventListener('click', () => {
        if (currentIndex === 0) {
            prevIndex = currentIndex;
            currentIndex = entities.length - 1;
            setEntity(currentIndex);
            changeActive();
        } else {
            prevIndex = currentIndex;
            currentIndex -= 1;
            setEntity(currentIndex);
            changeActive();
        }
    })
    next.addEventListener('click', () => {
        if (currentIndex === (entities.length - 1)) {
            prevIndex = currentIndex;
            currentIndex = 0;
            setEntity(currentIndex);
            changeActive();
        } else {
            prevIndex = currentIndex;
            currentIndex += 1;
            setEntity(currentIndex);
            changeActive();
        }
    })
    for (let elem of select0) {
        elem.addEventListener('click', () => {
            prevIndex = currentIndex;
            currentIndex = 0;
            setEntity(currentIndex);
            changeActive();
        })
    }
    for (let elem of select1) {
        elem.addEventListener('click', () => {
            prevIndex = currentIndex;
            currentIndex = 1;
            setEntity(currentIndex);
            changeActive();
        })
    }
    for (let elem of select2) {
        elem.addEventListener('click', () => {
            prevIndex = currentIndex;
            currentIndex = 2;
            setEntity(currentIndex);
            changeActive();
        })
    }
}