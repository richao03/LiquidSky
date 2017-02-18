  new ScrollMagic.Scene({ triggerElement: "#sec1", duration: 5200, offset: 120 })
      .setClassToggle("#high1", "active")
      .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: "#sec1half" })
      .setClassToggle("#high2", "active")
      .addTo(controller);

  new ScrollMagic.Scene({ triggerElement: "#sec2" })
      .setClassToggle("#high3", "active")
      .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: "#sec2half" })
      .setClassToggle("#high4", "active")
      .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: "#sec3" })
      .setClassToggle("#high5", "active")
      .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: "#sec3half" })
      .setClassToggle("#high6", "active")
      .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: "#sec4" })
      .setClassToggle("#high7", "neon")
      .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: "#sec4" })
      .setClassToggle("#high8", "neon")
      .addTo(controller);
  new ScrollMagic.Scene({ triggerElement: "#sec4" })
      .setClassToggle("#high9", "neon")
      .addTo(controller);
  // var elements = ['#high7','#high8','#high9'];



  // var setMultipleClasses = TweenMax.set(elements, {
  //     className: "neon"
  // });

  // // Create a ScrollMagic Scene
  // new ScrollMagic.Scene({
  //   reverse:false,
  //   triggerElement: "#sec4"
  // })
  // .setTween(setMultipleClasses)
  // .addTo(controller);
