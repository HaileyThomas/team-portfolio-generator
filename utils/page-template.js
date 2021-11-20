


module.exports = templateData => {
    // destructure data (review portfolio generator project)
    // const { projects, about, ...header } = templateData;

    // return html string
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie-edge">
        <title>Our Work Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        <link rel="stylesheet" href="../dist/style.css">
    </head>
    
    <body>
        <header class="hero is-primary">
            <div class="hero-body">
                <h1 class="title">Our Work Team</h1>
                <h2 class="subtitle">Stronger Together.</h2>
            </div>
        </header>
        <main class="columns">
            <!-- CONTENT GOES HERE -->
        </main>
        <footer class="footer">
            <p>&copy; 2021 Hailey Thomas</p> <a href="http://www.github.com/HaileyThomas" target="blank">GitHub</a>
        </footer>
    </body>
    
    </html>
    `;
};