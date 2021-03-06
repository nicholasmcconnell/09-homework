
function generateHTML(dataObject, answers) {
    console.log(answers, "please work");
    const colors = {
        green: {
          wrapperBackground: "#E6E1C3",
          headerBackground: "#C1C72C",
          headerColor: "black",
          photoBorderColor: "#black"
        },
        blue: {
          wrapperBackground: "#5F64D3",
          headerBackground: "#26175A",
          headerColor: "white",
          photoBorderColor: "#73448C"
        },
        pink: {
          wrapperBackground: "#879CDF",
          headerBackground: "#FF8374",
          headerColor: "white",
          photoBorderColor: "#FEE24C"
        },
        red: {
          wrapperBackground: "#DE9967",
          headerBackground: "#870603",
          headerColor: "white",
          photoBorderColor: "white"
        }
      };
    const html =  `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <title>${dataObject.name} Github Profile</title>
        <style>
            @page {
                margin: 0;
                
            }
    
            *,
            *::after,
            *::before {
                box-sizing: border-box;
            }
    
        
            html,
            body {
                padding: 0;
                margin: 0;
            }
    
            html,
            body,
            .wrapper {
                height: 100%;
            }
    
            .wrapper {
                background-color: ${colors[answers.color].wrapperBackground};
                padding-top: 100px;
            }
    
            body {
                background-color: white;
                -webkit-print-color-adjust: exact !important;
                font-family: 'Cabin', sans-serif;
                max-width: 8.5in;
                max-height: 11in;
            }
    
            main {
                background-color: #E9EDEE;
                height: auto;
                padding-top: 30px;
            }
    
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
                font-family: 'BioRhyme', serif;
                margin: 0;
            }
    
            h1 {
                font-size: 3em;
            }
    
            h2 {
                font-size: 2.5em;
            }
    
            h3 {
                font-size: 2em;
            }
    
            h4 {
                font-size: 1.5em;
            }
    
            h5 {
                font-size: 1.3em;
            }
    
            h6 {
                font-size: 1.2em;
            }
    
            .photo-header {
                position: relative;
                margin: 0 auto;
                margin-bottom: -50px;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                background-color: ${colors[answers.color].headerBackground};
                color: ${colors[answers.color].headerColor};
                padding: 10px;
                width: 95%;
                border-radius: 6px;
            }
    
            .photo-header img {
                width: 250px;
                height: 250px;
                border-radius: 50%;
                object-fit: cover;
                margin-top: -75px;
                border: 6px solid ${colors[answers.color].photoBorderColor};
                border: 6px solid black;
                box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
            }
    
            .photo-header h1,
            .photo-header h2,
            .photo-header h4 {
                width: 100%;
                text-align: center;
            }
    
            .photo-header h1 {
                margin-top: 10px;
            }
    
            .links-nav {
                width: 100%;
                text-align: center;
                padding: 20px 0;
                font-size: 1.1em;
            }
    
            .nav {
    
                align-content: center;
            }
    
            .nav-link {
                display: inline-block;
                margin: 5px 10px;
            }
    
            .workExp-date {
                font-style: italic;
                font-size: .7em;
                text-align: right;
                margin-top: 10px;
            }
    
            .container {
                padding: 50px;
                padding-left: 100px;
                padding-right: 100px;
                height: auto;
                background-color: lavender;
            }
    
            .middle {
                background-color: whitesmoke;
            }
    
    
            .row {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                margin-top: 20px;
                margin-bottom: 20px;
            }
    
            .card {
                padding: 20px;
                border-radius: 6px;
                background-color: ${colors[answers.color].headerBackground};
                color: ${colors[answers.color].headerColor};
                margin: 5px;
                width: 295px;
                text-align: center;
            }
    
            .col {
                flex: 1;
                text-align: center;
                justify-content: center;
            }
    
            .jumbotron {
                margin-bottom: -100px;
                margin-top: 50px;
                width: 700px;
                margin-left: -40px;
            }

            #bio {
                text-align: center;
            }
    
    
            a,
            a:hover {
                text-decoration: none;
                color: inherit;
                font-weight: bold;
                margin-right: 20px;
            }
    
            .end {
                visibility: hidden;

                
            }

            #bottomDiv {
                margin-top: -40px
                
            }
    
            @media print {
                body {
                    zoom: .75;
                }
            }
        </style>
    </head>
    
    <body>
    
        <!-- JUMBOTRON -->
        <div class="container">
            <div class="jumbotron photo-header">
                <img src="${dataObject.avatar}" alt="headshot">
                <h1 class="display-4">Hi!</h1>
                <h2 class="display-4">My name is ${dataObject.name}</h2>
                <h4 class="display-4">Currently @ ${dataObject.worksfor}</h4>
                <div class="display-4">
                    <div class="nav">
                        <a class="nav-link" href="https://www.google.com/maps/place/${dataObject.location}" target="_blank">${dataObject.location}</a>
                        <a class="nav-link fab fa-github" href="${dataObject.url}" target="_blank"></a>
                        <a class="nav-link fas fa-blog" href="${dataObject.website}" target="_blank"></a>
                    </div>
                </div>
            </div>
        </div>
        
    <!-- CARDS -->
        <div class="container middle">
            <div class="row">
                <div class="col-md-3"></div>
                <div class="col-md-6">
                    <h4 id="bio">${dataObject.bio}</h4>
                </div>
                <div class="col-md-3"></div>
            </div>
            <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-2">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-text">Public Repositories:</h4>
                            <h4 class="card-text">${dataObject.repos}</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-text">Followers:</h4>
                            <h4 class="card-text">${dataObject.followers}</h4>
                        </div>
                    </div>
                </div>
                <div class="col-md-4"></div>
            </div>
            <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-2">
                    <div class="card">
                        <div class="card-body">
                        </div>
                        <h4 class="card-text">Github Stars:</h4>
                        <h4 class="card-text">${dataObject.stars}</h4>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-text">Folowing:</h4>
                            <h4 class="card-text">${dataObject.following}</h4>
                        </div>
                    </div>
                </div>
                <div class="class-md-4"></div>
            </div>
        </div>
            
    
        <div class="container" id="bottomDiv">
            
        </div>
    
    </body>
    
    </html>`;

    return html;


    }

function makeprofile(data) {

    const dataObject = {
        repos : data.repos,
        name : data.name,
        followers : data.followers,
        following : data.following,
        stars : data.stars,
        location : data.location.substring( 0, data.location.indexOf( "\n\n" ) ),
        website : data.website.slice(0, (data.website.length/2)),
        worksfor: data.worksfor,
        avatar: data.avatar,
        url : "https://github.com/" + data.url,
        bio : data.bio.slice(0, (data.bio.length/2))
    }
    console.log(dataObject, "location")

    return dataObject;
}


//  const openPDF = (async () => {
    
 
//     // Opens the URL in the default browser.
//     await open(makePDF);
// });
    
    module.exports = {generateHTML, makeprofile};