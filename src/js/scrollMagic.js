  // init controller for magic
  let controller = new ScrollMagic.Controller();




  /////// first 3 fly in elements


  let tweenTitle = TweenMax.to("#animateTitle", 1, { className: "+=titleChanged" });

  new ScrollMagic.Scene({ triggerElement: "#triggerTitle", duration: 50, offset: 80 })
      .setTween(tweenTitle)
      .addTo(controller);

  let tweenConnect = TweenMax.to("#animateConnect", 1, { className: "+=flyIn" });

  new ScrollMagic.Scene({ triggerElement: "#triggerConnect", duration: 250, offset: 50 })
      .setTween(tweenConnect)
      .addTo(controller);

  let tweenBrowse = TweenMax.to("#animateBrowse", 1, { className: "+=flyIn" });

  new ScrollMagic.Scene({ triggerElement: "#triggerBrowse", duration: 250, offset: 100 })
      .setTween(tweenBrowse)
      .addTo(controller);



  let tweenPlay = TweenMax.to("#animatePlay", 1, { className: "+=flyIn" });

  new ScrollMagic.Scene({ triggerElement: "#triggerPlay", duration: 250, offset: -50 })
      .setTween(tweenPlay)
      .addTo(controller);



  /////////BENIFITS



  let tweenStagger = TweenMax.staggerFromTo(".animateBenefits", 2, { left: 1700 }, { left: 0, color: "white", ease: Back.easeOut }, 0.15);

 
  new ScrollMagic.Scene({ triggerElement: "#TriggerBenefits", duration: 500, offset: 50 })
      .setTween(tweenStagger)
      .addTo(controller);



  let tweenStagger1 = TweenMax.staggerFromTo(".animateBenefitsTitle", 2, { left: 1700 }, { left: 0, color: "white", ease: Back.easeOut }, 0.15);


  new ScrollMagic.Scene({ triggerElement: "#TriggerBenefits", duration: 500, offset: 50 })
      .setTween(tweenStagger1)
      .addTo(controller);


////SECTION 4

  let tweenEnd = TweenMax.staggerFromTo(".fullscreen-bg", 2, { opacity: 1 }, { opacity: 0, ease: Back.easeOut }, 0.15);

  new ScrollMagic.Scene({ triggerElement: "#sec4", duration:700, offset:-150 })
       .setTween(tweenEnd)
      .addTo(controller);



 let tweenGoodbye = TweenMax.staggerFromTo(".goodbye", 2, { opacity: 0 }, { opacity: 1, ease: Back.easeOut }, 0.15);

  new ScrollMagic.Scene({ triggerElement: "#sec4", duration:700, offset:-150 })
       .setTween(tweenGoodbye)
      .addTo(controller);

 let tweenActive = TweenMax.staggerFromTo(".active", 2, { opacity: 1 }, { opacity:0, ease: Back.easeOut }, 0.15);

  new ScrollMagic.Scene({ triggerElement: "#sec4", duration:100, offset:50 })
       .setTween(tweenActive)
      .addTo(controller);



