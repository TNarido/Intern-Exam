<template>
    <div v-if="loading" class="spinner-border text-light" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div v-if="!loading" class="popup">
        <form @submit.prevent="loginUser" method="post">
            <h4>Sign in</h4>
            <!-- Email input -->
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-envelope"></i></span>
                    <input type="email" class="form-control" id="email" name="email" v-model="email" required>
                </div>
            </div>
            <!-- Password input -->
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-key"></i></span>
                    <input type="password" class="form-control" id="password" name="password" v-model="password" required>
                </div>
            </div>
            <!-- Submit button -->
            <button type="submit" class="button type mx-auto d-grid gap-2"><span class="btn-txt">Login</span></button>
            <!-- Sign-up link -->
            <div class="text">
                <span>Don't have an account?</span> <a href="/register">Sign up</a>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        // Initialize data properties for the component
        return {
            loading: false,
            email: '',
            password: ''
        }
    },
    methods: {
        // Method to log in a user
        loginUser() {
            // Set loading to true to indicate that a request is in progress
            this.loading = true;

            // Create a user object with login credentials
            const user = {
                email: this.email,
                password: this.password
            };

            // Log the user object for debugging purposes
            console.log(user);

            // Send a POST request to the server with user login data
            axios.post('http://127.0.0.1:8000/api/auth/login', user)
                .then(response => {

                    // Redirect to home page on successful login
                    this.$router.push('/home');
                    console.log("Login Successfully!");
                })
                .catch(error => {
                    // Log any errors
                    console.log(error);
                })
                .finally(() => {
                    // Set loading to false regardless of success or failure
                    this.loading = false;
                });
        }
    }
}
</script>

<style scoped></style>
