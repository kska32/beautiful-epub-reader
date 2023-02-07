function detectIntersect(target, incb=()=>{}, outcb=()=>{}){
    const options = {
        root: window.document,
        rootMargin: '0px',
        threshold: 0.1
    }
      
    const observer = new IntersectionObserver((entry)=>{
        entry.forEach((v)=>{
            if(v.isIntersecting){
                incb(v)
            }else{
                //outcb(v)
            }
        });
    }, options);
    
    observer.observe(target);
}


function onVisibleAction(targetCN, effectCN){
    document.querySelectorAll('.' + targetCN)
        .forEach(
            (t) => detectIntersect(
                t, 
                (e) => {
                    t.classList.add(effectCN);
                }, 
                (e) => {
                    t.classList.remove(effectCN);
                }
            )
        );
}


onVisibleAction('img', 'visible');
onVisibleAction('desc', 'visible');
