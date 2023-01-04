<template>


    <div class="right-container-wrapper">
        <div class="zowasel-receipt">
            <div class="receipt-wrapper">
                <form>
                    <div class="w-100 mb-2">
                        <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Crop Description</label>
                        <input type="text" class="form-control mt-0" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="Crop Description" v-model="goodsReceiptNote.crop_description">
                    </div>
                    <div class="w-100 mb-2">
                        <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Packaging/Bagging</label>
                        <input type="text" class="form-control mt-0" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="Packaging/Bagging" v-model="goodsReceiptNote.packaging">
                    </div>
                    <div class="w-100 d-flex flex-row gap-3 mb-2">
                        <div class="w-100">
                            <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Number of
                                Bags</label>
                            <input type="text" class="form-control mt-0" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Number of Bags" v-model="goodsReceiptNote.no_of_bags">
                        </div>
                        <div class="w-100">
                            <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Scale Type</label>
                            <input type="text" class="form-control mt-0" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Scale Type" v-model="goodsReceiptNote.scale_type">
                        </div>
                    </div>

                    <div class="w-100 d-flex flex-row gap-3 mb-2">
                        <div class="w-100">
                            <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Gross weight</label>
                            <input type="text" class="form-control mt-0" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Gross weight" v-model="goodsReceiptNote.gross_weight">
                        </div>
                        <div class="w-100">
                            <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Tare Weight</label>
                            <input type="text" class="form-control mt-0" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Tare Weight" v-model="goodsReceiptNote.tare_weight">
                        </div>
                    </div>
                    <div class="w-50 mb-2">
                        <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Net Weight</label>
                        <input type="text" class="form-control mt-0" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="Net Weight" v-model="goodsReceiptNote.net_weight">
                    </div>
                    <div class="w-100 d-flex flex-row gap-3 mb-2">
                        <div class="w-100">
                            <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Rejected Quantity</label>
                            <input type="text" class="form-control mt-0" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Rejected Quantity" v-model="goodsReceiptNote.rejected_quantity">
                        </div>
                        <div class="w-100">
                            <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Accepted Quantity</label>
                            <input type="text" class="form-control mt-0" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Accepted Quantity" v-model="goodsReceiptNote.accepted_quantity">
                        </div>
                    </div>
                    <div class="w-100 d-flex flex-row gap-3 mb-2">
                        <div class="w-100">
                            <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Rate</label>
                            <input type="text" class="form-control mt-0" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Rate" v-model="goodsReceiptNote.rate">
                        </div>
                        <div class="w-100">
                            <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Discount </label>
                            <input type="text" class="form-control mt-0" id="exampleInputEmail1"
                                aria-describedby="emailHelp" placeholder="Discount" v-model="goodsReceiptNote.discount">
                        </div>
                    </div>
                    <div class="w-100 mb-4">
                        <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0">Total Vale</label>
                        <input type="text" class="form-control mt-0" id="exampleInputEmail1"
                            aria-describedby="emailHelp" placeholder="Total Vale" v-model="goodsReceiptNote.total_value">
                    </div>


                </form>
                <button :class="['btn', 'table-btn', 'w-100']" type="button">
                    Attach supporting document
                </button>
                <button :class="['btn', 'table-btn', 'w-100']" @click="submitGoodsReceipt()" type="button">
                    Generate Receipt Note
                </button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'GoodsNotes',
    props : {
        saveGoodsReceipt : Function
    },
    data(){
        return {
            goodsReceiptNote : {
                crop_description : "",
                packaging : "",
                no_of_bags : "",
                scale_type : "",
                gross_weight : "",
                tare_weight : "",
                net_weight : "",
                rejected_quantity : "",
                accepted_quantity : "",
                rate : "",
                discount : "",
                total_value : ""
            }
        }
    },
    methods:{
        submitGoodsReceipt(){
            this.saveGoodsReceipt(this.goodsReceiptNote);
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";



.right-container-wrapper {
    margin-inline: 4%;
    margin-top: 65px;

    h1 {
        @include textStyles(Inter, 600, 20px, 28px);
        letter-spacing: -0.02em;
        color: #0A0D13;
        margin-bottom: 17px;
        text-align: center;
    }

    hr {
        border: 1px solid rgba(0, 0, 0, 0.18);
        margin-bottom: 23px;
    }

    .zowasel-receipt {
        background: #FFFFFF;
        padding: 30px;

        .receipt-wrapper {
            color: rgba(0, 0, 0, 0.849);


            label {
                font-size: 12px;
            }

            label.margin-btm-sm {
                margin-bottom: 4px;
                color: rgba(45, 55, 72, 0.8);
            }

            input.form-control {
                font-size: 12px;
                background-color: #F5F5F5 !important;

                &::placeholder {
                    @include textStyles(Poppins, 700, 10px, 28px);
                }
            }

            button.table-btn {
                margin-top: 33px;
                padding: 15px 20px;
                background: #262C3F;
                border-radius: 5px;
                @include textStyles(Inter, 600, 16px, 19px);
                color: #FFFFFF;
                + button{
                    background: #05B050;
                }
            }
        }
    }
}
</style>