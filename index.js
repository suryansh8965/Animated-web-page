var tl=gsap.timeline();

function homepageanimation(){
    
    tl.from(".navelm a",{
    opacity:0,
    y:20,
    duration:2,
    delay:0.5,
    ease: "power2.out",

})

.from("#ncenter h2",{
    opacity:0,
    y:20,
    duration:2,
    ease: "power2.out",

},"-=1")
.from("#circle",{
    opacity:0,
    scale:1.5,
    duration:1,
    ease: "power4.out",

},"-=1")

.from("#text h1 span",{
    opacity:0,
    duration:1.5,
    filter:"blur(2px)",
    stagger:0.1,
    scale:1.7,
    color:"red",
   
})

.from("#hbtmpart .hbtmparts",{
    opacity:0,
    y:20,
    duration:2,
    ease: "power2.out",

})
.from("#hviewcircle",{
    opacity:0,
    // x:20,
    rotate:"270deg",
    duration:2,
    // ease: "power3.out",

},"-=2")
.from("#hbcircle",{
    opacity:0,
    duration:2,
    scale:1.3,
    ease: "power2.out",

},"-=2")
}
function secondpageanimation(){
  var tl2=gsap.timeline({
      scrollTrigger:{
          trigger:"#second",
        // markers:true,
        start:"bottom 75%",
        scrub:2
        
    }
  })
    tl2
    .to("#scrolltext",{  
      x:"-100%",
      ease:Circ   
  },"a")
    .to(".photos",{
      x:"-210%",
      ease:Circ    
  },"a")
}

function thirdpageanimation(){

    document.querySelector("#third").addEventListener("click",function(dets){

        var wid=100-4*(5-dets.target.id);
            var elem=".strcnt"+dets.target.id.split("-")[0];
                 console.log(dets.target);


                 if(isNaN(Number(dets.target.id))){

                    gsap.to(dets.target.offsetParent,{
                        width:4+"%",
                        duration:1,
                        ease:"Expo.out"
                        
                       })
                       
                       gsap.to(elem,{
                           opacity:0,
                           
                       })

                       gsap.to(dets.target.offsetParent.children[1],{
                        opacity:0
                       })

                       


                 }else{

                     gsap.to(dets.target,{
                         width:wid+"%",
                         duration:1,
                         ease:"expo.out"
                         
                        })
                        
                        gsap.to(elem,{
                            opacity:1,
                            duration:0.5,
                            
                        })
                        gsap.to(dets.target.children[1]  ,{
                            opacity:1
                           })
                    } 
        

    })

}



function fourthpageanimation(){
    var elem=document.querySelectorAll(".foptions1").forEach(function(dets){
        
        dets.addEventListener("mousemove",function(element){
            element.target.nextElementSibling.style.opacity="1";
            element.target.nextElementSibling.style.transform=`translate(0%,0%) translateX(${(element.screenX)+65}%) rotate(${(element.screenX)+.02}deg)`;

        })
        dets.addEventListener("mouseout",function(element){
            element.target.nextElementSibling.style.opacity="0";
            element.target.nextElementSibling.style.transform=`translate(0%,0%)`;
        })

            
        })

       
   
    
     
}

function changetextintochars(){

   var h1= document.querySelectorAll("#text h1");

    console.log(h1);

    h1.forEach(function(elem){
        var clutter="";

    var txt=elem.textContent.split("");

        txt.forEach(function(chars){
            clutter+=`<span>${chars}</span>`
        })
        elem.innerHTML=clutter;     
    })
}
changetextintochars();
homepageanimation();
secondpageanimation();
thirdpageanimation();
fourthpageanimation();