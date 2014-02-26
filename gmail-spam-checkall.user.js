// ==UserScript==
// @name         gmail-checkall.user.js
// @description  Adds a check-all box to folders in HTML-only Gmail
// @include      http://mail.google.com/mail/*
// @include      https://mail.google.com/mail/*
// ==/UserScript==

document.addEventListener('DOMContentLoaded', function () {
    var buttons = 'form select[name="tact"]';
                  //'form input[type="submit"][value="Delete Forever"], ' +
                  //'form input[type="submit"][value^="Remove label"], ' +

    [].forEach.call(document.querySelectorAll(buttons), function (button) {
        var checkbox = document.createElement('input');
        var checkboxes = document.querySelectorAll('form td input[type="checkbox"]');

        checkbox.type = 'checkbox';
        checkbox.addEventListener('click', function () {
            [].forEach.call(checkboxes, function (box) {
                if (box != checkbox) {box.checked = !box.checked}
            });
        });

        // firefox doesn't have insertAdjacentElement wtf
        // button.insertAdjacentElement('beforebegin', checkbox);
        button.parentNode.insertBefore(checkbox, button);
    });
});
