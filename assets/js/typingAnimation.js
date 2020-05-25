const words = ["Product Leadership", "Enterprise Transformation", "AWS", "Cloud Native", "Python-3", "IIoT","DevOps","Executive Wrangling","Mining", "Oil and Gas", "Enterprise Architecture","Serverless", "Infrastructure as Code"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('word').innerHTML += word.shift();
        } else {
            timer = setTimeout(deletingEffect, 500);
            return false;
        };
        timer = setTimeout(loopTyping, 120);
    };
    loopTyping();

};

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('word').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            };
            typingEffect();
            return false;
        };
        timer = setTimeout(loopDeleting, 50);
    };
    loopDeleting();
};
typingEffect();
