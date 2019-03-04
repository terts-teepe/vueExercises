<template>
    <div id="exerciseOne">
       <!-- 1) Fill the <p> below with your Name and Age - using Interpolation -->
        <p>VueJS is pretty cool - {{firstName}} {{lastName}} ({{age}})</p>
        <!-- 2) Output your age, multiplied by 3 -->
        <p>my age multiplied by 3: {{age * 3}}</p>
        <!-- 3) Call a function to output a random float between 0 and 1 (Math.random()) -->
        <p>{{random()}}</p>
        <!-- 4) Search any image on Google and output it here by binding the "src" attribute -->
        <div>
            <img v-bind:src="image" style="width:100px;height:100px">
        </div>
        <br></br>
        <!-- 5) Pre-Populate this input with your name (set the "value" attribute) -->
        <input type="text" v-bind:value="firstName">
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      firstName: 'Terts',
      lastName: 'Teepe',
      age: 27,
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/800px-Vue.js_Logo_2.svg.png'
    }
  },
  methods: {
    random: function(){
      return Math.random();
    }
  }
};
</script>

<style>

</style>
