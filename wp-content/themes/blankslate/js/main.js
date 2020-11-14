import Node from './Node.js';
import Cursor from './Cursor.js';

var nodeArray = []
var swiperArray = []
var x = 0, y = 0;

const socket = io('http://192.168.8.105:3000');

socket.on("startHandShake", data => {
  console.log("c'est pas très covid ça")
  socket.emit("HandShakeAnswered", "SkillTreeWebApp:display")
})

var canvas = document.getElementById("_testMap");
var cursor = document.getElementById("_cursor");
var nodes = document.querySelectorAll(".node");

const CURSOR = new Cursor(0, 0, 50, cursor)

// Init node objects
nodes.forEach((node, idx) => {

  node.classList.add('hidden');

  // Get node's circle position
  var position = node.querySelector('.circle').getBoundingClientRect();

  const newNode = new Node(position.top, position.left, 66, node)

  newNode.setTitle()
  nodeArray.push(newNode)

  const circle = node.querySelector('.circle');

  circle.addEventListener('click', (e) => {
    let id = circle.id;
    document.querySelector(`#${id}Details`).classList.add('open')
  })

  swiperHandler(newNode.id, idx)
});

swiperArray[1].on('reachEnd', function () {
  console.log('end');
})

swiperArray[3].on('reachEnd', function () {
  console.log('motor');
  socket.emit("launchActivity", "MotorActivity")
})

swiperArray[4].on('reachEnd', function () {
  console.log('accord');
  jQuery('.starter_end').removeClass('starter_end')
})

swiperArray[10].on('reachEnd', function () {
  console.log('alt');
  socket.emit("launchActivity", "AlternativeGeneratorActivity")
  // document.querySelector('#tutoACimg').setAttribute('src', 'http://la-lumire-oublie.local/img/Exp-moteur-machine-loop.gif');
  acGenerator()
})

swiperArray[12].on('reachEnd', function () {
  console.log('cont');
  socket.emit("launchActivity", "ContinuousGeneratorActivity")
  // document.querySelector('#tutoDCimg').setAttribute('src', 'http://la-lumire-oublie.local/img/Exp-moteur-machine-loop.gif');
  dcGenerator()
})

document.addEventListener('DOMContentLoaded', function () {

  // Debug
  // document.addEventListener('mousemove', function (event) {
  //   x = event.pageX
  //   y = event.pageY
  //   if (!CURSOR.isOpen) {
  //     CURSOR.moveCursor(x, y)
  //     CURSOR.collisionHandler(nodeArray)
  //   }
  // })

  socket.on("sendJoystickDatas", dataString => {
    let data = dataString.split(":")
    let inventor = data[0]

    if (inventor = !CURSOR.inventor) {
      CURSOR.inventor = data[0]
      changeColor(inventor)
    }

    x += parseFloat(data[1]) * 10
    y -= parseFloat(data[2]) * 10

    if (!CURSOR.isOpen) {
      CURSOR.moveCursor(x, y)
      CURSOR.collisionHandler(nodeArray)
    }
  })

  function unlockInventor(inventor) {
    nodeArray.forEach(node => {
      if (node.inventor == inventor) {
        node.selectByInventor(inventor)
      }
    });
  }

  socket.on("unlockInventor", data => {
    switch (data) {
      case 'Edison':
        unlockInventor("Edison")
        jQuery('#starter_tesla').removeClass('hidden')
        jQuery('#starter_westinghouse').removeClass('hidden')
        break;
      case 'Tesla':
        unlockInventor("Tesla")
        break;
      case 'Westinghouse':
        unlockInventor("Westinghouse")
        break;
    }
  })

  debugButtons();
})

function swiperHandler(id, idx) {

  var newSwiper = new Swiper(`#${id}Details`, {
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'progressbar',
    },
  });

  swiperArray.push(newSwiper)

  // if ((swiperArray[1] != undefined) && endEnd) {
  //   console.log('end');
  //   swiperArray[1].on('reachEnd', function () {
  //     console.log('end');
  //   })
  //   endEnd = false
  //   endMotor = true

  // } else if ((swiperArray[3] != undefined) && endMotor) {
  //   console.log('motor');
  //   swiperArray[3].on('reachEnd', function () {
  //     console.log('motor');
  //   })
  //   endMotor = false
  //   endAccord = true

  // } else if ((swiperArray[4] != undefined) && endAccord) {
  //   console.log('accord');
  //   swiperArray[4].on('reachEnd', function () {
  //     console.log('accord');
  //   })
  //   endAccord = false
  //   endAlternatif = true

  // } else if ((swiperArray[10] != undefined) && endAlternatif) {
  //   console.log('alt');
  //   swiperArray[10].on('reachEnd', function () {
  //     console.log('alt');
  //   })
  //   endAlternatif = false
  //   endContinu = true
  // } else if ((swiperArray[12] != undefined) && endContinu) {
  //   console.log('cont');
  //   swiperArray[12].on('reachEnd', function () {
  //     console.log('cont');
  //   })

  //   endContinu = false

  // }

  document.querySelector('#button1').addEventListener('click', () => {
    swiperArray[idx].slideNext(300, false);
    console.log("ok");
  })
  document.querySelector('#button2').addEventListener('click', () => {
    swiperArray[idx].slidePrev(300, false);
    console.log("ok");
  })
  document.querySelector('#button3').addEventListener('click', () => {
    document.querySelectorAll(`.swiper-container`).forEach(element => {
      element.classList.remove('open')
    });
    CURSOR.isOpen = false
  })
}

function debugButtons() {
  document.querySelector('#button4').addEventListener('click', () => {
    unlockInventor("Edison")
    jQuery('#starter_tesla').removeClass('hidden')
    jQuery('#starter_westinghouse').removeClass('hidden')
  })
  document.querySelector('#button5').addEventListener('click', () => {
    unlockInventor("Westinghouse")
  })
  document.querySelector('#button6').addEventListener('click', () => {
    unlockInventor("Tesla")
  })
  document.querySelector('#button7').addEventListener('click', () => {
    socket.emit("launchActivity", "ContinuousGeneratorActivity")
    dcGenerator()
  })
  document.querySelector('#button8').addEventListener('click', () => {
    socket.emit("DCgeneratorActivityCompleted", "")
  })
  document.querySelector('#button9').addEventListener('click', () => {
    socket.emit("launchActivity", "AlternativeGeneratorActivity")
    acGenerator()
  })
  document.querySelector('#button10').addEventListener('click', () => {
    socket.emit("ACgeneratorActivityCompleted", "")
  })
  document.querySelector('#button11').addEventListener('click', () => {
    socket.emit("launchActivity", "MotorActivity")
  })
  document.querySelector('#button12').addEventListener('click', () => {
    jQuery('.starter_end').removeClass('starter_end')
  })
}

console.log((nodeArray.map(a => a.id)))
console.log([(nodeArray.map(a => a.inventor)), (nodeArray.map(a => a.isActive))])

gsap.registerPlugin(MotionPathPlugin);

function dcGenerator() {

  var speed = 5
  var totalProgression = 0;
  var progression = 0;

  var progressBar = document.getElementById('_progressBarContinu');

  let magnet = gsap.to("#_magnetsContinu", {
    duration: 0,
    rotation: 360,
    repeat: -1,
    transformOrigin: '50% 50%',
    yoyo: false,
    ease: "power0",
    // timeScale: 0.2
  });

  let dot = gsap.to("#_dotContinu", {
    duration: 0,
    repeat: -1,
    yoyo: false,
    ease: "power0",
    // timeScale: 0.2,

    motionPath: {
      path: "#_line",
      align: "#_line",
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }
  });

  setTimeout(() => {
    dot.duration(2)
    magnet.duration(2)
    jQuery('#bulbContinu').addClass('active')
  }, 5000);

  setTimeout(() => {
    jQuery('.swiper-container').removeClass('open')
    CURSOR.moveCursor(50, 50)
    CURSOR.isOpen = false
  }, 10000);

  // socket.on("sendContinuousData", data => {

  //   if (speed > 0) {
  //     console.log(data);

  //     speed--

  //     dot.duration(speed)
  //     magnet.duration(speed)

  //     progression = data * data * 10;
  //     totalProgression += progression;
  //     progressBar.style.width = totalProgression + "px";

  //   } else {
  //     jQuery('.swiper-container').removeClass('open')
  //     socket.emit("DCgeneratorActivityCompleted", "")
  //   }
  // })

  // document.querySelector('#debugPlus').addEventListener('click', () => {
  //   speed--

  //   progression = 50;
  //   totalProgression += progression;
  //   progressBar.style.width = totalProgression + "px";

  //   // magnet.timeScale(1)
  //   // dot.timeScale(1)
  //   dot.duration(speed)
  //   magnet.duration(speed)
  // })
}

function acGenerator() {

  var speed = 5
  var totalProgression = 0;
  var progression = 0;

  var progressBar = document.getElementById('_progressBar');

  let magnet = gsap.to("#_magnets", {
    duration: 0,
    rotation: 360,
    repeat: -1,
    transformOrigin: '50% 50%',
    yoyo: false,
    ease: "power0",
    // timeScale: 0.2
  });

  let dot = gsap.to("#_dot", {
    duration: 0,
    repeat: -1,
    yoyo: false,
    ease: "power0",
    // timeScale: 0.2,

    motionPath: {
      path: "#_sin",
      align: "#_sin",
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }
  });

  setTimeout(() => {
    dot.duration(2)
    magnet.duration(2)
    jQuery('#bulbAlternatif').addClass('active')
  }, 5000);

  setTimeout(() => {
    jQuery('.swiper-container').removeClass('open')
    CURSOR.moveCursor(50, 50)
    CURSOR.isOpen = false
  }, 10000);

  // socket.on("sendAlternativeData", data => {

  //   if (speed > 0) {
  //     console.log(data);

  //     speed--

  //     dot.duration(speed)
  //     magnet.duration(speed)

  //     progression = data * data * 10;
  //     totalProgression += progression;
  //     progressBar.style.width = totalProgression + "px";

  //   } else {
  //     jQuery('.swiper-container').removeClass('open')
  //     socket.emit("ACgeneratorActivityCompleted", "")
  //   }
  // })

  // document.querySelector('#debugPlus').addEventListener('click', () => {
  //   speed--

  //   progression = 50;
  //   totalProgression += progression;
  //   progressBar.style.width = totalProgression + "px";

  //   // magnet.timeScale(1)
  //   // dot.timeScale(1)
  //   dot.duration(speed)
  //   magnet.duration(speed)
  // })
}



  // if ((swiperArray[1] != undefined) && endEnd) {
  //   swiperArray[1].on('reachEnd', function () {
  //     console.log('end');
  //   })
  //   endEnd = false
  //   endMotor = true

  // } else if ((swiperArray[3] != undefined) && endMotor) {

  //   swiperArray[3].on('reachEnd', function () {
  //     console.log('end');
  //   })
  //   endMotor = false
  //   endAccord = true

  // } else if ((swiperArray[4] != undefined) && endAccord) {
  //   swiperArray[4].on('reachEnd', function () {
  //     console.log('end');
  //   })
  //   endAccord = false
  //   endAlternatif = true

  // } else if ((swiperArray[10] != undefined) && endAlternatif) {
  //   swiperArray[10].on('reachEnd', function () {
  //     console.log('end');
  //   })
  //   endAlternatif = false
  //   endContinu = true
  // } 

  // if ((swiperArray[12] != undefined) && endContinu) {

  //   swiperArray[12].on('reachEnd', function () {
  //     console.log('end');
  //   })

  //   endContinu = false

  // }