<script setup>
import { reactive, defineEmits } from 'vue';
import ContactButton from "./contactbutton.vue";

const emit = defineEmits(["create-contact"]);

const contactState = reactive({
    name: "",
    lastname: "",
    phoneNumber: "",
    email: "",
    invalid: null,
    errMsg: "",
});

const createContact = () => {
    contactState.invalid = null;
    if (contactState.name !== "" && contactState.lastname !== "" && contactState.phoneNumber !== "" && contactState.email !== "") {
        // Emit the current values of name, lastname, phoneNumber, and email
        emit("create-contact", {
            name: contactState.name,
            lastname: contactState.lastname,
            phoneNumber: contactState.phoneNumber,
            email: contactState.email,
        });
        // Reset the input fields
        contactState.name = "";
        contactState.lastname = "";
        contactState.phoneNumber = "";
        contactState.email = "";
        return;
    }
    contactState.invalid = true;
    contactState.errMsg = "Please fill in all the required fields!";
};
</script>

<template>
    <div>
        <!-- Name Input -->
        <div class="input-wrap" :class="{'input-err': contactState.invalid && !contactState.name}">
            <input type="text" v-model="contactState.name" placeholder="Name" />
        </div>

        <!-- Lastname Input -->
        <div class="input-wrap" :class="{'input-err': contactState.invalid && !contactState.lastname}">
            <input type="text" v-model="contactState.lastname" placeholder="Lastname" />
        </div>

        <!-- Phone Number Input -->
        <div class="input-wrap" :class="{'input-err': contactState.invalid && !contactState.phoneNumber}">
            <input type="text" v-model="contactState.phoneNumber" placeholder="Phone Number" />
        </div>

        <!-- Email Input -->
        <div class="input-wrap" :class="{'input-err': contactState.invalid && !contactState.email}">
            <input type="text" v-model="contactState.email" placeholder="Email" />
        </div>

        <ContactButton @click="createContact()"/>
    </div>
    <p v-show="contactState.invalid" class="err-msg"> {{ contactState.errMsg }}</p>
</template>




<style lang="scss" scoped>
.input-wrap {
  display: flex;
  transition: 250ms ease;
  border: 2px solid #41b080;

  &.input-err {
    border-color: red;
  }

  &:focus-within {
    box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1),
      0 -2px 4px -2px rgb(0 0 0 / 0.1);
  }

  input {
    width: 100%;
    padding: 8px 6px;
    border: none;

    &:focus {
      outline: none;
    }
  }


}

.err-msg {
  margin-top: 6px;
  font-size: 12px;
  text-align: center;
  color: red;
}
</style>