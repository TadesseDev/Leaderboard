const addFromEvent = () => {
  const addNewScore = document.getElementById('add-score');
  addNewScore.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('cant submit')
  });
}

export { addFromEvent }