const searchFood = () => {

    const searchField = document.getElementById('search-input');
    const searchText = searchField.value;

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
    searchField.value = '';
}

const displaySearchResult = meals => {
    console.log(meals);
}