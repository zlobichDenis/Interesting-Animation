// Movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//Items
const title = document.querySelector('.title');
const sneeker = document.querySelector('.sneeker img');
const purchase = document.querySelector('.purchase button');
const desc = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

//MOving animation event
container.addEventListener('mousemove', (e) => { /* 3 inner width */
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25; 
    let yAxis = (window.innerWidth / 2 - e.pageY) / 25;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'all 0.3 ease';
    //Popout
    title.style.transform = 'translateZ(150px)'; /* 4 translate */
    sneeker.style.transform = 'translateZ(200px) rotateZ(-45deg)';
    purchase.style.transform = 'translateZ(75px)';
    desc.style.transform = 'translateZ(125px)';
    sizes.style.transform = 'translateZ(100px)';
})

//Animate Out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease'; 
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Pop back
    title.style.transform = 'translateZ(0px)'
    sneeker.style.transform = 'translateZ(0px) rotateZ(0deg)';
    purchase.style.transform = 'translateZ(0px)';
    desc.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
})