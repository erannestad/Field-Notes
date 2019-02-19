          function myFunction(x) {x.classList.toggle("change");}
          
          function openNav() {
              var menu = document.getElementById("Menu");
              var shift = document.getElementsByClassName("columnMiddle")
          if (menu.style.width < "1") {
              menu.style.display = "block";
              menu.style.width = "50%";
//              shift.style.width = "0%";
          } else {
              menu.style.display = "none";
              menu.style.width = "0%";
//              shift.style.width = "100%";
              }
          }  