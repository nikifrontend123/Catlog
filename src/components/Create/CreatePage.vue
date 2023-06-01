<template>
   <div class="">
      <NavLink active="Create"></NavLink>
      <SearchBar></SearchBar>
      <section class="mt-2">
         <div class="container">
            <div class="d-flex justify-content-between  w-100 my-3">
               <div class="text-center">
                  <p class="d-flex align-items-center m-0 fs-4">Create New Catelog</p>
               </div>
               <div class="">
                  <button class="btn"><i class="bi bi-download"></i> Import</button>
               </div>
            </div>
            <form action="" method="post" style="text-align: left;">
               <div class="">
                  <TextInputs class="w-100 " name="Catelog Name" type="text" design="floating"></TextInputs>
               </div>
               <div class="">
                  <TextInputs class="w-100 " name="Article No." type="text" design="floating"></TextInputs>
               </div>
               <div class="">
                  <TextInputs class="w-100 " name="Sale Price" type="text" design="floating"></TextInputs>
               </div>
               <div class="">
                  <TextInputs class="w-100 " name="Panna(inch)" type="text" design="floating"></TextInputs>
               </div>
               <div class="">
                  <TextInputs class="w-100 " name="Fabric Name" type="text" design="floating"></TextInputs>
               </div>
               <div class="">
                  <TextInputs class="w-100 " name="Fc/unit" type="text" design="floating"></TextInputs>
               </div>
               <div class="">
                  <TextInputs class="w-100 " name="Unit" type="text" design="floating"></TextInputs>
               </div>
               <div class="form-floating ">
                  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                  <label for="floatingTextarea">Search Tags</label>
               </div>
               <span class="" style="font-size: 13px; color: #c2c2c2;">Note: Define each tag seprated by comma, ex:shirt,red,samll.</span>
               <div class="form-floating mt-3">
                  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                  <label for="floatingTextarea">Note for reference</label>
               </div>
               <span class="" style="font-size: 13px; color: #c2c2c2;">Note: It's internal note, will not be visible to fabricator.</span>
               <div class="form-floating mt-3">
                  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                  <label for="floatingTextarea">Instruction for fabricator</label>
               </div>
               <span class="" style="font-size: 13px; color: #c2c2c2;">Note: Write things need special attention by fabricator</span>
               <div class="form-floating mt-3 mb-3">
                  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                     <option selected>Select Defauit Assignee</option>
                     <option value="1">One</option>
                     <option value="2">Two</option>
                     <option value="3">Three</option>
                  </select>
                  <label for="floatingSelect">Catelog Assignee</label>
               </div>
               <div class="form-floating mb-3">
                  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                     <option selected>Narender</option>
                     <option value="1">One</option>
                     <option value="2">Two</option>
                     <option value="3">Three</option>
                  </select>
                  <label for="floatingSelect">Catelog Manager</label>
               </div>

               <div class="border p-2 rounded mb-3">
                  <label for="">Toggle Catelog Assess</label>
                  <div class="form-check form-switch">
                     <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                     <label class="form-check-label" for="flexSwitchCheckDefault">Access Blocked</label>
                  </div>
               </div>
               <div class="border p-2 rounded mb-3">
                  <div class="">
                     <label for="formFile" class="form-label">Upload Image</label>
                     <input class="form-control" type="file" id="formFile">
                  </div>
               </div>
               <div class="border p-2 rounded mb-3">
                  <div class="">
                     <label for="formFile" class="form-label">Upload PDF</label>
                     <input class="form-control" type="file" id="formFile">
                  </div>
               </div>
               <div class="d-flex justify-content-between">
                  <button class="btn btn-primary w-100 m-2">Reset Fields</button>
                  <button class="btn btn-primary w-100 m-2">Save Details</button>
               </div>
            </form>
         </div>
      </section>

   </div>
</template>

<script>
import TextInputs from '../InputsType/TextInputs.vue';
import NavLink from '../Navbar/NavLink.vue';
import SearchBar from '../SearchBar/SearchBar.vue';

export default {
   components: { TextInputs, NavLink, SearchBar }
}
</script>

<style lang="scss" scoped></style>