///// Landing page project
// description- a multi-sectioned page which consists of number of sections wtih coressponding number of linked list items to facilitate the transition to sections
//aim - implementing the DOM ,js codes to convert the project from a static to an interactive one .

//notes on my steps

///////// Steps illustration
-creating the golbal variables to store the most targeted elements in
-creatin the function that contains all the other functions and loops

// requirement no.1
creating a dynamic list items in a navbar hyperlinked with the corresponding sections

- creating the list elements in order to subsqently attach the linked list items to the corresponding section of each one .
  -creating the anchor element to later be appended to the list items inside the unordered list
  -appenidng list items to the parent ul item .

// requirement no.2
osberving the current section being viewed .

- deciding when the section is inside the viewport
- Appling a background overlay for sections when in the viewport
- applying the active state to the coresponding list item.
- removing the active states from both the sectoin and the list item if its not active .

// requirement no.3

making the scrolling more smooth
using the Css property scroll-behavior : smooth ;
*****
to activathe the smooth scrolling in your browser if it is not alredy working, jsut follow the three simple steps in the coming url,
https://www.tenforums.com/tutorials/112915-enable-disable-smooth-scrolling-google-chrome.html

EXTRA SPICES

- adding some more css styling like the gradient color at the top of every section overlay background using your-active-class class , also the border around it ,
  adding some hovering effects for the paragraphs and main headings .
- inserting a go-up button to easly transit the user to the top of the page

// Extra notes
// it was important for me to make sure the unnecessary white spaces are removed, specially trailing whitspaces .


