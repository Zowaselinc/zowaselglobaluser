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
import SubscriptionPayment from "@/pages/dashboard/SubscriptionPayment.vue"
import RenewalManager from "@/pages/dashboard/RenewalManager.vue";
import ChanelLog from "@/pages/dashboard/ChanelLog.vue";
import CreditWallet from "@/pages/dashboard/CreditWallet.vue";
import Withdrawal from "@/pages/dashboard/Withdrawal.vue";
import CropMarket from "@/pages/dashboard/CropMarket.vue"; 
import Settings from "@/pages/dashboard/settings/Settings.vue";
import MarketPlace from "@/pages/dashboard/marketPlace/Market.vue";
import TransactionSumary from "@/pages/dashboard/marketPlace/checkout/TransactionSumary.vue";
import OrderTracking from "@/pages/dashboard/marketPlace/ordering/OrderTracking.vue";
import NewCrop from "@/pages/dashboard/marketPlace/NewCrop.vue";
import Product from "@/pages/dashboard/marketPlace/ProductPage.vue";
import InputMarket from "@/pages/dashboard/marketPlace/InputMarket.vue";
import ProductDescription from "@/pages/dashboard/marketPlace/ProductDescription.vue";
import CardPayment from "@/pages/dashboard/marketPlace/CardPayment.vue";
import CheckOut from "@/pages/dashboard/marketPlace/CheckOut.vue";
import Transactions from "@/pages/dashboard/marketPlace/Transactions.vue";
import MyProducts from "@/pages/dashboard/marketPlace/MyProducts.vue";
import Confirmed from "@/pages/dashboard/marketPlace/Confirmed.vue";
import TrackingOrder from "@/pages/dashboard/marketPlace/TrackingOrder.vue";
import CardDetails from "@/pages/dashboard/marketPlace/CardDetails.vue"
import Payments from "@/pages/dashboard/marketPlace/payment/Payments.vue";
import Confirm from "@/pages/dashboard/marketPlace/payment/Confirm.vue";
import PaymentsConfirmed from "@/pages/dashboard/marketPlace/payment/PaymentsConfirmed.vue";
import CropsSale from "@/pages/dashboard/marketPlace/CropsSale.vue";
import ProductNegotiation from "@/pages/dashboard/marketPlace/ProductNegotiation.vue";
import Negotiations from "@/pages/dashboard/Negotiations.vue";
import Invoice from "@/pages/dashboard/Invoice.vue";
import EachInvoice from "@/pages/dashboard/EachInvoice.vue";
import Loan from "@/pages/dashboard/Loan.vue";
import Tickets from "@/pages/dashboard/Tickets.vue";
import NewTicket from "@/pages/dashboard/NewTicket.vue";





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
        path: "/dashboard/negotiations",
        name: "Negotiations",
        component:Negotiations
    },
    {
        path: "/dashboard/subscription",
        name: "Subscription",
        component:Subscription
    },
    {
        path: "/dashboard/subscriptionpayment",
        name: "SubscriptionPayment",
        component:SubscriptionPayment
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
        path: "/dashboard/invoice",
        name: "Invoice",
        component:Invoice
    },
    {
        path: "/dashboard/each-invoice",
        name: "EachInvoice",
        component:EachInvoice,
    },
    {
        path: "/dashboard/loan",
        name: "Loan",
        component:Loan,
    },
    {
        path: "/dashboard/marketplace",
        name: "MarketPlace",
        component:MarketPlace
    },
    {
        path: "/marketplace/transactionsumary",
        name: "Transactionsumary",
        component:TransactionSumary
    },
    {
        path: "/marketplace/ordertracking",
        name: "OrderTracking",
        component:OrderTracking
    },
    {
        path: "/marketplace/newcrop",
        name: "NewCrop",
        component: NewCrop
    },
    {
        path: "/marketplace/product",
        name: "Product",
        path: "/marketplace/cropsale",
        name: "CropSale",
        component:CropsSale
    },
    {
        path: "/marketplace/crop/:id",
        name: "CropDetails",
        component:Product
    },
    {
        path: "/marketplace/crop/:id/negotiate",
        name: "CropNegotiation",
        component:ProductNegotiation
    },
    {
        path: "/marketplace/inputmarket",
        name: "Inputmarket",
        component:InputMarket
    },
    {
        path: "/marketplace/product-description",
        name: "ProductDescription",
        component:ProductDescription
    },
    {
        path: "/marketplace/cardpayment",
        name: "CardPayment",
        component:CardPayment
    },
    {
        path: "/marketplace/checkout",
        name: "Checkout",
        component:CheckOut
    },
    {
        path: "/marketplace/transactions",
        name: "Transactions",
        component:Transactions
    },
    {
        path: "/marketplace/myproducts",
        name: "MyProducts",
        component:MyProducts
    },
    {
        path: "/marketplace/card-details",
        name: "CardDetails",
        component:CardDetails
    },
    {
        path: "/marketplace/confirmed",
        name: "Confirmed",
        component:Confirmed
    },
    {
        path: "/marketplace/trackingorder",
        name: "TrackingOrder",
        component:TrackingOrder
    },
    {
        path: "/marketplace/payments",
        name: "Payments",
        component:Payments
    },
    {
        path: "/marketplace/confirmpayments",
        name: "Confirm",
        component:Confirm
    },
    {
        path: "/marketplace/paymentsconfirmed",
        name: "PaymentsConfirmed",
        component:PaymentsConfirmed
    },
    {
        path: "/dashboard/tickets",
        name: "Tickets",
        component:Tickets
    },
    {
        path: "/dashboard/new-ticket",
        name: "NewTicket",
        component:NewTicket
    },
    
    

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
