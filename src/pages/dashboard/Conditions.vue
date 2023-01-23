<template>
  <DefaultNav>
    <div class="big-container">
      <div class="headings">
        <h2>Condtions</h2>
        <div class="right-btns">
          <a href="" class="green-link">Save</a>
        </div>
      </div>

      <form class="mb-4">
        <div class="mt-4">
          <label for="">
            If Yes, what do your animals eat and where do they live?
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="mt-4">
          <label for=""> Zowasel Marketplace registered seller </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
      </form>
    </div>
  </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
export default {
  name: "Conditions",
  components: {
    DefaultNav,
  },
};
</script>

<style lang="scss" scoped>
.big-container {
  width: 100%;
  height: auto;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  padding: 2% 5% 2% 3%;
  overflow-y: scroll;
  h2 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #4a4754;
  }
}
.active-subscriptions {
  background-color: white;
  padding: 24px 65px;
  margin-top: 40px;

  h2 {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    color: #696671;
  }
}

/* The slider */
.sub-history {
  margin-top: 50px;
  width: 100%;
  margin-left: 10px;

  h2 {
    margin-bottom: 40px;
  }
  .theader {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    color: #4a4754;
  }
}
.headings {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  a {
    text-decoration: none;
  }
  .right-btns {
    display: flex;
    gap: 20px;
  }
  .green-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    width: 145px;
    height: 40px;
    background: #05b050;
    border-radius: 5px;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.02em;
  }
}
.green-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  width: 145px;
  height: 40px;
  background: #05b050;
  border-radius: 5px;
  letter-spacing: 0.02em;
}
.yellow-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  color: white;
  width: 145px;
  height: 40px;
  background: #fab900 !important;
  border-radius: 5px;
  letter-spacing: 0.02em;
}
a {
  text-decoration: none;
}
.small-font {
  font-size: 11px !important;
}
</style>
