<template>
    <div>
        <NavLink active="Manage" ></NavLink>

        Iam Manage
    </div>
</template>

<script>
import NavLink from '../Navbar/NavLink.vue';

export default {
    computed: {
        chats() {
            return this.$store.getters.getChats;
        }
    },
    components: { NavLink}
}
</script>

<style lang="scss" scoped></style>