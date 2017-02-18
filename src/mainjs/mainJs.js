///scramble helper
class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
  }
  setText(newText) {
    const oldText = this.el.innerText
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 80)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    let finished = 0 
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.58) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

////actual function

const phrases = [
  'Welcome to the Future of Gaming',
  'Where every computer can run every game',
  'Welcome to LiquidSky'

]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0

let finished = 0 
const next = () => {

if(finished <=phrases.length-1){
  finished++
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 1800)
  })
  counter = (counter + 1) % phrases.length
}
}

next()



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

 /////////Data Center List


 new ScrollMagic.Scene({ triggerElement: "#sec3" })
      .setClassToggle(".activeList", "activeListReveal")
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

 let tweenActive = TweenMax.staggerFromTo(".activeList", 2, { opacity: 1 }, { opacity:0, ease: Back.easeOut }, 0.15);

  new ScrollMagic.Scene({ triggerElement: "#sec4", duration:100, offset:50 })
       .setTween(tweenActive)
      .addTo(controller);




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

//makes stars scroll at different speed
$.fn.moveIt = function(){
  let $window = $(window);
  let instances = [];
  
  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });
  
  window.onscroll = function(){
    let scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }
}

let moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  let pos = scrollTop / this.speed;
  this.el.css('transform', 'translateY(' + -pos + 'px)');
};

// Initialization
$(function(){
  $('[data-scroll-speed]').moveIt();
});


