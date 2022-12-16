<template>
    <div class="full-spec-wrapper">
        <h2>Standard Quality Specification (SQS)</h2>
        <table class="table table-SQS table-bordered ">
            <thead>
                <tr>
                    <th>Parameters</th>
                    <th><span id="parameters" class="d-block">Specifiaction</span>(Dropdown Menu)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Color</td>
                    <td>
                        <div>White</div>
                        <div>Red</div>
                        <div>Yellow</div>
                        <div>Cream</div>
                        <div>Brown</div>
                    </td>
                </tr>
                <tr>
                    <td>Moisture</td>
                    <td>0%-20%</td>
                </tr>
                <tr>
                    <td>Foreign Matter (FM)</td>
                    <td>0%-10%</td>
                </tr>
                <tr>
                    <td>Broken Grains</td>
                    <td>0%-10%</td>
                </tr>
                <tr>
                    <td>Weevil</td>
                    <td>0%-10%</td>
                </tr>
                <tr>
                    <td>Damaged Kernel(DK)</td>
                    <td>0%-10%</td>
                </tr>
                <tr>
                    <td>rotten/Shriveled</td>
                    <td>0%-10%</td>
                </tr>
                <tr>
                    <td>Test weight</td>
                    <td>KG Or MT</td>
                </tr>
                <tr>
                    <td>Hardness</td>
                    <td>Hard or Soft</td>
                </tr>
                <tr>
                    <td>Splits</td>
                    <td>0%-25%</td>
                </tr>
                <tr>
                    <td>Oil Content</td>
                    <td>0%-10%</td>
                </tr>
                <tr>
                    <td>Infestation</td>
                    <td>0%-10%</td>
                </tr>
                <tr>
                    <td>Grain Size</td>
                    <td>
                        <div>Whole grain</div>
                        <div>Half grain</div>
                        <div>Long grain</div>
                        <div>Medium grain</div>
                        <div>Short grain</div>
                    </td>
                </tr>
                <tr>
                    <td>Hectoliter Test Weight</td>
                    <td>0%-10%</td>
                </tr>
                <tr>
                    <td>Total Defects</td>
                    <td>0%-10%</td>
                </tr>
                <tr>
                    <td>Dockage</td>
                    <td>0%-10%</td>
                </tr>
                <tr>
                    <td>Ash Content</td>
                    <td>0%-10%</td>
                </tr>
                <tr>
                    <td>Acid Insoluble ash</td>
                    <td>0%-10%</td>
                </tr>
                <tr>
                    <td>Volatile</td>
                    <td>0%-10%</td>
                </tr>
                <tr>
                    <td>Mold % By Weigh</td>
                    <td>0%-10%</td>
                </tr>
                <tr>
                    <td>Drying Process</td>
                    <td>Air dried or Fresh</td>
                </tr>
            </tbody>
        </table>
        <div class=" btn-group w-100 gap-4">
            <a href="" class="btn" type="button">Download</a>
            <a href="" class="btn" type="button">Print</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "PurchaseOrder"
}
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
            background: #2D3748;
            &:hover{
                color: #ffffff;
            }
        }
    }
}
</style>