import { useState } from "react";

import Meal from "./components/meal/meal.component";

import "./App.css";

function App() {
    const [mealQuery, setMealQuery] = useState("");
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(false);

        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealQuery}`
        );

        const data = await response.json();

        console.log(data);
        if (data.meals) {
            setMeals(data.meals);
            setMealQuery("");
        } else {
            setError(true);
        }
    };

    function handleMeal(event) {
        const val = event.target.value;
        setMealQuery(val);
        setError(false);
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input
                    className="search-box"
                    type="text"
                    onChange={handleMeal}
                    value={mealQuery}
                    placeholder="Search A Meal"
                />
                <button className="search-button" type="submit">
                    Search Meal
                </button>
            </form>

            {meals &&
                meals.map((meal) => <Meal key={meal.idMeal} meal={meal} />)}

            {error && <p>{mealQuery} is not found kindly search other</p>}

            <div></div>
        </div>
    );
}

export default App;
