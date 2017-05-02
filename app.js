document.addEventListener('DOMContentLoaded', function(){
  let tab ="";
  let compteur = 0;
  let body = document.getElementById('notegrp');
  function disableScroll(e){

	if (e.keyCode) {
		/^(32|33|34|35|36|38|40)$/.test(e.keyCode) && e.preventDefault();
	}else {
		e.preventDefault();
	}

}
  document.addEventListener("keydown", disableScroll, false);
  document.addEventListener('keydown', function(e){
      let touch = e.key;
    if (touch === "ArrowUp"){
            document.getElementById('upCircle').style.border = "2px solid white";
            document.getElementById('up').currentTime = 0;
            document.getElementById('up').play();
            let nobor = function (){document.getElementById('upCircle').style.border = ""};
            tab += "up";
            let upCircle = document.createElement('div');
            upCircle.classList.add('upCircle');
            let upnote = document.createElement('div');
            upnote.classList.add('upArrow');
            upCircle.appendChild(upnote);
            body.appendChild(upCircle);
            setTimeout(nobor, 700);

    }
    else if (touch === "ArrowDown"){
              document.getElementById('downCircle').style.border = "2px solid white";
              document.getElementById('down').currentTime = 0;
              document.getElementById('down').play();
              let nobor = function (){document.getElementById('downCircle').style.border = ""};
              tab += "down";
              let downCircle = document.createElement('div');
              downCircle.classList.add('downCircle');
              let downnote = document.createElement('div');
              downnote.classList.add('downArrow');
              downCircle.appendChild(downnote);
              body.appendChild(downCircle);
              setTimeout(nobor, 700);

        }
        else if (touch === "ArrowLeft"){
                document.getElementById('leftCircle').style.border = "2px solid white";
                document.getElementById('left').currentTime = 0;
                document.getElementById('left').play();
                let nobor = function (){document.getElementById('leftCircle').style.border = ""};
                tab += "left";
                let leftCircle = document.createElement('div');
                leftCircle.classList.add('leftCircle');
                let leftnote = document.createElement('div');
                leftnote.classList.add('leftArrow');
                leftCircle.appendChild(leftnote);
                body.appendChild(leftCircle);
                setTimeout(nobor, 700);
          }
          else if (touch === "ArrowRight"){
                  document.getElementById('rightCircle').style.border = "2px solid white";
                  document.getElementById('right').currentTime = 0;
                  document.getElementById('right').play();
                  let nobor = function (){document.getElementById('rightCircle').style.border = ""};
                  tab += "right";
                  let rightCircle = document.createElement('div');
                  rightCircle.classList.add('rightCircle');
                  let rightnote = document.createElement('div');
                  rightnote.classList.add('rightArrow');
                  rightCircle.appendChild(rightnote);
                  body.appendChild(rightCircle);
                  setTimeout(nobor, 700);
            }
            else if (touch === "a"){
                    document.getElementById('lettera').style.border = "2px solid white";
                    document.getElementById('slettera').currentTime = 0;
                    document.getElementById('slettera').play();
                    let nobor = function (){document.getElementById('lettera').style.border = ""};
                    tab += "a";
                    let leta = document.createElement('div');
                    leta.classList.add('lettera');
                    leta.innerText = "A";
                    body.appendChild(leta);
                    setTimeout(nobor, 700);
              }

            if (tab === "leftuprightleftupright"){
              document.getElementById('zelda').play();
              while (body.firstChild) {
    body.removeChild(body.firstChild);
}             compteur = 0;
              tab = "";
            }
            else if (tab === "upleftrightupleftright"){
              document.getElementById('epona').play();
              while (body.firstChild) {
    body.removeChild(body.firstChild);
}             compteur = 0;
              tab = "";
            }
            else if (tab === "downrightleftdownrightleft"){
              document.getElementById('saria').play();
              while (body.firstChild) {
    body.removeChild(body.firstChild);
}             compteur = 0;
              tab = "";
            }
            else if (tab === "rightdownuprightdownup"){
              document.getElementById('sun').play();
              while (body.firstChild) {
    body.removeChild(body.firstChild);
}             compteur = 0;
              tab = "";
            }
            else if (tab === "upleftrightupleftright"){
              document.getElementById('epona').play();
              while (body.firstChild) {
    body.removeChild(body.firstChild);
}             compteur = 0;
              tab = "";
            }
            else if (tab === "upleftrightupleftright"){
              document.getElementById('epona').play();
              while (body.firstChild) {
    body.removeChild(body.firstChild);
}             compteur = 0;
              tab = "";
            }
            else if (compteur === 7) {
              compteur = 0;
              while (body.firstChild) {
    body.removeChild(body.firstChild);
}
              tab="";
          }
          else if (tab === "rightadownrightadown"){
            document.getElementById('time').play();
            while (body.firstChild) {
  body.removeChild(body.firstChild);
}
            tab = "";
            compteur = 0;
          }
          else if (tab === "aupdownaupdown"){
            document.getElementById('storm').play();
            while (body.firstChild) {
  body.removeChild(body.firstChild);
}           compteur = 0;
            tab = "";
          }

            else {
              compteur++;
            }


  });
  var title = document.getElementsByClassName("img");
var toggle = function(){

  if (this.swit === 1) {
      this.childNodes[1].style.display = "none";
      this.swit=0;
  }
  else {
    this.swit = 1;
    this.childNodes[1].style.display = "block";
  }

}
for (var i = 0; i < title.length; i++) {
    title[i].addEventListener('click', toggle, false);
    title[i].swit = 0;
}


});
