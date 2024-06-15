
    function validation()
    {
        let checkboxes = document.querySelectorAll('.language');
        let checkedLanguages = [];
        checkboxes.forEach(function(checkbox)
        {
            if (checkbox.checked)
            {
                checkedLanguages.push(checkbox.value.toUpperCase());
            }
        });
        if (checkedLanguages.length === 0)
        {
            document.getElementById('error').innerText = "Please select at least one language.";
            document.getElementById('errorRow').style.display = "block";
            hideError();
            return false;
        }
        else
        {
            document.getElementById('success').innerText = 'Selected Languages: ' + checkedLanguages.join(', ');
            document.getElementById('successRow').style.display = "block";
            return true;
        }
    }
    // Hide error message
    function hideError() {
        setTimeout(function() {
            document.getElementById('errorRow').style.display = "none";
        }, 5000);
    }
