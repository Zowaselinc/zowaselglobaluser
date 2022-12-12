<template>
    <div class="right-container">
        <div class="left-container-wrapper">
            <!-- order summary -->
            <h2>Balance Summary</h2>
            <hr>
            <table class="table">
                <tr>
                    <th>Product Cost
                    </th>
                    <td>₦ 1,770,000</td>
                </tr>
                <tr>
                    <th>Advance Paid
                    </th>
                    <td>₦ 442,500</td>
                </tr>
            </table>
            <hr>
            <table class="table">
                <tr>
                    <th>Amount Due
                    </th>
                    <td>₦ 1,327,500</td>
                </tr>
            </table>

        </div>
    </div>
</template>

<script>
export default {
    name: "BalancePayment"
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
            @include textStyles(Inter, 600, 24px, 28px);
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
                @include textStyles(Poppins, 800, 16px, 27px);
                text-align: left;
            }

            td {
                color: #696671;
                @include textStyles('Maven Pro', 700, 16px, 24px);
                text-align: right;

            }
        }

        >table:nth-of-type(2) {
            th {
                @include textStyles(Inter, 500, 16px, 12px);
                color: #0A0D13;
                text-align: left;
            }

            td {
                @include textStyles(Poppins, 600, 32px, 53px);
                color: rgba(45, 55, 72, 0.6);
                text-align: right;

            }
        }
    }
}
</style>