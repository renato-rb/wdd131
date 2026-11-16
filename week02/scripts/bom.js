const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


//Create a click event listener for the Add Chapter button
button.addEventListener('click', function () {
    if (input.value.trim() !== '') {

        // Create a li element that will hold each entry's chapter title and an associated delete button.
        const li = document.createElement('li');

        // Create a delete button.
        const deleteButton = document.createElement('button');

        //Populate the li element variable's textContent or innerHTML with the input value.
        li.textContent = input.value;

        //Set the delete button's textContent to ❌.
        deleteButton.textContent = '❌';
        deleteButton.setAttribute('aria-label', 'Close');

        //Append the delete button to the li element.
        li.append(deleteButton);

        //Append the li element variable to the unordered list in your HTML.
        list.append(li);

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        input.value = ''
    }
    input.focus();
});
