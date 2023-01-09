<template>
    <h1 class=" mb-4">Receipt Section</h1>
    <form>
        <div class="inputs-group  margin-btm-lg">
            <div class="">
                <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Description</label>
                <input type="" v-model="receipt.description" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Description">
            </div>
            <div class="">
                <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Quantity</label>
                <input v-model="receipt.quantity" type="email" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Quantity">
            </div>
        </div>
        <div class="inputs-group  margin-btm-lg">
            <div class="w-100">
                <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Remarks</label>
                <textarea v-model="receipt.remarks" type="" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Remarks" height="600"></textarea>
            </div>

        </div>
        <div class="inputs-group  margin-btm-lg">
            <div class="">
                <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Sellers Representative</label>
                <input v-model="receipt.sellers_data.sellers_representative" type="email" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Sellers Representative">
            </div>
            <div class="">
                <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Received By</label>
                <input type="" v-model="receipt.recipient_data.received_by" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Received By">
            </div>
        </div>
        <div class="inputs-group  margin-btm-lg">
            <div class="">
                <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Title</label>
                <input type="" v-model="receipt.sellers_data.title" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Title">
            </div>
            <div class="">
                <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Title</label>
                <input type="email" v-model="receipt.recipient_data.title" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Title">
            </div>
        </div>
        <!-- <div class="inputs-group  margin-btm-lg">
            <div class="">
                <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Signature</label>
                <input type="file" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Signature">
            </div>
            <div class="">
                <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Signature</label>
                <input type="file" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Signature">
            </div>
        </div> -->
        <div class="inputs-group margin-btm-lg">
            <div class="">
                <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Date</label>
                <input type="" v-model="receipt.sellers_data.date" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Date">
            </div>
            <div class="">
                <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Date</label>
                <input type="" v-model="receipt.recipient_data.date" class="form-control mt-0" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Date">
            </div>
        </div>
        <button :class="['btn', 'table-btn', 'w-100', 'btn-1']" @click="proceed(receipt)" type="button">
            <span >Upload waybill document</span> <img class="ps-2" src="@/assets/images/vectors/cloud.svg" alt="cloud">
        </button>
        <button :class="['btn', 'table-btn', 'w-100', 'mb-4']" type="button">Generate waybill document</button>

    </form>
</template>

<script>
export default {
    name: "ReportSection",
    props:{
        goBack : Function,
        proceed : Function
    },
    data(){
        return {
            receipt : {
                description : "",
                quantity: "",
                remarks : "",
                sellers_data : {
                    sellers_representative : "",
                    title : "",
                    date : (new Date()).toDateString()
                },
                recipient_data : {
                    received_by : "",
                    title : "",
                    date : (new Date()).toDateString()
                }
            }
        };
    }
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
            @include textStyles(Poppins, 700, 14px, 28px);
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

    button.btn-1 {
        background: #262C3F;
    }
}
</style>