<template>
  <!-- Side Bar -->
  <nav id="sidebarMenu" class="collapse d-md-block">
    <div id="side-menu" class="list-group list-group-flush position-relative">
      <img
        class="img-fluid collapse-icon"
        src="@/assets/images/vectors/col.svg"
        alt="collaspse-icon"
      />

      <a href="/dashboard" class="nav-item" aria-current="true">
        <div
          id="home"
          :class="[
            'ripple',
            'active-menu',
            ' active-item',
            isRouteActive('/dashboard'),
          ]"
        >
          <img
            class="img-fluid"
            src="@/assets/images/vectors/house.svg"
            alt="house"
          />
          <span>Home</span>
        </div>
      </a>

      <a href="/dashboard/wallet" class="nav-item">
        <div
          :class="['ripple', 'active-item', isRouteActive('/dashboard/wallet')]"
        >
          <img
            class="img-fluid"
            src="@/assets/images/vectors/Wallet.svg"
            alt="wallet"
          />
          <span>Wallet</span>
        </div>
      </a>
      <a href="/dashboard/messages" class="nav-item">
        <div
          :class="[
            'ripple',
            'active-item',
            isRouteActive('/dashboard/messages'),
          ]"
        >
          <img
            class="img-fluid"
            src="@/assets/images/vectors/ChatText.svg"
            alt="ChatText"
          /><span>Message</span>
        </div>
      </a>
      <a href="javascript:void(0)" class="nav-item">
        <div
          :class="[
            'ripple',
            'accordion-header',
            isRouteActive('/dashboard/marketplace'),
          ]"
        >
          <img
            class="img-fluid"
            src="@/assets/images/vectors/Storefront.svg"
            alt="marketplace"
          /><span>Marketplace</span>
          <img
            class="arrow-symbol carret-down"
            src="@/assets/images/vectors/arrowSymbol.svg"
            alt="Arrow-Symbol"
          />
          <img
            class="arrow-symbol carretUp"
            src="@/assets/images/vectors/arrowupsymbol.svg"
            alt="Arrow-Symbol"
          />
        </div>
        <!-- drop menu -->
        <div class="drop-menu marketplace-menu">
          <template v-if="userData.user.type == 'merchant'">
            <div
              class="active-item"
              @click="changeDir('/dashboard/marketplace/cropwanted')"
            >
              Crops Wanted
            </div>
            <div
              class="active-item"
              @click="changeDir('/dashboard/marketplace/inputs')"
            >
              Input Market
            </div>
          </template>
          <template v-if="userData.user.type == 'corporate'">
            <div
              class="active-item"
              @click="changeDir('/dashboard/marketplace/cropsale')"
            >
              Crops for Sale
            </div>
            <div
              class="active-item"
              @click="changeDir('/dashboard/marketplace/cropauction')"
            >
              Crops for auction
            </div>
          </template>
          <template v-if="userData.user.type == 'corporate'">
            <div
              class="active-item"
              @click="changeDir('/dashboard/marketplace/myproducts')"
            >
              My Crops/Inputs
            </div>
          </template>
          <template v-if="userData.user.type == 'merchant'">
            <div
              class="active-item"
              @click="changeDir('/dashboard/marketplace/myproducts')"
            >
              My Crops
            </div>
          </template>
          <div class="active-item" @click="changeDir('/dashboard/sales')">
            My Sales
          </div>
          <div class="active-item" @click="changeDir('/dashboard/myorders')">
            My Orders
          </div>
        </div>
      </a>
      <a href="/dashboard/negotiations" class="nav-item">
        <div
          :class="[
            'ripple',
            'active-item',
            isRouteActive('/dashboard/negotiations'),
          ]"
        >
          <img
            class="img-fluid"
            src="@/assets/images/vectors/ChatText.svg"
            alt="ChatText"
          /><span>Negotiations</span>
        </div>
      </a>
      <a href="javascript:void(0)" class="nav-item">
        <div
          :class="[
            'ripple',
            'accordion-header',
            isRouteActive('/dashboard/credit'),
          ]"
        >
          <img
            class="side-bar-icon img-fluid"
            src="@/assets/images/vectors/marketPlace.svg"
            alt="Credit Scoring"
          /><span>Credit Scoring</span>
          <img
            class="arrow-symbol carret-down"
            src="@/assets/images/vectors/arrowSymbol.svg"
            alt="Arrow-Symbol"
          />
          <img
            class="arrow-symbol carretUp"
            src="@/assets/images/vectors/arrowupsymbol.svg"
            alt="Arrow-Symbol"
          />
        </div>
        <!-- drop menu -->
        <div class="drop-menu scoring-menu">
          <div
            class="active-menu"
            @click="changeDir(' /dashboard/creditscoringpointsystem')"
          >
            Score point system
          </div>
          <div
            class="active-menu"
            @click="changeDir(' /dashboard/creditscoring')"
          >
            credit score analysis
          </div>

          <!-- <div
            class="active-menu"
            @click="changeDir(' /dashboard/scoreanalysis')"
          >
            Score Analysis
          </div> -->

          <div
            class="active-menu"
            @click="changeDir(' /dashboard/croptraceability')"
          >
            Crop Traceability
          </div>
          <div
            class="active-menu"
            @click="changeDir(' /dashboard/sustainability')"
          >
            Sustainability
          </div>
        </div>
      </a>
      <a href="javascript:void(0)" class="nav-item">
        <div
          :class="[
            'ripple',
            'accordion-header',
            isRouteActive('/dashboard/credit'),
          ]"
        >
          <img
            class="side-bar-icon img-fluid"
            src="@/assets/images/vectors/marketPlace.svg"
            alt="Credit Scoring"
          /><span>Loans</span>
          <img
            class="arrow-symbol carret-down"
            src="@/assets/images/vectors/arrowSymbol.svg"
            alt="Arrow-Symbol"
          />
          <img
            class="arrow-symbol carretUp"
            src="@/assets/images/vectors/arrowupsymbol.svg"
            alt="Arrow-Symbol"
          />
        </div>
        <!-- drop menu -->
        <div class="drop-menu scoring-menu">
          <div class="active-menu" @click="changeDir(' /dashboard/loans')">
            Farmers
          </div>
          <!-- <div
            class="active-menu"
            @click="changeDir(' /dashboard/creditscoreanalysis')"
          >
            Loan Types
          </div>
          <div class="active-menu" @click="changeDir(' /dashboard/loan')">
            Grant Loans
          </div>
          <div
            class="active-menu"
            @click="changeDir(' /dashboard/scoreanalysis')"
          >
            Loans History
          </div> -->
        </div>
      </a>

      <!-- no page available -->
      <a href="/dashboard/invoice" class="nav-item">
        <div
          :class="[
            'ripple',
            'active-item',
            isRouteActive('/dashboard/invoice'),
          ]"
        >
          <img
            class="img-fluid"
            src="@/assets/images/vectors/File.svg"
            alt="file"
          /><span>Invoice</span>
        </div>
      </a>
      <a href="javascript:void(0)" class="nav-item">
        <div
          :class="[
            'ripple',
            'accordion-header',
            isRouteActive('/dashboard/subscription'),
          ]"
        >
          <img
            class="img-fluid"
            src="@/assets/images/vectors/Folder.svg"
            alt="folder"
          /><span>API & subscription</span>
          <img
            class="arrow-symbol carret-down"
            src="@/assets/images/vectors/arrowSymbol.svg"
            alt="Arrow-Symbol"
          />
          <img
            class="arrow-symbol carretUp"
            src="@/assets/images/vectors/arrowupsymbol.svg"
            alt="Arrow-Symbol"
          />
        </div>
        <!-- drop menu -->
        <div class="drop-menu api-menu">
          <div
            class="active-menu"
            @click="changeDir(' /dashboard/subscription')"
          >
            service subscription
          </div>
          <div
            class="active-menu"
            @click="changeDir('/dashboard/renewalmanager')"
          >
            Renewal manager
          </div>
          <div class="active-menu">Traffic & usage stats</div>
          <div class="active-menu">Changelog notification</div>
        </div>
      </a>
      <a href="javascript:void(0)" class="nav-item">
        <div
          :class="[
            'ripple',
            'accordion-header',
            isRouteActive('/dashboard/data'),
          ]"
        >
          <img
            class="img-fluid"
            src="@/assets/images/vectors/Data.svg"
            alt="Data"
          /><span>Data</span>
          <img
            class="arrow-symbol carret-down"
            src="@/assets/images/vectors/arrowSymbol.svg"
            alt="Arrow-Symbol"
          />
          <img
            class="arrow-symbol carretUp"
            src="@/assets/images/vectors/arrowupsymbol.svg"
            alt="Arrow-Symbol"
          />
        </div>
        <!-- drop menu -->
        <div class="drop-menu data-menu">
          <div class="active-menu" @click="changeDir('/dashboard/kyf')">
            Kyf
          </div>

          <!-- <div class="active-menu">Farmer Data</div>
          <div class="active-menu">Market report</div>
          <div class="active-menu">Crop data stats</div>
          <div class="active-menu">Seed data</div> -->
        </div>
      </a>
      <a href="/dashboard/tickets" class="nav-item">
        <div
          :class="[
            'ripple',
            'active-item',
            isRouteActive('/dashboard/support'),
          ]"
        >
          <img
            class="img-fluid"
            src="@/assets/images/vectors/Info.svg"
            alt="info"
          /><span>Support</span>
        </div>
      </a>
      <a href="/dashboard/transactions" class="nav-item">
        <div class="ripple">
          <img
            class="img-fluid"
            src="@/assets/images/vectors/transactions.svg"
            alt="info"
          /><span>Transactions</span>
        </div>
      </a>

      <a href="/dashboard/settings" class="nav-item">
        <div
          :class="[
            'ripple',
            'active-item',
            isRouteActive('/dashboard/settings'),
          ]"
        >
          <img
            class="img-fluid"
            src="@/assets/images/vectors/GearSixBold.svg"
            alt="settings"
          /><span>Settings</span>
        </div>
      </a>
      <a href="javascript:void(0)" class="nav-item">
        <div
          :class="[
            'ripple',
            'active-item',
            isRouteActive('/dashboard/account'),
          ]"
        >
          <img
            class="img-fluid"
            src="@/assets/images/vectors/User.svg"
            alt="user"
          /><span>My account</span>
        </div>
      </a>

      <a href="javascript:void(0)" class="nav-item" @click="logOut()">
        <div class="ripple active-menu">
          <img
            class="img-fluid"
            src="@/assets/images/vectors/SignOut.svg"
            alt="SignOut"
          /><span>Logout</span>
        </div>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      userData: this.$store.state.user,
      collapseMenu: true,
    };
  },
  mounted() {
    this.accordion();
    this.toggleCollapsedMenu();
  },
  methods: {
    accordion() {
      const accordionHeaders = document.querySelectorAll(".accordion-header");
      // using native forEach for NodeList.
      accordionHeaders.forEach((header) => {
        header.addEventListener("click", () => {
          header.parentElement.classList.toggle("active");
        });
      });
    },
    changeDir(path) {
      window.location.assign(path);
    },
    // Toggle the collapsed-menu class on the sideMenu element when the menu icon is clicked
    toggleCollapsedMenu() {
      const sideMenu = document.getElementById("sidebarMenu");
      sideMenu.addEventListener("click", (event) => {
        if (event.target.classList.contains("collapse-icon")) {
          sideMenu.classList.toggle("collapsed-menu");
        } else if (event.target.classList.contains("accordion-header")) {
          if (sideMenu.classList.contains("collapsed-menu")) {
            sideMenu.classList.remove("collapsed-menu");
          }
        } else if (event.target.classList.contains("active-item")) {
          event.target.classList.toggle("active-menu");
        }
      });
    },

    isRouteActive(path) {
      if (path == "/dashboard") {
        return this.$route.path == path ? "actives" : "";
      }
      return this.$route.path.includes(path) ? "actives" : "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/navigation";
.collapse-icon {
  position: absolute;
  width: 30px;
  height: 20px;
  top: -25px;
  right: 0%;

  &:hover {
    padding-inline: 5px;
  }
}

#sidebarMenu {
  overflow-y: scroll;
}

.collapsed-menu {
  width: 8% !important;

  #side-menu {
    align-items: center;

    .collapse-icon {
      transform: rotate(180deg);
    }

    .ripple {
      padding: 10px 20px;
      margin-top: 10px;

      span,
      .carret-down {
        display: none;
      }
    }

    .drop-menu {
      display: none !important;
    }
  }
}
// toggling the active menus by changing background color
.active-menu {
  &:active {
    background: #05b050 !important;
  }
}
</style>
