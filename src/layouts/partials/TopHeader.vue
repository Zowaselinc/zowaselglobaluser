<template>
    <!-- top navigation -->
    <nav class="navbar bg-white">
        <div id="nav-container" class="container-fluid">
            <a id="zowasel-nav-brand" class="navbar-brand" href="#">
                <div class="logo-background"></div>
            </a>
            <div class="search-barr d-flex flex-row justify-content-center align-items-center">
                <div id="search-icon">
                    <img class=" img-fluid" src="@/assets/images/vectors/search.svg">
                </div>
                <input type="search" id="seachID" class="form-control" aria-describedby="passwordHelpBlock"
                    placeholder="Type to search">
            </div>

            <div class="navbar-icons d-flex flex-row justify-content-center align-items-center">
                <div class="bell">
                    <img class="img-fluid" src="@/assets/images/vectors/Bell.svg" alt="bell">
                </div>
                <div class="gear">
                    <img class="img-fluid" src="@/assets/images/vectors/GearSix.svg" alt="gear">
                </div>
                <div>
                    <img class="img-fluid" src="@/assets/images/vectors/Avater.svg" alt="Avater">
                </div>

            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "TopHeader"
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/navigation";

</style>