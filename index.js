
var timeout;
function skewEffect(){
    var xscale = 1;
    var yscale = 1;
    var xprevious = 0;
    var yprevious = 0;
    window.addEventListener("mousemove",function(dets){
        clearTimeout(timeout);
        xscale = gsap.utils.clamp(.8,1.2,dets.clientX - xprevious);
        yscale = gsap.utils.clamp(.8,1.2, dets.clientY - yprevious);
        xprevious = dets.clientX;
        yprevious = dets.clientX;
        circle(xscale,yscale);
        timeout = setTimeout(()=>{
            document.querySelector("#cursor").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`
        },100)
    })
} 
skewEffect();

function circle(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#cursor").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`
    })
}
circle();
