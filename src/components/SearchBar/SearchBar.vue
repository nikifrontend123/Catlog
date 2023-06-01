<template>
    <div>
        <div class=" d-flex  d-flex justify-content-between align-items-center w-100 py-3">
            <div class="btn ">Reset</div>
            <input type="search" placeholder="Search" class="w-50">
            <button type="button" class="btn" data-bs-toggle="collapse" data-bs-target="#myCollapse">Sort
            </button>
            <button type="button" class="btn" data-bs-toggle="collapse" data-bs-target="#myCollapse">Filters
            </button>
        </div>
        <div class="collapse  mt-2" id="myCollapse">
            <div class="card card-body">
                <div class="first d-flex ">
                    <TextInputs class="w-100 me-1" name="Start Date" type="date" design="floating"></TextInputs>
                    <TextInputs class="w-100 " name="End Date" type="date" design="floating"></TextInputs>
                </div>
                <TextInputs class="w-100" name="Filter By Colour" type="text" design="floating"></TextInputs>
                <TextInputs class="w-100" name="Filter By Fabric" type="text" design="floating"></TextInputs>
                <div class="first d-flex">
                    <TextInputs class="w-100 me-1" name="Per Meter/KG Price Starts" type="date" design="floating"></TextInputs>
                    <TextInputs class="w-100 " name="Per Meter/KG Price End" type="date" design="floating"></TextInputs>
                </div>
                <TextInputs class="w-100" name="Filter By Processings" type="text" design="floating"></TextInputs>
                <TextInputs class="w-100" name="Sort Purchase By" type="text" design="floating"></TextInputs>
            </div>
        </div>
    </div>
</template>

<script>
        import TextInputs from '@/components/InputsType/TextInputs.vue';
    export default {
    components: { TextInputs }
    }
</script>

<style lang="scss" scoped>

</style>