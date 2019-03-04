<template>
    <div class="container">
      <hr></hr>
      <p>Excercise 1:</p>
      <hr></hr>
      <exercise-one></exercise-one>
      <br></br>
      <hr></hr>
      <p>Excercise 2:</p>
      <hr></hr>
      <exercise-Two></exercise-Two>
      <hr></hr>
      <p>Excercise 3:</p>
      <hr></hr>
      <exercise-Three></exercise-Three>
      <p>Excercise 4:</p>
      <hr></hr>
      <exercise-Four></exercise-Four>
      <hr></hr>
      <p>Excercise 5:</p>
      <hr></hr>
      <exercise-Five></exercise-Five>
      <hr></hr>
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
import exerciseFive from './exerciseFive.vue';
import exerciseNine from './exerciseNine.vue';


export default {
  components: {
    'exercise-one': exerciseOne,
    'exercise-Two': exerciseTwo,
    'exercise-Three': exerciseThree,
    'exercise-Four': exerciseFour,
    'exercise-Five': exerciseFive,
    'exercise-Nine': exerciseNine
  }
}
</script>

<style>

</style>
