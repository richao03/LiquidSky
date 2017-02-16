  // init controller
  var controller = new ScrollMagic.Controller();

  // build scenes


  ///////


  var tweenTitle = TweenMax.to("#animateTitle", 1, { className: "+=titleChanged" });

  // build scene
  new ScrollMagic.Scene({ triggerElement: "#triggerTitle", duration: 50, offset: 80 })
      .setTween(tweenTitle)
      .addTo(controller);

  // build tween
  var tweenConnect = TweenMax.to("#animateConnect", 1, { className: "+=flyIn" });

  // build scene
  new ScrollMagic.Scene({ triggerElement: "#triggerConnect", duration: 250, offset: 50 })
      .setTween(tweenConnect)
      .addTo(controller);

  // build tween
  var tweenBrowse = TweenMax.to("#animateBrowse", 1, { className: "+=flyIn" });

  // build scene
  new ScrollMagic.Scene({ triggerElement: "#triggerBrowse", duration: 250, offset: 100 })
      .setTween(tweenBrowse)
      .addTo(controller);


  // build tween
  var tweenPlay = TweenMax.to("#animatePlay", 1, { className: "+=flyIn" });

  // build scene
  new ScrollMagic.Scene({ triggerElement: "#triggerPlay", duration: 250, offset: -50 })
      .setTween(tweenPlay)
      .addTo(controller);



  /////////



  var tweenStagger = TweenMax.staggerFromTo(".animateBenefits", 2, { left: 1700 }, { left: 0, color: "white", ease: Back.easeOut }, 0.15);

  // build scene
  new ScrollMagic.Scene({ triggerElement: "#TriggerBenefits", duration: 500, offset: 50 })
      .setTween(tweenStagger)
      .addTo(controller);



  var tweenStagger = TweenMax.staggerFromTo(".animateBenefitsTitle", 2, { left: 1700 }, { left: 0, color: "white", ease: Back.easeOut }, 0.15);

  // build scene
  new ScrollMagic.Scene({ triggerElement: "#TriggerBenefits", duration: 500, offset: 50 })
      .setTween(tweenStagger)
      .addTo(controller);


////

  var tweenEnd = TweenMax.staggerFromTo(".fullscreen-bg", 2, { opacity: 1 }, { opacity: 0, ease: Back.easeOut }, 0.15);

  new ScrollMagic.Scene({ triggerElement: "#sec4", duration:400, offset:50 })
       .setTween(tweenEnd)
      .addTo(controller);



 var tweenGoodbye = TweenMax.staggerFromTo(".goodbye", 2, { opacity: 0 }, { opacity: 1, ease: Back.easeOut }, 0.15);

  new ScrollMagic.Scene({ triggerElement: "#sec4", duration:400, offset:50 })
       .setTween(tweenGoodbye)
      .addTo(controller);

 var tweenActive = TweenMax.staggerFromTo(".activeColor", 2, { opacity: 1 }, { opacity:0, ease: Back.easeOut }, 0.15);

  new ScrollMagic.Scene({ triggerElement: "#sec4", duration:100, offset:50 })
       .setTween(tweenActive)
      .addTo(controller);



