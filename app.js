
const warning = document.getElementById('warning')
document.getElementById('search-btn').addEventListener('click',function(){
    const search = document.getElementById('search-input').value
    if (search === '') {
        warning.style.display = 'block';
        console.log('Please enter valid')
    } else {
        document.getElementById('meal_name').innerHTML = ' '
        document.getElementById('meal_detail').innerHTML= ' '
        searchMeal(search)
        warning.style.display = 'none';
    }
})
const searchMeal = search =>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+search)
    .then(res => res.json())
    .then(data =>displayMeal(data.meals))
}
    const displayMeal= datas =>{
        window.mealMainDiv= document.getElementById('meal_name')
     if(datas != null){
         datas.forEach(element => {
            const mealDiv = document.createElement('div')
                mealDiv.className = 'meal'
                const mealDetail = `
                <img onclick="displayDetail('${element.idMeal}')" src="${element.strMealThumb}">
                <h3 class='meal_name'>${element.strMeal}</h3> `  
                mealDiv.innerHTML = mealDetail
                mealMainDiv.appendChild(mealDiv)
               
              
         });
        }else{
            warning.style.display = 'block';
        }
  
    }
    const displayDetail = (mealId)=>{
      
       const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
       fetch(url)
       .then(res => res.json())
       .then(data=>{
        FoodInfo(data.meals);
       })
    }
    const FoodInfo = meal =>{
        window.mealDetail = document.getElementById('meal_detail')
       meal.forEach(elements => {
        mealDetail.innerHTML = `
        <img src="${elements.strMealThumb}" alt="">
        <h2>${elements.strMeal}</h2>
        <h5> Ingredients </h5>
        <ul>
             <li>${elements.strMeasure1}, ${elements.strIngredient1}</li>
             <li>${elements.strMeasure2}, ${elements.strIngredient2}</li>
             <li>${elements.strMeasur3}, ${elements.strIngredient3}</li>
             <li>${elements.strMeasure4}, ${elements.strIngredient4}</li>
             <li>${elements.strMeasure5}, ${elements.strIngredient5}</li>
             <li>${elements.strMeasure6}, ${elements.strIngredient6}</li>
             <li>${elements.strMeasure7}, ${elements.strIngredient7}</li>
             <li>${elements.strMeasure8}, ${elements.strIngredient8}</li>
             <li>${elements.strMeasure9}, ${elements.strIngredient9}</li>
             <li>${elements.strMeasure10}, ${elements.strIngredient10}</li>
       </ul>`
       });
           
    }
        

   

   


