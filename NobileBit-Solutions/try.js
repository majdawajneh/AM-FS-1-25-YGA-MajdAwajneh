let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        document.querySelector('.title1').innerHTML = 'Title 1';
        document.querySelector('.title1').style.color = 'red';
        resolve();
        setTimeout(() => {
        document.querySelector('.title2').innerHTML = 'Title 2';
        document.querySelector('.title2').style.color = 'blue';
            setTimeout(() => {
        document.querySelector('.title3').innerHTML = 'Title 3';
        document.querySelector('.title3').style.color = 'green';
            }, 1000)
        }, 1000)

    }, 1000)
})

