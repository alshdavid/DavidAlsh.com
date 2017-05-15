//in order to add functions to the global scope, you have to
//add them to the window. object, this is a Webpack thing

window.data = []
const techIcons = {
    getPin: pin => techIcons[pin] ? ('<img class="pin" src="' + techIcons[pin] + '"/>') : "",
    wordpress: 'http://simpleicon.com/wp-content/uploads/wordpress.svg',
    larvel: 'http://go-labs.net/wp-content/themes/golabs/css/template/images/laravel.png',
    angular: 'https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg',
    html: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1000px-HTML5_logo_and_wordmark.svg.png',
    php: 'http://freevector.co/wp-content/uploads/2010/10/php-1.png',
    scss: 'https://cdn.worldvectorlogo.com/logos/node-sass.svg',
    javascript: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png',
    typescript: 'https://s3-us-west-2.amazonaws.com/svgporn.com/logos/typescript-icon.svg',
    jquery: 'http://www.webdesigncolors.com/jquery.gif',
    phonegap: 'https://onesignal.com/assets/common/platform-icons/cordova-9b984d676cd2d8d0278ded3834e741e12a1cb7eda6776cc897c125e817e85dab.svg',
    node: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2000px-Node.js_logo_2015.svg.png',
    express: 'https://coligo.io/images/express.svg',
    mongo: 'https://bajcmartinez.com/assets/icons/mongodb/mongodb-original-wordmark.svg'
}

fetch('/data.json')
    .then(res => res.json())
    .then(res => window.data = res)
    .then(res => populateProjects('["website", "app"]'))

const genArray = str => JSON.parse(JSON.stringify(str).replace(/'/g, '"').replace(/`/g, '"'))

//Select a tab
window.openTab = tabName => {
    //get all tabs that are part of the index page
    const tabs = document.getElementById('page-index') 
                            .querySelectorAll('.tab')
    
    //loop through the tabs and if the tab data-tab value is the
    //same as the desired tab, add open to it otherwise remove else
    tabs.forEach(tab => 
        tab.attributes['data-tab']['value'] == tabName ? 
            tab.classList.add('open') : tab.classList.remove('open')
    )
}

window.selectTabItem = event => {
    document.querySelectorAll('nav a').forEach(el => el.classList.remove('active'))
    event.target.classList.add('active')
}

//Open the project side panel 
window.openProject = projectName => {
    const sidePanel = document.getElementById("side-panel")
    const innerPanel = document.getElementById("inner-panel")

    if (sidePanel.attributes['data-open']['value'] == "true") {
        sidePanel.attributes['data-open']['value'] = false
        innerPanel.classList.remove('open')
        window.setTimeout(_ => {
            sidePanel.classList.remove('open')
            innerPanel.innerHTML = ""
        }, 500)
    } else {
        const project = data.find(x => x.name == projectName)
        innerPanel.style.backgroundColor = project.colors.brand
        innerPanel.style.color = project.colors.text

    

        innerPanel.innerHTML = `
            
            <div class="main-body">
                <div class="title">
                    <div class="content-max-widthh">
                        <div class="exit" onclick="openProject()">CLOSE</div>
                        <h1>` + project.name + `<span>` + project.subtitle + `</span></h1>
                    </div>
                </div>
                <div class="hero">
                    <div class="content-max-width" id="feature-outlet"></div>
                </div>
                <div class="content-max-width text-body">
                    <article>
                        <h3>Details</h3>
                        ` + project.description + `
                    </article>
                </div>
            </div>
            <div class="tags">
                <div class="content-max-widthh">
                    <div id="tags-outlet"></div>
                </div>
            </div>
        `

        if (project.feature.type == 'video') {
            document.getElementById('feature-outlet').innerHTML = `
                <video class="feature" autoplay="" loop="" autobuffer="" muted="" poster="` + project.thumb + `">
                    <source src="` + project.feature.href + `" type="video/mp4">
                </video>
            `
        }

        if (project.feature.type == 'image') {
            document.getElementById('feature-outlet').innerHTML = `
                <div class="feature-image" style="background-image: url('` + project.feature.href + `')"/>
            `
        }

        let pins = ""
        project['technologies'].forEach(tech => pins = pins + techIcons.getPin(tech))

        document.getElementById("tags-outlet").innerHTML = pins
        //<img src="` + project.thumb + `"></img>
        sidePanel.attributes['data-open']['value'] = true
        sidePanel.classList.add('open')
        window.setTimeout(_ => {
            innerPanel.classList.add('open')
        }, 700)
    }
}

//Generate project list from data array
const populateProjects = (filterList) => {
    const projectOutlet = document.getElementById('project-outlet')
    projectOutlet.innerHTML = ""

    filterList = genArray(filterList )
    let selected = []

    data.forEach(project => {
        for (let i = 0; i < project.type.length; i++){        
            if (filterList.indexOf(project.type[i]) !== -1) {
                if (selected.indexOf(project)) { 
                    selected.push(project)
                }
            }
        }
    })

    selected.forEach(project => {
        const el = document.createElement('article')
        el.innerHTML = `
            <div style="height: 100%;" onclick="openProject('` + project.name + `')">
                <div 
                    class="thumb"
                    style="background-image: url(' ` + project.thumb + ` ')"
                ></div>
            </div>
        `
        //el.style.height = (window.innerWidth / 4) + "px"
        projectOutlet.appendChild(el)
    })
}
window.populateProjects = populateProjects

function scrollIt(destination, duration = 700, easing = 'linear', callback) {

    const easings = {
        linear(t) {
            return t;
        },
        easeInQuad(t) {
            return t * t;
        },
        easeOutQuad(t) {
            return t * (2 - t);
        },
        easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        },
        easeInCubic(t) {
            return t * t * t;
        },
        easeOutCubic(t) {
            return (--t) * t * t + 1;
        },
        easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        },
        easeInQuart(t) {
            return t * t * t * t;
        },
        easeOutQuart(t) {
            return 1 - (--t) * t * t * t;
        },
        easeInOutQuart(t) {
            return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
        },
        easeInQuint(t) {
            return t * t * t * t * t;
        },
        easeOutQuint(t) {
            return 1 + (--t) * t * t * t * t;
        },
        easeInOutQuint(t) {
            return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
        }
    };

    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
    const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

    if ('requestAnimationFrame' in window === false) {
        window.scroll(0, destinationOffsetToScroll);
        if (callback) {
            callback();
        }
        return;
    }

    function scroll() {
        const now = 'now' in window.performance ? performance.now() : new Date().getTime();
        const time = Math.min(1, ((now - startTime) / duration));
        const timeFunction = easings[easing](time);
        window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

        if (window.pageYOffset === destinationOffsetToScroll) {
            if (callback) {
                callback();
            }
            return;
        }

        requestAnimationFrame(scroll);
    }

    scroll();
}


document.querySelector('#main-nav').addEventListener('click', () => scrollIt(document.querySelector('#main-nav').offsetTop));