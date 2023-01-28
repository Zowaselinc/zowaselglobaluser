<template>
  <div class="preloader">
    <div :style="{ backgroundColor: color }" class="spinner"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "#05b050",
    };
  },
};
</script>

<style>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner {
  border: 4px solid #fff;
  border-top: 4px solid #05b050;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* media  */
@media only screen and (max-width: 600px) {
  .preloader {
    background-color: rgba(255, 255, 255, 0.6);
  }
}

@media only screen and (max-width: 400px) {
  .preloader {
    background-color: rgba(255, 255, 255, 0.56);
  }
}
</style>
