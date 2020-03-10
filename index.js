const template = Handlebars.compile(document.querySelector('#result').innerHTML);


/** return a random integer in the interval [1, max_val] */
function roll(max_val=6) {
    return Math.floor(Math.random() * max_val) +  1;
};


/** return a lis of random integers in the interval [1, max_val] */
function roll_multiple_dice(num_dice=1, max_val=6) {
    const rolls = [];
    for (let i = 0; i < num_dice; i++) {
        const value = roll(max_val);
        rolls.push(value);
    };
    return rolls;
};


document.addEventListener('DOMContentLoaded', () => {
    /** onclick action for Roll button */
    document.getElementById("button_roll").onclick = ()  => {
        // Generate random rolls.
        const num_dice = parseInt(document.getElementById('select_dicecount').value);
        const dice_type = parseInt(document.getElementById("select_dicetype").value);

        const rolls = roll_multiple_dice(num_dice, dice_type);

        // Add roll results to DOM.
        const content = template({'values': rolls});
        document.getElementById('rolls').innerHTML = content;
    };
});
