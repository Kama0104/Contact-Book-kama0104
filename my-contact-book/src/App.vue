<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Global Styles */

body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

ul {
  list-style: none;
  padding: 0;
}

/* App Styles */

#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 32px;
  margin-bottom: 20px;
}

h2 {
  font-size: 24px;
  margin-bottom: 15px;
}

p {
  font-size: 16px;
  margin-bottom: 10px;
}

ul {
  margin-top: 10px;
}

li {
  margin-bottom: 5px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

/* Form Styles */

form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 10px;
}

input {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

input[type="submit"] {
  background-color: #4caf50;
  color: #fff;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

/* Contact List Styles */

.contact-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.contact-item:last-child {
  border-bottom: none;
}

.contact-details {
  flex: 1;
  margin-right: 10px;
}

.contact-actions {
  display: flex;
  align-items: center;
}

.contact-actions button {
  margin-left: 10px;
}

/* Contact Details Styles */

.contact-details-card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 4px;
  margin-top: 20px;
}
</style>
