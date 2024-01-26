
// container 3 animation stoped

var influ1Container = document.querySelector(".content1-influencer1")


influ1Container.addEventListener("mouseover",()=>{
    influ1Container.style.animationPlayState="paused";
    influ1Container.style.cursor="pointer";
})
influ1Container.addEventListener("mouseout",()=>{
    influ1Container.style.animationPlayState="running";
    })

    var influ2Container = document.querySelector(".conten1-influencer2")

    influ2Container.addEventListener("mouseover",()=>{
        influ2Container.style.animationPlayState="paused";
        influ2Container.style.cursor="pointer";
      
    })
    console.log( influ2Container);
    influ2Container.addEventListener("mouseout",()=>{
        influ2Container.style.animationPlayState="running";
        })
        