const template = Handlebars.compile(document.querySelector('#result').innerHTML);

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("form_roll").onsubmit = () => {
        return false;
    };

    document.querySelector('#roll').onclick = ()  => {
        // Generate random rolls.
        const counter = parseInt(document.querySelector('#select_dicecount').value);
        const rolls = [];
        let total = 0;
        for (let i = 0; i < counter; i++) {
            const value = Math.floor(Math.random() * 6) +  1;
            rolls.push(value);
            total += value;
        };

        // Add roll results to DOM.
        const content = template({'values': rolls, 'total': total});
        document.querySelector('#rolls').innerHTML = content;
    };
});
