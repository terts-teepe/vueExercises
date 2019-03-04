<template>
    <div class="container">
      <p>Excercise 1:</p>
      <hr></hr>
      <exercise-one></exercise-one>
      <br></br>
      <p>Excercise 2:</p>
      <hr></hr>
      <exercise-Two></exercise-Two>
      <p>Excercise 3:</p>
      <hr></hr>
      <exercise-Three></exercise-Three>
      <p>Excercise 4:</p>
      <hr></hr>
      <exercise-Four></exercise-Four>
      <p>Excercise 9:</p>
      <hr></hr>
      <exercise-Nine></exercise-Nine>
    </div>
</template>

<script>
import exerciseOne from './exerciseOne.vue';
import exerciseTwo from './exerciseTwo.vue';
import exerciseThree from './exerciseThree.vue';
import exerciseFour from './exerciseFour.vue';
import exerciseNine from './exerciseNine.vue';
import FullName from './FullName.vue';

export default {
  data() {
    return {
        fullName: 'Terts Teepe',
        email: '',
        password: '',
        storeData: 'Yes',
        submitted: false
    }
  },
  components: {
    'exercise-one': exerciseOne,
    'exercise-Two': exerciseTwo,
    'exercise-Three': exerciseThree,
    'exercise-Four': exerciseFour,
    'exercise-Nine': exerciseNine,
    'appFullName': FullName
  }
}
</script>

<style>

</style>
