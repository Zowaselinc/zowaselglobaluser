<template>
    <div class="main_container">
        <!-- new crop  wanted form-->
        <div class="crop-wanted-section d-flex flex-row gap-4">
            <form>
                <div class="crop_details">Quantity and Pricing</div>
                <div class="w-100 mb-3">
                    <label for="formGroupExampleInput" class="form-label mb-0">Crop quantity</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Type your answer"
                        v-model="newCropData.quantity">
                </div>
                <div class="w-100 mb-3">
                    <label for="formGroupExampleInput" class="form-label mb-0">Amount/offer</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Type your answer"
                        v-model="newCropData.amount">
                </div>
                <div class="crop_details mb-3 mt-5">Delivery Details</div>

                <div class="w-100 mb-3">
                    <label for="formGroupExampleInput" class="form-label mb-0">Delivery window</label>
                    <input type="date" class="form-control" id="formGroupExampleInput" placeholder="Type your answer"
                        v-model="newCropData.delivery_date">
                </div>
                <div class="w-100 mb-3">
                    <label for="exampleInputEmail1" class="form-label mb-0">Country</label>
                    <select class="form-select" aria-label="Default select example" required
                        v-model="newCropData.country">
                        <option :value="country.country" v-for="(country, index) in countries" :key="index">
                            {{ country.country }}</option>
                    </select>
                </div>
                <div class="w-100 mb-3">
                    <label for="exampleInputEmail1" class="form-label mb-0">State</label>
                    <select class="form-select" aria-label="Default select example" required
                        v-model="newCropData.state">
                        <option v-for="(state, index) in selectStateByCountry" :key="index">{{ state }}</option>
                    </select>
                </div>
                <div class="w-100 mb-3">
                    <label for="exampleInputEmail1" class="form-label mb-0">Negotiabl?</label>
                    <select class="form-select" aria-label="Default select example" required
                        v-model="newCropData.is_negotiable">
                        <option value="kg">Yes</option>
                        <option value="mt">No</option>
                    </select>
                </div>
            </form>
            <div class="vertical-line"></div>
            <!-- form two -->
            <form>

                <div class="crop_details">Product image</div>
                <div class="dropzone_conatiner my-4">
                    <div class="dropzone" id="my-dropzone">
                        <img src="@/assets/images/vectors/Image.svg" alt="image">
                        <div id="file-input">
                            <input type="file" ref="input" id="hidden_input" @change="uploadFile">
                            <span id="file_name" @click="openFileDialog()">click to browse</span>
                        </div>

                    </div>

                </div>
                <div class="w-100 ">
                    <label for="formGroupExampleInput" class="form-label mb-0">Enter video URL</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Type your answer"
                        v-model="newCropData.video_url">
                </div>
                <div class="w-100 mb-3">
                    <label for="exampleInputEmail1" class="form-label mb-0">Zip code/postal</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Type your answer"
                        v-model="newCropData.zip_code">
                </div>

            </form>
        </div>
    </div>
</template>

<script>
import countriesObject from "@/data/countries";

export default {
    name: 'QualityProduct',
    data() {
        return {
            newCropData: {
                quantity: '',
                amount: '',
                delivery_window: '',
                state: '',
                product_image: '',
                video_url: '',
                country: "",
                zip_code: '',
                is_negotiable: '',
            },
            countries: countriesObject.countries,
        }
    },
    computed: {
        selectStateByCountry: function () {
            // console.log(this.countries)
            return this.countries && this.newCropData.country != ""
                ? (this.countries.filter(item => item.country == this.newCropData.country))[0].states
                : [];
        }
    },
    methods: {
        openFileDialog() {
            document.getElementById("hidden_input").click();
        },
        uploadFile() {
            // Select the input element
            let input = document.querySelector("#hidden_input");
            let file = input.files[0];
            // Get the name of the file
            let fileName = file.name;
            // Update the innerHTML of the span with the selected file name
            document.getElementById("file_name").innerHTML = fileName;
            // Store the file in the data object
            this.newCropData.product_image = file;
        }


    },

};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

#hidden_input {
    display: none;
}

.crop-wanted-section {
    background: #FFFFFF;
    border-radius: 4px;
    padding: 4%;
}

form {
    .crop_details {
        @include textStyles(inherit, 700, 16px, 24px);
        letter-spacing: 0.01em;
        color: #4A4754;
        margin-bottom: 1rem;
    }

    .m_top {
        margin-top: 3.4rem;
    }

    width: 100%;
    padding-bottom: 2rem;

    select,
    input {
        font-size: 14px;
        color: #000000;

        &:hover,
        &:active,
        &:focus,
        &:focus-visible {
            border-color: #05b050 !important;
            box-shadow: 0 0 !important;
        }

        &::placeholder {
            @include textStyles('Maven Pro', 700, 14px, 24px);
            color: #000000;
        }
    }

    label {
        font-size: 14px;
        font-weight: 900;
        color: rgba(45, 55, 72, 0.8);
    }
}

div.vertical-line {
    width: 2px;
    padding: 1px;
    background: #F5F5F5;
}

// using drop-zone
.dropzone {
    width: 100%;
    height: 300px;
    border: 2px dashed #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Maven Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 147%;
    color: #4A4754;
    padding-inline: 10px;

    span {
        font-weight: 700;
        color: #05b050;
        cursor: pointer;
    }
}

.zone {
    height: 150px;
    font-size: 12px;
}

#hidden_input {
    display: none;
}
</style>