// Initializes javascript behavior.
function Initialize() {
    InitializeDropdownOptions();
    AttachEventHandlers();
}

// Establish default dropdown with all options.
function InitializeDropdownOptions() {
    var options = GetAllOptions();
    for( var i = 0; i < options.length; i++) {
        CreateDropdownOption(options[i].label, options[i].value);
    }
}

// Attach event handler for handling when the value of user input textbox changes.
function AttachEventHandlers() {
    $('#txtInput').on('input', function() {
        $('#ddlOptions').empty();
        FindMatches($(this).val());
        DisplayCurrentSelection();
    });
    $('#ddlOptions').change(function() {
        DisplayCurrentSelection();
    });
}

// Search for matches that begin with text of the user input.
function FindMatches(str) {
    var options = GetAllOptions();
    for( var i = 0; i < options.length; i++) {
        if (options[i].label.toUpperCase().startsWith(str.toUpperCase())) {
            CreateDropdownOption(options[i].label, options[i].value);
        }
    }
}

// Creates and appends dropdown options.
function CreateDropdownOption(label, value) {
    if (label !== undefined && value !== undefined) {
        $("#ddlOptions").append("<option value='" + value + "'>" + label + "</option>");
    }
}

// Displays the current selection in the format "Current selection: label = Web Stert , value = 5980"
function DisplayCurrentSelection() {
    var resulttext = "";
    if ($('#ddlOptions').children('option').length > 0) {
        resulttext = "Current selection: label = " + $('#ddlOptions option:selected').text() + " , value = " + $('#ddlOptions').val();
    }
    $('#lblSelection').text(resulttext);
}