<template>


    <div class="right-container-wrapper">
        <h1>Goods Receipt Note</h1>
        <hr>
        <div class="zowasel-receipt">
            <div class="receipt-wrapper">
                <div class="company-details">
                    <div class="wrapper-one">
                        <!-- logo -->
                        <div class="logo-wrapper">
                            <img class="img-fluid" src="@/assets/images/logos/zowasel-grey-logo.png" alt="zowasel-logo">
                        </div>
                        <!-- address -->
                        <address>
                            <p>69A, Abba Johnson, Adeniyi Jones Av</p>
                            <p>Ikeja, Lagos, NIGERIA</p>
                            <p>Waybil Number:</p>
                        </address>
                    </div>
                    <div class="wrapper-two">
                        <h4>Good Receipts Note</h4>
                        <table class="table">
                            <tr>
                                <th>Buyers Name</th>
                                <td>Sam Sam</td>
                            </tr>
                        </table>
                    </div>

                </div>
                <div class="form-wrapper">
                    <!-- grid -->
                    <div class="container text-center ">
                        <div class="row">
                            <div class="col row-item-1">DISPATCH SECTION</div>
                        </div>
                        <div class="row row-main">
                            <div class="col col-item-1">FROM:</div>
                            <div class="col-6 col-item-2">To:</div>
                        </div>
                        <div class="row row-main">
                            <div class="col-4 col-item-1">DATE:</div>
                            <div class="col-4 col-item-2">COSIGNEE:</div>
                            <div class="col-4 col-item-2">Truck No./Trailer No:</div>
                        </div>
                        <div class="row">
                            <div class="col-4 row-item-general">S/No.</div>
                            <div class="col-4 row-item-general">DESCRIPTION</div>
                            <div class="col-4 row-item-general">QUANTITY</div>

                        </div>
                        <div class="row">
                            <div class="col-4 row-item-general"></div>
                            <div class="col-4 row-item-general"></div>
                            <div class="col-4 row-item-general"></div>

                        </div>
                        <div class="row">
                            <div class="col-4 row-item-general"></div>
                            <div class="col-4 row-item-general"></div>
                            <div class="col-4 row-item-general"></div>

                        </div>
                        <div class="row">
                            <div class="col-4 row-item-general"></div>
                            <div class="col-4 row-item-general"></div>
                            <div class="col-4 row-item-general"></div>

                        </div>
                        <div class="row row-main">
                            <div class="col col-item-1">REMARKS:</div>
                        </div>
                        <div class="row row-main">
                            <div class="col col-item-1">Driver's Name:</div>
                            <div class="col-6 col-item-2">Seller's Representative:</div>
                        </div>
                        <div class="row">
                            <div class="col-6 row-item-general">Driving License/Permit #:</div>
                            <div class="col-6 row-item-general">Title:</div>
                        </div>
                        <div class="row">
                            <div class="col-6 row-item-general">Signature and Date:</div>
                            <div class="col-6 row-item-general">Signature and Date:</div>
                        </div>
                        <div class="row">
                            <div class="col row-item-1">DISPATCH SECTION</div>
                        </div>
                        <div class="row">
                            <div class="col-4 row-item-general">S/No.</div>
                            <div class="col-4 row-item-general">DESCRIPTION</div>
                            <div class="col-4 row-item-general">QUANTITY</div>

                        </div>
                        <div class="row">
                            <div class="col-4 row-item-general"></div>
                            <div class="col-4 row-item-general"></div>
                            <div class="col-4 row-item-general"></div>

                        </div>
                        <div class="row">
                            <div class="col-4 row-item-general"></div>
                            <div class="col-4 row-item-general"></div>
                            <div class="col-4 row-item-general"></div>

                        </div>
                        <div class="row">
                            <div class="col-4 row-item-general"></div>
                            <div class="col-4 row-item-general"></div>
                            <div class="col-4 row-item-general"></div>

                        </div>
                        <div class="row row-main">
                            <div class="col col-item-1">REMARKS:</div>
                        </div>
                        <div class="row row-main">
                            <div class="col-6 col-item-2">Seller's Representative:</div>
                            <div class="col col-item-1">Received by:</div>
                        </div>
                        <div class="row">
                            <div class="col-6 row-item-general">Title:</div>
                            <div class="col-6 row-item-general">Title:</div>
                        </div>
                        <div class="row">
                            <div class="col-6 row-item-general">Signature and Date:</div>
                            <div class="col-6 row-item-general">Signature and Date:</div>
                        </div>
                        <p class="way-bill mt-5 mb-4 container">
                            The <strong>way bill</strong> puts the person in charge of the conveyance
                            carrying the consignment of
                            said amount of goods to the stated destination. It is a mandatory document
                            that
                            is generated from zowasel
                            portal by registered sellers or transporters who undertake movement of
                            commodities and must be presented at point
                            of delivery in the corporate.
                        </p>

                    </div>

                </div>
                <button :class="['btn', 'table-btn', 'w-100', 'btn-1']" type="button">
                    Download document
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Waybills'
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

            .company-details {
                display: flex;
                flex-direction: row;
                h4{
                    font-size: 12px;
                }
                table{
                    th, td{
                        font-size:12px;
                    }
                }
            }

            .logo-wrapper {
                width: 100px;
                margin-left: 25px;
                margin-bottom: 15px;
            }

            address {
          
                margin-bottom: 15px;

                p {
                    margin-bottom: 0px;
                    font-family: Poppins;
                    font-size: 12px;
                }
            }

            .form-wrapper,

            .row {
                border: .5px solid rgba(0, 0, 0, 0.18);

                p {
                    font-size: 13px;
                }
            }

            .row {
                div {
                    border: .6px solid rgba(0, 0, 0, 0.18);
                    height: 50px;
                }

                .row-item-1 {
                    height: 25px;
                    font-weight: bold;
                    font-size: 12px;
                }

                .row-item-general {
                    height: 30px;
                    font-size: 12.2px;
                    text-align: left;
                }

                .col-item-1,
                .col-item-2 {
                    font-size: 12.2px;
                    text-align: left;
                }
            }

            button.table-btn {
                margin-top: 33px;
                padding: 15px 20px;
                background: #262C3F;
                border-radius: 5px;
                @include textStyles(Inter, 600, 16px, 19px);
                color: #FFFFFF;
            }
        }
    }
}
</style>