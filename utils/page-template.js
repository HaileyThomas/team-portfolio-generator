//const Manager = require("../lib/Manager");
//const Engineer = require("..Engineer/lib/Engineer");
//const Intern = require(".Intern./lib/Intern");

//const { create } = require("@dicebear/avatars/dist/utils/prng");

function createManagers(employees) {


    //employees.forEach(addManagers);

    //function addManagers() {
    return `
        <section class="columns m-3">
            <div class="card column is-narrow">
                <div class="card-header has-background-primary">
                    <h3 class="card-header-title has-text-light is-size-4">Manager</h3>
                    <div class="card-header-icon">
                        <span class="icon has-text-light is-size-4">
                            <i class="fas fa-briefcase"></i>
                        </span>
                    </div>
                </div>
                <div class="card-content is-size-5">
                    <ul>
                        <li>
                            <p><b>Name: </b> </p>
                        </li>
                        <li>
                            <p><b>ID: </b> </p>
                        </li>
                        <li>
                            <p><b>Email: </b><a href="mailto:"> </a></p>
                        </li>
                        <li>
                            <p>Office Number: </b> </p>
                        </li>
                    </ul>
                </div>
            </div>
        `
    // }
};




function generateHTML(employees) {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie-edge">
        <title>Our Work Team</title>
        <script src="https://kit.fontawesome.com/f4e104faec.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <link rel="stylesheet" href="../dist/style.css">
    </head>

    <body>
        <header class="hero is-primary">
            <div class="hero-body">
                <h1 class="title">Our Work Team</h1>
                <h2 class="subtitle"><span class="icon"><i class="fas fa-users"></i></span> Stronger Together.</h2>
            </div>
        </header>
        <main class="section">
            <section id="managers" class="columns m-3">
            ${createManagers(employees)}
            </section>
            <section id="engineers" class="columns m-3">

            </section>
            <section id="interns" class="columns m-3">

            </section>
            </main>
            <footer class="footer">
                <p>&copy; 2021 Hailey Thomas</p> <a href="http://www.github.com/HaileyThomas" target="blank">GitHub</a>
            </footer>
        </body>
        
        </html>
    `;
};

module.exports = generateHTML;