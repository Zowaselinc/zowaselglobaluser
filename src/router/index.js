import { createWebHistory, createRouter } from "vue-router";
import MerchantSignUp from "@/pages/auth/merchant/SignUp.vue";
import MerchantCompanyDetails from "@/pages/auth/merchant/CompanyDetails.vue";
import MerchantVerifyAccount from "@/pages/auth/merchant/VerifyAccount.vue";
import MerchantCreatePassword from "@/pages/auth/merchant/CreatePassword.vue";
import MerchantWelcome from "@/pages/auth/merchant/Welcome.vue";
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
        path: "/merchant/signup",
        name:"MerchantSignUp",
        component:MerchantSignUp,
    },
    {
        path: "/merchant/companydetails",
        name:"MerhantCompanyDetails",
        component:MerchantCompanyDetails,
    },
    {
        path: "/merchant/verifyaccount",
        name:"MerchantVerifyAccount",
        component:MerchantVerifyAccount,
    }
    ,
    {
        path: "/merchant/createpassword",
        name:"MerchantCreatePassword",
        component:MerchantCreatePassword,
    }
    ,
    {
        path: "/merchant/welcome",
        name:"MerchantWelcome",
        component:MerchantWelcome,
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
        path: "/partner/signup",
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