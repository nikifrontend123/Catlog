<template>
    <div>
        <NavLink active="Live"></NavLink>
        <SearchBar></SearchBar>
        <div class="list container  w-100 justify-content-center align-items-center mt-3" style="padding-bottom: 80px;">
            <div v-for="(list, index) in lists" :key="index" class="">
                <div class="btnlist w-100">
                    <div class="border-none cursor-pointer d-flex justify-content-center w-100 " @click="showCatelog(list)">
                        <img :src="`${publicPath}${list.img}`" alt="">
                    </div>
                </div>
            </div>
            <!-- Modal -->
            <div v-if="Object.keys(activeCatelog).length !== 0">
                <div class="offcanvas offcanvas-end show" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop"
                    aria-labelledby="staticBackdropLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="staticBackdropLabel">{{ activeCatelog.tag }}</h5>
                        <div class="d-flex justify-content-end w-100">
                            <button type="button" class="btn eabtn fs-5 text-secondary p-0 me-3 "><i
                                    class="bi bi-chevron-down"></i></button>
                            <button type="button" class="btn eabtn fs-5 text-secondary p-0  "><i
                                    class="bi bi-pencil"></i></button>
                        </div>
                        <button type="button" class="btn" @click="hideCatelog()"><i class="bi bi-x fs-4"></i></button>
                    </div>
                    <div class="offcanvas-body">
                        <div class="img w-100 border border-rounded">
                            <img style="width: 100%; " :src="`${publicPath}${activeCatelog.img}`" alt="">
                        </div>
                        <div class="box mt-2">
                            <table class="table table-striped table-hover">
                                <tbody>
                                    <tr>
                                        <th scope="row">Name</th>
                                        <td>{{ activeCatelog.name }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Sale Price</th>
                                        <td>{{ activeCatelog.sp }}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Panna</th>
                                        <td>{{ activeCatelog.panna }}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Fc / Piece</th>
                                        <td>{{ activeCatelog.fc }}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Search Tags</th>
                                        <td>{{ activeCatelog.stag }}</td>

                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div class="a1 mt-2">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                        <button class="accordion-button bg-danger text-white" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">
                                            Pending Order
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show"
                                        aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <table class="table table-sm">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">OrderId</th>
                                                        <th scope="col">Manf.</th>
                                                        <th scope="col">Qty</th>
                                                        <th scope="col">Rec</th>
                                                        <th scope="col">Bal</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td scope="row">06/04</td>
                                                        <td>01-20-23269</td>
                                                        <td>Sardar Ent</td>
                                                        <td>400</td>
                                                        <td>0</td>
                                                        <td>400</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="a2 mt-2">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingTwo">
                                        <button class="accordion-button collapsed bg-success text-white" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                                            aria-controls="collapseTwo">
                                            Create New Order
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <div class="first d-flex justify-content-between w-100">
                                                <TextInputs class="w-100 " name="Quantity" type="text" design="floating" />
                                                <TextInputs class="w-100 " name="Color" type="text" design="floating" />
                                            </div>
                                            <div class="sec d-flex justify-content-between w-100">
                                                <input type="radio" class="btn-check" name="options-outlined"
                                                    id="success-outlined" autocomplete="off">
                                                <label class="btn btn-outline-success" for="success-outlined">S</label>

                                                <input type="radio" class="btn-check" name="options-outlined"
                                                    id="success-outlined1" autocomplete="off">
                                                <label class="btn btn-outline-success" for="success-outlined1">M</label>

                                                <input type="radio" class="btn-check" name="options-outlined"
                                                    id="success-outlined2" autocomplete="off">
                                                <label class="btn btn-outline-success" for="success-outlined2">L</label>
                                                <input type="radio" class="btn-check" name="options-outlined"
                                                    id="success-outlined3" autocomplete="off">
                                                <label class="btn btn-outline-success" for="success-outlined3">XL</label>
                                            </div>
                                            <div class="mt-2">
                                                <TextInputs class="w-100 " name="Expected Delivery Date" type="date"
                                                    design="floating" />
                                                <div class="form-floating w-100 mt-2 ">
                                                    <select class="form-select" id="floatingSelect"
                                                        aria-label="Floating label select example">
                                                        <option selected>Sardar Enterprise</option>
                                                        <option value="1">Kedar Enterprise</option>
                                                        <option value="2">Admin Enterprise</option>
                                                        <option value="3">Creator Enterprise</option>
                                                        <option value="4">Manager Enterprise</option>
                                                        <option value="5">Assignee Enterprise</option>
                                                    </select>
                                                    <label for="floatingSelect">Assigne Order To</label>
                                                </div>
                                                <div class="form-floating w-100 mt-2 ">
                                                    <select class="form-select" id="floatingSelect"
                                                        aria-label="Floating label select example">
                                                        <option selected>Narender</option>
                                                        <option value="1">Travis</option>
                                                        <option value="2">Jyoti</option>
                                                        <option value="3">Kedar</option>
                                                        <option value="4">Manager </option>
                                                        <option value="5">Assignee</option>
                                                    </select>
                                                    <label for="floatingSelect">Assigne Order To</label>
                                                </div>
                                                <div class="third d-flex">
                                                    <div class="form-floating mt-2 w-75">
                                                        <textarea class="form-control" placeholder="Leave a comment here"
                                                            id="floatingTextarea"></textarea>
                                                        <label for="floatingTextarea">Private Note</label>
                                                    </div>
                                                    <div
                                                        class="mic w-25 fs-3 d-flex justify-content-center align-items-center">
                                                        <button
                                                            class="border border-2 bg-white  border-primary rounded-circle d-flex justify-content-center align-items-center"
                                                            style="width: 50px; height: 50px;">
                                                            <i class="bi bi-mic text-primary "></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="fourth w-100 mt-2">
                                                    <button class="btn btn-success w-100">Place Order</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TextInputs from '../InputsType/TextInputs.vue';
import NavLink from '../Navbar/NavLink.vue';
import SearchBar from '../SearchBar/SearchBar.vue';
export default {
    components: {
        TextInputs,
        NavLink,
        SearchBar
    },
    data() {
        return {
            publicPath: process.env.BASE_URL,
        }
    },
    computed: {
        lists() {
            return this.$store.getters.getLists;
        },
        activeCatelog() {
            return this.$store.getters.getCatelog;
        },

    },
    methods: {
        showCatelog(catelog) {
            return this.$store.dispatch('selectCatelog', catelog);
        },
        hideCatelog() {
            return this.$store.dispatch('hideCatelog');
        }

    }

}
</script>

<style scoped>
@media only screen and (max-width: 600px) {
    .list {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .btnlist img {
        width: 180px;
        height: 300px;
        /* overflow: auto; */
    }

    .btnsar {
        margin-top: 10px;
    }
}

@media only screen and (min-width: 601px) {
    .list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
}

.eabtn i:hover {
    color: black;
}
</style>