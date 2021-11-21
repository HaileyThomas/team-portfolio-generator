//const { create } = require("@dicebear/avatars/dist/utils/prng");

const createManagers = managers => {
    return `
    ${managers
            .map(({ name, id, email, officeNumber }) => {
                return `
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
                            <p><b>Name: </b>${name}</p>
                        </li>
                        <li>
                            <p><b>ID: </b>${id}</p>
                        </li>
                        <li>
                            <p><b>Email: </b><a href="mailto:${email}">${email}</a></p>
                        </li>
                        <li>
                            <p><b>Office Number: </b>${officeNumber}</p>
                        </li>
                    </ul>
                </div>
            </div>
            `;
            })
            .join('')
        }`
};

const createEngineers = engineers => {
    return `
    ${engineers
            .map(({ name, id, email, github }) => {
                return `
            <div class="card column is-narrow">
                <div class="card-header has-background-primary">
                    <h3 class="card-header-title has-text-light is-size-4">Engineer</h3>
                    <div class="card-header-icon">
                        <span class="icon has-text-light is-size-4">
                            <i class="fas fa-cogs"></i>
                        </span>
                    </div>
                </div>
                <div class="card-content is-size-5">
                    <ul>
                        <li>
                            <p><b>Name: </b>${name}</p>
                        </li>
                        <li>
                            <p><b>ID: </b>${id}</p>
                        </li>
                        <li>
                            <p><b>Email: </b><a href="mailto:${email}">${email}</a></p>
                        </li>
                        <li>
                            <p><b>GitHub: </b><a href="http://www.github.com/${github}">${github}</a></p>
                        </li>
                    </ul>
                </div>
            </div>
            `;
            })
            .join('')
        }`
};

const createInterns = interns => {
    return `
    ${interns
            .map(({ name, id, email, school }) => {
                return `
            <div class="card column is-narrow">
                <div class="card-header has-background-primary">
                    <h3 class="card-header-title has-text-light is-size-4">Intern</h3>
                    <div class="card-header-icon">
                        <span class="icon has-text-light is-size-4">
                            <i class="fas fa-graduation-cap"></i>
                        </span>
                    </div>
                </div>
                <div class="card-content is-size-5">
                    <ul>
                        <li>
                            <p><b>Name: </b>${name}</p>
                        </li>
                        <li>
                            <p><b>ID: </b>${id}</p>
                        </li>
                        <li>
                            <p><b>Email: </b><a href="mailto:${email}">${email}</a></p>
                        </li>
                        <li>
                            <p><b>School: </b>${school}</p>
                        </li>
                    </ul>
                </div>
            </div>
            `;
            })
            .join('')
        }`
};


function generateHTML(managers, engineers, interns) {
    // managerArr = employees.filter(({ Manager }) => !Manager);

    return `
    < !DOCTYPE html >
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
                                            ${createManagers(managers)}
                                        </section>
                                        <section id="engineers" class="columns m-3">
                                            ${createEngineers(engineers)}
                                        </section>
                                        <section id="interns" class="columns m-3">
                                            ${createInterns(interns)}
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