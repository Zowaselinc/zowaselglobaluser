import { createWebHistory, createRouter } from "vue-router";
import SignUp from "@/pages/auth/SignUp.vue";
import CompanyDetails from "@/pages/auth/CompanyDetails.vue";
import VerifyAccount from "@/pages/auth/VerifyAccount.vue";
import CreatePassword from "@/pages/auth/CreatePassword.vue";
import Welcome from "@/pages/auth/Welcome.vue";
import VerifyEmail from "@/pages/auth/VerifyEmail.vue";
import WelcomeBack from "@/pages/auth/WelcomeBack.vue";
import ForgotPassword from "@/pages/auth/ForgotPassword.vue";
import CheckEmail from "@/pages/auth/CheckEmail.vue";
import ResetPassword from "@/pages/auth/ResetPassword.vue";
import ResetSuccess from "@/pages/auth/ResetSuccess.vue";
import UserType from "@/pages/auth/UserType.vue";
import AgentType from "@/pages/auth/AgentType.vue";
import CorporateDashboard from "@/pages/dashboard/Corporate.vue";
import LogisticsDashboard from "@/pages/dashboard/Logistics.vue";
import FinanceDashboard from "@/pages/dashboard/Finance.vue";
import DoKyb from "@/pages/dashboard/DoKyb.vue";
import AccountSettings from "@/pages/dashboard/AccountSettings.vue";
import Notifications from "@/pages/dashboard/Notifications.vue";
import Messages from "@/pages/dashboard/Messages.vue";
import Subscription from "@/pages/dashboard/Subscription.vue";
import BalancePayment from "@/pages/dashboard/BalancePayment.vue"
import RenewalManager from "@/pages/dashboard/RenewalManager.vue";
import ChanelLog from "@/pages/dashboard/ChanelLog.vue";
import CreditWallet from "@/pages/dashboard/CreditWallet.vue";
import Withdrawal from "@/pages/dashboard/Withdrawal.vue";
import InputMarket from "@/pages/dashboard/InputMarket.vue";
import CropMarket from "@/pages/dashboard/CropMarket.vue"; 
import Settings from "@/pages/dashboard/settings/Settings.vue";
import MarketPlace from "@/pages/dashboard/marketPlace/Overview.vue";


const routes = [
    {
        path: "/:type/register",
        name:"SignUp",
        component:SignUp,
    },

    {
        path: "/:type/companydetails",
        name:"CompanyDetails",
        component:CompanyDetails,
    },
    {
        path: "/:type/verifyaccount",
        name:"VerifyAccount",
        component:VerifyAccount,
    },
    {
        path: "/:type/createpassword",
        name:"CreatePassword",
        component:CreatePassword,
    },
    {
        path: "/:type/welcome",
        name:"Welcome",
        component:Welcome,
    },

    {
        path: "/verifyemail",
        name:"VerifyEmail",
        component:VerifyEmail,
    },
    {
        path: "/login",
        name:"WelcomeBack",
        component:WelcomeBack,
    },
    {
        path: "/forgotpassword",
        name:"ForgotPassword",
        component:ForgotPassword,
    },
    {
        path: "/checkemail",
        name:"CheckEmail",
        component:CheckEmail,
    },
    {
        path: "/resetpassword/:token",
        name:"ResetPassword",
        component:ResetPassword,
    },
    {
        path: "/resetsuccess",
        name:"ResetSuccess",
        component:ResetSuccess,
    },
    {
        path: "/agent-type",
        name:"AgentType",
        component:AgentType,
    },
    {
        path: "/getstarted",
        name: "UserType",
        component:UserType,
    },
    {
        path: "/dashboard/merchant",
        name: "MerchantDashboard",
        component:CorporateDashboard,
    },
    {
        path: "/dashboard/corporate",
        name: "CorporateDashboard",
        component:CorporateDashboard,
    },
    {
        path: "/dashboard/logistics",
        name: "LogisticsDashboard",
        component:LogisticsDashboard,
    },
    {
        path: "/dashboard/finance",
        name: "FinanceDashboard",
        component:FinanceDashboard,
    },
    {
        path: "/dashboard/do-kyb",
        name: "DoKyb",
        component:DoKyb,
    },
    {
        path: "/dashboard/accountsettings",
        name: "AccountSettings",
        component:AccountSettings
    },
    {
        path: "/dashboard/notifications",
        name: "Notifications",
        component:Notifications
    },
    {
        path: "/dashboard/messages",
        name: "Messages",
        component:Messages
    },
    {
        path: "/dashboard/subscription",
        name: "Subscription",
        component:Subscription
    },
    {
        path: "/dashboard/balancepayment",
        name: "BalancePayment",
        component:BalancePayment
    },
    {
        path: "/dashboard/renewalmanager",
        name: "renewalmanager",
        component:RenewalManager
    },
    {
        path: "/dashboard/chanellog",
        name: "chanellog",
        component:ChanelLog
    },
    {
        path: "/dashboard/creditwallet",
        name: "creditwallet",
        component:CreditWallet
    },
    {
        path: "/dashboard/withdrawal",
        name: "withdrawal",
        component:Withdrawal
    },
    {
        path: "/dashboard/inputmarket",
        name: "InputMarket",
        component:InputMarket
    },
    {
        path: "/dashboard/cropmarket",
        name: "CropMarket",
        component:CropMarket
    },
    {
        path: "/dashboard/settings",
        name: "Settings",
        component:Settings
    },
    {
        path: "/dashboard/marketplace",
        name: "MarketPlace",
        component:MarketPlace
    },


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
