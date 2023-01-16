<template>
  <div class="right-container-wrapper">
    <h1>Goods Receipt Note</h1>
    <hr />
    <div class="zowasel-receipt">
      <div class="receipt-wrapper">
        <div class="company-details">
          <div class="wrapper-one">
            <!-- logo -->
            <div class="logo-wrapper">
              <img
                class="img-fluid"
                src="@/assets/images/logos/zowasel-grey-logo.png"
                alt="zowasel-logo"
              />
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
              <tr>
                <th>Warehouse</th>
                <td>DA88</td>
              </tr>
              <tr>
                <th>crop Season</th>
                <td>.</td>
              </tr>
              <tr>
                <th>Date</th>
                <td>11/11/23</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="vendor_details d-flex flex-row mb-4">
          <table class="table">
            <tr>
              <th>Vendor Name</th>
              <td>Tare Weight</td>
            </tr>
            <tr>
              <th>Commodity Type</th>
              <td>Net Weight</td>
            </tr>
            <tr>
              <th>crop Origin</th>
              <td>Mobile Telephone</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>Rate</td>
            </tr>
          </table>
          <table class="table">
            <tr>
              <th>Waybill No.</th>
              <td>0000000</td>
            </tr>
            <tr>
              <th>LPO Number</th>
              <td>99998</td>
            </tr>
            <tr>
              <th>Vehicle Number</th>
              <td>9999</td>
            </tr>
            <tr>
              <th>Truck Type</th>
              <td />
            </tr>
          </table>
        </div>
        <div class="form-wrapper">
          <!-- grid -->
          <table class="table table-bordered">
            <tr>
              <th>Crop Description</th>
              <td>Crop Description</td>
            </tr>
            <tr>
              <th>Packaging/Bagging</th>
              <td>Packaging/Bagging</td>
            </tr>
            <tr>
              <th>Number of Bags</th>
              <td>Number of Bags</td>
            </tr>
            <tr>
              <th>Scale Type</th>
              <td>Scale Type</td>
            </tr>
            <tr>
              <th>Gross Weight</th>
              <td>Gross Weight</td>
            </tr>
            <tr>
              <th>Tare Weight</th>
              <td>Tare Weight</td>
            </tr>
            <tr>
              <th>Net Weight</th>
              <td>Net Weight</td>
            </tr>
            <tr>
              <th>Rejected Quantity</th>
              <td>Rejected Quantity</td>
            </tr>
            <tr>
              <th>Accepted Quantity</th>
              <td>Accepted Quantity</td>
            </tr>
            <tr>
              <th>Rate</th>
              <td>Rate</td>
            </tr>
            <tr>
              <th>Discount</th>
              <td>Discount</td>
            </tr>
            <tr>
              <th>Total Value</th>
              <td>Total Value</td>
            </tr>
            <tr>
              <th>Validation Parameters</th>
              <td>
                Moisture Content(Mc), Foreign Matter(FM), Broken Kernel (BK),
                Bulk Density(BD), Free Fatty Acid(FFA),DOBI, Refractive index,
                Colour, Mouldy Beans (CB), Immature Seeds(IS), Weather Damage
                (WD)
              </td>
            </tr>
          </table>
        </div>
        <button :class="['btn', 'table-btn', 'w-100', 'btn-1']" type="button">
          Upload Goods Receipt
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Waybills",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.right-container-wrapper {
  width: 50%;
  margin-inline: 4%;
  margin-top: 65px;

  h1 {
    @include textStyles(Inter, 600, 20px, 28px);
    letter-spacing: -0.02em;
    color: #0a0d13;
    margin-bottom: 17px;
    text-align: center;
  }

  hr {
    border: 1px solid rgba(0, 0, 0, 0.18);
    margin-bottom: 23px;
  }

  .zowasel-receipt {
    background: #ffffff;
    padding: 30px;

    .receipt-wrapper {
      color: rgba(0, 0, 0, 0.849);

      .company-details {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        h4 {
          font-size: 13px;
        }

        .table > :not(caption) > * > * {
          padding: 0.2rem 0.5rem;
          border-bottom-width: 0px;
        }
        table {
          tr {
            border-style: none !important;
          }

          th,
          td {
            font-size: 13px;
          }
        }

        .logo-wrapper {
          width: 100px;
          margin-bottom: 10px;
        }

        address {
          margin-bottom: 15px;

          p {
            margin-bottom: 0px;
            font-family: Poppins;
            font-size: 13px;
          }
        }

        .wrapper-two {
          h4 {
            font-size: 16px;
          }
        }
      }

      .vendor_details {
        background: #f5f5f5;
        justify-content: space-between;
        font-size: 13px;
        .table > :not(caption) > * > * {
          border-bottom-width: 0px;
        }
      }
      .form-wrapper table tr {
        font-size: 13px;
      }
      button.table-btn {
        margin-top: 33px;
        padding: 15px 20px;
        background: #262c3f;
        border-radius: 5px;
        @include textStyles(Inter, 600, 16px, 19px);
        color: #ffffff;
      }
    }
  }
}
</style>
