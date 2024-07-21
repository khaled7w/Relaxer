const action = document.getElementById('current-action');

//Array of all Actions
const actions = ['Breathe in!', 'Hold', 'Breathe out!'];
let currentIndex = 0;

//Make action initiale Breathe in
action.textContent = actions[currentIndex];

//function to change actions
const actionsHandler = () => {
  currentIndex++;
  if (currentIndex === actions.length) {
    currentIndex = 0;
  }
  action.textContent = actions[currentIndex];
};

setInterval(actionsHandler, 4000);
