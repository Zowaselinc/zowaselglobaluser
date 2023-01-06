<template>
    <div class="full-spec-wrapper">
        <h2>Standard Quality Specification (SQS)</h2>
        <table class="table table-SQS table-bordered ">
            <thead>
                <tr>
                    <th>Parameters</th>
                    <th><span id="parameters" class="d-block">Specification</span>(Dropdown Menu)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Color</td>
                    <td>
                        <div>{{ placeString(order.products[0].specification.color,"-")  }}</div>
                        <!-- <div>Red</div>
                        <div>Yellow</div>
                        <div>Cream</div>
                        <div>Brown</div> -->
                    </td>
                </tr>
                <tr>
                    <td>Moisture</td>
                    <td>{{ placeString(order.products[0].specification.moisture, "-", {suffix : "%"})  }}</td>
                </tr>
                <tr>
                    <td>Foreign Matter (FM)</td>
                    <td>{{ placeString(order.products[0].specification.foreign_matter,"-",{suffix : "%"})  }}</td>
                </tr>
                <tr>
                    <td>Broken Grains</td>
                    <td>{{ placeString(order.products[0].specification.broken_grains,"-",{suffix : "%"}) }}</td>
                </tr>
                <tr>
                    <td>Weevil</td>
                    <td>{{ placeString(order.products[0].specification.weevil,"-",{suffix : "%"}) }}</td>
                </tr>
                <tr>
                    <td>Damaged Kernel(DK)</td>
                    <td>{{ placeString(order.products[0].specification.dk,"-",{suffix : "%"}) }}</td>
                </tr>
                <tr>
                    <td>rotten/Shriveled</td>
                    <td>{{ placeString(order.products[0].specification.rotten_shriveled, "-", {suffix : "%"}) }}</td>
                </tr>
                <tr>
                    <td>Test weight</td>
                    <td>{{ placeString(order.products[0].specification.unit, "-") }}</td>
                </tr>
                <tr>
                    <td>Hardness</td>
                    <td>{{ placeString(order.products[0].specification.hardness,"-",{suffix : "%"}) }}</td>
                </tr>
                <tr>
                    <td>Splits</td>
                    <td>{{ placeString(order.products[0].specification.splits,"-",{suffix : "%"}) }}</td>
                </tr>
                <tr>
                    <td>Oil Content</td>
                    <td>{{ placeString(order.products[0].specification.oil_content,"-",{suffix : "%"}) }}</td>
                </tr>
                <tr>
                    <td>Infestation</td>
                    <td>{{ placeString(order.products[0].specification.infestation,"-",{suffix : "%"}) }}</td>
                </tr>
                <tr>
                    <td>Grain Size</td>
                    <td>
                        <div>{{ placeString(order.products[0].specification.grain_size,"-") }}</div>
                    </td>
                </tr>
                <tr>
                    <td>Hectoliter Test Weight</td>
                    <td>{{ placeString(order.products[0].specification.hectoliter,"-",{suffix : "%"}) }}</td>
                </tr>
                <tr>
                    <td>Total Defects</td>
                    <td>{{ placeString(order.products[0].specification.total_defects,"-",{suffix : "%"})}}</td>
                </tr>
                <tr>
                    <td>Dockage</td>
                    <td>{{ placeString(order.products[0].specification.dockage,"-",{suffix : "%"})}}</td>
                </tr>
                <tr>
                    <td>Ash Content</td>
                    <td>{{ placeString(order.products[0].specification.ash_content,"-",{suffix : "%"}) }}</td>
                </tr>
                <tr>
                    <td>Acid Insoluble ash</td>
                    <td>{{ placeString(order.products[0].specification.acid_ash,"-",{suffix : "%"}) }}</td>
                </tr>
                <tr>
                    <td>Volatile</td>
                    <td>{{ placeString(order.products[0].specification.volatile,"-",{suffix : "%"}) }}</td>
                </tr>
                <tr>
                    <td>Mold % By Weigh</td>
                    <td>{{ placeString(order.products[0].specification.mold,"-",{suffix : "%"}) }}</td>
                </tr>
                <tr>
                    <td>Drying Process</td>
                    <td>{{ placeString(order.products[0].specification.drying_process,"-") }}</td>
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
    name: "FullSpecification",
    props : {
        order : Object
    },
    computed:{
        specification(){
            return this.order.negotiation ? this.order.negotiation.specification : this.order.products[0].specification;
        },
    }
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