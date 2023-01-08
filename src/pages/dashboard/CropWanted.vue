<template>
    <DefaultNav>
        <div class="big-container">
            <div class="big-content">
                <!-- header -->
                <div class="page-header">
                    <h1>New Crop Wanted</h1>
                </div>
                <!-- new crop  wanted form-->
                <form>
                    <div class="d-flex flex-row mb-3 gap-4">
                        <div class="w-100">
                            <label for="exampleInputEmail1" class="form-label mb-0">Crop Category</label>
                            <select class="form-select" aria-label="Default select example" required>
                                <option selected>Select Category</option>
                            </select>
                        </div>

                        <div class="w-100">
                            <label for="exampleInputEmail1" class="form-label mb-0">Product Sub Category</label>
                            <select class="form-select" aria-label="Default select example" required>
                                <option selected>select sub category</option>
                            </select>
                        </div>

                    </div>
                    <div class="d-flex flex-row mb-3 gap-4">
                        <div class="w-100">
                            <label for="exampleInputEmail1" class="form-label mb-0">Product Color</label>
                            <select class="form-select" aria-label="Default select example" required>
                                <option selected>select product color</option>
                            </select>
                        </div>

                        <div class="w-100">
                            <label for="exampleInputEmail1" class="form-label mb-0">Moisture Content(MC)</label>
                            <select class="form-select" aria-label="Default select example" required>
                                <option selected>select</option>
                            </select>
                        </div>

                    </div>
                    <div class="d-flex flex-row mb-3 gap-4">
                        <div class="w-100">
                            <label for="exampleInputEmail1" class="form-label mb-0">Forign Matter(FM)</label>
                            <select class="form-select" aria-label="Default select example" required>
                                <option selected>Select</option>
                            </select>
                        </div>

                        <div class="w-100">
                            <label for="exampleInputEmail1" class="form-label mb-0">Test Weight</label>
                            <select class="form-select" aria-label="Default select example" required>
                                <option selected>select</option>
                            </select>
                        </div>
                    </div>
                    <div class="d-flex flex-row mb-3 gap-4">
                        <div class="w-100">
                            <label for="exampleInputEmail1" class="form-label mb-0">Currency</label>
                            <select class="form-select" aria-label="Default select example" required>
                                <option selected>Select currency</option>
                            </select>
                        </div>
                    </div>
                    <div class="d-flex flex-row mb-3 gap-4">
                        <div class="w-100">
                            <label for="exampleInputEmail1" class="form-label mb-0">Country</label>
                            <select class="form-select" aria-label="Default select example" required>
                                <option selected>Select Country</option>
                            </select>
                        </div>

                        <div class="w-100">
                            <label for="exampleInputEmail1" class="form-label mb-0">State</label>
                            <select class="form-select" aria-label="Default select example" required>
                                <option selected>Select State</option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex flex-row mb-3 gap-4">
                        <div class="w-100">
                            <label for="exampleInputEmail1" class="form-label mb-0">Warehouse Address</label>
                            <select class="form-select" aria-label="Default select example" required>
                                <option selected>Enter a location</option>
                            </select>
                        </div>

                        <div class="w-100">
                            <label for="exampleInputEmail1" class="form-label mb-0">Zip Code/Postal</label>
                            <select class="form-select" aria-label="Default select example" required>
                                <option selected>select</option>
                            </select>
                        </div>

                    </div>
                    <!-- Editor -->
                    <div class="d-flex flex-row mb-3 gap-4">
                        <div class="w-100 editor-wrapper">
                            <label for="exampleInputEmail1" class="form-label mb-0">Quality Description</label>
                            <!-- using quill editor tool-->
                            <div ref="editor"></div>
                        </div>

                    </div>
                    <!-- editor ends -->
                </form>
                <hr id="hr-cropwanted">
                <div id="btn-group" class="btn-group gap-3 mb-4">
                    <a href="" class="btn btn-primary active" aria-current="page">Back</a>
                    <a href="javascript:void(0)" class="btn btn-primary" @click="createCrop()">Next</a>
                </div>
            </div>
        </div>
    </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
import Quill from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";
import MarketPlaceService from "@/services/marketplace";

export default {
    name: 'CropWanted',
    props: {
        modelValue: {
            type: String,
            default: "",
        },
    },
    components: {
        DefaultNav,

    },
    data() {
        return {
            editor: null,
            cropData : {
                category : "dsfdsf",
                sub_category : "sdsf",
                mositure_content : "dsfdsf",
                foreign_matter : "dfs",
                test_weight : "sdfdsf",
                currency : "sdfdsf",
                country : "sf",
                state : "sdfsddf",
                warehouse_address : "sdfsf",
                zip_code : "sdf",
                description : "sdfdsf"
            }
        };
    },
    mounted() {
        var _this = this;

        this.editor = new Quill(this.$refs.editor, {
            modules: {
                toolbar: [
                    [
                        {
                            header: [1, 2, 3, 4, false],
                        },
                    ],
                    ["bold", "italic", "underline", "link"],
                ],
            },
            //theme: 'bubble',
            theme: "snow",
            formats: ["bold", "underline", "header", "italic", "link"],
            placeholder: "Type something in here!",
        });
        this.editor.root.innerHTML = this.modelValue;
        this.editor.on("text-change", function () {
            return _this.update();
        });
    },
    methods: {
        update() {
            this.$emit(
                "update:modelValue",
                this.editor.getText() ? this.editor.root.innerHTML : ""
            );
        },
        createCrop(){
            MarketPlaceService.createCropWanted(this.cropData, (response)=>{
                console.log(response);
            })
        }
    },
};


</script>


<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.big-container {
    width: 100%;
    height: auto;
    background: #F5F5F5;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;


    @include breakpoint-between(md, lg) {
        width: 60.5%;
    }

    @include breakpoint-between(lg, xl) {
        width: 69.5%;
    }

    @include breakpoint-between(xl, xxl) {
        width: 76%;
    }
}

.big-content {
    background: #FFFFFF;
}

.page-header {
    width: 100%;
    padding: 14px 30px;
    background: #262C3F;

    h1 {
        @include textStyles(Poppins, 700, 24px, 120%);
        color: #FFFFFF;
        text-align: center;
    }
}

form {
    padding: 4% 8%;

    select {
        font-size: 14px;
        color: #4A4754;

        &:hover,
        &:active,
        &:focus,
        &:focus-visible {
            border-color: #05b050 !important;
            box-shadow: 0 0 !important;
        }
    }

    label {
        font-size: 14px;
        font-weight: 900;
    }
}

.editor-wrapper {
    padding-bottom: 50px;
}

#hr-cropwanted {
    margin-inline: 8%;
}

#btn-group {
    float: right;
    margin-right: 8%;

    a {
        background: #262C3F;
        border-color: #262C3F;
        border-radius: 4px;

        +a {
            background: #05b050;
            border-color: #05b050;
        }
    }
}
</style>