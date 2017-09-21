/**
 * @file
 * Provides JavaScript for this.
 */

(function ($) {

Drupal.behaviors.thisone = {
  attach: function (context) {

    function pathPrepare($el) {
        var lineLength = $el[0].getTotalLength();
        $el.css("stroke-dasharray", lineLength);
        $el.css("stroke-dashoffset", lineLength);
    }

    function onload(){
        var $word = $("#path3680");

        // Prepare SVG.
        pathPrepare($word);

        // Init controller.
        var controller = new ScrollMagic.Controller();

        // Build tween.
        var tween = new TimelineMax()
            .add(TweenMax.to($word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
            .add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);

        // Build scene.
        var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 200, tweenChanges: true})
            .setTween(tween)
            .addIndicators()
            .addTo(controller);
    }

    onload();
  }
};

})(jQuery);
