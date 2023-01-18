<template>
  <div class="right-container-wrapper">
    <div class="zowasel-receipt">
      <div class="receipt-wrapper">
        <form>
          <div class="w-100 mb-2">
            <label
              for="exampleInputEmail1"
              class="form-label margin-btm-sm mt-0"
              >Crop Description</label
            >
            <input
              id="exampleInputEmail1"
              v-model="goodsReceiptNote.crop_description"
              type="text"
              class="form-control mt-0"
              aria-describedby="emailHelp"
              placeholder="Crop Description"
            />
          </div>
          <div class="w-100 mb-2">
            <label
              for="exampleInputEmail1"
              class="form-label margin-btm-sm mt-0"
              >Packaging/Bagging</label
            >
            <input
              id="exampleInputEmail1"
              v-model="goodsReceiptNote.packaging"
              type="text"
              class="form-control mt-0"
              aria-describedby="emailHelp"
              placeholder="Packaging/Bagging"
            />
          </div>
          <div class="w-100 d-flex flex-row gap-3 mb-2">
            <div class="w-100">
              <label
                for="exampleInputEmail1"
                class="form-label margin-btm-sm mt-0"
                >Number of Bags</label
              >
              <input
                id="exampleInputEmail1"
                v-model="goodsReceiptNote.no_of_bags"
                type="text"
                class="form-control mt-0"
                aria-describedby="emailHelp"
                placeholder="Number of Bags"
              />
            </div>
            <div class="w-100">
              <label
                for="exampleInputEmail1"
                class="form-label margin-btm-sm mt-0"
                >Scale Type</label
              >
              <input
                id="exampleInputEmail1"
                v-model="goodsReceiptNote.scale_type"
                type="text"
                class="form-control mt-0"
                aria-describedby="emailHelp"
                placeholder="Scale Type"
              />
            </div>
          </div>

          <div class="w-100 d-flex flex-row gap-3 mb-2">
            <div class="w-100">
              <label
                for="exampleInputEmail1"
                class="form-label margin-btm-sm mt-0"
                >Gross weight</label
              >
              <input
                id="exampleInputEmail1"
                v-model="goodsReceiptNote.gross_weight"
                type="text"
                class="form-control mt-0"
                aria-describedby="emailHelp"
                placeholder="Gross weight"
              />
            </div>
            <div class="w-100">
              <label
                for="exampleInputEmail1"
                class="form-label margin-btm-sm mt-0"
                >Tare Weight</label
              >
              <input
                id="exampleInputEmail1"
                v-model="goodsReceiptNote.tare_weight"
                type="text"
                class="form-control mt-0"
                aria-describedby="emailHelp"
                placeholder="Tare Weight"
              />
            </div>
          </div>
          <div class="w-50 mb-2">
            <label
              for="exampleInputEmail1"
              class="form-label margin-btm-sm mt-0"
              >Net Weight</label
            >
            <input
              id="exampleInputEmail1"
              v-model="goodsReceiptNote.net_weight"
              type="text"
              class="form-control mt-0"
              aria-describedby="emailHelp"
              placeholder="Net Weight"
            />
          </div>
          <div class="w-100 d-flex flex-row gap-3 mb-2">
            <div class="w-100">
              <label
                for="exampleInputEmail1"
                class="form-label margin-btm-sm mt-0"
                >Rejected Quantity</label
              >
              <input
                id="exampleInputEmail1"
                v-model="goodsReceiptNote.rejected_quantity"
                type="text"
                class="form-control mt-0"
                aria-describedby="emailHelp"
                placeholder="Rejected Quantity"
              />
            </div>
            <div class="w-100">
              <label
                for="exampleInputEmail1"
                class="form-label margin-btm-sm mt-0"
                >Accepted Quantity</label
              >
              <input
                id="exampleInputEmail1"
                v-model="goodsReceiptNote.accepted_quantity"
                type="text"
                class="form-control mt-0"
                aria-describedby="emailHelp"
                placeholder="Accepted Quantity"
              />
            </div>
          </div>
          <div class="w-100 d-flex flex-row gap-3 mb-2">
            <div class="w-100">
              <label
                for="exampleInputEmail1"
                class="form-label margin-btm-sm mt-0"
                >Rate</label
              >
              <input
                id="exampleInputEmail1"
                v-model="goodsReceiptNote.rate"
                type="text"
                class="form-control mt-0"
                aria-describedby="emailHelp"
                placeholder="Rate"
              />
            </div>
            <div class="w-100">
              <label
                for="exampleInputEmail1"
                class="form-label margin-btm-sm mt-0"
                >Discount
              </label>
              <input
                id="exampleInputEmail1"
                v-model="goodsReceiptNote.discount"
                type="text"
                class="form-control mt-0"
                aria-describedby="emailHelp"
                placeholder="Discount"
              />
            </div>
          </div>
          <div class="w-100 mb-4">
            <label
              for="exampleInputEmail1"
              class="form-label margin-btm-sm mt-0"
              >Total Vale</label
            >
            <input
              id="exampleInputEmail1"
              v-model="goodsReceiptNote.total_value"
              type="text"
              class="form-control mt-0"
              aria-describedby="emailHelp"
              placeholder="Total Vale"
            />
          </div>
        </form>
        <button :class="['btn', 'table-btn', 'w-100']" type="button">
          Attach supporting document
        </button>
        <button
          :class="['btn', 'table-btn', 'w-100']"
          type="button"
          @click="submitGoodsReceipt()"
        >
          Generate Receipt Note
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsNotes",
  props: {
    saveGoodsReceipt: Function,
  },
  data() {
    return {
      goodsReceiptNote: {
        crop_description: "",
        packaging: "",
        no_of_bags: "",
        scale_type: "",
        gross_weight: "",
        tare_weight: "",
        net_weight: "",
        rejected_quantity: "",
        accepted_quantity: "",
        rate: "",
        discount: "",
        total_value: "",
      },
    };
  },
  methods: {
    submitGoodsReceipt() {
      this.saveGoodsReceipt(this.goodsReceiptNote);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.right-container-wrapper {
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

      label {
        font-size: 12px;
      }

      label.margin-btm-sm {
        margin-bottom: 4px;
        color: rgba(45, 55, 72, 0.8);
      }

      input.form-control {
        font-size: 12px;
        background-color: #f5f5f5 !important;

        &::placeholder {
          @include textStyles(Poppins, 700, 10px, 28px);
        }
      }

      button.table-btn {
        margin-top: 33px;
        padding: 15px 20px;
        background: #262c3f;
        border-radius: 5px;
        @include textStyles(Inter, 600, 16px, 19px);
        color: #ffffff;
        + button {
          background: #05b050;
        }
      }
    }
  }
}
</style>
