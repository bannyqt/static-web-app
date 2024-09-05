function sayMyNameClicked() {
    let username = document.getElementById("input_name").value;
    let displayNameElement = document.getElementById("display_name");

    if (username && username.trim()) //check if not null or empty or whitespace
    {
        displayNameElement.classList.remove('error');
        displayNameElement.innerHTML = "Your name is " + username.trim() + "!";
    }
    else
    {
        if (!displayNameElement.classList.contains('error'))
        {
            displayNameElement.classList.add('error');
        }

        displayNameElement.innerHTML = "Please tell me your name.";
    }
}