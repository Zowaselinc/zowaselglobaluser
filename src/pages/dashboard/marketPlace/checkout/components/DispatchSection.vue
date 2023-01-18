<template>
  <!-- for dispactch Section -->
  <div class="dispatch-section">
    <h1 class="mb-4">Dispatch Section</h1>
    <form>
      <div class="inputs-group margin-btm-lg">
        <div class="">
          <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0"
            >From</label
          >
          <input
            id="exampleInputEmail1"
            v-model="dispatch.from"
            type="email"
            class="form-control mt-0"
            aria-describedby="emailHelp"
            placeholder="Seller Information"
          />
        </div>
        <div class="">
          <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0"
            >To</label
          >
          <input
            id="exampleInputEmail1"
            v-model="dispatch.to"
            type="email"
            class="form-control mt-0"
            aria-describedby="emailHelp"
            placeholder="Buyer Information "
          />
        </div>
      </div>
      <div class="inputs-group margin-btm-lg">
        <div class="">
          <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0"
            >Date</label
          >
          <input
            id="exampleInputEmail1"
            v-model="dispatch.date"
            type=""
            class="form-control mt-0"
            aria-describedby="emailHelp"
            placeholder="Seller Information"
          />
        </div>
        <div class="">
          <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0"
            >Cosignee</label
          >
          <input
            id="exampleInputEmail1"
            v-model="dispatch.cosignee"
            type="email"
            class="form-control mt-0"
            aria-describedby="emailHelp"
            placeholder="Cosignee"
          />
        </div>
      </div>
      <div class="inputs-group margin-btm-lg">
        <div class="">
          <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0"
            >Truck Number</label
          >
          <input
            id="exampleInputEmail1"
            v-model="dispatch.truck_number"
            type=""
            class="form-control mt-0"
            aria-describedby="emailHelp"
            placeholder="Truck Number"
          />
        </div>
      </div>
      <div class="inputs-group margin-btm-lg">
        <div class="w-100">
          <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0"
            >Remarks</label
          >
          <textarea
            id="exampleInputEmail1"
            v-model="dispatch.remarks"
            type=""
            class="form-control mt-0"
            aria-describedby="emailHelp"
            placeholder="Remarks"
            height="600"
          />
        </div>
      </div>
      <div class="inputs-group margin-btm-lg">
        <div class="">
          <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0"
            >Drivers Name</label
          >
          <input
            id="exampleInputEmail1"
            v-model="dispatch.drivers_data.drivers_name"
            type=""
            class="form-control mt-0"
            aria-describedby="emailHelp"
            placeholder="Drivers Name"
          />
        </div>
        <div class="">
          <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0"
            >Sellers Representative</label
          >
          <input
            id="exampleInputEmail1"
            v-model="dispatch.sellers_data.sellers_representative"
            type="email"
            class="form-control mt-0"
            aria-describedby="emailHelp"
            placeholder="Sellers Representative"
          />
        </div>
      </div>
      <div class="inputs-group margin-btm-lg">
        <div class="">
          <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0"
            >Driving License/ Permit Number</label
          >
          <input
            id="exampleInputEmail1"
            v-model="dispatch.drivers_data.driving_license"
            type=""
            class="form-control mt-0"
            aria-describedby="emailHelp"
            placeholder="Driving License/ Permit Number"
          />
        </div>
        <div class="">
          <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0"
            >Title</label
          >
          <input
            id="exampleInputEmail1"
            v-model="dispatch.sellers_data.title"
            type="email"
            class="form-control mt-0"
            aria-describedby="emailHelp"
            placeholder="Title"
          />
        </div>
      </div>
      <div class="inputs-group margin-btm-lg">
        <div class="">
          <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0"
            >Date</label
          >
          <input
            id="exampleInputEmail1"
            v-model="dispatch.drivers_data.date"
            type=""
            class="form-control mt-0"
            aria-describedby="emailHelp"
            placeholder="Date"
          />
        </div>
        <div class="">
          <label for="exampleInputEmail1" class="form-label margin-btm-sm mt-0"
            >Date</label
          >
          <input
            id="exampleInputEmail1"
            v-model="dispatch.sellers_data.date"
            type=""
            class="form-control mt-0"
            aria-describedby="emailHelp"
            placeholder="Date"
          />
        </div>
      </div>
      <button
        :class="['btn', 'table-btn', 'w-100', 'mb-4']"
        type="button"
        @click="proceed(dispatch)"
      >
        Proceed to receipt section
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "DispatchSection",
  components: {},
  props: {
    proceed: Function,
  },
  data() {
    return {
      dispatch: {
        from: "",
        to: "",
        date: "",
        cosignee: "",
        truck_number: "",
        description: "",
        quantity: "",
        remarks: "",
        drivers_data: {
          drivers_name: "",
          driving_license: "",
          date: new Date().toDateString(),
        },
        sellers_data: {
          sellers_representative: "",
          title: "",
          date: new Date().toDateString(),
        },
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

h1 {
  text-align: center;
  text-transform: capitalize;
  color: #1d1d1d;
  @include textStyles(Poppins, 700, 18px, 28px);
}

form {
  .inputs-group {
    display: flex;
    flex-direction: row;
    gap: 45px;

    > div {
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
    background-color: #f5f5f5 !important;

    &::placeholder {
      @include textStyles(Poppins, 700, 12px, 28px);
    }
  }

  // button group
  button.table-btn {
    margin-top: 33px;
    padding: 15px 20px;
    background: #05b050;
    border-radius: 5px;
    @include textStyles(Inter, 600, 16px, 19px);
    color: #ffffff;
  }
}
</style>
