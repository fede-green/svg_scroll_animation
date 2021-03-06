/**
 * @file
 * An example of the JS you should insert in a medium to make the animation.
 */

 function pathPrepare($el) {
       var lineLength = $el[0].getTotalLength();
       $el.css("stroke-dasharray", lineLength);
       $el.css("stroke-dashoffset", lineLength);
   }

 function onload(){
     var $word = jQuery("#siili");

     // Prepare SVG.
     pathPrepare($word);

     // Init controller.
     var controller = new ScrollMagic.Controller();

     // Build tween.
     var tween = new TimelineMax()
         .add(TweenMax.to($word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
         .add(TweenMax.to($word, 1, {stroke: "#FF5033", ease:Linear.easeNone}), 0);

     // Build scene.
     var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 400, tweenChanges: true})
         .setTween(tween)
         .addIndicators()
         .addTo(controller);
 }
 document.body.onload = function () {
   onload();
 }
