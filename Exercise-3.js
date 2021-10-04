function alert1(){

const length1 = document.getElementsByTagName('a').length;
    console.log(length1);
    
    var links = document.getElementsByTagName("a");
    for(var i=0; i<links.length; i++) {
        console.log(links[0].href);
        console.log(links[(i=links.length-1)].href);
}
    
    
    
    
    
}