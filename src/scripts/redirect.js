export function redirectScroll(id) {
    setTimeout(function () {
        console.log(id.substr(1));
        var element = document.getElementById(id.substr(1));
        if (element) {
            console.log(element);
            element?.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }, 100);
}

export function redirect(url) {
    window.location = url;
}