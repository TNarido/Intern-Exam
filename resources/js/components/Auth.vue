<template>
    <div class="body">
        <router-view>
        </router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style>
/* Body styles */
.body {
    background-image: url('../../../public/assets/background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin: 0;
    height: 100vh;
    overflow: hidden;
}

/* Popup styles */
.popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 26px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.63) 0.01%, #FFF 100%);
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    color: #000000;
    overflow: hidden;
    z-index: +1;
    width: 25%;
    /* Initial width for larger screens */
    max-width: 400px;
    transition: box-shadow 0.5s ease-in-out;
    font-family: 'Poppins', sans-serif;
}

/* Input group styles */
.input-group {
    border: 1px solid black;
    border-radius: 6px;
}

/* Heading styles */
h4 {
    text-align: center;
    margin-top: 6%;
    margin-bottom: 6%;
    font-weight: 950;
}

/* Button styles */
.button {
    height: 40px;
    width: 200px;
    position: relative;
    background-color: transparent;
    cursor: pointer;
    border: 2px solid #000000;
    overflow: hidden;
    border-radius: 10px;
    color: #000000;
    ;
    transition: all 0.3s ease-in-out;
    margin-bottom: 5%;
    margin-top: 10%;
}

/* Button text styles */
.btn-txt {
    z-index: 1;
    font-weight: 800;
    letter-spacing: 5px;
    margin-top: 3%;
}

/* Button type styles */
.type::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    transition: all 0.3s ease-in-out;
    background-color: #000000;
    border-radius: 30px;
    visibility: hidden;
    height: 10px;
    width: 10px;
    z-index: -1;
}

/* Button hover styles */
.button:hover {
    color: #ffffff;
    border: none;
}

/* Button type hover styles */
.type:hover::after {
    visibility: visible;
    transform: scale(100) translateX(2px);
}

/* Text styles */
.text {
    font-size: 90%;
    text-align: center;
    margin-bottom: 5%;
}

.spinner-border {
    /* Make it center */
    margin-left: 40%;
    margin-top: 14%;
    width: 300px;
    height: 300px;
}

/* Media queries for responsive design */
@media only screen and (max-width: 1000px) and (min-width: 800px) {
    .popup {
        width: 90%;
        /* Adjusted width for screens between 800px and 1000px */
    }
}

@media only screen and (max-width: 800px) and (min-width: 600px) {
    .popup {
        width: 90%;
        /* Adjusted width for screens between 600px and 800px */
    }
}

@media only screen and (max-width: 600px) and (min-width: 360px) {
    .popup {
        width: 80%;
        /* Adjusted width for screens between 600px and 800px */
    }
}
</style>
