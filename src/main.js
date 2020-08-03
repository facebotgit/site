// function detectmob() {
//     if (navigator.userAgent.match(/Android/i)
//         || navigator.userAgent.match(/webOS/i)
//         || navigator.userAgent.match(/iPhone/i)
//         || navigator.userAgent.match(/iPad/i)
//         || navigator.userAgent.match(/iPod/i)
//         || navigator.userAgent.match(/BlackBerry/i)
//         || navigator.userAgent.match(/Windows Phone/i)
//     ) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// function LoadCSS( cssURL ) {

//     // 'cssURL' is the stylesheet's URL, i.e. /css/styles.css

//     return new Promise( function( resolve, reject ) {

//         var link = document.createElement( 'link' );

//         link.rel  = 'stylesheet';

//         link.href = cssURL;

//         document.head.appendChild( link );

//         link.onload = function() { 

//             resolve(); 

//             console.log( 'CSS has loaded!' ); 
//         };
//     } );
// }

// if (!detectmob())
// {
//     LoadCSS('./css/desktop.css');
// }
// else
// {
//     LoadCSS('./css/mobile.css');
// }