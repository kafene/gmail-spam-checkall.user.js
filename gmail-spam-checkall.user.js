// ==UserScript==
// @name         gmail-spam-checkall.user.js
// @description  Adds a check-all box to spam folder in HTML-only Gmail
// @include      http://mail.google.com/mail/*
// @include      https://mail.google.com/mail/*
// ==/UserScript==
window.addEventListener('load', function() {
    var del = document.querySelector('input[type="submit"][value^="Delete"]');
    if(del) {
        var cbox = document.createElement('input');
        cbox.setAttribute('type', 'checkbox');
        cbox.addEventListener('click', function() {
            [].forEach.call(document.querySelectorAll('input[type="checkbox"]'), function(box) {
                if (box == cbox) return;
                if (box.checked) box.removeAttribute('checked');
                else box.setAttribute('checked', true);
            });
        });
        del.parentNode.insertBefore(cbox, del);
    }
});
