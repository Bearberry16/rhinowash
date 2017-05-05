
/*------------*/
/*------------*/
/*------------*/


// var altitudeRange = [];

// for (var i = 0; i < 110; i++) {
//     // Array of nubers starting from 1000
//     // increasing by ten for each iteration
//     altitudeRange[i] = 1000 + ( i * 10);
// }
// for(var i = 0; i < altitudeRange.length; i++) {
//     var monitor = document.getElementById('monitor');
//     var newItem = document.createElement("LI");       // Create a <li> node
//     // var textnode = document.createTextNode(altitudeRange[i]);  // Create a text node
//     newItem.innerHTML = '<p>' + altitudeRange[i] + ' _|</p>' +
//                         '<p>______|</p>' +
//                         '<p>_|</p>' +
//                         '<p>_|</p>' +
//                         '<p>_|</p>' +
//                         '<p>_|</p>' +
//                         '<p>_|</p>' +
//                         '<p>_|</p>' +
//                         '<p>_|</p>';
    
//     monitor.insertBefore(newItem, monitor.childNodes[0]);  // Insert <li> before the first child of <ul>
// }
// window.addEventListener("scroll", initParallax);
// function initParallax(){
//         monitor.style.top = -10000+window.pageYOffset*4+"px";
// }


/*------------*/
/*------------*/
/*------------*/



    /*-----------------------------------------------------------------------------
    // --- Ruler ---
    // Object conatining formatting for ruler layout
    -----------------------------------------------------------------------------*/
    var ruler = {
        short: '<p>_|</p>'
        , long: '<p>______|</p>'
    }

    /*-----------------------------------------------------------------------------
    // Creating ruler
    -----------------------------------------------------------------------------*/
    createRuler(monitor);
    function createRuler(monitor) {   
        var newItem = [];
        for (var i = 1; i < 30; i++) {
            var altitudeNr = '<p>'+ (10000+(i)) + '_|</p>';
            newItem[i] = document.createElement("LI");
            if(i % 10 === 0) {
                newItem[i].innerHTML = altitudeNr;
            } else if (i % 10 === 1) {
                newItem[i].innerHTML = ruler.long;   
            } else {
                newItem[i].innerHTML = ruler.short;   
            }
            monitor.appendChild(newItem[i]);
        }
    }

    /*-----------------------------------------------------------------------------
    // Determining scroll direction.
    -----------------------------------------------------------------------------*/
    let previousScrollPos = 0;
    window.addEventListener('scroll', scrollRuler);
    function scrollRuler() {
        var altitudeNr;
        var monitor = document.getElementById('monitor');
        var scrollPos = window.pageYOffset || document.documentElement.scrollTop;

        // ⟱ Scroll Down ⟱
        if (scrollPos > previousScrollPos) {
            inc = increment(inc);                
            scrollDown(inc, monitor, ruler, altitudeNr);
        }

        // ⤊ Scroll Up ⤊
        else if (scrollPos < previousScrollPos) {
            inc = decrement(inc);
            scrollUp(inc, monitor, ruler, altitudeNr);
        }

        // If the new number equal to the previos - continue.
        else if (scrollPos === previousScrollPos) {
            return;
        }
        previousScrollPos = scrollPos;   
    };

    /*-----------------------------------------------------------------------------
    // Function called when scrolling down
    -----------------------------------------------------------------------------*/
    function scrollDown(inc, monitor, ruler, altitudeNr){
        var newItem = document.createElement("LI");
        altitudeNr = '<p>'+ (10020+(inc)) + '_|</p>';
        
        // Every 10:tn element is a number
        if(inc % 10 === 0) {
            newItem.innerHTML = altitudeNr;
        } 
        // The element after the number is a long ruler-line
        else if (inc % 10 === 1) {
            newItem.innerHTML = ruler.long;   
        }
        // All the others are short ruler-lines
        else {
            newItem.innerHTML = ruler.short;   
        }

        monitor.removeChild(monitor.childNodes[0]);
        insertAfter(newItem, monitor.lastChild);
    }
    /*-----------------------------------------------------------------------------
    // Function called when scrolling up
    -----------------------------------------------------------------------------*/
    function scrollUp(inc, monitor, ruler, altitudeNr){
        var newItem = document.createElement("LI");
        altitudeNr = '<p>'+ (9990+(inc)) + '_|</p>';
        
        // Every 10:tn element is a number
        if(inc % 10 === 0) {
            newItem.innerHTML = altitudeNr;
        } 
        // The element after the number is a long ruler-line
        else if (inc % 10 === 1) {
            newItem.innerHTML = ruler.long;   
        }
        // All the others are short ruler-lines
        else {
            newItem.innerHTML = ruler.short;   
        }
        
        monitor.insertBefore(newItem, monitor.childNodes[0]);
        monitor.removeChild(monitor.lastChild);
    }
    /*-----------------------------------------------------------------------------
    // Incrementing or decrementing based on scroll value
    -----------------------------------------------------------------------------*/
    var inc = 9; // Determining on what position the ruler starts
    function increment(i){
        i++;
        return i;
    }
    function decrement(i){
        i--;
        return i;
    }
    /*-----------------------------------------------------------------------------
    // Work-around to create elements as last child
    -----------------------------------------------------------------------------*/
    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }




