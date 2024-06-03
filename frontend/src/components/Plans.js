import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const stripePromise = await loadStripe(
  "pk_test_51PJG9lSJPnGfbSGNVTz2eA3paftQijDnmuzlssqJTWqlbfe3NsZGw3ths1IgRtXvZtbUnlssWxZj1uVeiEeHWLhg00JUXN3J69"
);

export default function Plans() {
  //payment integration

  const handleClickSilverPlan = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/create-checkout-session",
        { plan: "silver" }
      );
      const sessionId = response.data.id;

      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  const handleClickGoldPlan = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/create-checkout-session",
        { plan: "gold" }
      );
      const sessionId = response.data.id;

      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  const handleClickDiamondPlan = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/create-checkout-session",
        { plan: "diamond" }
      );
      const sessionId = response.data.id;

      const stripe = await stripePromise;
      await stripe.redirectToCheckout({ sessionId });
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return (
    <>
      <div className="container mx-auto flex flex-col justify-center items-center mb-4">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-grayac-800 mb-4">
            Our Membership Plans
          </h1>
          <p className="text-md text-gray-600 mb-5">
            Select from our multiple membership plans and find your best life
            partner with membership benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

          {/* Free Registration Card */}
          <div className="max-w-sm p-3 text-black bg-white border border-gray-200 rounded-lg shadow dark:bg-green-800 dark:border-green-800">
            <div className="block rounded-lg bg-white text-center text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-black">
              <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10 dark:bg-green-800">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">
                  Register Free
                </h5>
                <button className="w-full py-2 text-lg font-bold text-center text-white bg-orange-700 bg-opacity-50 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:bg-opacity-50 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                  Rs. 0
                </button>
                <p className="mt-2 text-md text-white">Free Trial</p>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-xl font-medium leading-tight ">
                  MEMBERSHIP INFO
                </h5>
                <p className="mb-3 text-base border-b border-gray-300 pb-2">
                  VIEW PHOTOS.
                </p>
                <p className="mb-3 text-base border-b border-gray-300 pb-2">
                  PROTECT PHOTOS.
                </p>
                <p className="mb-3 text-base border-b border-gray-300 pb-2">
                  ------
                </p>
                <p className="mb-3 text-base border-b border-gray-300 pb-2">
                  ------
                </p>
                <p className="mb-3 text-base border-b border-gray-300 pb-2">
                  ------
                </p>
                <p className="mb-3 text-base border-b border-gray-300 pb-2">
                  ------
                </p>
                <p className="mb-3 text-base">------</p>
              </div>
              <div className="border-t-2 border-neutral-100 px-6 py-3 text-surface/75 dark:border-white/10 dark:text-neutral-300 dark:bg-green-800">
                <button className="w-full py-2 text-lg font-bold text-center text-white bg-orange-700 bg-opacity-50 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:bg-opacity-50 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                  Know More
                </button>
              </div>
            </div>
          </div>

          {/* Silver Plan Card */}
          <div className="max-w-sm p-3 text-black bg-white border border-gray-200 rounded-lg shadow dark:bg-amber-500 dark:border-amber-500">
            <div className="block rounded-lg bg-white text-center text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-black">
              <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10 dark:bg-amber-500">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">
                  Silver Plan
                </h5>
                <button className="w-full py-2 text-lg font-bold text-center text-white bg-orange-700 bg-opacity-50 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:bg-opacity-50 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                  Rs. 5,000
                </button>
                <p className="mt-2 text-md text-white">90 Days, 200 Contact</p>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-xl font-medium leading-tight ">
                  MEMBERSHIP INFO
                </h5>
                <p className="mb-3 text-base border-b border-gray-300 pb-2">
                  VIEW PHOTOS.
                </p>
                <p className="mb-3 text-base border-b border-gray-300 pb-2">
                  PROTECT PHOTOS.
                </p>
                <p className="mb-3 text-base border-b border-gray-300 pb-2">Chat</p>
                <p className="mb-3 text-base border-b border-gray-300 pb-2">
                  Email
                </p>
                <p className="mb-3 text-base border-b border-gray-300 pb-2">
                  SMS ALERT
                </p>
                <p className="mb-3 text-base border-b border-gray-300 pb-2">
                  EXPRESS INTEREST
                </p>
                <p className="mb-3 text-base ">LIVE SUPPORT</p>
              </div>
              <div className="border-t-2 border-neutral-100 px-6 py-3 text-surface/75 dark:border-white/10 dark:text-neutral-300 dark:bg-amber-500">
                <button
                  className="w-full py-2 text-lg font-bold text-center text-white bg-orange-700 bg-opacity-50 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:bg-opacity-50 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                  onClick={handleClickSilverPlan}
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
          {/* Gold Plan Card */}
          <div className="max-w-sm p-3 text-black bg-white border border-gray-200 rounded-lg shadow dark:bg-sky-500 dark:border-sky-500">
            <div className="block rounded-lg bg-white text-center text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-black">
              <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10 dark:bg-sky-500">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">
                  Gold Plan
                </h5>
                <button className="w-full py-2 text-lg font-bold text-center text-white bg-orange-700 bg-opacity-50 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:bg-opacity-50 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                  Rs. 9,000
                </button>
                <p className="mt-2 text-md text-white">180 Days, 500 Contact</p>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-xl font-medium leading-tight ">
                  MEMBERSHIP INFO
                </h5>
                <p className="mb-3 text-base border-b border-gray-300 pb-2">
                  VIEW PHOTOS.
                </p>
                <p className="mb-3 text-base border-b border-gray-300 pb-2">
                  PROTECT PHOTOS.
                </p>
                <p className="mb-3 text-base border-b border-gray-300 pb-2">Chat</p>
                <p className="mb-3 text-base border-b border-gray-300 pb-2">
                  Email
                </p>
                <p className="mb-3 text-base border-b border-gray-300 pb-2">
                  SMS ALERT
                </p>
                <p className="mb-3 text-base border-b border-gray-300 pb-2">
                  EXPRESS INTEREST
                </p>
                <p className="mb-3 text-base ">LIVE SUPPORT</p>
              </div>
              <div className="border-t-2 border-neutral-100 px-6 py-3 text-surface/75 dark:border-white/10 dark:text-neutral-300 dark:bg-sky-500">
                <button
                  className="w-full py-2 text-lg font-bold text-center text-white bg-orange-700 bg-opacity-50 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:bg-opacity-50 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                  onClick={handleClickGoldPlan}
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>

          {/* Diamond Plan Card */}
          <div className="max-w-sm p-3 text-black bg-white border border-gray-200 rounded-lg shadow dark:bg-red-400 dark:border-red-400">
            <div className="block rounded-lg bg-white text-center text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-black">
              <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-white/10 dark:bg-red-400">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white-900 dark:text-white">
                  Platinum Plan
                </h5>
                <button className="w-full py-2 text-lg font-bold text-center text-white bg-orange-700 bg-opacity-50 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:bg-opacity-50 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                  Rs. 17,000
                </button>
                <p className="mt-2 text-md text-white">365 Days, 1000 Contact</p>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-xl font-medium leading-tight ">
                  MEMBERSHIP INFO
                </h5>
                <p className="mb-3 text-base border-b border-gray-300 pb-2">
                  VIEW PHOTOS.
                </p>
                <p className="mb-3 text-base border-b border-gray-300 pb-2">
                  PROTECT PHOTOS.
                </p>
                <p className="mb-3 text-base border-b border-gray-300 pb-2">Chat</p>
                <p className="mb-3 text-base border-b border-gray-300 pb-2">
                  Email
                </p>
                <p className="mb-3 text-base border-b border-gray-300 pb-2">
                  SMS ALERT
                </p>
                <p className="mb-3 text-base border-b border-gray-300 pb-2">
                  EXPRESS INTEREST
                </p>
                <p className="mb-3 text-base ">LIVE SUPPORT</p>
              </div>
              <div className="border-t-2 border-neutral-100 px-6 py-3 text-surface/75 dark:border-white/10 dark:text-neutral-300 dark:bg-red-400">
                <button
                  className="w-full py-2 text-lg font-bold text-center text-white bg-orange-700 bg-opacity-50 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-600 dark:bg-opacity-50 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                  onClick={handleClickDiamondPlan}
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
