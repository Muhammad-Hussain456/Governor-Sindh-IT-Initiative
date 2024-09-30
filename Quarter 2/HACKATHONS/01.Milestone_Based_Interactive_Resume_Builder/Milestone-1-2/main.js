document.addEventListener("DOMContentLoaded", function () {
    var headings = document.querySelectorAll(".section-heading");
    headings.forEach(function (heading) {
        var _a;
        var button = heading.querySelector(".toggle-button");
        var contenID = ((_a = heading.getAttribute('data-target')) === null || _a === void 0 ? void 0 : _a.split(',')) || [];
        button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
            var allVisible = true;
            contenID.forEach(function (contenId) {
                var content = document.getElementById(contenId.trim());
                if (content && content.style.display === 'none') {
                    allVisible = false;
                }
            });
            contenID.forEach(function (contenId) {
                var content = document.getElementById(contenId.trim());
                if (content) {
                    if (allVisible) {
                        content.style.display = "none";
                    }
                    else {
                        content.style.display = 'grid';
                    }
                }
            });
            button.textContent = allVisible ? button.textContent : button.textContent;
        });
    });
});
