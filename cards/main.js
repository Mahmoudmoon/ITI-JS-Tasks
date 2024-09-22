function searchFood() {
  const searchText = document.getElementById('searchText').value.toLowerCase();
  const cards = document.getElementsByClassName('card');
  
  for (let i = 0; i < cards.length; i++) {
      const foodName = cards[i].getElementsByTagName('h3')[0].textContent.toLowerCase();
      if (foodName.includes(searchText)) {
          cards[i].style.display = 'block';
      } else {
          cards[i].style.display = 'none';
      }
  }
}