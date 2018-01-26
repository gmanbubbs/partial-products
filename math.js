/**
 * Get the value of a querystring
 * @param  {String} field The field to get the value of
 * @param  {String} url   The URL to get the value from (optional)
 * @return {String}       The field value
 */
var getQueryString = function ( field, url ) {
	var href = url ? url : window.location.href;
	var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
	var string = reg.exec(href);
	return string ? string[1] : null;
};

// Variables for the input data
var topHundreds = getQueryString('top_hundreds') * 100;
var topTens = getQueryString('top_tens') * 10;
var topOnes = getQueryString('top_ones');
var bottomHundreds = getQueryString('bottom_hundreds') * 100;
var bottomTens = getQueryString('bottom_tens') * 10;
var bottomOnes = getQueryString('bottom_ones');

// Variables fot the partial products
var hh = bottomHundreds * topHundreds;
var ht = bottomHundreds * topTens;
var ho = bottomHundreds * topOnes;
var th = bottomTens * topHundreds;
var tt = bottomTens * topTens;
var to = bottomTens * topOnes;
var oh = bottomOnes * topHundreds;
var ot = bottomOnes * topTens;
var oo = bottomOnes * topOnes;

let total = hh + ht + ho + th + tt + to + oh + ot + oo;

window.onload = function setTotal() {
    if(isNumeric(topHundreds) && isNumeric(topTens) && isNumeric(topOnes) &&
        isNumeric(bottomHundreds) && isNumeric(bottomTens) && isNumeric(bottomOnes)) {
        let answerBox = $("answer");

        answerBox.innerHTML = total;

        $("hh").innerHTML = hh;
        $("ht").innerHTML = ht;
        $("ho").innerHTML = ho;

        $("th").innerHTML = th;
        $("tt").innerHTML = tt;
        $("to").innerHTML = to;

        $("oh").innerHTML = oh;
        $("ot").innerHTML = ot;
        $("oo").innerHTML = oo;
    } else {
        alert("Error in input!");
        location.href = "index.html";
    }
}

function $(element) {
    return document.getElementById(element);
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}