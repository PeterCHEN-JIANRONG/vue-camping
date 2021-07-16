export function saveLocalStorage(item) {
  const favoriteString = JSON.stringify(item);
  localStorage.setItem('campingFavorite', favoriteString);
}
export function getLocalStorage() {
  return JSON.parse(localStorage.getItem('campingFavorite'));
}
