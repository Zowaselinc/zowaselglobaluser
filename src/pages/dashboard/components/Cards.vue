<template>
  <div class="row">
    <div class="col">
      <div class="card carded">
        <p>Total</p>
        <p class="total-p">594,094</p>
      </div>
    </div>
    <div class="col">
      <div class="card carded">
        <p>Input Sold</p>
        <p class="input-p">594,094</p>
      </div>
    </div>
    <div class="col">
      <div class="card carded">
        <p>Crops Sold</p>
        <p class="sold-p">594,094</p>
      </div>
    </div>
    <div class="col">
      <div class="card carded">
        <p>Pending Offers</p>
        <p class="offers-p">594,094</p>
      </div>
    </div>
    <div class="col">
      <div class="card carded">
        <p>Pending Invoices</p>
        <p class="invoices-p">594,094</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
};
</script>

<style lang="scss" scoped>
.carded {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 18px 20px 15px;
  gap: 10px;
  border: none;

  p {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #96949c;
  }

  .total-p {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #4a4754;
  }

  .input-p {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #05b050;
  }

  .sold-p {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #3498db;
  }

  .offers-p {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #cd4647;
  }

  .invoices-p {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #fbc52b;
  }
}
</style>
