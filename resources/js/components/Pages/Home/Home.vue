<template>
    <nav class="navbar" :class="{ open: isMenuOpen }">
        <!-- Menu toggle button -->
        <div class="menu-toggle" @click="toggleMenu">
            <div class="hamburger" :class="{ open: isMenuOpen }"></div>
        </div>
        <!-- Brand name -->
        <h1 class="navbar-name">Résumé</h1>
        <!-- Navigation links -->
        <ul class="nav-list">
            <!-- Each navigation item with conditional styling based on the active section -->
            <li class="nav-item" :class="{ active: isActiveSection('home') }">
                <a class="nav-link" href="#home">HOME</a>
            </li>
            <li class="nav-item" :class="{ active: isActiveSection('about') }">
                <a class="nav-link" href="#about">ABOUT</a>
            </li>
            <li class="nav-item" :class="{ active: isActiveSection('skills') }">
                <a class="nav-link" href="#skills">SKILLS</a>
            </li>
            <li class="nav-item" :class="{ active: isActiveSection('contact') }">
                <a class="nav-link" href="#contact">CONTACT</a>
            </li>
            <li class="nav-item">
                <a class="nav-link logout" href="/"><i class="bi bi-power"></i></a>
            </li>
        </ul>
    </nav>
    <!-- Main content -->
    <main>

        <!------------------ Home section ------------------>
        <!-- This section represents the home page -->
        <section class="page" id="home">

            <!-- Background image and overlay for styling -->
            <div class="img"></div>
            <div class="overlay"></div>

            <!-- Left side of the header with personal information -->
            <div class="header-heading-left">
                <h5>Hello,</h5>
                <!-- Displaying the name in multiple lines -->
                <h1>I am <span class="name">TRISTAN</span></h1>
                <h1 class="name">ANGELO</h1>
                <h1 class="name">NARIDO</h1>
            </div>

            <!-- Container for the person's image -->
            <div class="person">
                <div class="person_container">
                    <!-- Circular background image -->
                    <img class="circle" src="../../../../../public/assets/back_image.jpg">
                    <!-- Main avatar image -->
                    <img class="avatar" src="../../../../../public/assets/image.png">
                </div>
            </div>

            <!-- Right side of the header with academic information -->
            <div class="header-heading-right">
                <h5>4th Year Student</h5>
                <hr />
                <!-- Displaying the academic details in multiple lines -->
                <h1 class="name">Bachelor of Science</h1>
                <h1 class="name">in Information</h1>
                <h1 class="name">Technology</h1>
            </div>
        </section>
        <!------------------ End of Home section ------------------>

        <!------------------ About Me Section ------------------>
        <section class="page" id="about">
            <div class="container">
                <div class="content-section">
                    <!-- Title Section -->
                    <div class="title">
                        <h1>About Me</h1>
                    </div>

                    <!-- Content Section -->
                    <div class="content">
                        <h3>Summary</h3>
                        <!-- Personal Summary -->
                        <p>Enthusiastic and detail-oriented fourth-year BSIT student with a passion for web development.
                            Adept in HTML, CSS, and PHP with practical knowledge of using Bootstrap and Figma to create
                            visually
                            appealing and responsive websites. Excited to put my abilities to use and support exciting
                            projects
                            within your company. Devoted to professional growth and learning in a creative, cooperative
                            atmosphere. Possessing a keen eye for design details and a strong problem-solving ability.</p>

                        <!-- Read More Button -->
                        <div class="button">
                            <a href="#other">Read More</a>
                        </div>
                    </div>

                    <!-- Social Links Section -->
                    <div class="social">
                        <!-- Facebook Link -->
                        <a href="https://www.facebook.com/narido.tristanangelo" target="_blank"><i
                                class="bi bi-facebook"></i></a>
                        <!-- Instagram Link (Empty href, consider adding a valid link) -->
                        <a href=""><i class="bi bi-instagram" target="_blank"></i></a>
                        <!-- LinkedIn Link -->
                        <a href="https://www.linkedin.com/in/tristan-angelo-narido-3805012ab/" target="_blank"><i
                                class="bi bi-linkedin"></i></a>
                    </div>
                </div>

                <!-- Image Section -->
                <div class="image-section">
                    <img src="../../../../../public/assets/image.png" alt="">
                </div>
            </div>
        </section>
        <!------------------ End of About Me Section ------------------>

        <!------------------ Education, Licenses & Certifications, Honors & Awards section ------------------>
        <section class="page" id="other">
            <div class="other-container">

                <!-- Card for Education -->
                <div class="card">
                    <img src="../../../../../public/assets/school.jpg" alt="Education">
                    <div class="intro">
                        <h1>Education</h1>
                        <div class="info">
                            <h3><i class="bi bi-mortarboard-fill"></i> Jugaban National High School</h3>
                            <h4>Humanities and Social Sciences</h4>
                            <h5>2019 - 2020</h5>
                            <p>Humanities and Social Sciences: Explores society, culture, and thought, fostering critical
                                thinking and effective communication skills.</p>
                            <h3><i class="bi bi-mortarboard-fill"></i> Eastern Visayas State University Carigara Campus</h3>
                            <h4>Bachelor of Science in Information Technology</h4>
                            <h5>2020 - 2024</h5>
                        </div>
                    </div>
                </div>

                <!-- Card for Licenses & Certifications -->
                <div class="card">
                    <img src="../../../../../public/assets/cert.jpg" alt="Licenses & Certifications">
                    <div class="intro">
                        <h1>Licenses & Certifications</h1>
                        <div class="info">
                            <h3><i class="bi bi-card-text"></i> Eastern Visayas State University</h3>
                            <h4>Non-Teaching Personnel and Student's Orientation on the Conduct of Extension Services</h4>
                        </div>
                    </div>
                </div>

                <!-- Card for Honors & Awards -->
                <div class="card">
                    <img src="../../../../../public/assets/award.jpg" alt="Honors & Awards">
                    <div class="intro">
                        <h1>Honors & Awards</h1>
                        <div class="info">
                            <h3><i class="bi bi-award-fill"></i> Eastern Visayas State University</h3>
                            <h4>Academic Excellence Awardee</h4>
                            <h5>July 2023</h5>
                            <p>Outstanding academic performance during my stay at the university.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <!------------------ End of Education, Licenses & Certifications, Honors & Awards section ------------------>

        <!------------------ Skills Section ------------------>
        <section class="page" id="skills">

            <!-- Section Title -->
            <h1>My Skills</h1>

            <!-- Skill Container -->
            <div class="skill-container">

                <!-- HTML Skill -->
                <div class="my-skills">
                    <img src="../../../../../public/assets/html.png" alt="">
                    <h2>HTML</h2>
                    <p>
                        <!-- Description for HTML Skill -->
                        The HyperText Markup Language or HTML is the standard markup language for documents designed to
                        be displayed in a web browser. It defines the content and structure of web content.
                    </p>
                </div>

                <!-- CSS Skill -->
                <div class="my-skills">
                    <img src="../../../../../public/assets/css.png" alt="">
                    <h2>CSS</h2>
                    <p>
                        <!-- Description for CSS Skill -->
                        Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of
                        a document written in a markup language such as HTML or XML.
                    </p>
                </div>

                <!-- Bootstrap Skill -->
                <div class="my-skills">
                    <img src="../../../../../public/assets/bootstrap.png" alt="">
                    <h2>BOOTSTRAP</h2>
                    <p>
                        <!-- Description for Bootstrap Skill -->
                        Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web
                        development. It contains HTML, CSS and JavaScript-based design templates for typography, forms,
                        buttons, navigation, and other interface components.
                    </p>
                </div>

                <!-- Figma Skill -->
                <div class="my-skills">
                    <img src="../../../../../public/assets/figma.png" alt="">
                    <h2>FIGMA</h2>
                    <p>
                        <!-- Description for Figma Skill -->
                        Figma is a collaborative web application for interface design, with additional offline features
                        enabled by desktop applications for macOS and Windows.
                    </p>
                </div>

                <!-- Vue.js Skill -->
                <div class="my-skills">
                    <img src="../../../../../public/assets/vue.png" alt="">
                    <h2>VUE</h2>
                    <p>
                        <!-- Description for Vue.js Skill -->
                        Vue.js is an open-source model–view–viewmodel front end JavaScript library for building user
                        interfaces and single-page applications.
                    </p>
                </div>

                <!-- GitHub Skill -->
                <div class="my-skills">
                    <img src="../../../../../public/assets/github.png" alt="">
                    <h2>GITHUB</h2>
                    <p>
                        <!-- Description for GitHub Skill -->
                        GitHub, Inc. is an AI-powered developer platform that allows developers to create, store, manage and
                        share their code.
                    </p>
                </div>

                <!-- PHP Skill -->
                <div class="my-skills">
                    <img src="../../../../../public/assets/php.png" alt="">
                    <h2>PHP</h2>
                    <p>
                        <!-- Description for PHP Skill -->
                        PHP is a self-referentially acronym for PHP: Hypertext Preprocessor. Originally it supposedly meant
                        personal home page. It is an open source, server-side, HTML embedded scripting language used to
                        create dynamic Web pages.
                    </p>
                </div>

                <!-- MySQL Skill -->
                <div class="my-skills">
                    <img src="../../../../../public/assets/mysql.png" alt="">
                    <h2>MySQL</h2>
                    <p>
                        <!-- Description for MySQL Skill -->
                        MySQL is used to store data in tables that map to objects. Each table has a schema defining what
                        columns each row of the table will have. Developers can reliably store and retrieve many data types,
                        including text, numbers, dates, times, and even JSON.
                    </p>
                </div>

                <!-- VSCode Skill -->
                <div class="my-skills">
                    <img src="../../../../../public/assets/vscode.png" alt="">
                    <h2>VSCODE</h2>
                    <p>
                        <!-- Description for VSCode Skill -->
                        Visual Studio Code, also commonly referred to as VS Code, is a source-code editor developed by
                        Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting,
                        intelligent code completion, snippets, code refactoring, and embedded Git.
                    </p>
                </div>

            </div>
        </section>
        <!------------------ End of Skills Section ------------------>

        <!------------------ Contact Me section ------------------>
        <section class="page" id="contact">
            <h1>Contact Me</h1>
            <div class="contact-container">
                <!-- Email Contact Card -->
                <div class="contact-card">
                    <i class="card-icon bi bi-envelope-fill"></i>
                    <p>tristannarido@gmail.com</p>
                </div>
                <!-- Phone Contact Card -->
                <div class="contact-card">
                    <i class="card-icon bi bi-telephone-fill"></i>
                    <p>+639 518 522 623</p>
                </div>
                <!-- Location Contact Card -->
                <div class="contact-card">
                    <i class="card-icon bi bi-geo-alt-fill"></i>
                    <p>Carigara, Leyte</p>
                </div>
            </div>
        </section>
        <!------------------ End of Contact Me section ------------------>

    </main>
</template>

<script>

export default {
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        isActiveSection(sectionId) {
            // Get the current hash from the URL
            const currentHash = window.location.hash.substring(1);
            // Check if the current hash matches the sectionId
            return currentHash === sectionId;
        },
    },
};
</script>

<style scoped>
/*----------------------- Styling for the main content section -----------------------*/
.page {
    display: grid;
    place-items: center;
    min-height: 100vh;
    font-size: 4rem;
    background: var(--background-main);
    color: var(--text-main);
    text-shadow: 3px 3px 10px var(--shadow);
}

/*----------------------- Navigation Bar -----------------------*/
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    padding: 1px;
    background: #000000b0;
    backdrop-filter: blur(7.9px);
    -webkit-backdrop-filter: blur(7.9px);
    z-index: 1000;
    box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
}

/* Styles for the navigation bar brand */
.navbar-name {
    color: #ffffff;
    text-transform: uppercase;
    margin-left: 3%;
    font-size: 25px;
}

/* Styles for the navigation list (menu items) */
.nav-list {
    font-family: 'Montserrat', sans-serif;
    font-size: .99em;
    list-style: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 40%;
    height: 100vh;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1250;
    transform: translateX(-100%);
    transition: transform 0.5s;
    margin-right: 27%;
    border-radius: 0 30px 30px 0px;
    text-align: center;
}

/* Styles for individual navigation items */
.nav-item {
    margin: 1rem;
}

/* Styles for the active navigation item */
.nav-item.active {
    border-bottom: 2px solid #ffffff;
    text-align: center;
    border-width: 1px;
}

/* Styles for navigation links */
.nav-link {
    color: #ffffff;
    font-weight: 600;
}

/* Hover effect for navigation links */
.nav-link:hover {
    color: #ffffff;
}

/* Styles for the open navigation menu */
.open .nav-list {
    transform: translateX(0);
}

/* Styles for the menu toggle button */
.menu-toggle {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 3.6rem;
    height: 3.2rem;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
}

/* Styles for the hamburger icon */
.hamburger {
    width: 2.4rem;
    height: 3px;
    background-color: #ffffff;
    border-radius: 2px;
    border: none;
    transition: all 0.7s ease-out;
    z-index: 999999;
}

/* Styles for the lines of the hamburger icon */
.hamburger::before,
.hamburger::after {
    content: "";
    position: absolute;
    width: 2.4rem;
    height: 3px;
    background-color: #ffffff;
    border-radius: 2px;
    border: none;
}

/* Transformation for the top line of the hamburger icon */
.hamburger::before {
    transform: translateY(-8px);
}

/* Transformation for the bottom line of the hamburger icon */
.hamburger::after {
    transform: translateY(8px);
}

/* Styles for the open state of the hamburger icon */
.open .hamburger {
    background: transparent;
}

/* Transformation for the top line of the hamburger icon in open state */
.open .hamburger::before {
    transform-origin: (0, 0);
    transform: rotate(45deg);
}

/* Transformation for the bottom line of the hamburger icon in open state */
.open .hamburger::after {
    transform-origin: (0, 0);
    transform: rotate(-45deg);
}

/* Media query for larger screens */
@media screen and (min-width: 768px) {

    .nav-list {
        position: initial;
        width: 100px;
        height: initial;
        background-color: transparent;
        justify-content: initial;
        flex-direction: row;
        transform: initial;
        transition: initial;
    }

    /* Smooth transition for navigation links on larger screens */
    .nav-link {
        transition: all 0.1s;
    }

    /* Hide the menu toggle button on larger screens */
    .menu-toggle {
        display: none;
    }
}

@media screen and (min-width: 360px) {

    .navbar-name {
        margin-right: 10px;
    }
}

/*----------------------- Home Section -----------------------*/
#home .img {
    background: url('../../../../../public/assets/hd.jpg');
    height: 100%;
    width: 100%;
    position: absolute;
    background-size: cover;
    background-position: center;
}

/* Styling for the overlay on top of the background image */
#home .overlay {
    height: 100%;
    opacity: 0.7;
    width: 100%;
    background: linear-gradient(to bottom, #ffffff, #000000);
    position: absolute;
}

/* Styling for the left header section */
.header-heading-left {
    width: 450px;
    position: absolute;
    left: 18%;
    top: 50%;
    transform: translate(-30%, -50%);
    animation: fade-right 2s;
}

/* Keyframes animation for fading in from the right */
@keyframes fade-right {
    0% {
        opacity: 0;
        transform: translateY(-50%) translateX(-50%) scale(0.9);
    }

    100% {
        opacity: 1;
        transform: translateY(-50%) translateX(-30%) scale(1);
    }
}

/* Styling for h5 in the left header section */
.header-heading-left h5 {
    font-size: 30px;
    color: #000000;
}

/* Styling for h1 in the left header section */
.header-heading-left h1 {
    font-size: 50px;
    color: #000000;
}

/* Styling for the name in the left header section */
.header-heading-left .name {
    font-weight: 750;
    color: #ffffff;
    font-size: 50px;
}

/* Styling for the right header section */
.header-heading-right {
    width: 450px;
    position: absolute;
    right: 18%;
    top: 50%;
    transform: translate(30%, 25%);
    animation: fade-left 2s;
}

/* Keyframes animation for fading in from the left */
@keyframes fade-left {
    0% {
        opacity: 0;
        transform: translateY(25%) translateX(50%) scale(0.9);
    }

    100% {
        opacity: 1;
        transform: translateY(25%) translateX(30%) scale(1);
    }
}

/* Styling for h5 in the right header section */
.header-heading-right h5 {
    font-size: 30px;
    text-align: end;
    color: #000000;
    font-weight: bold;
}

/* Styling for the hr element */
hr {
    position: relative;
    border: none;
    height: 5px;
    background: #ffffff;
    width: 320px;
    margin-left: auto;
    margin-right: 0;
}

/* Styling for the name in the right header section */
.header-heading-right .name {
    text-align: end;
    font-weight: 600;
    color: #ffffff;
    font-size: 35px;
}

/* Styling for the person container */
.person {
    --transform-speed: 250ms;
    max-width: 35rem;
    margin-inline: auto;
    position: relative;
    animation: fade-up 2s;
}

/* Keyframes animation for fading up the person container */
@keyframes fade-up {
    0% {
        opacity: 0;
        transform: translateY(-100px) translateX(0) scale(0.9);
    }

    100% {
        opacity: 1;
        transform: translateY(0) translateX(0) scale(1);
    }
}

/* Styling for the person container */
.person_container {
    aspect-ratio: 1 / 1.35;
    display: grid;
    align-items: end;
    border-radius: 0 0 100vw 100vw;
    overflow: hidden;
    transition: transform var(--transform-speed) ease-in-out;
}

/* Hover effect on the person container */
.person_container:hover {
    transform: scale(1.1);
}

/* Styling for the circle element */
.circle {
    position: absolute;
    inset: auto 0 0;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    width: 100%;
    margin-inline: auto;
    border-radius: 50%;
}

/* Styling for the avatar element */
.avatar {
    position: relative;
    z-index: 2;
    max-width: 60rem;
    transform: scale(1.4);
    transition: transform var(--transform-speed) ease-in-out;
}

/* Hover effect on the avatar within the person container */
.person_container:hover .avatar {
    transform: scale(1.4) translateY(-1.7rem);
}

/* Media query for screens with a maximum width of 768px */
@media screen and (max-width: 768px) {

    /* Responsive styling for the left header section */
    .header-heading-left {
        width: 250px;
        position: absolute;
        left: 18%;
        top: 50%;
        transform: translate(-40%, -110%);
        transition: left 0.5s ease-in-out;
    }

    /* Responsive styling for h5 in the left header section */
    .header-heading-left h5 {
        font-size: 30px;
        color: #000000;
    }

    /* Responsive styling for h1 in the left header section */
    .header-heading-left h1 {
        font-size: 40px;
        color: #000000;
    }

    /* Responsive styling for the name in the left header section */
    .header-heading-left .name {
        font-weight: 750;
        color: #ffffff;
        font-size: 45px;
    }

    /* Responsive styling for the right header section */
    .header-heading-right {
        width: 250px;
        position: absolute;
        right: 18%;
        top: 50%;
        transform: translate(40%, 70%);
    }

    /* Responsive styling for h5 in the right header section */
    .header-heading-right h5 {
        font-size: 20px;
        text-align: end;
        color: #000000;
        font-weight: bold;
    }

    /* Responsive styling for hr element */
    hr {
        position: relative;
        border: none;
        height: 5px;
        background: #ffffff;
        width: 160px;
        margin-left: auto;
        margin-right: 0;
    }

    /* Responsive styling for the name in the right header section */
    .header-heading-right .name {
        text-align: end;
        font-weight: 400;
        color: #ffffff;
        font-size: 30px;
    }
}

/* Media query for screens with a maximum width of 360px */
@media screen and (max-width: 360px) {

    /* Responsive styling for the left header section */
    .header-heading-left {
        width: 200px;
        position: absolute;
        left: 18%;
        top: 50%;
        transform: translate(-20%, -190%);
        animation: fade-right-header 2s;
        z-index: 4;
    }

    /* Responsive styling for h5 in the left header section */
    .header-heading-left h5 {
        font-size: 15px;
        color: #000000;
    }

    /* Responsive styling for h1 in the left header section */
    .header-heading-left h1 {
        font-size: 20px;
        color: #ffffff;
    }

    /* Responsive styling for the name in the left header section */
    .header-heading-left .name {
        font-weight: 750;
        color: #000000;
        font-size: 20px;
        -webkit-text-fill-color: #000000;
        -webkit-text-stroke-width: 2px;
    }

    /* Keyframes animation for fading in from the right (for smaller screens) */
    @keyframes fade-right-header {
        0% {
            opacity: 0;
            transform: translateY(-190%) translateX(-50%) scale(0.9);
        }

        100% {
            opacity: 1;
            transform: translateY(-190%) translateX(-20%) scale(1);
        }
    }

    /* Responsive styling for the right header section */
    .header-heading-right {
        width: 450px;
        position: absolute;
        right: 18%;
        top: 50%;
        transform: translate(10%, 130%);
        z-index: 5;
        animation: fade-right-left 2s;
    }

    /* Responsive styling for h5 in the right header section */
    .header-heading-right h5 {
        font-size: 15px;
        text-align: end;
        color: #ffffff;
    }

    /* Responsive styling for hr element */
    hr {
        position: relative;
        border: none;
        height: 5px;
        background: #ffffff;
        width: 110px;
        margin-left: auto;
        margin-right: 0;
    }

    /* Responsive styling for the name in the right header section */
    .header-heading-right .name {
        text-align: end;
        font-weight: 600;
        color: #ffffff;
        font-size: 15px;
    }

    /* Keyframes animation for fading in from the right and moving up (for smaller screens) */
    @keyframes fade-right-left {
        0% {
            opacity: 0;
            transform: translateY(130%) translateX(30%) scale(0.9);
        }

        100% {
            opacity: 1;
            transform: translateY(130%) translateX(10%) scale(1);
        }
    }

    /* Styling for the person container on smaller screens */
    .person {
        --transform-speed: 250ms;
        max-width: 20rem;
        margin-inline: auto;
        position: relative;
    }

    /* Styling for the avatar on smaller screens */
    .avatar {
        position: relative;
        z-index: 2;
        max-width: 20rem;
        transform: scale(1.4);
        transition: transform var(--transform-speed) ease-in-out;
    }
}

/*----------------------- About Section -----------------------*/
#about {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

/* Main container styles */
.container {
    width: 90%;
    display: block;
    margin: auto;
    padding-top: 7%;
    /* Adjusted padding for better spacing */
}

/* Left content section */
.content-section {
    float: left;
    width: 50%;
}

/* Right image section */
.image-section {
    float: right;
    width: 40%;
}

/* Responsive styling for images */
.image-section img {
    width: 100%;
    height: auto;
}

/* Title styling in the content section */
.content-section .title {
    text-transform: uppercase;
    font-size: 28px;
    font-weight: 1000;
    border-bottom: 2px solid #000000;
    width: 200px;
}

/* Heading 3 styling in the content section */
.content-section .content h3 {
    margin-top: 10px;
    color: #969696;
    font-size: 20px;
    transform: uppercase;
}

/* Paragraph styling in the content section */
.content-section .content p {
    margin-top: 10px;
    font-family: sans-serif;
    font-size: 20px;
    font-weight: lighter;
    line-height: 1.5;
}

/* Button styling in the content section */
.content-section .content .button {
    margin-top: 25px;
    padding: 5px 20px;
    border: unset;
    border-radius: 15px;
    color: #212121;
    z-index: 1;
    background: #ffffff;
    width: 200px;
    position: relative;
    font-weight: bolder;
    font-size: 20px;
    transition: all 250ms;
    overflow: hidden;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
}

/* Anchor tag styling within the button */
.content-section .content .button a {
    text-decoration: none;
    color: inherit;
}

/* Hover effect for the button */
.content-section .content .button:hover {
    color: #e8e8e8;
}

/* Pseudo-element for the button background */
.content-section .content .button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 15px;
    background-color: #212121;
    z-index: -1;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: all 250ms;
}

/* Hover effect for the button with pseudo-element */
.content-section .content .button a:hover {
    color: #ffffff;
}

/* Expand background effect on button hover */
.content-section .content .button:hover::before {
    width: 100%;
}

/* Social icons section */
.content-section .social {
    width: 60%;
    left: 0;
    top: 0;
    transform: translateX(2%) translateY(-25%)
}

/* Styling for social icons */
.content-section .social i {
    color: #000000;
    font-size: 30px;
    padding: 0 15px;
}

/* Hover effect for social icons */
.content-section .social i:hover {
    color: #969696;
}

/* Media query for smaller screens */
@media screen and (max-width: 768px) {

    /* Adjusted styles for better responsiveness */
    .container {
        width: 80%;
        display: block;
        margin: auto;
        padding-top: 50px;
    }

    /* Adjusted styles for smaller screens */
    .content-section {
        float: none;
        width: 100%;
        display: block;
        margin: auto;
    }

    /* Social icons section adjusted for smaller screens */
    .content-section .social {
        width: 50%;
        position: relative;
        left: 0;
        top: 0;
        transform: translate(50%, -50%);
    }

    /* Styling for social icons adjusted for smaller screens */
    .content-section .social i {
        color: #000000;
        font-size: 30px;
        padding: 0 10px;
    }

    /* Title alignment and font size adjusted for smaller screens */
    .content-section .title {
        text-align: center;
        font-size: 19px;
    }

    /* Button styles adjusted for smaller screens */
    .content-section .content .button {
        margin-top: 10%;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    /* Anchor tag styles adjusted for smaller screens */
    .content-section .content .button a {
        padding: 9px 10px;
    }

    /* Adjusted styles for image section on smaller screens */
    .image-section {
        float: none;
        width: 100%;
        display: block;
        margin: auto;
    }
}

/* Media query for even smaller screens */
@media screen and (max-width: 360px) {

    /* Title alignment adjusted for very small screens */
    .container .title {
        text-align: start;
    }

    /* Social icons section adjusted for very small screens */
    .content-section .social {
        width: 90%;
        position: relative;
        left: 0;
        top: 0;
        transform: translate(20%, -20%);
    }
}

/* Responsive styles for smaller screens */
@media screen and (max-width: 768px) {
    #skills {
        padding: 20px;
    }
}

/*----------------------- Other Section -----------------------*/
#other {
    display: flex;
    justify-content: center;
    height: 100vh;
    align-items: center;
    background: whitesmoke;
    text-align: start;
    width: 100%;
}

/* Styles for the container within the 'other' section */
.other-container {
    display: flex;
}

/* Styles for the card within the 'other-container' */
.card {
    height: 460px;
    margin: 30px;
    box-shadow: 5px 5px 20px #000000;
    overflow: hidden;
    border-radius: 20px;
}

/* Styles for the image within the card */
.other-container .card img {
    height: 500px;
    width: 350px;
    border-radius: 20px;
    transition: .5s;
}

/* Styles for the intro section within the card */
.intro {
    height: 40px;
    width: 350px;
    padding: 6px;
    box-sizing: border-box;
    position: absolute;
    background: #3b3b3bb4;
    bottom: 0px;
    transition: .5s;
    font-family: 'Poppins', sans-serif;
}

/* Styles for headings within the intro section */
.other-container .card .intro h1 {
    font-size: 26px;
    color: #ffffff;
    text-align: start;
    margin-left: 1%;
    margin-bottom: 5%;
}

/* Styles for the heading h3 within the intro section */
.other-container .card .intro h3 {
    text-align: start;
    font-size: 20px;
    font-weight: bold;
    visibility: hidden;
    opacity: 0;
    color: #ffffff;
    margin-left: 1%;
}

/* Styles for the heading h4 within the intro section */
.other-container .card .intro h4 {
    font-family: 'Poppins', sans-serif;
    text-align: start;
    margin-left: 2%;
    font-size: 20px;
    font-weight: 400;
    visibility: hidden;
    opacity: 0;
    color: #ffffff;
}

/* Styles for the heading h5 within the intro section */
.other-container .card .intro h5 {
    text-align: start;
    margin-left: 2%;
    font-size: 15px;
    visibility: hidden;
    opacity: 0;
    color: #ffffff;
}

/* Styles for paragraphs within the intro section */
.other-container .card .intro p {
    margin-left: 2%;
    text-align: start;
    font-size: 15px;
    visibility: hidden;
    opacity: 0;
    color: #ffffff;
}

/* Hover styles for the card */
.card:hover {
    cursor: pointer;
}

/* Hover styles for the intro section within the card */
.card:hover .intro {
    height: 460px;
    bottom: 0;
    background: #000000b9;
}

/* Hover styles for paragraphs and headings within the card */
.other-container .card:hover p {
    opacity: 1;
    visibility: visible;
}

/* Hover styles for paragraphs and headings within the card */
.other-container .card:hover h3,
.other-container .card:hover h4,
.other-container .card:hover h5 {
    opacity: 1;
    visibility: visible;
}

/* Hover styles for the card image */
.card:hover img {
    transform: scale(1.1) rotate(-3deg);
}

/* Media query for screens with a maximum width of 768px */
@media screen and (max-width: 768px) {

    /* Styles for the other-container in smaller screens */
    .other-container {
        overflow: auto;
        display: flex;
        scroll-snap-type: x mandatory;
        gap: 24px;
        width: 355px;
    }

    /* Styles for the card in the 'other-container' for smaller screens */
    .card {
        flex-shrink: 0;
        scroll-snap-align: start;
        scroll-snap-stop: always;
        display: flex;
        flex-direction: column;
        border: 1px solid #e9e9e9;
        border-radius: 8px;
        box-shadow: 0 3px 16px 2px rgba(0, 0, 0, .1);
        position: relative;
        top: 0;
    }
}

/* ----------------------- My Skills Section -----------------------*/
#skills {
    padding: 15px 9%;
    padding-bottom: 100px;
    background: #6d6d6d;
}

/* Styles for the Skills section heading */
#skills h1 {
    padding-top: 40px;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    padding-bottom: 15px;
    border-bottom: 5px solid #ffffff;
    color: #ffffff;
    text-shadow: 0 5px 10px #ffffff33;
    font-size: 30px;
    font-weight: 900;
}

/* Grid layout for the skill containers */
#skills .skill-container {
    padding-top: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 35px;
}

/* Styles for individual skill containers */
#skills .skill-container .my-skills {
    border-top: 10px solid #000000;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    text-align: center;
    padding: 30px 20px;
    background: #ffffff;
    transition: .3s;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
}

/* Styles for skill images within the containers */
#skills .skill-container .my-skills img {
    height: 80px;
}

/* Styles for skill titles within the containers */
#skills .skill-container .my-skills h2 {
    color: #000000;
    font-size: 22px;
    padding: 10px 0;
}

/* Styles for skill descriptions within the containers */
#skills .skill-container .my-skills p {
    color: #000;
    font-size: 15px;
    line-height: 1.8;
}

/* Hover effect for skill containers */
#skills .skill-container .my-skills:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, .3);
    transform: scale(1.03);
    cursor: pointer;
}

/*----------------------- Contact Section -----------------------*/
#contact {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: whitesmoke;
}

/* Contact Section Heading */
#contact h1 {
    padding-top: 40px;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    padding-bottom: 15px;
    border-bottom: 5px solid #000000;
    color: #000000;
    text-shadow: 0 5px 10px #ffffff33;
    font-size: 30px;
    font-weight: 900;
}

/* Contact Container */
.contact-container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: auto;
    padding-bottom: 100px;
}

/* Contact Card Styling */
.contact-card {
    background-color: #6d6d6d;
    padding: 0 20px;
    margin: 0 10px;
    width: calc(33% - 20px);
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000000;
    box-shadow: 0 4px 30px #0000001a;
    backdrop-filter: blur(18.7px);
    -webkit-backdrop-filter: blur(18.7px);
    border-top: 10px solid #000000;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}

/* Contact Card Icon Styling */
.card-icon {
    font-size: 28px;
    background: #ffffff;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border-radius: 50%;
    transition: 0.3s linear;
}

/* Hover Effect for Contact Card Icon */
.contact-card:hover .card-icon {
    background: none;
    transform: scale(1.6);
    color: #ffffff;
}

/* Contact Card Text Styling */
.contact-card p {
    margin-top: 20px;
    font-weight: 300;
    letter-spacing: 2px;
    max-height: 0;
    opacity: 0;
    transition: 0.3s linear;
    font-size: 14px;
    color: #ffffff;
}

/* Hover Effect for Contact Card Text */
.contact-card:hover p {
    max-height: 40px;
    opacity: 1;
}

/* Responsive Styling for Contact Section */
@media screen and (max-width: 768px) {

    /* Adjusting the layout for smaller screens in the contact-container */
    .contact-container {
        flex-direction: column;
    }

    /* Adapting the width and margin for contact-card in smaller screens */
    .contact-card {
        width: 100%;
        max-width: 300px;
        margin: 10px 0;
    }
}

/* ----------------------- Logout Button ----------------------- */
.logout {
    font-size: 19px;
    margin-top: -7%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
</style>
