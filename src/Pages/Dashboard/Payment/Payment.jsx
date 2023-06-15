import { Helmet } from "react-helmet-async";
import PageHeaders from "../../../Components/pageHeaders/PageHeaders";
import { ToastContainer } from "react-toastify";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../../Hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  // HayHayKiPassword!@
  const [cart] = useCart();
  const price = parseFloat(
    cart.reduce((sum, item) => item.price + sum, 0).toFixed(2)
  );

  return (
    <div>
      <div>
        <Helmet>
          <title>All Users | Melody Dance Studio</title>
        </Helmet>
        <ToastContainer />
        <div>
          <div className="sm:mt-14 md:mt-20 md:mx-10">
            <PageHeaders text={"Payment"}></PageHeaders>
          </div>
          <div className="shadow-lg p-8 sm:mx-10 rounded-lg">
            <Elements stripe={stripePromise}>
              <CheckoutForm price={price} cart={cart}></CheckoutForm>
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
