<template>
    <div class="right-container">
        <div class="left-container-wrapper" v-if="order">
            <!-- order summary -->
            <h2>Order Summary</h2>
            <hr>
            <table class="table">
                <tr>
                    <th>Delivery Address
                    </th>
                    <td>23, Plazy Uyo, Nigeria</td>
                </tr>
                <tr>
                    <th>Amount
                    </th>
                    <td>{{ order.currency }} {{ order.total }}</td>
                </tr>
                <tr>
                    <th>VAT
                    </th>
                    <td>NGN20.00</td>
                </tr>
            </table>
            <hr>
            <table class="table">
                <tr>
                    <th>Total Cost
                    </th>
                    <td>{{ order.currency }} {{ order.total }}</td>
                </tr>
                <tr>
                    <th>Partial Payment
                    </th>
                    <td>{{ order.currency }} {{ paymentPercent/100 * order.total }}</td>
                </tr>
            </table>

        </div>
    </div>
</template>

<script>
export default {
    name: "OrderSummary",
    props : {
        order : Object
    },
    computed:{
        paymentPercent(){
            return window.localStorage.paymentPercent && window.localStorage.paymentPercent!='null' ? eval(window.localStorage.paymentPercent) : null;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.right-container {
    background: #F5F5F5;
    width: 50%;

    .left-container-wrapper {
        margin-inline: 13.19% 9.16%;
        margin-top: 65px;

        h2 {
            @include textStyles(Inter, 600, 20px, 28px);
            letter-spacing: -0.02em;
            color: #0A0D13;
        }

        hr {
            border: 1px solid #ACACAC;
        }

        >table:nth-of-type(1) {
            tr {
                height: 65px;
            }

            th {
                color: rgba(45, 55, 72, 0.6);
                @include textStyles(Poppins, 800, 14px, 27px);
                text-align: left;
            }

            td {
                color: #696671;
                @include textStyles('Maven Pro', 700, 14px, 24px);
                text-align: right;

            }
        }

        >table:nth-of-type(2) {
            th {
                @include textStyles(Inter, 500, 14px, 12px);
                color: #0A0D13;
                text-align: left;
            }

            td {
                @include textStyles(Poppins, 600, 20px, 53px);
                color: rgba(45, 55, 72, 0.6);
                text-align: right;
                transform: translateY(-25px);

            }
        }
    }
}
</style>