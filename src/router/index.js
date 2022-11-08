import { createWebHistory, createRouter } from "vue-router";
import SignUp from "@/pages/auth/SignUp.vue";
import CompanyDetails from "@/pages/auth/CompanyDetails.vue";
import VerifyAccount from "@/pages/auth/VerifyAccount.vue";
import CreatePassword from "@/pages/auth/CreatePassword.vue";
import Welcome from "@/pages/auth/Welcome.vue";
import PartnerCompanyDetails from "@/pages/auth/partner/CompanyDetails.vue";
import PartnerCreatePassword from "@/pages/auth/partner/CreatePassword.vue";
import PartnerSignUp from "@/pages/auth/partner/SignUp.vue";
import PartnerVerifyAccount from "@/pages/auth/partner/VerifyAccount.vue";
import PartnerWelcome from "@/pages/auth/partner/Welcome.vue";
import VerifyEmail from "@/pages/auth/VerifyEmail.vue";
import WelcomeBack from "@/pages/auth/WelcomeBack.vue";
import ForgotPassword from "@/pages/auth/ForgotPassword.vue";
import CheckEmail from "@/pages/auth/CheckEmail.vue";
import ResetPassword from "@/pages/auth/ResetPassword.vue";
import ResetSuccess from "@/pages/auth/ResetSuccess.vue";
import Navigation from "@/layouts/partials/Navigation.vue";



const routes = [
    {
        path: "/",
        name:"SignUp",
        component:SignUp,
    },
    {
        path: "/companydetails",
        name:"CompanyDetails",
        component:CompanyDetails,
    },
    {
        path: "/verifyaccount",
        name:"VerifyAccount",
        component:VerifyAccount,
    }
    ,
    {
        path: "/createpassword",
        name:"CreatePassword",
        component:CreatePassword,
    }
    ,
    {
        path: "/welcome",
        name:"Welcome",
        component:Welcome,
    },
    {
        path: "/partner/companydetails",
        name:"PartnerCompanyDetails",
        component:PartnerCompanyDetails,
    },
    {
        path: "/partner/createpassword",
        name:"PartnerCreatePassword",
        component:PartnerCreatePassword,
    },
    {
        path: "register/:type",
        name:"PartnerSignUp",
        component:PartnerSignUp,
    },
    {
        path: "/partner/verifyaccount",
        name:"PartnerVerifyAccount",
        component:PartnerVerifyAccount,
    },
    {
        path: "/partner/welcome",
        name:"PartnerWelcome",
        component:PartnerWelcome,
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
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;