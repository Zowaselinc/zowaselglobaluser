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
import Navigation from "@/layouts/partials/Navigation.vue";
import AgentType from "@/pages/auth/AgentType.vue";



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
        path: "/welcomeback",
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
        path: "/resetpassword",
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
        name:"Navigation",
        component:Navigation,
    },
    {
        path: "/agent-type",
        name:"AgentType",
        component:AgentType,
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;