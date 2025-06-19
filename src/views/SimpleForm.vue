<template>
  <div>
    <h2>Create an event</h2>

    <form @submit.prevent="sendForm">
      <BaseSelect 
        :options="categories"
        v-model="event.category"
        label="Select a category"
      />

      <!-- <pre>{{ JSON.stringify(event, null, 2) }}</pre> -->

      <fieldset>
        <legend>Name & describe your event</legend>

        <BaseInput
          v-model="event.title"
          label="Title"
          type="text"
          error="This input has an error"
        /> <br>

        <BaseInput 
          v-model="event.description"
          label="Description"
          type="text"
        />
      </fieldset>

      <h3>Where is your event?</h3>

      <BaseInput 
        v-model="event.location"
        label="Location"
        type="text"
      />

      <fieldset>
        <legend>Are pets allowed?</legend>

        <div>
          <BaseRadioGroup 
            v-model="event.pets"
            name="pets"
            :options="petOptions"
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Extras</legend>
        
        <div>
          <BaseCheckBox
            v-model="event.extras.catering"
            label="Catering"
          />
        </div>

        <div>
          <BaseCheckBox
            v-model="event.extras.music"
            label="Music"
          />
        </div>
      </fieldset>

      <button class="button -fill-gradient" type="submit">Submit</button>
    </form>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import BaseCheckBox from '@/components/BaseCheckBox.vue';
  import BaseInput from '@/components/BaseInput.vue';
  import BaseRadioGroup from '@/components/BaseRadioGroup.vue';
  import BaseSelect from '@/components/BaseSelect.vue';
  import axios from 'axios';

  const categories = ref([
    'sustainability',
    'nature',
    'animal welfare',
    'housing',
    'education',
    'food',
    'community'
  ])

  const event = ref({
    category: '',
    title: '',
    description: '',
    location: '',
    pets: 1,
    extras: {
      catering: false,
      music: false
    }
  })

  const petOptions = ref([
    { label: 'Yes', value: 1 },
    { label: 'No', value: 0 },
  ])

  const sendForm = () => {
    axios.post(
      'https://my-json-server.typicode.com/Code-Pop/Vue-3-Forms/events',
      event.value
    )
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }
</script>

<style>
  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }
  legend {
    font-size: 28px;
    font-weight: 700;
    margin-top: 20px;
  }
</style>