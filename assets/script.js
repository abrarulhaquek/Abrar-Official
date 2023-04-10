// nav togg
let clicks = document.getElementById("link").addEventListener(onclick, function () {
  // document.getElementById("navbarSupportedContent").style.display = "none";
  if (clicks == TRUE) {
    console.log("sssss")
  }
})


/////////////////////////////////////////B L U E  T H E M E ////////////////////////////////////////////
function BlueTheme() {
  // body bg
  let body = (document.getElementById("Body").style.backgroundColor = "white");
  // body font
  document.getElementById("Body").style.color = "#17181c";
  document.getElementById("mui").style.filter = "invert(0)"
  document.getElementById("jq").style.filter = "invert(0)"
  document.getElementById("nextjs").style.filter = "invert(0)"

  // nav
  const a = document.querySelectorAll(".nav-link");
  for (let i = 0; i < a.length; i++) {
    a[i].style.color = "#17181c";
    a[i].addEventListener("mouseenter", function () {
      a[i].style.borderBottom = "2px solid #0d79ec";
    });
    a[i].addEventListener("mouseleave", function () {
      a[i].style.borderBottom = "";
    });
  }

  // profile
  let bluepro = document.getElementById("profile");
  bluepro.classList.add("BlueLogo");
  bluepro.classList.remove("RedLogo");
  bluepro.classList.remove("PurpleLogo");

  // header section
  document.getElementById("hero").style.background =
    "linear-gradient(246deg, #ffdef2, #e6f0ff)";

  // svgimgs
  document.getElementById("SvgPicBlue").style.display = "block";
  document.getElementById("SvgPicRed").style.display = "none";

  // Topics
  let topics = document.querySelectorAll(".topic , .topics");
  for (let i = 0; i < topics.length; i++) {
    topics[i].style.borderBottom = "2px solid #0d79ec";
  }

  // Borders
  let btns = document.querySelectorAll(".btn , .skills_logo");
  for (let i = 0; i < btns.length; i++) {
    btns[i].style.border = "2px solid #0d79ec";
  }

  // contaact
  document.getElementById("contact").style.backgroundColor = "#e0e8ff";
  document.getElementById("contact").style.borderTop = "2px solid #0d79ec";
  document.getElementById("gmail").style.color = "#17181c";

  // socail media
  let sm = document.querySelectorAll(".fab, .fas");
  for (let i = 0; i < sm.length; i++) {
    sm[i].style.color = "#17181c";
  }

  // Buttons
  let btn = document.querySelectorAll("button");
  for (let i = 0; i < btn.length; i++) {
    btn[i].style.color = "#17181c";
    btn[i].addEventListener("mouseover", function () {
      btn[i].style.boxShadow = "0px 1px 19px 2px #88a0e5";
    });
    btn[i].addEventListener("mouseleave", function () {
      btn[i].style.boxShadow = "";
    });
  }

  // mediaquery
  let mediaqlow = window.matchMedia("(max-width: 549px)");
  myFunction(mediaqlow);
  mediaqlow.addListener(myFunction);
  function myFunction(x) {
    if (x.matches) {
      document.getElementById("SvgPicBlue").style.display = "none";
    } else {
      document.getElementById("SvgPicRed").style.display = "none";
      document.getElementById("SvgPicBlue").style.display = "block";
    }
  }
}
////////////////////////////////////  R E D T H E M E   /////////////////////////////////////////////////////
function RedTheme() {
  let togg = document.getElementsByClassName("navbar-toggler-icon");
  // for (let i = 0; i < togg.length; i++) {
  //   togg[i].style.backgroundImage = "url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,102,203, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");

  // }

  // sxrollbat
  // document.body.style.scrollbarArrowColor = "#fb4653";
  // document.body.style.scrollbarTrackColor = "#17181c";
  document.getElementById("Body").style.scrollbar;
  document.getElementById("mui").style.filter = "invert(1)"
  document.getElementById("jq").style.filter = "invert(1)"
  document.getElementById("nextjs").style.filter = "invert(1)"
  // body bg
  let body = (document.getElementById("Body").style.backgroundColor =
    "#17181c");

  // body font
  document.getElementById("Body").style.color = "white";

  // nav
  const a = document.querySelectorAll(".nav-link");
  for (let i = 0; i < a.length; i++) {
    a[i].style.color = "white";
    a[i].addEventListener("mouseenter", function () {
      a[i].style.borderBottom = "2px solid #fb4653";
    });
    a[i].addEventListener("mouseleave", function () {
      a[i].style.borderBottom = "";
    });
  }

  // profile
  var redpro = document.getElementById("profile");
  redpro.classList.add("RedLogo");
  redpro.classList.remove("BlueLogo");
  redpro.classList.remove("PurpleLogo");

  // header section
  document.getElementById("hero").style.background =
    "linear-gradient(to bottom right, #333333 , #121212)";

  // svgimgs
  document.getElementById("SvgPicBlue").style.display = "none";
  document.getElementById("SvgPicRed").style.display = "block";

  // Topics
  let topics = document.querySelectorAll(".topic , .topics");
  for (let i = 0; i < topics.length; i++) {
    topics[i].style.borderBottom = "2px solid #fb4653";
  }

  // Borders
  let btns = document.querySelectorAll(".btn , .skills_logo");
  for (let i = 0; i < btns.length; i++) {
    btns[i].style.border = "2px solid #fb4653";
  }

  // contaact
  document.getElementById("contact").style.backgroundColor = "#17181c";
  document.getElementById("contact").style.borderTop = "2px solid #fb4653";
  document.getElementById("gmail").style.color = "white";

  // socail media
  let sm = document.querySelectorAll(".fab, .fas");
  for (let i = 0; i < sm.length; i++) {
    sm[i].style.color = "#fb4653";
  }

  // Buttons
  let btn = document.querySelectorAll("button");
  for (let i = 0; i < btn.length; i++) {
    btn[i].style.color = "white";

    btn[i].addEventListener("mouseover", function () {
      btn[i].style.boxShadow = "0px 1px 19px 2px #fb4653";
    });
    btn[i].addEventListener("mouseleave", function () {
      btn[i].style.boxShadow = "";
    });
  }

  // mediaquery
  let mediaqlow = window.matchMedia("(max-width: 549px)");
  myFunction(mediaqlow);
  mediaqlow.addListener(myFunction);
  function myFunction(x) {
    if (x.matches) {
      document.getElementById("SvgPicRed").style.display = "none";
    } else {
      console.log("nots");
      document.getElementById("SvgPicBlue").style.display = "none";
      document.getElementById("SvgPicRed").style.display = "block";

    }
  }
}

//////////////////////////////////// P U R P L E  T H E M E///////////////////////////////////////////////////////////////
// function PurpleTheme() {`
  //   // body bg
  //   let body = (document.getElementById("Body").style.backgroundColor = "white");
  //   // body font
  //   document.getElementById("Body").style.color = "#17181c";

  //   // nav
  //   const a = document.querySelectorAll(".nav-link");
  //   for (let i = 0; i < a.length; i++) {
  //     a[i].style.color = "#17181c";
  //     a[i].addEventListener("mouseenter",function() {
  //       a[i].style.borderBottom = "2px solid #0d79ec";
  //     })
  //     a[i].addEventListener("mouseleave",function() {
  //       a[i].style.borderBottom = "";
  //     })
  //   }

  //   // profile
  // let purpro = document.getElementById("profile");
  // purpro.classList.add("PurpleLogo");
  // purpro.classList.remove("RedLogo");
  // purpro.classList.remove("BlueLogo");

  //   // header section
  //   document.getElementById("hero").style.background =
  //     "linear-gradient(246deg, #ffdef2, #e6f0ff)";

  //   // svgimgs
  //   document.getElementById("SvgPicBlue").style.display = "block";
  //   document.getElementById("SvgPicRed").style.display = "none";

  //   // Topics
  //   let topics = document.querySelectorAll(".topic , .topics");
  //   for (let i = 0; i < topics.length; i++) {
  //     topics[i].style.borderBottom = "2px solid #0d79ec";
  //   }

  //   // Borders
  //   let btns = document.querySelectorAll(".btn , .skills_logo");
  //   for (let i = 0; i < btns.length; i++) {
  //     btns[i].style.border = "2px solid #0d79ec";
  //   }

  //   // contaact
  //   document.getElementById("contact").style.backgroundColor = "#e0e8ff";
  //   document.getElementById("gmail").style.color = "#17181c";

  //   // socail media
  //   let sm = document.querySelectorAll(".fab, .fas");
  //   for (let i = 0; i < sm.length; i++) {
  //     sm[i].style.color = "#17181c";
  //   }

  //   // Buttons
  //   let btn = document.querySelectorAll("button");
  //   for (let i = 0; i < btn.length; i++) {
  //     btn[i].style.color = "#17181c";
  //     btn[i].addEventListener("mouseover", function() {
  //       btn[i].style.boxShadow = "0px 1px 19px 2px #88a0e5";
  //     })
  //     btn[i].addEventListener("mouseleave", function() {
  //       btn[i].style.boxShadow = "";
  //     })
  //   }
// }
