const review=[
    {
        id:0,
        img:"./images/pexels-andrea-piacquadio-712513.jpg",
        name:'Susan silver',
        work:'web developer',
        text:'Dave found joy in the daily routine of life. He awoke at the same time, ate the same breakfast and drove the same commute. He worked at a job that never seemed to change and he got home at 6 pm sharp every night. It was who he had been for the last ten years and he had no idea that was all about to change.'
    },
    {
        id:1,
        img:'./images/pexels-stefan-stefancik-91227.jpg',
        name:'Patrick fsd',
        work:'graphic desinger',
        text:'How had she been so wrong? All her instincts and intuition completely failed her for the first time in her life. She had so heavily relied on both when making decisions up until this moment and she felt a seismic shift take place in her self-confidence. If she could be so completely wrong about something so simple as this, how could she make decisions about really important things taking place in her life? She wasn"t sure what she should do next.'
    },
    {
        id:2,
        img:"./images/pexels-andrea-piacquadio-774909.jpg",
        name:'fksdjf fjsd',
        work:'backend developer',
        text:'She wondered if the note had reached him. She scolded herself for not handing it to him in person. She trusted her friend, but so much could happen. She waited impatiently for word.'
    },
    {
        id:3,
        img:'./images/pexels-daniel-xavier-1239291.jpg',
        name:'amy',
        work:"front-end develper",
        text:'Was it enough? That was the question he kept asking himself. Was being satisfied enough? He looked around him at everyone yearning to just be satisfied in their daily life and he had reached that goal. He knew that he was satisfied and he also knew it wasn"t going to be enough.'
    }
];

const img=document.querySelector('#person-img');
const PName=document.querySelector('.name');
const work=document.querySelector('.work');
const about=document.querySelector('.about');
const id=document.querySelector('#id');

const prevBtn=document.querySelector('.prev-btn');
const nextBtn=document.querySelector('.next-btn');

var number=0;


window.addEventListener("DOMContentLoaded",()=>{
    // PName.textContent=person.name;
    // work.textContent=person.work;
    // about.textContent=person.text;
    change();
});

change=()=>{
    var person=review[number];

    id.textContent=person.id;
    img.src=person.img;
    PName.textContent=person.name;
    work.textContent=person.work;
    about.textContent=person.text;
}


prevBtn.addEventListener('click',()=>{
    number--;
    if(number<0){
        number=review.length-1;
    }
    change();
});

nextBtn.addEventListener('click',()=>{
    number++;
    if(number>review.length-1){
        number=0;
    }
    change();
});

var random=document.querySelector('.random-btn');

random.addEventListener('click',()=>{
    number=Math.floor(Math.random()*review.length-1);
    change();
})

change();