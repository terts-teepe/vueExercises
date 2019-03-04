<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{userAge}}</p>
        <button @click="userAgeFn()">Edit Age Through Parent</button>
        <hr>
        <button @click="editAge">Edit Age Through Bus</button>
    </div>
</template>

<script>
	import {eventBus} from '../main';

	export default {
		props: {
			userAge: Number,
			userAgeFn: Function
		},
		methods: {
			editAge() {
				this.userAge = 30;
				eventBus.$emit('ageWasEdited', this.userAge);
			}
		}
	}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
