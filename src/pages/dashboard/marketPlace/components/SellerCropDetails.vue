<template>
    <div class="main_container">
        <!-- new crop  wanted form-->
        <div class="crop-wanted-section d-flex flex-row gap-4">
            <form>
                <div class="crop_details">Crop Details</div>
                <div class="w-100 mb-3">
                    <label for="exampleInputEmail1" class="form-label mb-0">Crop Category</label>
                    <select class="form-select" aria-label="Default select example" required>
                        <option selected>Select Category</option>
                    </select>
                </div>
                <div class="w-100 mb-3">
                    <label for="exampleInputEmail1" class="form-label mb-0">Product sub category</label>
                    <select class="form-select" aria-label="Default select example" required>
                        <option selected>Select Category</option>
                    </select>
                </div>
                <div class="w-100 mb-3">
                    <label for="exampleInputEmail1" class="form-label mb-0">Product Color</label>
                    <select class="form-select" aria-label="Default select example" required>
                        <option selected>Select Category</option>
                    </select>
                </div>
                <div class="w-100 mb-3">
                    <label for="exampleInputEmail1" class="form-label mb-0">Moisture content (MC)</label>
                    <select class="form-select" aria-label="Default select example" required>
                        <option selected>Select Category</option>
                    </select>
                </div>
                <div class="w-100 mb-3">
                    <label for="exampleInputEmail1" class="form-label mb-0">Forieign Matter (FM)</label>
                    <select class="form-select" aria-label="Default select example" required>
                        <option selected>Select Category</option>
                    </select>
                </div>
                <div class="w-100 mb-3">
                    <label for="exampleInputEmail1" class="form-label mb-0">Test weight</label>
                    <select class="form-select" aria-label="Default select example" required>
                        <option selected>Select Category</option>
                    </select>
                </div>
                <!-- editor ends -->
            </form>
            <div class="vertical-line"></div>
            <!-- form two -->
            <form>
                <!-- Editor -->
                <div class="crop_details">Quality description</div>
                <div class="d-flex flex-row mb-3 gap-4 m_top">
                    <div class="w-100 editor-wrapper">
                        <!-- using quill editor tool-->
                        <div ref="editor"></div>
                    </div>

                </div>
                <!-- editor ends -->
                <div class="w-100 mb-3">
                    <label for="exampleInputEmail1" class="form-label mb-0">Currency</label>
                    <select class="form-select" aria-label="Default select example" required>
                        <option selected>Select Category</option>
                    </select>
                </div>
            </form>
        </div>

    </div>
</template>

<script>
import Quill from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";
export default {
    name: 'SellerCropDetails',
    props: {
        modelValue: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            editor: null,
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
            placeholder: "Type description!",
        });
        this.editor.root.innerHTML = this.modelValue;
        this.editor.on("text-change", function () {
            return _this.update();
        });
    },
    methods: {
        update: function update() {
            this.$emit(
                "update:modelValue",
                this.editor.getText() ? this.editor.root.innerHTML : ""
            );
        },
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.crop-wanted-section {
    background: #FFFFFF;
    border-radius: 4px;
    padding: 4%;
}

form {
    .crop_details {
        @include textStyles('Maven Pro', 700, 16px, 24px);
        letter-spacing: 0.01em;
        color: #4A4754;
        margin-bottom: 1rem;
    }

    .m_top {
        margin-top: 3.4rem;
    }

    width: 100%;
    padding-bottom: 2rem;

    select {
        font-size: 14px;
        color: #000000;

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
        color: rgba(45, 55, 72, 0.8);
    }
}

div.vertical-line {
    width: 2px;
    padding: 1px;
    background: #F5F5F5;
}

.editor-wrapper {
    padding-bottom: 50px;

    .ql-container {
        min-height: 50vh;
    }
}
</style>