<template>
    <div class="checkbox-container">
        <input class="checkbox-input" type="checkbox" />
        <div class="checkbox d-flex justify-content-center align-content-center">
            <img src="@/assets/images/vectors/tick-white.svg">
        </div>
    </div>
</template>

<script>

export default {
    name: 'Checkbox',
}
</script>

<style lang="scss" scoped>
.checkbox-container {
    width: 18px;
    height: 18px;
}

.checkbox-input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
}

.checkbox {
    border: 2px solid #D1D1D1;
    width: 100%;
    height: 100%;
    border-radius: 3px;

    img {
        display: none;
    }
}

.checkbox-input:checked+.checkbox {
    background: #05B050;
    border: 1.5px solid #047B38;

    img {
        display: block !important;
        width: 80%;
    }
}
</style>