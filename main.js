var tc = document.getElementById('terms19');
var terms1 = document.getElementById('terms1');
var tc2 = document.getElementById('terms24');
var terms2 = document.getElementById('terms2');
var tc3 = document.getElementById('terms39');
var terms3 = document.getElementById('terms3');
var t = document.getElementsByClassName('package');


function delayShrink(el){
    setTimeout(function() {
        el.style.height = '500px';
    }, 500);
}

function delayGrow(el){
    setTimeout(function() {
        // el.style.height = '650px';
        el.style.opacity = "1";
    }, 200);
}

function package1(){
    terms1.className = "termsVis";
    terms1.style.transitionDuration = '0.5s';
    terms1.style.height = '200px';
    t[0].style.height = '650px';
    delayGrow(terms1);
}

function package1Off(){
    terms1.className = "terms";
    terms1.style.opacity = "0";
    terms1.style.transitionDuration = '0.5s';
    delayShrink(t[0]);
}


function package2(){
    terms2.className = "termsVis";
    terms2.style.transitionDuration = '0.5s';
    terms2.style.height = '180px';
    t[1].style.height = '650px';
    delayGrow(terms2);
}

function package2Off(){
    terms2.className = "terms";
    terms2.style.opacity = "0";
    terms2.style.transitionDuration = '0.5s';
    delayShrink(t[1]);
}



// tc.addEventListener('mouseover', function (){

//     package1();
// });

// tc.addEventListener('mouseleave', function (){

//     package1Off();
// });



// tc2.addEventListener('mouseover', function (){

//     package2();
// });

// tc2.addEventListener('mouseleave', function (){

//     package2Off();
// });

