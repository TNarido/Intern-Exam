<template>
    <div v-if="loading" class="spinner-border text-light" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>
    <div v-if="!loading" class="popup">
        <!-- Sign-up form -->
        <form @submit.prevent="registerUser" method="post">
            <h4>Sign up</h4>
            <!-- First Name input -->
            <div class="mb-3">
                <label for="firstName" class="form-label">First Name</label>
                <input type="text" class="form-control" id="firstName" name="firstName" v-model="firstName" required>
            </div>
            <!-- Last Name input -->
            <div class="mb-3">
                <label for="lastName" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="lastName" name="lastName" v-model="lastName" required>
            </div>
            <!-- Email input -->
            <div class="mb-3">
                <label for="email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" name="email" v-model="email" required>
            </div>
            <!-- Password input -->
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" name="password" v-model="password" required>
            </div>
            <!-- Confirm Password input -->
            <div class="mb-3">
                <label for="password_confirmation" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="password_confirmation" name="password_confirmation"
                    v-model="password_confirmation" required>
            </div>
            <!-- Submit button -->
            <button type="submit" class="button type mx-auto d-grid gap-2"><span class="btn-txt">Register</span></button>
            <!-- Sign-in link -->
            <div class="text">
                <span>Already have an account?</span> <a href="/">Sign in</a>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        // Initialize data properties for the component
        return {
            loading: false,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            password_confirmation: ''
        }
    },
    methods: {
        // Method to register a new user
        registerUser() {
            // Set loading to true to indicate that a request is in progress
            this.loading = true;

            // Create a user object with input data
            const user = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            };
            
            // Log the user object for debugging purposes
            console.log(user);

            // Send a POST request to the server with user data
            axios.post('http://127.0.0.1:8000/api/auth/register', user)
                .then(response => {
                    // Redirect to login page on successful registration
                    this.$router.push('/');
                    console.log("Registration successful!");
                })
                .catch(error => {
                    // Log any errors that occur during the registration process
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
