<template>
    <nav >
        <div class="nav d-flex justify-content-between nav-tabs py-2" style="font-size: 15px; font-weight: 500;" id="nav-tab" role="tablist">
            <a class="nav-link " :class="active === 'Create' ? 'active' : ''" href="/">Create</a>
            <a class="nav-link " :class="active === 'Draft' ? 'active' : ''" href="/DraftPage">Draft</a>
            <a class="nav-link " :class="active === 'Live' ? 'active' : ''" href="/LivePage">Live</a>
            <a class="nav-link " :class="active === 'Manage' ? 'active' : ''" href="/ManagerPage">Manage</a>
        </div>
    </nav>
</template>

<script>
export default {
    props: ['active']
}
</script>