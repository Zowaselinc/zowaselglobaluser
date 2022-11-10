<template>
        <footer class="position-relative">
        <hr>
        <div class="footer-main">
            <div class="footer-top">
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Enter email address">
                <div class="send-icon d-flex justify-content-center align-items-center">
                    <img class="" src="@/assets/images/vectors/send.svg">
                </div>
            </div>
            <div class="footer-info">
                <!-- contacts -->
                <div class="footer-item-A">
                    <!-- logo -->
                    <div class="brand-logo">
                        <img class="img-fluid" src="@/assets/images/logos/zowasel-grey-logo.png" alt="logo">
                    </div>
                    <div class="address footer-contact">
                        <p class="mt-3 mb-1">Collins Street West, Victoria,</p>
                        <p>Australia (AU4578).</p>
                    </div>
                    <div class="footer-email footer-contact">
                        <h2>Email:</h2>
                        <p>Info@Zowasel.com</p>
                    </div>
                    <div class="footer-call footer-contact">
                        <h2>Call:</h2>
                        <p>91 855 742 62548</p>
                    </div>
                </div>
                <!-- company info -->
                <div class="footer-item-B">
                    <h2>About</h2>
                    <div>Company</div>
                    <div>Contact</div>
                    <div>Help</div>
                    <div>Blog</div>
                    <div>Pricing</div>
                </div>
                <!-- features -->
                <div class="footer-item-c">
                    <h2>Feature</h2>
                    <div>Crop Center</div>
                    <div>Trust and Security</div>
                </div>
                <!-- Explore -->
                <div class="footer-item-D">
                    <h2>Explore</h2>
                    <div>How it Works</div>
                    <div>Terms and Conditions</div>
                    <div>Privacy</div>
                </div>
                <!-- gadget -->
                <div class=" gadget d-flex flex-column">
                    <h2>Download Apps</h2>
                    <!-- Google play -->
                    <div class="google store-box d-flex flex-row align-items-center ">
                        <div class="google-Img">
                            <img src="@/assets/images/vectors/PlayStore.svg" alt="google play">
                        </div>
                        <div class="google-play d-flex flex-column  ">
                            <div>Google Play</div>
                            <div>Get It Now</div>
                        </div>
                    </div>
                    <!-- App Store -->
                    <div class="apple store-box d-flex flex-row align-items-center">
                        <div>
                            <img src="@/assets/images/vectors/appleStore.svg" alt="google play">
                        </div>
                        <div class="apple-store d-flex flex-column ">
                            <div>App Store</div>
                            <div>Get It Now</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="copyright">
            <div class="copyright-container  d-flex flex-row position-relative">
                <p>Copyright © 2021 Zowasel Inc. All Right Reserved.</p>
                <div class="social-media d-flex position-absolute">
                    <a href="#">
                        <img src="@/assets/images/vectors/facebook.svg" alt="facebook">
                    </a>
                    <a href="#">
                        <img src="@/assets/images/vectors/twitter.svg" alt="twitter">
                    </a>
                    <a href="#">
                        <img src="@/assets/images/vectors/instagram.svg" alt="facebook">
                    </a>
                    <a href="#">
                        <img src="@/assets/images/vectors/linkdln.svg" alt="facebook">
                    </a>
                </div>
            </div>
            </div>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "@/assets/scss/navigation";

</style>