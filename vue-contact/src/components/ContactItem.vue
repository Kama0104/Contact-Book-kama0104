<script setup>
import { Icon } from '@iconify/vue';
    const props =defineProps({
        contact:{
            type: Object,
            required: true,
        },
        index:{
            type: Number,
            required: true,
        },
    });
    defineEmits(['toggle-complete','edit-contact','update-contact', 'delete-contact']);

</script>

<template>
    <li>
        <input type="checkbox" :checked="contact.isCompleted" @input="$emit('toggle-complete',  index)">
        <div class="contact">
            <input v-if="contact.isEditing" type="text" 
            :value="contact.contact"
            @input="$emit('update-contact', $event.target.value, index)">
            <span v-else :class="{'completed-contact' : contact.isCompleted}">
                {{ contact.contact }}
            </span>
        </div>

        
        <div class="contact-actions">
            <Icon v-if="contact.isEditing" 
            icon="ph:check-circle" 
            class="icon" 
            color="#41b080" 
            width="22"
            @click="$emit('edit-contact', index)"/>

            <Icon v-else 
            icon="ph:pencil-fill" 
            class="icon" 
            color="#41b080" 
            width="22"
            @click="$emit('edit-contact', index)"/>

            <Icon icon="ph:trash" class="icon" color="#f95e5e" width="22"
            @click="$emit('delete-contact', contact.id)"/>
        </div>
    </li>
</template>



<style lang="scss" scoped>
li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 10px;
  background-color: #f1f1f1;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);

  &:hover {
    .contact-actions {
      opacity: 1;
    }
  }

  input[type="checkbox"] {
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

    &:checked {
      background-color: #41b080;
    }
  }

  .contact {
    flex: 1;


    input[type="text"] {
      width: 100%;
      padding: 2px 6px;
      border: 2px solid #41b080;
    }
  }

  .contact-actions {
    display: flex;
    gap: 6px;
    opacity: 0;
    transition: 150ms ease-in-out;
    .icon {
      cursor: pointer;
    }
  }
}
</style>