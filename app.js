var isSwitched = false;

  function switch1() {
    if (isSwitched) {
      document.getElementById("ellipse1").style.background = "linear-gradient(75.49deg, #FC563A 15.31%, #FFE145 88%)";
      document.getElementById("circle").style.background = "linear-gradient(48.07deg, #FF3333 10.71%, rgba(255, 223, 57, 0.76) 79.03%)";
      document.getElementById("cut_circle").style.transform = "scale(0)";
      document.getElementById("cut_circle").style.transition = "transform 0.1s cubic-bezier(0.645, 0.045, 0.355, 1)";
      document.getElementById("app").style.background = "white";
      document.getElementById("bar1").style.display = "none";
      document.getElementById("bar2").style.display = "block";
      document.getElementById("text").style.color = "black";
      document.getElementById("text1").style.color = "black";
      document.getElementById("back").style.background = "white";
      document.getElementById("toggle").style.transform = "translateX(-4%)";
      document.getElementById("toggle").style.background = "white";
      document.getElementById("dark").style.color = "#747474";
      document.getElementById("light").style.color = "#363636";
      document.getElementById("circle1").style.background = "white";
      document.getElementById("skip").style.color = "black";




    } else {
      document.getElementById("ellipse1").style.background = "linear-gradient(72deg, #6732FE 0%, #F043EE 100%)";
      document.getElementById("circle").style.background = "linear-gradient(72deg, #6732FE 0%, #F043EE 100%)";
      document.getElementById("cut_circle").style.transform = "scale(1)";
      document.getElementById("cut_circle").style.transition = "transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1)";
      document.getElementById("cut_circle").style.display = "block";
      document.getElementById("app").style.background = "#383838";
      document.getElementById("bar1").style.display = "block";
      document.getElementById("bar2").style.display = "none";
      document.getElementById("text").style.color = "white";
      document.getElementById("text1").style.color = "white";
      document.getElementById("back").style.background = "#383838";
      document.getElementById("toggle").style.transform = "translateX(84%)";
      document.getElementById("toggle").style.background = "#555252";
      document.getElementById("dark").style.color = "#BDBDBD";
      document.getElementById("light").style.color = "#363636";
      document.getElementById("skip").style.color = "#D3D3D3";
      document.getElementById("circle1").style.background = "#4D4D4D";
      document.getElementById("label").style.background = "#C4C4C4";
    }
  

    isSwitched = !isSwitched;
  }