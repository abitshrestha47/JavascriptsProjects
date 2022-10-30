var btns=document.querySelectorAll('.btn');
var about=document.querySelector('.about-center');
var article=document.querySelectorAll('.content');

about.addEventListener('click',function(e){
    // console.log(e.target);
    var id=e.target.dataset.id;
    // console.log(e.target.dataset.id);
    if(id){
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        })
        article.forEach(function(arti){
            arti.classList.remove('active');
        })
        const elem=document.getElementById(id);
        elem.classList.add('active');
    }
});