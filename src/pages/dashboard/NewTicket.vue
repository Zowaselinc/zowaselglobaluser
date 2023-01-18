<template>
  <DefaultNav>
    <div class="big-container">
      <div class="headings">
        <div class="left-btns">
          <a href="/dashboard/tickets"
            ><img src="@/assets/images/vectors/arrowleft.png" alt=""
          /></a>
          <h2>New Ticket</h2>
        </div>
      </div>

      <form action="">
        <input type="text" placeholder="search" />
        <textarea id="" name="" cols="50" rows="10" />
        <div class="form-btns">
          <div class="attach">
            <input type="file" hidden />
            <button class="attach-btn">
              Attach a File
              <img src="@/assets/images/vectors/Paperclip.svg" alt="" />
            </button>
          </div>
          <button class="green-link">Submit</button>
        </div>
      </form>
    </div>
  </DefaultNav>
</template>

<script>
import DefaultNav from "@/layouts/DefaultNav.vue";
export default {
  name: "NewTickets",
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
  h2 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #4a4754;
  }
}

.headings {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;

  .left-btns {
    display: flex;
    gap: 10px;

    img {
      width: 22px;
      height: 18px;
    }
  }
  .right-btns {
    display: flex;
    gap: 20px;
  }
}
.green-link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  width: 180px;
  height: 40px;
  background: #05b050;
  border-radius: 5px;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.02em;
  text-decoration: none;
  border: none;
}

.date-region {
  margin-top: 30px;
}
form {
  width: 100%;

  input {
    width: 100%;
  }
  textarea {
    width: 100%;
    margin-top: 20px;
  }
}
.form-btns {
  display: flex;
  gap: 20px;
  margin-top: 30px;
  justify-content: flex-end;
}

.attach {
  width: 180px;
  height: 40px;
}
.attach-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #696671;
  width: 100%;
  height: 100%;
  background: #fff8e6;
  border-radius: 5px;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.02em;
  text-decoration: none;
  border: 1px solid #fbc52b;
  box-shadow: 0px 2px 8px rgba(44, 39, 56, 0.02);
}
</style>
