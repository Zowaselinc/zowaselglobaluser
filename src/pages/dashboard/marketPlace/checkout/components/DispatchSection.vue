<template>
    <!-- for dispactch Section -->
    <div class="dispatch-section">
        <h1 class=" mb-4">Dispatch Section</h1>
        <form>
            <div class="inputs-group  margin-btm-lg">
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">From</label>
                    <input type="email" v-model="dispatch.from" class="form-control mt-0" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Seller Information">
                </div>
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">To</label>
                    <input type="email" v-model="dispatch.to" class="form-control mt-0" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Buyer Information ">
                </div>
            </div>
            <div class="inputs-group  margin-btm-lg">
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Date</label>
                    <input type="" v-model="dispatch.date" class="form-control mt-0" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Seller Information">
                </div>
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Consignee</label>
                    <input type="email" v-model="dispatch.consignee" class="form-control mt-0" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Consignee">
                </div>
            </div>
            <div class="inputs-group  margin-btm-lg">
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Truck Number</label>
                    <input type="" v-model="dispatch.truckNumber" class="form-control mt-0" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Truck Number">
                </div>
            </div>
            <div class="inputs-group  margin-btm-lg">
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Description</label>
                    <input type="" v-model="dispatch.description" class="form-control mt-0" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Description">
                </div>
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Quantity</label>
                    <input v-model="dispatch.quantity" type="email" class="form-control mt-0" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Quantity">
                </div>
            </div>
            <div class="inputs-group  margin-btm-lg">
                <div class="w-100">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Remarks</label>
                    <textarea type="" v-model="dispatch.remarks" class="form-control mt-0" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Remarks" height="600"></textarea>
                </div>

            </div>
            <div class="inputs-group  margin-btm-lg">
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Drivers Name</label>
                    <input type="" v-model="dispatch.driversName" class="form-control mt-0" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Drivers Name">
                </div>
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Sellers Representative</label>
                    <input type="email" v-model="dispatch.sellersRepresentative" class="form-control mt-0"
                        id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Sellers Representative">
                </div>
            </div>
            <div class="inputs-group  margin-btm-lg">
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Driving License/ Permit
                        Number</label>
                    <input v-model="dispatch.drivingLicense" type="" class="form-control mt-0" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Driving License/ Permit Number">
                </div>
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Title</label>
                    <input type="email" v-model="dispatch.title" class="form-control mt-0" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Title">
                </div>
            </div>
            <div class="inputs-group  margin-btm-lg">
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Signature</label>
                    <input type="file" class="form-control mt-0" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Signature">
                </div>
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Signature</label>
                    <input type="file" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Signature">
                </div>
            </div>
            <div class="inputs-group  margin-btm-lg">
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Date</label>
                    <input type="" v-model="dispatch.date" class="form-control mt-0" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Date">
                </div>
                <div class="">
                    <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Date</label>
                    <input type="" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                        placeholder="Date">
                </div>
            </div>
            <button :class="['btn', 'table-btn', 'w-100', 'mb-4']" type="button" @click="proceed(dispatch)">Proceed to
                receipt section
            </button>
        </form>
    </div>
</template>

<script>

export default {
    name: "DispatchSection",
    props: {
        proceed: Function,
    },
    components: {
    },
    data() {
        return {
            dispatch: {
                from: "",
                to: "",
                date: "",
                consignee: "",
                truckNumber: "",
                description: "",
                quantity: "",
                remarks: "",
                driversName: "",
                sellersRepresentative: "",
                drivingLicense: "",
                title: ""
            },
        }
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
    @include textStyles(Poppins, 700, 18px, 28px);

}

form {
    .inputs-group {
        display: flex;
        flex-direction: row;
        gap: 45px;

        >div {
            width: 100%;
        }
    }

    div.margin-btm-lg {
        margin-bottom: 10px;
    }

    label {
        font-size: 12px;
    }

    label.margin-btm-sm {
        margin-bottom: 4px;
        color: rgba(45, 55, 72, 0.8);
    }

    input.form-control,
    textarea.form-control {
        font-size: 12px;
        background-color: #F5F5F5 !important;

        &::placeholder {
            @include textStyles(Poppins, 700, 12px, 28px);
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