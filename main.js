var tc = document.getElementById('terms19');
var terms1 = document.getElementById('terms1');
var tc2 = document.getElementById('terms24');
var terms2 = document.getElementById('terms2');
var tc3 = document.getElementById('terms39');
var terms3 = document.getElementById('terms3');
var t = document.getElementsByClassName('package');


function delayShrink(el){
    setTimeout(function() {
        el.style.height = '480px';
    }, 500);
}

function delayGrow(el){
    setTimeout(function() {
        el.style.height = '650px';
        // el.style.opacity = "1";
    }, 200);
}

function package1(){
    terms1.className = "termsVis";
    terms1.style.transitionDuration = '1s';
    delayGrow(terms1);
    terms1.style.opacity = "1";
    terms1.style.height = '200px';
    t[0].style.height = '650px';
}

function package1Off(){
    terms1.className = "terms";
    terms1.style.opacity = "0";
    terms1.style.transitionDuration = '1s';
    delayShrink(t[0]);
}


function package2(){
    terms2.className = "termsVis";
    terms2.style.opacity = "1";
    terms2.style.transitionDuration = '1s';
    delayGrow(terms2);
    terms2.style.height = '180px';
    t[1].style.height = '690px';
}

function package2Off(){
    terms2.className = "terms";
    terms2.style.opacity = "0";
    terms2.style.transitionDuration = '1s';
    delayShrink(t[1]);
}
function package3(){
    terms3.className = "termsVis";
    t[2].style.height = '650px';
    terms3.style.opacity = "1";
    delayGrow(terms3);
    terms3.style.height = '180px';
}
function package3Off(){
    terms3.className = "terms";
    terms3.style.opacity = "0";
    terms3.style.transitionDuration = '1s';
    delayShrink(t[2]);
}



tc.addEventListener('mouseover', function (){
    // terms1.className = "termsVis";
    // terms1.style.transitionDuration = '1s';
    // delayGrow(terms1);
    // terms1.style.opacity = "1";
    // terms1.style.height = '200px';
    // t[0].style.height = '650px';
    package1();
});

tc.addEventListener('mouseleave', function (){
    // terms1.style.display = 'None';
    // terms1.className = "terms";
    // terms1.style.opacity = "0";
    // terms1.style.transitionDuration = '1s';
    // // delayShrink(terms1);
    // delayShrink(t[0]);

    // t[0].style.height = '480px';
    // terms1.style.opacity = "1";
    // terms1.style.height = '0';
    package1Off();
});



tc2.addEventListener('mouseover', function (){
    // terms2.className = "termsVis";
    // terms2.style.opacity = "1";
    // terms2.style.transitionDuration = '1s';
    // delayGrow(terms2);
    // terms2.style.height = '180px';
    // t[1].style.height = '650px';
    package2();
});

tc2.addEventListener('mouseleave', function (){
    // terms2.className = "terms";
    // terms2.style.opacity = "0";
    // terms2.style.transitionDuration = '1s';
    // delayShrink(t[1]);
    package2Off();
});



tc3.addEventListener('mouseover', function (){
    // terms3.className = "termsVis";
    // t[2].style.height = '600px';
    // terms3.style.opacity = "1";
    // delayGrow(terms3);
    // terms3.style.height = '150px';
    package3();
});

tc3.addEventListener('mouseleave', function (){
    // terms3.className = "terms";
    // terms3.style.opacity = "0";
    // terms3.style.transitionDuration = '1s';
    // delayShrink(t[2]);
    package3Off();
});