` use strict `;
//global variables
const sectionsArray = Array.from(document.querySelectorAll(`section`));
const navBar = document.getElementById(`navbar__list`);

// the main function

function createNavBarItems() {
  // targeting each section to implement dynamic characteristics
  for (section of sectionsArray) {
    //create list items
    navBarItem = document.createElement(`li`);

    //creatin a correspinding hyperlinked listitem for each section
    const navBarItemText = section.getAttribute(`data-nav`);
    const navBarItemlink = section.getAttribute(`id`);

    navBarItem.innerHTML = `<a class ="menu__link" id = "the-${navBarItemlink}" href ="#${navBarItemlink} "> ${navBarItemText}</a>`;

    // appending items as a list in the Nav bar
    navBar.appendChild(navBarItem);

    // observing the current section
    for (Sec of sectionsArray) {
      const callBackFunction = function (entries, observation) {
        entries.forEach(function (entry) {
          let item = document.querySelector(`#the-${entry.target.id}`);
          if (entry.isIntersecting) {
            //adding active states to the current viewed section same for the corresponding nav bar item
            entry.target.classList.add(`your-active-class`);

            item.classList.add("currentNavBarItem");
          } else {
            //removing active state if section not in the view
            entry.target.classList.remove(`your-active-class`);

            item.classList.remove("currentNavBarItem");
            /* the-${entry.target.id is the-section1 or2 or3 or4 according totthe current section intersecting the viewport, thats why we used entry.target which results in the current target to which the rule is applied , you can know abouttthis from the data returned bt console.log(entry)
        entry.target.id is the id oftthe current section in the viewport, we used this in place of using the hardcoded id value so the value changes accordingtto the current viewd section , if we used the-section1 as a text the rule applies only to the nave bar item that has the id the-section1 and that would be  the first one , s9 when ever y9u scroll only the first item will be hovered   */
          }
        });
      };
      // ..options
      const opservationOptions = {
        root: null,
        threshold: 0.65,
      };

      const observation = new IntersectionObserver(
        callBackFunction,
        opservationOptions
      );
      // ..target
      observation.observe(Sec);
    }
    // displaying go up button after 1200px from the document top
    const btnUp = document.querySelector(`#up`);
    window.onscroll = function () {
      if (window.scrollY >= 1200) {
        btnUp.style.display = "block";
      } else {
        btnUp.style.display = "none";
      }
    };
    // fanctioning the go up button
    btnUp.onclick = function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  }
}
//calling the function
createNavBarItems();
