<template>
  <div class="chat-container">
    <div class="right-top-section">
      <h1>{{ title }}</h1>
    </div>
    <div class="contents">
      <div v-if="messages.length" id="chat-section" class="opened-message">
        <div v-for="(group, index) in groupMessages" :key="index">
          <p class="centered-text">
            {{ group.date }}
          </p>
          <template v-for="(message, index) in group.messages" :key="index">
            <div
              v-if="
                message.sender_id == sender.id && message.messagetype == 'text'
              "
              class="sent-message"
            >
              <div class="sent-content">
                <p>{{ message.message }}</p>
                <span class="sent-time">{{ message.time }}</span>
              </div>
            </div>
            <div
              v-if="
                message.receiver_id == sender.id &&
                message.messagetype == 'text'
              "
              class="incoming-message"
            >
              <div class="incoming-content">
                <p>{{ message.message }}</p>
                <span class="received-time">{{ message.time }}</span>
              </div>
            </div>
            <div
              v-if="message.messagetype == 'offer'"
              :class="
                message.receiver_id == sender.id ? 'offer-left' : 'offer-right'
              "
            >
              <div class="offered">
                <div class="colored">
                  <h3>Offer</h3>
                  <hr />
                  <div class="white-line" />
                  <div class="each-item">
                    <p>Required Item</p>
                    <h4>{{ parseOffer(message).qty }}kg</h4>
                  </div>
                  <div class="each-item">
                    <p>Offer Price</p>
                    <h4>{{ parseOffer(message).price }}%</h4>
                  </div>
                  <div class="each-item">
                    <p>Oil content</p>
                    <h4>{{ parseOffer(message).oil_content }}%</h4>
                  </div>
                  <div class="each-item">
                    <p>Foreign matter</p>
                    <h4>{{ parseOffer(message).foreign_matter }}%</h4>
                  </div>
                  <div class="each-item">
                    <p>Infestation</p>
                    <h4>{{ parseOffer(message).infestation }}%</h4>
                  </div>
                  <div class="each-item">
                    <p>Moisture</p>
                    <h4>{{ parseOffer(message).moisture }}%</h4>
                  </div>
                  <div class="each-item">
                    <p>Weevil</p>
                    <h4>{{ parseOffer(message).weevil }}%</h4>
                  </div>
                  <div class="each-item">
                    <p>Splits</p>
                    <h4>{{ parseOffer(message).splits }}%</h4>
                  </div>
                  <button>View Full Specification</button>
                </div>
                <div
                  v-if="message.sender_id != sender.id"
                  class="bottom-container"
                >
                  <div class="check-buttons">
                    <input
                      type="checkbox"
                      :disabled="message.status == 'declined' ? '' : null"
                      :checked="
                        message.status == 'accepted' ||
                        message.status == 'closed'
                          ? ''
                          : null
                      "
                      @click="acceptOffer(message)"
                    />
                    <label for="">Accept</label>
                    <input
                      type="checkbox"
                      :disabled="message.status == 'accepted' ? '' : null"
                      :checked="message.status == 'declined' ? '' : null"
                      @click="declineOffer(message)"
                    />
                    <label for="">Decline</label>
                  </div>
                  <div class="timed">
                    <p>{{ message.time }}</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>

      <!--  -->
      <form v-if="offerFormVisible" id="offer-form" class="container">
        <a href="#" class="close-form" @click="closeForm()"> X </a>
        <div class="main-form">
          <div class="form-row">
            <div class="form-group form-inputs got-it">
              <label for="formGroupExampleInput">Quantity</label>
              <div class="quantity">
                <select class="form-control" name="">
                  <option value="">kg</option>
                  <option value="">bags</option>
                </select>
                <input
                  v-model="offerData.qty"
                  type="text"
                  class="form-control"
                  placeholder="Enter quantity"
                />
              </div>
            </div>
            <div class="form-group form-inputs">
              <label for="formGroupExampleInput2">Price</label>
              <input
                v-model="offerData.price"
                type="text"
                class="form-control amount"
                placeholder="Enter Amount"
              />
            </div>
            <div class="form-group form-inputs">
              <label for="formGroupExampleInput2">Oil Content</label>
              <input
                v-model="offerData.oil_content"
                type="text"
                class="form-control percentage"
                placeholder="%"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group form-inputs">
              <label for="formGroupExampleInput">Foreign Matter</label>
              <input
                id="formGroupExampleInput"
                v-model="offerData.foreign_matter"
                type="text"
                class="form-control percentage"
                placeholder="%"
              />
            </div>
            <div class="form-group form-inputs">
              <label for="formGroupExampleInput2">Infestation</label>
              <input
                id="formGroupExampleInput2"
                v-model="offerData.infestation"
                type="text"
                class="form-control percentage"
                placeholder="%"
              />
            </div>
            <div class="form-group form-inputs">
              <label for="formGroupExampleInput2">Moisture</label>
              <input
                id="formGroupExampleInput2"
                v-model="offerData.moisture"
                type="text"
                class="form-control percentage"
                placeholder="%"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group form-inputs">
              <label for="formGroupExampleInput">Weevil</label>
              <input
                id="formGroupExampleInput"
                v-model="offerData.weevil"
                type="text"
                class="form-control percentage"
                placeholder="%"
              />
            </div>
            <div class="form-group form-inputs">
              <label for="formGroupExampleInput2">Hardness</label>
              <input
                id="formGroupExampleInput2"
                v-model="offerData.hardness"
                type="text"
                class="form-control percentage"
                placeholder="%"
              />
            </div>
            <div class="form-group form-inputs">
              <label for="formGroupExampleInput2">Splits</label>
              <input
                id="formGroupExampleInput2"
                v-model="offerData.splits"
                type="text"
                class="form-control percentage"
                placeholder="%"
              />
            </div>
          </div>
          <div class="form-row mb-4">
            <div class="form-group form-inputs">
              <label for="formGroupExampleInput">Broken Grains</label>
              <input
                id="formGroupExampleInput"
                v-model="offerData.broken_grains"
                type="text"
                class="form-control"
                placeholder=""
              />
            </div>
            <div class="form-group form-inputs">
              <label for="formGroupExampleInput2">Rotten Shriveled</label>
              <input
                id="formGroupExampleInput2"
                v-model="offerData.rotten_shriveled"
                type="text"
                class="form-control"
                placeholder=""
              />
            </div>
            <div class="form-group form-inputs">
              <label for="formGroupExampleInput2">Damaged Kernel</label>
              <input
                id="formGroupExampleInput2"
                v-model="offerData.dk"
                type="text"
                class="form-control"
                placeholder=""
              />
            </div>
          </div>
        </div>
        <div class="form-row mb-3">
          <button type="button" class="form-send" @click="sendMessage('offer')">
            Send
          </button>
        </div>
      </form>

      <div v-if="!messages.length" class="chat-image">
        <img src="@/assets/images/backgrounds/ChatsCircle.png" alt="" />
        <h1>Chat or send an offer to negotiate</h1>
      </div>
    </div>
    <div class="typing-zone">
      <p v-if="false" class="typing">Zowasel is typing</p>
      <div class="form-content">
        <div class="input-session">
          <input
            v-model="message"
            class="no-border"
            type="text"
            placeholder="Type your message here"
          />
          <div class="icons me-">
            <a href=""
              ><img src="@/assets/images/vectors/attach.svg" alt=""
            /></a>
            <a href=""
              ><img src="@/assets/images/vectors/emoji.svg" alt=""
            /></a>
            <a href="javascript:void(0)" @click="sendMessage('message')"
              ><img src="@/assets/images/vectors/PaperPlaneTilt.svg" alt=""
            /></a>
          </div>
        </div>
        <button @click="offer()">
          Send Offer <img src="@/assets/images/vectors/arrow-down.svg" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import DateUtils from "@/utilities/date";

export default {
  name: "ChatView",
  props: {
    sender: Object,
    recepient: Object,
    product: Object,
    title: String,
    messages: Object,
    loadMessages: Function,
    onSendMessage: Function,
    onSendOffer: Function,
    onAcceptOffer: Function,
    onDeclineOffer: Function,
  },
  data() {
    return {
      message: "",
      offerFormVisible: false,
      offerData: {
        qty: "",
        price: "",
        color: this.product.specification.color,
        moisture: this.product.specification.moisture,
        foreign_matter: this.product.specification.foreign_matter,
        broken_grains: this.product.specification.broken_grains,
        weevil: this.product.specification.weevil,
        dk: this.product.specification.dk,
        rotten_shriveled: this.product.specification.rotten_shriveled,
        test_weight: this.product.specification.test_weight,
        hectoliter: this.product.specification.hectoliter,
        hardness: this.product.specification.hardness,
        splits: this.product.specification.splits,
        oil_content: this.product.specification.oil_content,
        infestation: this.product.specification.infestation,
        grain_size: this.product.specification.grain_size,
        total_defects: this.product.specification.total_defects,
        dockage: this.product.specification.dockage,
        ash_content: this.product.specification.ash_content,
        acid_ash: this.product.specification.acid_ash,
        volatile: this.product.specification.volatile,
        mold: this.product.specification.mold,
        drying_process: this.product.specification.drying_process,
        dead_insect: this.product.specification.dead_insect,
        mammalian: this.product.specification.mammalian,
        infested_by_weight: this.product.specification.infested_by_weight,
        curcumin_content: this.product.specification.curcumin_content,
        extraneous: this.product.specification.extraneous,
      },
    };
  },
  computed: {
    groupMessages() {
      var groups = {};
      this.messages.forEach((item) => {
        var timestamp = DateUtils.formatDateFromApi(item.created_at);
        var timeString;
        var today = new Date();
        var yesterday = new Date();
        yesterday.setDate(new Date().getDate - 1);
        var messageDate = new Date(item.created_at);
        item.time = timestamp.time;
        item.utcTime = messageDate.getTime();
        if (today.toDateString() === messageDate.toDateString()) {
          timeString = `Today`;
        } else if (yesterday.toDateString() === messageDate.toDateString()) {
          timeString = `Yesterday`;
        } else {
          timeString = `${timestamp.date}`;
        }

        groups[timestamp.date] = groups[timestamp.date]
          ? {
              date: timeString,
              messages: [...groups[timestamp.date].messages, item],
            }
          : {
              date: timeString,
              messages: [item],
            };

        groups[timestamp.date].messages.sort((a, b) => a.utcTime - b.utcTime);
      });

      return Object.values(groups).sort((a, b) => b.date.localeCompare(a.date));
    },
  },
  mounted() {
    let vm = this;
    this.loadMessages();
    this.interval = setInterval(() => {
      vm.loadMessages();
    }, 5000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    offer() {
      this.offerFormVisible = true;
    },
    parseOffer(message) {
      return JSON.parse(message.message);
    },
    closeForm() {
      this.offerFormVisible = false;
    },
    sendMessage(type) {
      let vm = this;
      if (type == "message") {
        this.onSendMessage(this.message, () => {
          this.message = "";
        });
      }
      if (type == "offer") {
        this.onSendOffer(this.offerData, () => {
          this.message = "";
          vm.closeForm();
        });
      }
    },
    acceptOffer(offer) {
      this.onAcceptOffer(offer);
    },
    declineOffer(offer) {
      this.onDeclineOffer(offer);
    },
  },
};
</script>

<style lang="scss" scoped>
.chat-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  position: relative;
}

.right-top-section {
  // height: 89px;
  padding: 14px 30px;
  width: 100%;
  background: #262c3f;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;

  h1 {
    font-size: 24px;
  }
}

.centered-text {
  text-align: center;
  margin-top: 30px;
}

.opened-message {
  padding: 37px 58px 37px 57px;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  overflow-y: scroll;

  .centered {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;

    .lines {
      border-bottom: 1px solid #d8d8d8;
      width: 40%;
    }

    .today {
      margin-left: 10px;
      margin-right: 10px;
    }
  }

  .sent-message {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
    margin-top: 10px;
    width: 100%;

    .sent-content {
      max-width: 50%;
      text-align: right;
    }

    .sent-content p {
      padding: 16px 16px;
      height: auto;
      background: #f9f9f9;
      border-radius: 4px;
      text-align: left;
      margin: 0px;
      font-size: 14px;
    }
  }

  .incoming-message {
    max-width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .incoming-content {
    max-width: 50%;
    text-align: right;
  }

  .incoming-content p {
    padding: 16px 16px;
    height: auto;
    border-radius: 4px;
    background: #fff8e6;
    text-align: left;
    margin: 0px;
    font-size: 14px;
  }
}

.contents {
  width: 100%;
  flex: 1;
  position: relative;
  min-height: 0px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.typing-zone {
  width: 100%;
  padding: 0px 58px 20px 57px;

  .typing {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 135%;
    color: #05b050;
  }

  .form-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    .input-session {
      width: 70%;
      // height: 60px;
      background: rgba(249, 249, 249, 0.5);
      border: 1px solid #05b050 !important;
      border-radius: 4px;
      display: flex;
      align-items: center;
      flex-direction: row;

      .no-border {
        width: 85%;
        height: 100%;
        margin: 0;
        border: none !important;
      }

      .no-border:focus,
      .no-border:active,
      .no-border:focus-visible {
        border: none !important;
        outline: none;
      }

      .icons {
        width: auto;
        display: flex;

        img {
          height: 50%;
        }
      }
    }

    button {
      width: auto;
      background: #05b050;
      box-shadow: 0px 2.58333px 5.16667px rgba(44, 39, 56, 0.08),
        0px 5.16667px 10.3333px rgba(44, 39, 56, 0.08);
      border-radius: 6px;
      border: none;
      color: white;
      font-size: 14px;
      padding: 14px;

      img {
        padding-left: 5px;
        width: 20%;
      }
    }
  }

  .typing {
    width: 100%;
    text-align: right;
    margin-bottom: 0px;
  }
}

#offer-form {
  width: 100%;
  border: 1px solid rgba(48, 189, 110, 0.4);
  position: absolute;
  background-color: white;
  padding-inline: 30px;
  bottom: 20px;
  .form-group {
    margin-bottom: 0px !important;
  }
  .main-form {
    margin-top: 50px;
    height: 300px;
    overflow-y: scroll;
  }

  .form-row {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 12px;
    // margin-top: 40px;
  }

  // .form-inputs {
  //     // width: 30%;
  // }

  label {
    font-family: Maven Pro;
    font-style: Medium;
    font-size: 16px;
    color: #b5b4b9;
  }

  .form-send {
    border: 2px solid #6ed19a;
    width: 100%;
    height: 48px;
    background-color: white;
    font-family: Maven Pro;
    font-style: Bold;
    font-size: 16px;
    color: #6ed19a;
    font-weight: bold;
  }

  .close-form {
    position: absolute;
    right: 30px;
    background-color: #696671;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .got-it {
    width: 38%;
  }

  select {
    border: 1px solid #dde6ef;
    box-shadow: none;
    border-radius: 0;
    background: #fbfdff;
    font-size: 15px;
    color: #445461;
    font-weight: 400;
  }

  .quantity {
    display: flex;
    width: 100%;

    input {
      width: 50% !important;
    }
    select {
      width: 50% !important;
    }
  }

  .percentage::placeholder {
    text-align: right;
    font-family: "Maven Pro";
    font-style: "Regular";
    font-size: 21.33px;
    color: #696671;
  }

  .amount::placeholder {
    font-family: "Maven Pro";
    font-style: "Regular";
    font-size: 21.33px;
    color: #696671;
  }

  input {
    font-family: "Maven Pro";
    font-style: "Regular";
    font-size: 21.33px;
    color: #696671;
  }
}

.actual-details {
  width: 100%;
  // display: flex;
  // flex-direction: row;
  // justify-content: space-between;

  > tr:nth-of-type(1) {
    margin-top: 30px;
  }

  tr {
    th {
      font-family: "Maven Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      color: #696671;
    }

    td {
      font-size: 12px;
      padding-bottom: 1rem;
    }
  }
}

.chat-image {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 40%;
  }

  h1 {
    font-family: "Maven Pro";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #4a4754;
  }
}

.offer-left {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.offer-right {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.offered {
  width: 50%;
  gap: 10px;

  border-radius: 4px;

  .colored {
    background: #f9e9e9;
    padding: 16px;
    gap: 10px;
  }

  h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 147%;
    color: #4a4754;
    margin-bottom: 0px;
  }

  hr {
    color: white;
    height: 3px;
  }

  .each-item {
    display: flex;
    justify-content: space-between;

    p {
      font-family: "Maven Pro";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 147%;
      color: #4a4754;
    }

    h4 {
      font-family: "Maven Pro";
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 147%;
      color: #4a4754;
    }
  }

  button {
    width: 100%;
    height: 30px;
    background: #696671;
    color: white;
    border: none;
    margin-bottom: 45px;
    font-size: 14px;
  }
}

.bottom-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .check-buttons {
    background-color: white;
    display: flex;
    width: 50%;
    justify-content: space-evenly;
    align-items: center;

    input {
      width: 20px;
      height: 20px;
      margin-right: 3px;
    }

    label:nth-child(2) {
      margin-right: 10px;
    }
  }

  .timed {
    display: flex;
    justify-content: flex-end;
    // width: 50%;
    align-items: center;

    p {
      margin: 0px;
    }
  }
}
</style>
