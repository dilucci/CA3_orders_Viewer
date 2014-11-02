$(document).ready(function(){
    backButton();
    saveButton();
    deleteButton();
});

function deleteButton() {
    $("#deleteButton").click(function () {
        location.reload();
    })
}

function saveButton() {
    $("#saveButton").click(function () {
        location.reload();
    })
}

function backButton() {
    $("#backButton").click(function () {
        history.back();
    })
}

