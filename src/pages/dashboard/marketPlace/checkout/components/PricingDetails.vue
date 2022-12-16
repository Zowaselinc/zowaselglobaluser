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

    <!-- for corporates view -->
    <div class="payment-option-wrapper">
        <!-- payment option header -->
        <h2>Payment Option</h2>
        <div class="payment-option d-flex flex-column">
            <!-- first item -->
            <div class="delivery-options d-flex">
                <div class="circle-outer d-flex justify-content-center align-items-center"><span
                        class="circle-inner"></span></div>
                <div class="delivery-content">24 - 48hrs after delivery</div>
            </div>
            <!-- second item -->
            <div class="delivery-options d-flex">
                <div class="circle-outer d-flex justify-content-center align-items-center"><span
                        class="circle-inner"></span></div>
                <div class="delivery-content">Full payment</div>
            </div>
            <!-- first item -->
            <div class="delivery-options d-flex">
                <div class="circle-outer active d-flex justify-content-center align-items-center"><span
                        class="circle-inner"></span></div>
                <div class="delivery-content">Advance Payment</div>
            </div>
            <div class="progress-bar-wrapper position-relative d-flex flex-column">
                <div class="progress progress-bar"></div>
                <div class="point-circle"><span class="inner-point-circle"></span></div>
                <div class="vertical-rule d-flex">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="progress-rating d-flex">
                    <span>25%</span>
                    <span>50%</span>
                    <span>75%</span>
                    <span>100%</span>
                </div>
            </div>
        </div>
    </div>
    <!-- buttons -->
    <div class=" btn-group w-100 gap-4">
        <a href="" class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Overage
            Policy</a>
        <a href="" class="btn btn-primary" type="button " data-bs-toggle="modal"
            data-bs-target="#staticBackdrop1">Rejection Policy</a>
    </div>
    <!-- Overage Policy Modals -->

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Overage
                        Policy</h1>
                    <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                </div>
                <div class="modal-body container    ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant morbi justo, ullamcorper urna
                    tristique. Ornare ut mi interdum nunc rutrum cursus aliquet. Posuere vel vel, tristique egestas. Sit
                    eu ac sed urna eleifend egestas praesent quis. Dui egestas gravida amet, vel. Facilisis lorem vel
                    posuere et. Ut purus at egestas adipiscing donec commodo, rutrum et justo. Imperdiet amet, diam
                    pellentesque nulla a. Et nunc elit ipsum, suspendisse eget. Aliquam placerat erat sem tellus risus
                    euismod odio non. Massa faucibus arcu faucibus neque egestas. Urna tellus sed nec mauris congue
                    risus, at.
                    Id consequat diam sed etiam. Integer blandit pharetra ut consequat nunc est. Sit etiam id neque
                    pharetra feugiat blandit convallis in vitae. Non lacus adipiscing faucibus tempor. Facilisi egestas
                    venenatis mattis rhoncus sagittis habitasse morbi lectus consectetur. Ultricies id varius dui
                    euismod ut. Volutpat accumsan, nec, tortor, tincidunt. Leo risus ipsum eget adipiscing. Aliquam nisl
                    morbi faucibus vulputate tempor elit libero facilisi sit. At odio morbi nam tellus enim, viverra
                    elit, nisi. Nulla placerat enim tincidunt tortor cursus at nunc amet. Nisi in nam tellus id
                    dignissim massa tortor cursus.
                    Tortor eget purus tellus sollicitudin vulputate. Scelerisque et neque elit urna. Leo, proin
                    habitasse scelerisque nibh elementum morbi. Sem amet, et pulvinar felis consequat quis eget sed.
                    Tellus tempus id orci vitae. Non nascetur purus faucibus tellus enim arcu. Amet, elementum tortor
                    diam auctor et faucibus tempor sagittis, venenatis. Ridiculus mattis tellus mollis in tortor. Est
                    dictum condimentum lectus mollis libero. Sit ut vitae mauris varius eget. Molestie viverra aliquet
                    est egestas elit orci, aenean. Pellentesque eros, varius et massa. Risus eget a risus, sed non eget
                    interdum risus. Elementum risus ut nibh gravida libero. Justo, ornare laoreet urna turpis id in.
                    Scelerisque et pretium, consectetur euismod lorem dui molestie amet quis. In enim sed commodo nec
                    aliquam. Pulvinar nunc nunc, ipsum arcu. Nibh sed est duis molestie id. Faucibus magna orci,
                    pulvinar maecenas scelerisque volutpat id. Libero id tortor, proin mauris tincidunt habitant.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Back</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Overage Rejection policy -->

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Rejection Policy</h1>
                    <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                </div>
                <div class="modal-body container    ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant morbi justo, ullamcorper urna
                    tristique. Ornare ut mi interdum nunc rutrum cursus aliquet. Posuere vel vel, tristique egestas. Sit
                    eu ac sed urna eleifend egestas praesent quis. Dui egestas gravida amet, vel. Facilisis lorem vel
                    posuere et. Ut purus at egestas adipiscing donec commodo, rutrum et justo. Imperdiet amet, diam
                    pellentesque nulla a. Et nunc elit ipsum, suspendisse eget. Aliquam placerat erat sem tellus risus
                    euismod odio non. Massa faucibus arcu faucibus neque egestas. Urna tellus sed nec mauris congue
                    risus, at.
                    Id consequat diam sed etiam. Integer blandit pharetra ut consequat nunc est. Sit etiam id neque
                    pharetra feugiat blandit convallis in vitae. Non lacus adipiscing faucibus tempor. Facilisi egestas
                    venenatis mattis rhoncus sagittis habitasse morbi lectus consectetur. Ultricies id varius dui
                    euismod ut. Volutpat accumsan, nec, tortor, tincidunt. Leo risus ipsum eget adipiscing. Aliquam nisl
                    morbi faucibus vulputate tempor elit libero facilisi sit. At odio morbi nam tellus enim, viverra
                    elit, nisi. Nulla placerat enim tincidunt tortor cursus at nunc amet. Nisi in nam tellus id
                    dignissim massa tortor cursus.
                    Tortor eget purus tellus sollicitudin vulputate. Scelerisque et neque elit urna. Leo, proin
                    habitasse scelerisque nibh elementum morbi. Sem amet, et pulvinar felis consequat quis eget sed.
                    Tellus tempus id orci vitae. Non nascetur purus faucibus tellus enim arcu. Amet, elementum tortor
                    diam auctor et faucibus tempor sagittis, venenatis. Ridiculus mattis tellus mollis in tortor. Est
                    dictum condimentum lectus mollis libero. Sit ut vitae mauris varius eget. Molestie viverra aliquet
                    est egestas elit orci, aenean. Pellentesque eros, varius et massa. Risus eget a risus, sed non eget
                    interdum risus. Elementum risus ut nibh gravida libero. Justo, ornare laoreet urna turpis id in.
                    Scelerisque et pretium, consectetur euismod lorem dui molestie amet quis. In enim sed commodo nec
                    aliquam. Pulvinar nunc nunc, ipsum arcu. Nibh sed est duis molestie id. Faucibus magna orci,
                    pulvinar maecenas scelerisque volutpat id. Libero id tortor, proin mauris tincidunt habitant.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Back</button>
                </div>
            </div>
        </div>
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
    margin-block: 30px 8px;
    color: #0A0D13;
    letter-spacing: -0.02em;
    @include textStyles(Inter, 600, 18px, 28px);
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
    margin-bottom: 30px;

    >div {
        &:last-child:not(.quality-spec) {
            position: absolute;
            right: 0;
        }

        &:nth-of-type(1) {
            @include textStyles(Poppins, 800, 14px, 166.67%);
            color: rgba(45, 55, 72, 0.6);
        }

        &:nth-of-type(2) {
            @include textStyles("Maven Pro", 700, 14px, 147%);
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
        margin-bottom: 80px;
        color: #FFFFFF;
        @include textStyles(Poppins, 600, 16px, 27px);

    }
}

// for corporates view
.payment-option-wrapper {
    margin-bottom: 40px;

    h2 {
        @include textStyles(Poppins, 600, 18px, 32px);
        letter-spacing: 0.01em;
        font-feature-settings: 'liga' off;
        color: #1D1D1D;
        margin-bottom: 23px;
        text-align: center;

    }
}

.payment-option {
    width: 100%;
    background: #FFFFFF;
    border-radius: 4px;
    padding: 44px 0px 40px 36px;

    .delivery-options {
        margin-bottom: 30px;
    }

    .circle-outer {
        width: 20px;
        height: 20px;
        background: #FFFFFF;
        border: 1px solid #EDEDEE;
        box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.08);
        border-radius: 100%;

        span.circle-inner {
            width: 65%;
            height: 65%;
            border-radius: 100%;
        }
    }

    // toggle
    .active {
        border: 2px solid #05B050;

        span.circle-inner {
            background: #05B050;
        }
    }

    .delivery-content {
        margin-left: 20%;
        @include textStyles(Poppins, 500, 16px, 33px);
        color: rgba(45, 55, 72, 0.6);

    }

    .progress-bar-wrapper {
        .progress {
            height: 3px !important;
            background: #FCD66B;
            border-radius: 5.34111px;
        }

        .vertical-rule {
            margin-left:  11%;
            column-gap: 24%;
            span {
                margin-top: 5px;
                width: 15px;
                border: 1px solid #FCD66B;
                transform: rotate(90deg);
            }
        }
        .progress-rating{
            column-gap: 20%;
            margin-left:  10%;
            margin-top: 10px;
            span{
                @include textStyles(Poppins, 500, 14px, 27px);
                color: rgba(45, 55, 72, 0.6);
            }
        }
        .point-circle{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 18.69px;
            height: 18.69px;
            border-radius: 50%;
            position: absolute;
            background: #FFF8E6;
            bottom: 36px;
            left: 10.53%;
            .inner-point-circle{
                width: 70%;
                height: 70%;
                border-radius: 50%;
                background: #FCD66B;
            }
        }
    }
}

// modals 
.modal-header {
    justify-content: center;

    h1 {
        @include textStyles(Inter, 600, 24px, 28px);
        letter-spacing: -0.02em;
        color: #0A0D13;
        border-bottom: 0px ! important;
    }
}

.modal-footer {
    justify-content: center;
    border-top: 0 ! important;

    button {
        background: #05B050;
        box-shadow: 0px 2.58333px 5.16667px rgba(44, 39, 56, 0.08), 0px 5.16667px 10.3333px rgba(44, 39, 56, 0.08);
        border-radius: 5.16667px;
        width: 100px;
        border-color: #05B050;
    }
}

@media (min-width: 576px) {
    .modal-dialog {
        max-width: 690px;
        margin: 1.75rem auto;
    }
}
</style>