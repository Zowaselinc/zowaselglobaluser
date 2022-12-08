<template>
    <!-- body -->
    <div class="pricing-details">Pricing Details</div>
    <hr>
    <!-- pricing details contents -->
    <div class="pricing-details-wrapper">
        <div class="table-rows table-row-first">
            <div>Accepted Price</div>
            <div>NGN 5,363,377</div>
        </div>
        <div class="table-rows table-row-first">
            <div>Confirmed Quantity</div>
            <div>500MT</div>
        </div>
        <div class="table-rows table-row-first">
            <div>Delivery Date</div>
            <div>Dec 31 2022</div>
        </div>
        <div class="table-rows mb-0">
            <div>Total Price</div>
            <div>NGN 1,770,020</div>
        </div>
    </div>
    <!-- buttons -->
    <div class=" btn-group w-100 gap-4">
        <a href="" class="btn btn-primary" type="button">Overage Policy</a>
        <a href="" class="btn btn-primary" type="button">Rejection Policy</a>
    </div>
</template>

<script>
export default {
    name: "PricingDetails",
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.pricing-details {
    margin-block: 44px 8px;
    color: #0A0D13;
    letter-spacing: -0.02em;
    @include textStyles(Inter, 600, 24px, 28px);
}

hr {
    border: 1px solid #ACACAC;
}

.pricing-details-wrapper {
    margin-block: 29px 57px;
}

.table-rows {
    position: relative;
    display: flex;
    flex-direction: row;
    margin-bottom: 48px;

    >div {
        &:last-child:not(.quality-spec) {
            position: absolute;
            right: 0;
        }

        &:nth-of-type(1) {
            @include textStyles(Poppins, 800, 20px, 166.67%);
            color: rgba(45, 55, 72, 0.6);
        }

        &:nth-of-type(2) {
            @include textStyles("Maven Pro", 700, 20px, 147%);
            color: #696671;
        }
    }

}

.btn-group {
    a {
        border: none;
        width: 274px;
        height: 47px;
        padding: 10px;
        background: #2D3748;
        color: #FFFFFF;
        @include textStyles(Poppins, 600, 16px, 27px);

    }
}
</style>