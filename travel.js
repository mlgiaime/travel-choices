var goingAway = [];
var trackIt = {

calcRandom: function () {
  return Math.floor(Math.random() * goingAway.length);
},

//makes sure that the page will return to the calcRandom function to grab the next
//photo... if pic1 === pic2 then go back and find another one!

calcNextPlace: function (location1) {
  do {
    var location2 = trackIt.calcRandom();
  }
  while (location1 === location2)
    return location2;
},
// console.log(calcNextPlace());

//allows the photos to be shown on the page to the user
displayAdventures: function () {
  var index1 = trackIt.calcRandom();
  var index2 = trackIt.calcNextPlace(index1);
  // var choice = document.getElementById('choice');
  head1.innerHTML = location1.place;
  pic1.setAttribute('src', goingAway[index1].path);

  head2.innerHTML = location2.place;
  pic2.setAttribute('src', goingAway[index2].path);
},

//tells the js function to remove the first image choice from the potential options
//to prevent having the same photo displayed together
vote: function (location) {
  console.log("this event happened");
  goingAway[location].votes++;
  // pic1.parentNode.removeChild(pic1);
  // pic2.parentNode.removeChild(pic2);
  trackIt.displayAdventures();
}
};

function Adventure (place, path) {
  this.place = place;
  this.path = path;
  this.votes = 0;
  goingAway.push(this);
}

new Adventure('Angkor Wat', 'images/angkorwat.jpg');
new Adventure('Arches National Park', 'images/arches.jpg');
new Adventure('Big Ben and Westminster Abbey', 'images/bigben.jpg');
new Adventure('Burj Khalifa', 'images/burjkhalifa');
new Adventure('Central Park', 'images/centralpark.jpg');
new Adventure('Roman Colosseum', 'images/colosseum.jpg');
new Adventure('Eiffel Tower', 'images/eiffeltower.jpg');
new Adventure('Mount Everest', 'images/everest.jpg');
new Adventure('Great Barrier Reef', 'images/greatreef.jpg');
new Adventure('Great Wall of China', 'images/greatwall.jpg');
new Adventure('Mount Fuji', 'images/japanfuji.jpg');
new Adventure('Machu Picchu', 'images/machupicchu.jpg');
new Adventure('Petra', 'images/petra.jpg');
new Adventure('Pyramids of Giza', 'images/pyramids.jpg');
new Adventure('Christ the Redeemer', 'images/riochrist.jpg');
new Adventure('Santorini', 'images/santorini.jpg');
new Adventure('Segrada de Familia', 'images/segrada.jpg');
new Adventure('Stonehenge', 'images/stonehenge.png');
new Adventure('St. Petersburg', 'images/stpetersburg.jpg');
new Adventure('Sydney Opera House', 'images/sydney.jpg');
new Adventure('Taj Mahal', 'images/tajmahal.jpg');
new Adventure('Yellowstone National Park', 'images/yellowstone.jpg');

var location1 = trackIt.calcRandom();
var location2 = trackIt.calcNextPlace(location1);

//sets up the js file to pull photos from the 'images' folder to display images
//on the page as well as adding in photo dimensions
var pic1 = document.getElementById('location1photo');
var pic2 = document.getElementById('location2photo');
var adventure1 = document.getElementById('location1');
var adventure2 = document.getElementById('location2');

// pic1.setAttribute('id', 'location1photo');
// pic2.setAttribute('id', 'location2photo');

// pic1.setAttribute('src', goingAway[location1].path);
// pic2.setAttribute('src', goingAway[location2].path);

// pic1.setAttribute('width', '500');
// pic2.setAttribute('width', '500');

// trackIt.appendChild(pic1);
// trackIt.choice.appendChild(pic2);

var head1 = document.getElementById('location1header');
var head2 = document.getElementById('location2header');


//event listener adds in the click result for each question
pic1.addEventListener('click', function() {
  trackIt.vote(location1);
  });
pic2.addEventListener('click', function() {
  trackIt.vote(location2);
  });

trackIt.displayAdventures();
