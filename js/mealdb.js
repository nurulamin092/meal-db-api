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
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = ` <div onclick ="loadMealDetails(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
        </div>
    </div>`;
        searchResult.appendChild(div)
        console.log(meal);
    });
}

const loadMealDetails = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = meal => {
    const mealDetails = document.getElementById('meal-details');
    mealDetails.textContent = ''
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `  <div class="card">
    <img src="${meal.strMealThumb}" class="card-img-top" alt="">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
</div>`
    mealDetails.appendChild(div);
}