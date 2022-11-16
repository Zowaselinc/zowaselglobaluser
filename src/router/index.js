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
import DefaultNav from "@/layouts/DefaultNav.vue";


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
        path: "/navigation",
        name:"DefaultNav",
        component:DefaultNav,
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


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;