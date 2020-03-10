const template_dice_6 = Handlebars.compile(document.getElementById('dice_6').innerHTML);


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


function clear_dice_in_dom() {
    document.getElementById('dice_display').innerHTML = null;
};


function add_die_to_dom(template, die_value, image_size) {
    const content = template({"value": die_value, "height": image_size, "width": image_size});
    document.getElementById('dice_display').innerHTML += content;
};


function add_dice_to_dom(template, dice_values, image_size) {
    for (let i = 0; i < dice_values.length; i++) {
        add_die_to_dom(template, dice_values[i], image_size);
    };
};


document.addEventListener('DOMContentLoaded', () => {
    /** onclick action for Roll button */
    document.getElementById("button_roll").onclick = ()  => {
        // Generate random rolls.
        const num_dice = parseInt(document.getElementById('select_dicecount').value);
        const dice_type = parseInt(document.getElementById("select_dicetype").value);

        const rolls = roll_multiple_dice(num_dice, dice_type);

        // Add roll results to DOM.
        clear_dice_in_dom();
        add_dice_to_dom(template_dice_6, rolls, 150);
    };
});
