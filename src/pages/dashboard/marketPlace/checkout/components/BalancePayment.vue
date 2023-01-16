<template>
  <div class="right-container">
    <div class="left-container-wrapper">
      <!-- order summary -->
      <h2>Balance Summary</h2>
      <hr />
      <table class="table">
        <tr>
          <th>Product Cost</th>
          <td>{{ order.currency }} {{ order.total.toLocaleString() }}</td>
        </tr>
        <tr>
          <th>Advance Paid</th>
          <td>{{ order.currency }} {{ order.amount_paid.toLocaleString() }}</td>
        </tr>
      </table>
      <hr />
      <table class="table">
        <tr>
          <th>Amount Due</th>
          <td>{{ order.currency }} {{ order.amount_due.toLocaleString() }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "BalancePayment",
  props: {
    order: Object,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.right-container {
  background: #f5f5f5;
  width: 50%;

  .left-container-wrapper {
    margin-inline: 8%;
    margin-top: 65px;

    h2 {
      @include textStyles(Inter, 600, 20px, 28px);
      letter-spacing: -0.02em;
      color: #0a0d13;
    }

    hr {
      border: 1px solid #acacac;
    }

    > table:nth-of-type(1) {
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
        @include textStyles("Maven Pro", 700, 14px, 24px);
        text-align: right;
      }
    }

    > table:nth-of-type(2) {
      th {
        @include textStyles(Inter, 500, 16px, 12px);
        color: #0a0d13;
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
