<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>my age is: {{age}}</p>
        <button @click="changeName">Change Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <appUserDetail
                    :userAge="age" 
                    :name="name" 
                    :resetFn="resetName"></appUserDetail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <appUserEdit 
                    :userAge="age"
                    :userAgeFn="updateAge"></appUserEdit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function () {
            return {
                name: 'BOND',
                age: 27
            };
        },
        methods: {
            changeName() {
                this.name = 'JAMES BOND'
            },
            resetName() {
                this.name = 'JAMES'
            },
            updateAge() {
                this.age = 30
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
