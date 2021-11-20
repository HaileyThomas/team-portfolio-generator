//const Manager = require("../lib/Manager");
//const Engineer = require("..Engineer/lib/Engineer");
//const Intern = require(".Intern./lib/Intern");

function filterArray(employees) {
    console.log(employees);

    const managers = employees.filter(checkManager);
    
    function checkManager(employees) {
        return employees.answers.role === 0;
    }
};




module.exports = templateData => {
    // destructure data (review portfolio generator project)
    // const { projects, about, ...header } = templateData;

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