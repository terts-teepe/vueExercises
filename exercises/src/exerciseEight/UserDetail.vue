<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{name}}</p>
        <p>User Age: {{userAge}}</p>
        <button @click="resetFn()">Reset Name</button>
    </div>
</template>

<script>
	import {eventBus} from '../main';

	export default {
		props: {
			name: String,
			resetFn: Function,
			userAge: Number
		},
		created() {
			eventBus.$on('ageWasEdited', (age) => {
				this.userAge = age;
			});
		}
	}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
