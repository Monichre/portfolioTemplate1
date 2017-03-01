//KEYBOARD SVG

   var keyboardSvg = $('#hands-svg');
   keyboardSvg.setActive = false;

   var svgHands = function(element) {
     var
       select = function(e) {
         return document.querySelector(e);
       },
       hands = select('#hands'),
       left_hand = select('#left_hand'),
       right_hand = select('#right_hand'),
       left_index_finger = select("#left_index_finger"),
       left_middle_finger = select("#left_middle_finger"),
       left_ring_finger = select("#left_ring_finger"),
       right_index_finger = select("#right_index_finger"),
       right_middle_finger = select("#right_middle_finger"),
       right_ring_finger = select("#right_ring_finger");

     var tl_lh = new TimelineLite();
     tl_lh
       .add(
         TweenMax.set(
           [left_index_finger, left_middle_finger, left_ring_finger], {
             transformOrigin: "50% 100%"
           }),
         TweenMax.set(
           left_hand, {
             transformOrigin: "50% 100%",
             x: 0,
             y: 0
           })
       )
       .add(TweenMax.to(left_hand, 0.5, {
         y: -10
       }, 0))
       .add(TweenMax.to(left_index_finger, 0.15, {
         scaleY: 0.8
       }))
       .add(TweenMax.to(left_index_finger, 0.15, {
         scaleY: 1
       }))
       .add(TweenMax.to(left_hand, 0.2, {
         y: -20,
         x: -10
       }))
       .add(TweenMax.to(left_middle_finger, 0.15, {
         scaleY: 0.8
       }))
       .add(TweenMax.to(left_middle_finger, 0.15, {
         scaleY: 1
       }))
       .add(TweenMax.to(left_hand, 0.1, {
         y: -24,
         x: 24
       }))
       .add(TweenMax.to(left_middle_finger, 0.15, {
         scaleY: 0.8
       }))
       .add(TweenMax.to(left_middle_finger, 0.15, {
         scaleY: 1
       }))
       .add(TweenMax.to(left_ring_finger, 0.15, {
         scaleY: 0.8
       }))
       .add(TweenMax.to(left_ring_finger, 0.15, {
         scaleY: 1
       }))
       .add(TweenMax.to(left_hand, 0.5, {
         x: 0,
         y: 0
       }, 0));

     var tl_rh = new TimelineLite();

     tl_rh
       .add(
         TweenMax.set(
           [right_index_finger, right_middle_finger, right_ring_finger], {
             transformOrigin: "50% 100%"
           }),
         TweenMax.set(
           right_hand, {
             transformOrigin: "50% 100%",
             x: 0,
             y: 0
           })
       )
       .add(TweenMax.to(right_hand, 0.5, {
         y: -10
       }, 0))
       .add(TweenMax.to(right_index_finger, 0.15, {
         scaleY: 0.8
       }))
       .add(TweenMax.to(right_index_finger, 0.15, {
         scaleY: 1
       }))
       .add(TweenMax.to(right_hand, 0.2, {
         y: -20,
         x: -10
       }))
       .add(TweenMax.to(right_middle_finger, 0.15, {
         scaleY: 0.8
       }))
       .add(TweenMax.to(right_middle_finger, 0.15, {
         scaleY: 1
       }))
       .add(TweenMax.to(right_hand, 0.1, {
         y: -24,
         x: 12
       }))
       .add(TweenMax.to(right_middle_finger, 0.15, {
         scaleY: 0.8
       }))
       .add(TweenMax.to(right_middle_finger, 0.15, {
         scaleY: 1
       }))
       .add(TweenMax.to(right_ring_finger, 0.15, {
         scaleY: 0.8
       }))
       .add(TweenMax.to(right_ring_finger, 0.15, {
         scaleY: 1
       }))
       .add(TweenMax.to(right_hand, 0.5, {
         x: 0,
         y: 0
       }, 0));

     var timeline = new TimelineLite({
       onComplete: function() {
         keyboardSvg.setActive = false
       }
     });

     timeline.append(tl_lh).append(tl_rh, -2);

     timeline.pause().progress();

     return timeline;
   }

   keyboardSvg.on("mouseenter", function() {
     console.log('im hovering');
     if (keyboardSvg.setActive == false) {
       keyboardSvg.setActive = true;
       svgHands().play();
     }
     return keyboardSvg.setActive = true;
   });
   var select = function(s) {
     return document.querySelector(s);
   },
   selectAll = function(s) {
     return document.querySelectorAll(s);
   };

   var svgAnimConcept = function() {

       var svg, svgBrowser, commentTop, commentBottom, browserTab, browserContent, articles, topArticle, middleArticle, bottomArticle, hiddenArticle;

        //svgAnimConcept = this.getSVGDocument();
        svg = document.querySelector("#concept-svg"),
        commentTop = document.querySelector('#commentTop'),
        commentBottom = document.querySelector('#commentBottom'),
        articles = document.querySelector('#articles'),
        topArticle = document.querySelector('#topArticle'),
        middleArticle = document.querySelector('#middleArticle'),
        bottomArticle = document.querySelector('#bottomArticle'),
        hiddenArticle = document.querySelector('#hiddenArticle');

        $('#concept-svg').on('load', function() {
            TweenMax.set(commentTop,{opacity:0, y: -10});
            TweenMax.set(commentBottom,{opacity:0, y: -10});

        });

        $('#concept-svg').on('mouseenter touchstart', function() {
            TweenMax.to(commentTop,0.5,{opacity:1, y: 0, delay: 2.6});
            TweenMax.to(commentBottom,0.5,{opacity:1, y: 0, delay: 2.8});
            TweenMax.fromTo(articles,0.5,
                {y:0},{y:-60, repeatDelay: 0.5, repeat: 1,yoyo: true, ease:Sine.easeInOut});
            TweenMax.to(articles,0.3, {
                y: 0,
                delay: 2,
            });
        });

        $('#concept-svg').on('mouseleave touchend', function() {
            TweenMax.to(commentTop,0.5,{opacity:0, y: -10});
            TweenMax.to(commentBottom,0.5,{opacity:0, y: -10, delay: 0.2});
        });

        return true;

 }();
