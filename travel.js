
var placesToSee = [];
var tracker = {

  calcRandom: function() {
    return Math.floor(Math.random() * placesToSee.length);
  },

  calcSecondPlace: function(location1) {
    if(placesToSee.length === 0) {
      console.log('DO NOT CALL CALCSECONDPLACE WHEN PLACESTOSEE = 0, IT WILL LOOP FOREVER. IDIOT.');
      return -1;
    }
    do {
      var location2new = tracker.calcRandom();
    }
    while (location1 === location2new)
      return location2new;
  },

  displayVacationDestinations: function() {
    placeName1.innerHTML = placesToSee[location1].place;
    pic1.setAttribute('src', placesToSee[location1].path);
    placeName2.innerHTML = placesToSee[location2].place;
    pic2.setAttribute('src', placesToSee[location2].path);
  },

  vote: function (location) {
    placesToSee[location].votes++;
    barData.datasets[0].data[location]++;
    location1 = tracker.calcRandom();
    location2 = tracker.calcSecondPlace(location1);
    tracker.displayVacationDestinations();
    chart = new Chart(context).Bar(barData);

    localStorage.setItem('barData', JSON.stringify(barData));
  }
};


var barData = {
  labels: [],
  datasets: [
    {
      label:'Votes',
      fillColor:'#382765',
      data: []
    }
  ]
}

function checkLocal() {
  if (localStorage.barData && localStorage.placesToSee) {
    barData = JSON.parse(localStorage.getItem('barData'));
    placesToSee = JSON.parse(localStorage.getItem('placesToSee'));
    console.log('found and built data');
    chart = new Chart(context).Bar(barData);
  } else {
    barData = {
      labels:[],
      datasets: [
        {
          label:'Votes',
          fillColor:'#382765',
          strokeColor: '#AAAAAA',
          highlightFill: '#AAAAAA',
          highlightStroke: '#AAAAAA',
          data: []
        }
      ]
    }
    console.log('did NOT find data, built new data');
    //localStorage.setItem('barData', JSON.stringify(barData));

    new VacationDestination('Dubai', 'images/dubai.jpg');
    new VacationDestination('Angkor Wat', 'images/angkorwat.jpg');
    new VacationDestination('Arches National Park', 'images/arches.jpg');
    new VacationDestination('Big Ben', 'images/bigben.jpg');
    new VacationDestination('Central Park', 'images/centralpark.jpg');
    new VacationDestination('Roman Colosseum', 'images/colosseum.jpg');
    new VacationDestination('Eiffel Tower', 'images/eiffeltower.jpg');
    new VacationDestination('Mount Everest', 'images/everest.jpg');
    new VacationDestination('Great Barrier Reef', 'images/greatreef.jpg');
    new VacationDestination('Great Wall of China', 'images/greatwall.jpg');
    new VacationDestination('Mount Fuji', 'images/japanfuji.jpg');
    new VacationDestination('Machu Picchu', 'images/machupicchu.jpg');
    new VacationDestination('Petra', 'images/petra.jpg');
    new VacationDestination('Pyramids of Giza', 'images/pyramids.jpg');
    new VacationDestination('Christ the Redeemer', 'images/riochrist.jpg');
    new VacationDestination('Santorini', 'images/santorini.jpg');
    new VacationDestination('Segrada de Familia', 'images/segrada.jpg');
    new VacationDestination('Stonehenge', 'images/stonehenge.png');
    new VacationDestination('St. Petersburg', 'images/stpetersburg.jpg');
    new VacationDestination('Sydney Opera House', 'images/sydney.jpg');
    new VacationDestination('Taj Mahal', 'images/tajmahal.jpg');
    new VacationDestination('Yellowstone', 'images/yellowstone.jpg');
    new VacationDestination('Istanbul', 'images/istanbul.jpg');
    new VacationDestination('Bora Bora', 'images/borabora.jpg');

    localStorage.setItem('placesToSee', JSON.stringify(placesToSee));
  }
};
  var context = document.getElementById('tally').getContext('2d');
  var chart = new Chart(context).Bar(barData);

function VacationDestination (place, path) {
  this.place = place;
  this.path = path;
  this.votes = 0;
  barData.labels.push(place);
  barData.datasets[0].data.push(0);
  placesToSee.push(this);
}

checkLocal();

var location1 = tracker.calcRandom();
var location2 = tracker.calcSecondPlace(location1);

var pic1 = document.getElementById('location1photo');
var pic2 = document.getElementById('location2photo');

var VacationDestination1 = document.getElementById('location1');
var VacationDestination2 = document.getElementById('location2');

var placeName1 = document.getElementById('location1placeName');
var placeName2 = document.getElementById('location2placeName');

pic1.addEventListener('click', function() {
  tracker.vote(location1);
  });
pic2.addEventListener('click', function() {
  tracker.vote(location2);
  });



tracker.displayVacationDestinations();

