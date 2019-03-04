<template>
    <div id="exerciseTwo">
        <!-- 1) Show an alert when the Button gets clicked -->
        <div>
            <button @click="showAlert">Show Alert</button>
        </div>
        <!-- 2) Listen to the "keydown" event and store the value in a data property (hint: event.target.value gives you the value) -->
        <div>
            <input type="text" v-on:keydown="value = $event.target.value">
            <p>{{ value }}</p>
        </div>
        <!-- 3) Adjust the example from 2) to only fire if the "key down" is the ENTER key -->
        <div>
            <input type="text" v-on:keydown.enter="value = $event.target.value">
            <p>{{ value }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            value: ''
        }
    },
    methods: {
        showAlert: function(){
            return alert('Hey, watch out!')
        }
    }
};
</script>

<style type="text/css">
    
</style>