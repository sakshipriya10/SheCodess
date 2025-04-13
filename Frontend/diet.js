document.querySelectorAll('.diet-option').forEach(option => {
    option.addEventListener('click', () => {
        document.querySelectorAll('.diet-option').forEach(o => o.classList.remove('selected'));
        option.classList.add('selected');
    });
});

function getSelectedDietType() {
    const selected = document.querySelector('.diet-option.selected');
    return selected ? selected.querySelector('p').innerText.toLowerCase() : 'anything';
}

function generateDiet() {
    const calories = parseInt(document.getElementById('calories').value);
    const meals = parseInt(document.getElementById('mealCount').value);
    const dietType = getSelectedDietType();

    if (!calories || !meals) {
        alert("Please enter calories and select meals.");
        return;
    }

    const carbs = Math.round((calories * 0.5) / 4);
    const protein = Math.round((calories * 0.2) / 4);
    const fat = Math.round((calories * 0.3) / 9);

    const carbsPerMeal = Math.round(carbs / meals);
    const proteinPerMeal = Math.round(protein / meals);
    const fatPerMeal = Math.round(fat / meals);

    document.getElementById('carbs').innerText = `${carbsPerMeal}g`;
    document.getElementById('protein').innerText = `${proteinPerMeal}g`;
    document.getElementById('fat').innerText = `${fatPerMeal}g`;

    const sampleMeals = {
        anything: ['Grilled chicken with rice', 'Pasta with vegetables', 'Egg sandwich'],
        vegan: ['Tofu stir-fry with rice', 'Chickpea salad', 'Vegan burrito'],
        vegetarian: ['Paneer tikka', 'Vegetable pasta', 'Cheese sandwich'],
        keto: ['Avocado egg salad', 'Grilled chicken with spinach', 'Bacon and cheese omelet']
    };

    const mealSuggestions = sampleMeals[dietType] || sampleMeals['anything'];

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Personalized Meal Plan", 20, 20);
    doc.setFontSize(12);
    doc.text(`Calories per day: ${calories}`, 20, 30);
    doc.text(`Meals per day: ${meals}`, 20, 40);
    doc.text(`Diet type: ${dietType}`, 20, 50);

    doc.text(`Per Meal Macros:`, 20, 60);
    doc.text(`- Carbs: ${carbsPerMeal}g`, 30, 70);
    doc.text(`- Protein: ${proteinPerMeal}g`, 30, 80);
    doc.text(`- Fat: ${fatPerMeal}g`, 30, 90);

    doc.text("Sample Meal Suggestions:", 20, 110);
    mealSuggestions.forEach((meal, i) => {
        doc.text(`${i + 1}. ${meal}`, 30, 120 + i * 10);
    });

    doc.save("meal_plan.pdf");
}