var trackIt = {


//randomizes the order of photos

calcRandom = function() {
  return Math.floor(Math.random() * goingAway.length);
}

//makes sure that the page will return to the calcRandom function to grab the next
//photo... if pic1 === pic2 then go back and find another one!
calcNextPlace = function(location1){
  do {
    var location2 = calcRandom();
  }
  while (location1 === location2)
    return location2;
}

//allows the photos to be shown on the page to the user
displayAdventures = function() {
  var location1 = calcRandom();
  var location2 = calcNextPlace(location1);
  var choice = document.getElementById(choice);
}

//tells the js function to remove the first image choice from the potential options
//to prevent having the same photo displayed together
vote = function(location) {
  goingAway[location].votes++;
  pic1.parentNode.removeChild(pic1);
  pic2.parentNode.removeChild(pic2);
  displayAdventures();
}

function Adventure (place, path) {
  this.place = place;
  this.path = path;
  this.votes = 0;
  goingAway.push(this);
}

//sets up the js file to pull photos from the 'images' folder to display images
//on the page as well as adding in photo dimensions
pic1 = document.getElementById('img');
pic2 = document.getElementById('img');

pic1.setAttribute('id', 'image1');
pic2.setAttribute('id', 'image2')

pic1.setAttribute('src', goingAway[location1].path);
pic2.setAttribute('src', goingAway[location2].path);

pic1.setAttribute('width', '500');
pic2.setAttribute('width', '500')

choice.appendChild(pic1);
choice.appendChild(pic2);


//event listener adds in the click result for each question
pic1.addedEventListener('click', function() {
  vote(location1);
  });
pic2.addedEventListener('click', function() {
  vote(location2);
  });

//all objects for page
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





