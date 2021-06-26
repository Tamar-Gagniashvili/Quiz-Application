/*
* decodes text with html Encoding
* params: text
* returns: decoded text
*/
export function decodeHtml(text) {
    var txt = document.createElement("textarea");
    txt.innerHTML = text;
    return txt.value;
}