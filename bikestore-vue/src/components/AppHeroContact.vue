<template>
  <div id="top"></div>
  <div class="lg:h-824 flex lg:flex-row flex-col bg-nav-text-green lg:bg-white z-0 mb-20">
    <div class="w-full lg:w-2/5 bg-primary-white">
      <div class="flex justify-start items-center lg:h-full">
        <div class="w-full flex flex-col text-left text-primary-white px-6 lg:px-10 my-10 lg:my-auto">
          <div class="text-nav-text-green font-black text-5xl lg:text-6xl xl:text-7xl font-inter mb-8">
            <p>Contacteer ons nu</p>
          </div>
          <div class="font-inter">
            <p class="mb-8 text-black">Ontdek jouw droomfiets met een gratis testrit bij ons! Of je nu door de stad wilt cruisen of de paden wilt verkennen, wij hebben de perfecte fiets voor jou. Ervaar het plezier van het rijden op een fiets die bij jou past. Boek nu jouw testrit en begin aan jouw fietsavontuur!</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex lg:w-3/5 bg-nav-text-green justify-center items-center py-20 lg:py-0">
      <form class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-primary-white w-85p sm:w-90p lg:w-4/5" @submit.prevent="submitForm">
        <div>
          <input v-model="email" class="bg-transparent border-2 border-white rounded-1 pb-1 pl-2 footer-form w-full h-10" placeholder="Emailadres" />
          <div v-if="emailError" class="text-red-900 text-sm">{{ emailError }}</div>
          <input v-model="name" class="bg-transparent border-2 border-white rounded-1 pb-1 pl-2 footer-form w-full h-10 mt-4" placeholder="Name" />
          <div v-if="nameError" class="text-red-900 text-sm">{{ nameError }}</div>
        </div>
        <div>
          <input v-model="phone" class="bg-transparent border-2 border-white rounded-1 pb-1 pl-2 footer-form w-full h-10" placeholder="Telefoon" />
          <div v-if="phoneError" class="text-red-900 text-sm">{{ phoneError }}</div>
          <input v-model="subject" class="bg-transparent border-2 border-white rounded-1 pb-1 pl-2 footer-form w-full h-10 mt-4" placeholder="Onderwerp" />
          <div v-if="subjectError" class="text-red-900 text-sm">{{ subjectError }}</div>
        </div>
        <textarea v-model="message" class="bg-transparent border-2 border-white rounded-1 pb-1 pl-2 footer-form w-full h-8 mt-2 sm:col-span-2" placeholder="Bericht"></textarea>
        <div v-if="messageError" class="text-red-900 text-sm">{{ messageError }}</div>
        <div class="flex items-center mt-4 sm:col-span-2">
          <input v-model="agree1" type="checkbox" id="agree1" name="agree1" class="bg-transparent border-2 border-white rounded-1 pb-1 footer-form w-6 h-6 mr-2" />
          <label for="agree1">Ik ontvang graag de nieuwsbrief</label>
        </div>
        <div class="flex items-center mt-4 sm:col-span-2">
          <input v-model="agree2" type="checkbox" id="agree2" name="agree2" class="bg-transparent border-2 border-white rounded-1 pb-1 footer-form w-6 h-6 mr-2" />
          <label for="agree2">Ik ga akkoord met het privacy statement</label>
        </div>
        <div v-if="checkboxError" class="text-red-900 text-sm">{{ checkboxError }}</div>

        <div class="text-left xl:text-right lg:col-span-2 lg:mt-2 mt-4">
          <button @click="submitForm" class="bg-nav-text-green text-primary-white font-regular py-2 px-4 rounded-1px font-sofia border-2 border-white transition-colors duration-400 delay-50 hover:bg-primary-white hover:text-nav-text-green">Verzenden</button>
        </div>

        <div v-if="formSuccess" class="mt-4 text-primary-white underline">Je vraag is succesvol verstuurd!</div>
      </form>
    </div>
  </div>
  <a href="#top" class="fixed right-4 bottom-4 text-white bg-fixed-nav-green p-2 rounded-full px-4 shadow-lg z-50"> Terug naar boven </a>
</template>
<script setup>
import { ref } from 'vue';

const email = ref('');
const name = ref('');
const phone = ref('');
const subject = ref('');
const message = ref('');
const agree1 = ref(false);
const agree2 = ref(false);

const emailError = ref('');
const nameError = ref('');
const phoneError = ref('');
const subjectError = ref('');
const messageError = ref('');
const checkboxError = ref('');
const formSuccess = ref(false);

defineExpose({
  formSuccess,
});

const submitForm = () => {
  let valid = true;

  if (!email.value) {
    emailError.value = 'Email is required';
    valid = false;
  } else {
    emailError.value = '';
  }

  if (!name.value) {
    nameError.value = 'Name is required';
    valid = false;
  } else {
    nameError.value = '';
  }

  if (!phone.value) {
    phoneError.value = 'Phone number is required';
    valid = false;
  } else {
    phoneError.value = '';
  }

  if (!subject.value) {
    subjectError.value = 'Subject is required';
    valid = false;
  } else {
    subjectError.value = '';
  }

  if (!message.value) {
    messageError.value = 'Message is required';
    valid = false;
  } else {
    messageError.value = '';
  }

  if (!agree2.value) {
    checkboxError.value = 'You must agree to the privacy statement';
    valid = false;
  }

  if (valid) {
    formSuccess.value = true;
    console.log('Form successfully submitted!');
    console.log(formSuccess.value);
    setTimeout(() => {
      resetForm();
      resetErrors();
    }, 200);
  }
};
const resetForm = () => {
  name.value = '';
  email.value = '';
  phone.value = '';
  subject.value = '';
  message.value = '';
  agree1.value = false;
  agree2.value = false;
};

const resetErrors = () => {
  emailError.value = '';
  nameError.value = '';
  phoneError.value = '';
  subjectError.value = '';
  messageError.value = '';
  checkboxError.value = '';
};
</script>
<style lang="scss">
input[type='checkbox'] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  background: transparent;
  border: 2px solid white;
  border-radius: 1px;
  position: relative;
}

input[type='checkbox']:checked::before {
  content: '';
  position: absolute;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  top: 2px;
  left: 7px;
  transform: rotate(45deg);
}
</style>
