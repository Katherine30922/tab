const tabBtn=document.querySelectorAll('.tab-btn'),
about=document.querySelector('.about'),
articles=document.querySelectorAll('.content');

about.addEventListener('click',function(e){
   const id= e.target.dataset.id;
   if(id){
    
    //remove active from other button
    tabBtn.forEach(function (btn){
        btn.classList.remove("active"); 
        //add active to the button clicked
        e.target.classList.add("active");
        });

    articles.forEach(function (article){
        article.classList.remove("active"); 
     });
    const element=document.getElementById(id);
    element.classList.add("active");
    }   
})
