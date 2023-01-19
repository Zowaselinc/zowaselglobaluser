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
import DashboardHome from "@/pages/dashboard/DashboardHome.vue";
import LogisticsDashboard from "@/pages/dashboard/Logistics.vue";
import FinanceDashboard from "@/pages/dashboard/Finance.vue";
import DoKyb from "@/pages/dashboard/DoKyb.vue";
import AccountSettings from "@/pages/dashboard/AccountSettings.vue";
import Notifications from "@/pages/dashboard/Notifications.vue";
import Messages from "@/pages/dashboard/Messages.vue";
import Subscription from "@/pages/dashboard/Subscription.vue";
import SubscriptionPayment from "@/pages/dashboard/SubscriptionPayment.vue";
import RenewalManager from "@/pages/dashboard/RenewalManager.vue";
import ChanelLog from "@/pages/dashboard/ChanelLog.vue";
import CreditWallet from "@/pages/dashboard/CreditWallet.vue";
import Withdrawal from "@/pages/dashboard/Withdrawal.vue";
import Settings from "@/pages/dashboard/settings/Settings.vue";
import MarketPlace from "@/pages/dashboard/marketPlace/Market.vue";
import OrderSummary from "@/pages/dashboard/marketPlace/checkout/OrderSumary.vue";
import OrderTracking from "@/pages/dashboard/marketPlace/checkout/OrderTracking.vue";
import Product from "@/pages/dashboard/marketPlace/ProductPage.vue";
import ProductDescription from "@/pages/dashboard/marketPlace/ProductDescription.vue";
import CardPayment from "@/pages/dashboard/marketPlace/Cart.vue";
import CheckOut from "@/pages/dashboard/marketPlace/CheckOut.vue";
import Transactions from "@/pages/dashboard/marketPlace/Transactions.vue";
import MyProducts from "@/pages/dashboard/marketPlace/MyProducts.vue";
import TrackingOrder from "@/pages/dashboard/marketPlace/TrackingOrder.vue";
import CheckoutPayment from "@/pages/dashboard/marketPlace/PaymentPage.vue";
import Payments from "@/pages/dashboard/marketPlace/checkout/Payments.vue";
import Confirm from "@/pages/dashboard/marketPlace/checkout/Confirm.vue";
import PaymentsConfirmed from "@/pages/dashboard/marketPlace/checkout/PaymentsConfirmed.vue";
import Invoice from "@/pages/dashboard/Invoice.vue";
import EachInvoice from "@/pages/dashboard/EachInvoice.vue";
import Loan from "@/pages/dashboard/Loan.vue";
import CropTraceability from "@/pages/dashboard/Croptraceability.vue";
import Sustainability from "@/pages/dashboard/Sustainability.vue";
import EachLoan from "@/pages/dashboard/EachLoan.vue";
import Tickets from "@/pages/dashboard/Tickets.vue";
import NewTicket from "@/pages/dashboard/NewTicket.vue";
import CropsSale from "@/pages/dashboard/marketPlace/CorporateMarket.vue";
import ProductNegotiation from "@/pages/dashboard/marketPlace/ProductNegotiation.vue";
import Negotiations from "@/pages/dashboard/Negotiations.vue";
import Wallet from "@/pages/dashboard/Wallet.vue";
import FundWallet from "@/pages/dashboard/FundWallet.vue";
import Sales from "@/pages/dashboard/Sales.vue";
import MyOrders from "@/pages/dashboard/MyOrders.vue";
import CreditScoring from "@/pages/dashboard/CreditScoring.vue";
import AddNewCrop from "@/pages/dashboard/marketPlace/AddNewCrop.vue";
import UpdateShipping from "@/pages/dashboard/UpdateShipping.vue";
import AddCropSale from "@/pages/dashboard/marketPlace/AddCropSale.vue";
import CropAuction from "@/pages/dashboard/marketPlace/CropAuction.vue";
import AddCropInput from "@/pages/dashboard/marketPlace/AddCropInput.vue";
import Kyf from "@/pages/dashboard/kyf/Kyf.vue";
import Character from "@/pages/dashboard/kyf/Character.vue";

const routes = [
  {
    path: "/:type/register",
    name: "SignUp",
    component: SignUp,
  },

  {
    path: "/:type/companydetails",
    name: "CompanyDetails",
    component: CompanyDetails,
  },
  {
    path: "/:type/verifyaccount",
    name: "VerifyAccount",
    component: VerifyAccount,
  },
  {
    path: "/:type/createpassword",
    name: "CreatePassword",
    component: CreatePassword,
  },
  {
    path: "/:type/welcome",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/verifyemail",
    name: "VerifyEmail",
    component: VerifyEmail,
  },
  {
    path: "/login",
    name: "WelcomeBack",
    component: WelcomeBack,
  },
  {
    path: "/",
    name: "Index",
    component: WelcomeBack,
  },
  {
    path: "/forgotpassword",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/checkemail",
    name: "CheckEmail",
    component: CheckEmail,
  },
  {
    path: "/resetpassword/:token",
    name: "ResetPassword",
    component: ResetPassword,
  },
  {
    path: "/resetsuccess",
    name: "ResetSuccess",
    component: ResetSuccess,
  },
  {
    path: "/agent-type",
    name: "AgentType",
    component: AgentType,
  },
  {
    path: "/getstarted",
    name: "UserType",
    component: UserType,
  },
  {
    path: "/dashboard",
    name: "DashboardHome",
    component: DashboardHome,
  },
  {
    path: "/dashboard/logistics",
    name: "LogisticsDashboard",
    component: LogisticsDashboard,
  },
  {
    path: "/dashboard/finance",
    name: "FinanceDashboard",
    component: FinanceDashboard,
  },
  {
    path: "/dashboard/do-kyb",
    name: "DoKyb",
    component: DoKyb,
  },
  {
    path: "/dashboard/account",
    name: "AccountSettings",
    component: AccountSettings,
  },
  {
    path: "/dashboard/notifications",
    name: "Notifications",
    component: Notifications,
  },
  {
    path: "/dashboard/messages",
    name: "Messages",
    component: Messages,
  },
  {
    path: "/dashboard/negotiations",
    name: "Negotiations",
    component: Negotiations,
  },
  {
    path: "/dashboard/subscription",
    name: "Subscription",
    component: Subscription,
  },
  {
    path: "/dashboard/subscriptionpayment",
    name: "SubscriptionPayment",
    component: SubscriptionPayment,
  },
  {
    path: "/dashboard/renewalmanager",
    name: "renewalmanager",
    component: RenewalManager,
  },
  {
    path: "/dashboard/chanellog",
    name: "chanellog",
    component: ChanelLog,
  },
  {
    path: "/dashboard/creditwallet",
    name: "creditwallet",
    component: CreditWallet,
  },
  {
    path: "/dashboard/withdrawal",
    name: "withdrawal",
    component: Withdrawal,
  },
  {
    path: "/dashboard/settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/dashboard/invoice",
    name: "Invoice",
    component: Invoice,
  },
  {
    path: "/dashboard/each-invoice",
    name: "EachInvoice",
    component: EachInvoice,
  },
  {
    path: "/dashboard/loans",
    name: "Loan",
    component: Loan,
  },
  {
    path: "/dashboard/croptraceability",
    name: "Croptraceability",
    component: CropTraceability,
  },
  {
    path: "/dashboard/sustainability",
    name: "sustainability",
    component: Sustainability,
  },
  {
    path: "/dashboard/marketplace/:market",
    name: "MarketPlace",
    component: MarketPlace,
  },
  {
    path: "/dashboard/marketplace/order/:order",
    name: "OrderSummary",
    component: OrderSummary,
  },
  {
    path: "/dashboard/marketplace/:order/tracking",
    name: "OrderTracking",
    component: OrderTracking,
  },
  {
    path: "/dashboard/marketplace/crop/:id",
    name: "CropDetails",
    component: Product,
  },
  {
    path: "/dashboard/marketplace/crop/:id/negotiate",
    name: "CropNegotiation",
    component: ProductNegotiation,
  },
  {
    path: "/dashboard/marketplace/product/:id",
    name: "ProductDescription",
    component: ProductDescription,
  },
  {
    path: "/dashboard/marketplace/cart",
    name: "CardPayment",
    component: CardPayment,
  },
  {
    path: "/dashboard/marketplace/checkout",
    name: "Checkout",
    component: CheckOut,
  },
  {
    path: "/dashboard/transactions",
    name: "Transactions",
    component: Transactions,
  },
  {
    path: "/dashboard/marketplace/myproducts",
    name: "MyProducts",
    component: MyProducts,
  },
  {
    path: "/dashboard/marketplace/checkout/payment",
    name: "CheckoutPayment",
    component: CheckoutPayment,
  },

  {
    path: "/dashboard/marketplace/trackingorder",
    name: "TrackingOrder",
    component: TrackingOrder,
  },
  {
    path: "/marketplace/payments",
    name: "Payments",
    component: Payments,
  },
  {
    path: "/dashboard/marketplace/payments/:order",
    name: "Payments",
    component: Payments,
  },
  {
    path: "/dashboard/marketplace/confirmpayments/:order",
    name: "Confirm",
    component: Confirm,
  },
  {
    path: "/dashboard/marketplace/paymentsconfirmed/:order",
    name: "PaymentsConfirmed",
    component: PaymentsConfirmed,
  },
  {
    path: "/dashboard/tickets",
    name: "Tickets",
    component: Tickets,
  },
  {
    path: "/dashboard/new-ticket",
    name: "NewTicket",
    component: NewTicket,
  },
  {
    path: "/marketplace/newcrop",
    name: "AddNewcrop",
    component: AddNewCrop,
  },
  {
    path: "/marketplace/newsale",
    name: "AddCropSale",
    component: AddCropSale,
  },
  {
    path: "/marketplace/cropauction",
    name: "CropAuction",
    component: CropAuction,
  },
  {
    path: "/dashboard/fundwallet",
    name: "FundWallet",
    component: FundWallet,
  },
  {
    path: "/dashboard/wallet",
    name: "Wallet",
    component: Wallet,
  },
  {
    path: "/dashboard/sales",
    name: "Sales",
    component: Sales,
  },
  {
    path: "/dashboard/myorders",
    name: "MyOrders",
    component: MyOrders,
  },
  {
    path: "/dashboard/creditscoring",
    name: "CreditScoring",
    component: CreditScoring,
  },
  {
    path: "/dashboard/marketplace/:order/updateshipping",
    name: "UpdateShipping",
    component: UpdateShipping,
  },
  {
    path: "/marketplace/addinput",
    name: "AddCropInput",
    component: AddCropInput,
  },
  {
    path: "/dashboard/kyf",
    name: "Kyf",
    component: Kyf,
  },
  {
    path: "/dashboard/kyf/edit",
    name: "EditKyf",
    component: Kyf,
  },
  {
    path: "/dashboard/each-loan",
    name: "EachLoan",
    component: EachLoan,
  },
  {
    path: "/dashboard/character",
    name: "Character",
    component: Character,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
