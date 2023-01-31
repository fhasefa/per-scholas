let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
document.querySelector('#main-title').textContent = 'Domaine Doms';

  // Part 2
document.querySelector('body').style.backgroundColor = '#32514C';

  // Part 3
  document.querySelector(".side-bar").querySelector('#favorite-things').lastElementChild.remove();

  // Part 4
  document.querySelectorAll(".special-title").forEach(x => {
    x.style.fontSize = '2rem'
  });

  // Part 5
document.querySelectorAll(".side-bar")[1].children[1].children[3].remove();

  // Part 6
document.querySelectorAll(".side-bar")[1].children[1].appendChild(document.createElement('li')).innerText = 'Boston'

  // Part 7
let blogEl = document.querySelector('.main');
let newBlog = blogEl.appendChild(document.createElement('div'));
newBlog.classList.add("blog-post", "purple")
let hTwo = newBlog.appendChild(document.createElement('h1'));
hTwo.innerText = 'Boston';
let newBlogP = newBlog.appendChild(document.createElement('p'));
newBlogP.innerText = 'Saw the Celtics play at the Garden!'

  // Part 8
document.querySelector('#quote-title').addEventListener('click', function(event) {
  randomQuote();
})

  // Part 9
document.querySelectorAll('.blog-post').forEach(x => {
   x.addEventListener('mouseout', function(event) {
    if(event.target.tagName == 'DIV') {event.target.classList.toggle('purple');
    event.target.classList.toggle('red');}
    console.log(event.target);
    })
 
   x.addEventListener('mouseenter', function(event) {
    if(event.target.tagName == 'DIV') {event.target.classList.toggle('red');
    event.target.classList.toggle('purple');}
    console.dir(event.target)
    })
  });


});
