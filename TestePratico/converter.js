// converter.js
document.addEventListener('DOMContentLoaded', () => {
    const weightForm = document.getElementById('weightForm');
    const resultDiv = document.getElementById('result');

    weightForm.addEventListener('input', () => {
        const weight = parseFloat(document.getElementById('weight').value);
        const unit = document.getElementById('unit').value;

        if (!isNaN(weight)) {
            const conversions = convertWeight(weight, unit);
            displayResults(conversions);
        } else {
            resultDiv.innerHTML = '';
        }
    });

    function convertWeight(weight, unit) {
        let grams, kilograms, pounds;

        switch (unit) {
            case 'gramas':
                grams = weight;
                kilograms = weight / 1000;
                pounds = weight * 0.00220462;
                break;
            case 'quilogramas':
                grams = weight * 1000;
                kilograms = weight;
                pounds = weight * 2.20462;
                break;
            case 'libras':
                grams = weight / 0.00220462;
                kilograms = weight / 2.20462;
                pounds = weight;
                break;
        }

        return {
            grams: grams.toFixed(2),
            kilograms: kilograms.toFixed(2),
            pounds: pounds.toFixed(2)
        };
    }

    function displayResults({ grams, kilograms, pounds }) {
        resultDiv.innerHTML = `
            <h3>Resultados da Conversão:</h3>
            <p>${grams} gramas</p>
            <p>${kilograms} quilogramas</p>
            <p>${pounds} libras</p>
        `;
    }
});
