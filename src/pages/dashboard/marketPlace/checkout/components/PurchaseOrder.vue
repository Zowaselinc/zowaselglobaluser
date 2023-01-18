<template>
  <div class="full-spec-wrapper">
    <h2>Standard Quality Specification (SQS)</h2>
    <table class="table table-SQS table-bordered">
      <thead>
        <tr>
          <th>Parameters</th>
          <th>
            <span id="parameters" class="d-block">Specification</span>(Dropdown
            Menu)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Color</td>
          <td>
            <div>{{ placeString(specification.color, "-") }}</div>
            <!-- <div>Red</div>
                        <div>Yellow</div>
                        <div>Cream</div>
                        <div>Brown</div> -->
          </td>
        </tr>
        <tr>
          <td>Moisture</td>
          <td>
            {{ placeString(specification.moisture, "-", { suffix: "%" }) }}
          </td>
        </tr>
        <tr>
          <td>Foreign Matter (FM)</td>
          <td>
            {{
              placeString(specification.foreign_matter, "-", { suffix: "%" })
            }}
          </td>
        </tr>
        <tr>
          <td>Broken Grains</td>
          <td>
            {{ placeString(specification.broken_grains, "-", { suffix: "%" }) }}
          </td>
        </tr>
        <tr>
          <td>Weevil</td>
          <td>{{ placeString(specification.weevil, "-", { suffix: "%" }) }}</td>
        </tr>
        <tr>
          <td>Damaged Kernel(DK)</td>
          <td>{{ placeString(specification.dk, "-", { suffix: "%" }) }}</td>
        </tr>
        <tr>
          <td>rotten/Shriveled</td>
          <td>
            {{
              placeString(specification.rotten_shriveled, "-", { suffix: "%" })
            }}
          </td>
        </tr>
        <tr>
          <td>Test weight</td>
          <td>{{ placeString(specification.unit, "-") }}</td>
        </tr>
        <tr>
          <td>Hardness</td>
          <td>
            {{ placeString(specification.hardness, "-", { suffix: "%" }) }}
          </td>
        </tr>
        <tr>
          <td>Splits</td>
          <td>{{ placeString(specification.splits, "-", { suffix: "%" }) }}</td>
        </tr>
        <tr>
          <td>Oil Content</td>
          <td>
            {{ placeString(specification.oil_content, "-", { suffix: "%" }) }}
          </td>
        </tr>
        <tr>
          <td>Infestation</td>
          <td>
            {{ placeString(specification.infestation, "-", { suffix: "%" }) }}
          </td>
        </tr>
        <tr>
          <td>Grain Size</td>
          <td>
            <div>{{ placeString(specification.grain_size, "-") }}</div>
          </td>
        </tr>
        <tr>
          <td>Hectoliter Test Weight</td>
          <td>
            {{ placeString(specification.hectoliter, "-", { suffix: "%" }) }}
          </td>
        </tr>
        <tr>
          <td>Total Defects</td>
          <td>
            {{ placeString(specification.total_defects, "-", { suffix: "%" }) }}
          </td>
        </tr>
        <tr>
          <td>Dockage</td>
          <td>
            {{ placeString(specification.dockage, "-", { suffix: "%" }) }}
          </td>
        </tr>
        <tr>
          <td>Ash Content</td>
          <td>
            {{ placeString(specification.ash_content, "-", { suffix: "%" }) }}
          </td>
        </tr>
        <tr>
          <td>Acid Insoluble ash</td>
          <td>
            {{ placeString(specification.acid_ash, "-", { suffix: "%" }) }}
          </td>
        </tr>
        <tr>
          <td>Volatile</td>
          <td>
            {{ placeString(specification.volatile, "-", { suffix: "%" }) }}
          </td>
        </tr>
        <tr>
          <td>Mold % By Weigh</td>
          <td>{{ placeString(specification.mold, "-", { suffix: "%" }) }}</td>
        </tr>
        <tr>
          <td>Drying Process</td>
          <td>{{ placeString(specification.drying_process, "-") }}</td>
        </tr>
      </tbody>
    </table>
    <div class="btn-group w-100 gap-4">
      <a href="" class="btn" type="button">Download</a>
      <a href="" class="btn" type="button">Print</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PurchaseOrder",
  props: {
    order: Object,
  },
  computed: {
    specification() {
      return this.order.negotiation
        ? this.order.negotiation.specification
        : this.order.products[0].specification;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.full-spec-wrapper {
  background: #ffffff;
  padding: 30px;

  h2 {
    font-size: 15px;
    font-weight: 800;
    margin-bottom: 15px;
  }

  table {
    font-size: 14px;
    #parameters {
      font-weight: 400;
    }
  }

  .btn-group {
    margin-block: 24px 73px;
    a {
      width: 274px;
      height: 47px;
      padding: 10px;
      background: #2d3748;
      &:hover {
        color: #ffffff;
      }
    }
  }
}
</style>
