function getAllCookies() {
    var cookies = {};
    var cookieString = document.cookie;

    if (cookieString === "") {
        return cookies;
    }

    var cookieArray = cookieString.split(';');

    for (var i = 0; i < cookieArray.length; i++) {
        var cookie = cookieArray[i].trim();
        var delimiterIndex = cookie.indexOf('=');

        var cookieName = cookie.substring(0, delimiterIndex);
        var cookieValue = cookie.substring(delimiterIndex + 1);

        cookies[cookieName] = decodeURIComponent(cookieValue);
    }

    return cookies;
}

var allCookies = getAllCookies();
console.log(allCookies);
