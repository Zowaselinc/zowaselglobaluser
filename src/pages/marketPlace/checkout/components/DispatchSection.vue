<template>
    <!-- for dispactch Section -->
    <div class="dispatch-section">
        <h1 class=" mb-4">Dispatch Section</h1>
        <form>
            <div class="inputs-group  margin-btm-lg">
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">From</label>
                    <input type="email" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Seller Information">
                </div>
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">To</label>
                    <input type="email" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Buyer Information ">
                </div>
            </div>
            <div class="inputs-group  margin-btm-lg">
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Date</label>
                    <input type="" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Seller Information">
                </div>
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Consignee</label>
                    <input type="email" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Consignee">
                </div>
            </div>
            <div class="inputs-group  margin-btm-lg">
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Truck Number</label>
                    <input type="" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Truck Number">
                </div>
            </div>
            <div class="inputs-group  margin-btm-lg">
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Description</label>
                    <input type="" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Description">
                </div>
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Quantity</label>
                    <input type="email" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Quantity">
                </div>
            </div>
            <div class="inputs-group  margin-btm-lg">
                <div class="w-100">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Remarks</label>
                    <textarea type="" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Remarks" height="600"></textarea>
                </div>

            </div>
            <div class="inputs-group  margin-btm-lg">
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Drivers Name</label>
                    <input type="" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Drivers Name">
                </div>
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Sellers Representative</label>
                    <input type="email" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Sellers Representative">
                </div>
            </div>
            <div class="inputs-group  margin-btm-lg">
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Driving License/ Permit
                        Number</label>
                    <input type="" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Driving License/ Permit Number">
                </div>
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Title</label>
                    <input type="email" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Title">
                </div>
            </div>
            <div class="inputs-group  margin-btm-lg">
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Date</label>
                    <input type="" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Date">
                </div>
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Date</label>
                    <input type="" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Date">
                </div>
            </div>
            <button :class="['btn', 'table-btn', 'w-100']" type="button"  @click="proceed()">Proceed to receipt section
            </button>
        </form>
    </div>
</template>

<script>

export default {
    name: "DispatchSection",
    props:{
        proceed : Function
    },
    components: {
    },

    methods: {

    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

h1 {
    text-align: center;
    text-transform: capitalize;
    color: #1D1D1D;
    @include textStyles(Poppins, 700, 20px, 28px);

}

form {
    .inputs-group {
        display: flex;
        flex-direction: row;
        gap: 45px;
    }

    div.margin-btm-lg {
        margin-bottom: 10px;
    }

    label.margin-btm-sm {
        margin-bottom: 4px;
        color: rgba(45, 55, 72, 0.8);
    }

    input.form-control,
    textarea.form-control {
        background-color: #F5F5F5 !important;

        &::placeholder {
            @include textStyles(Poppins, 700, 20px, 28px);
        }
    }

    // button group
    button.table-btn {
        margin-top: 33px;
        padding: 15px 20px;
        background: #05B050;
        border-radius: 5px;
        @include textStyles(Inter, 600, 16px, 19px);
        color: #FFFFFF;
    }
}
</style>