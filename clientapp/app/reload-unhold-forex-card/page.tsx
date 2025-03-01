import React from 'react';
import HeadersComponent from '../components/headers/HeadersComponent';
import FooterComponent from '../components/footer/FooterComponent';

const ReloadForex: React.FC = () => {
  return (
    <>
    <HeadersComponent/>
    <div className="container mx-auto my-12 p-10 bg-gradient-to-br from-blue-500 to-blue-700 shadow-xl rounded-xl border border-gray-300 text-black">
      <h1 className="text-4xl font-bold text-center mb-6 drop-shadow-lg">How to Reload a Forex Card</h1>
      <p className="text-lg mb-4 leading-relaxed">
        Reloading a Forex card is a straightforward process. Log in to the relevant platform, such as a forex
        card provider’s website or mobile app, and navigate to the reload section. You may need to enter your
        card details and submit some documents before making the payment.
      </p>
      <p className="text-lg mb-6 leading-relaxed">
        If you have a Forex card from <span className="font-semibold">7TravelMoney</span>, reloading it is incredibly convenient and instant.
        This ensures access to funds anytime, making your travel experience seamless. Follow these steps:
      </p>
      <ol className="list-decimal list-inside space-y-3 text-lg bg-white bg-opacity-20 p-5 rounded-lg">
        <li>Visit the <span className="font-semibold">7TravelMoney</span> website or mobile app and navigate to the “reload forex card” section.</li>
        <li>Select your card type and enter your kit number. Choose the currency and specify the amount.</li>
        <li>Specify whether this is for a current or new trip (new trips may require travel details and documents).</li>
        <li>Complete the payment. Your card will be reloaded instantly.</li>
      </ol>

      <h2 className="text-3xl font-semibold mt-12 mb-4">How to Unload a Forex Card</h2>
      <p className="text-lg mb-6 leading-relaxed">
        Unloading a Forex card is common for travelers who have returned and wish to convert leftover foreign
        currency back into INR. This ensures your money isn't left idle on the card.
      </p>
      <p className="text-lg mb-6 leading-relaxed">
        <span className="font-semibold">7TravelMoney</span> is launching an instant unloading feature, enabling immediate access to unused
        balances. Convert your forex balance to INR, credited to your INR wallet, by following these steps:
      </p>
      <ol className="list-decimal list-inside space-y-3 text-lg bg-white bg-opacity-20 p-5 rounded-lg">
        <li>Visit the <span className="font-semibold">7TravelMoney</span> website or mobile app and navigate to the “unload forex card” section.</li>
        <li>Select your card type and enter your kit number. Choose the currency and amount to unload.</li>
        <li>Opt to unload the balance to a bank account (real-time unloads to wallets coming soon).</li>
        <li>Use your INR wallet balance for shopping across India like any debit or credit card.</li>
      </ol>

      <h2 className="text-3xl font-semibold mt-12 mb-4">Frequently Asked Questions (FAQs)</h2>
      <div className="space-y-6">
        <div className="p-4 bg-white bg-opacity-20 rounded-lg">
          <h3 className="text-xl font-medium">What are the fees for reloading/unloading a forex card?</h3>
          <p className="text-lg">7TravelMoney offers zero fees for reloading and unloading your forex card. No hidden charges.</p>
        </div>
        <div className="p-4 bg-white bg-opacity-20 rounded-lg">
          <h3 className="text-xl font-medium">How long does it take to reload a forex card?</h3>
          <p className="text-lg">Reloading your <span className="font-semibold">7TravelMoney</span> prepaid forex card is instant.</p>
        </div>
        <div className="p-4 bg-white bg-opacity-20 rounded-lg">
          <h3 className="text-xl font-medium">How long does it take to unload a forex card?</h3>
          <p className="text-lg">Unloading your <span className="font-semibold">7TravelMoney</span> travel card is instant if sent to an INR wallet.</p>
        </div>
        <div className="p-4 bg-white bg-opacity-20 rounded-lg">
          <h3 className="text-xl font-medium">Can I reload my forex card while traveling?</h3>
          <p className="text-lg">Yes, <span className="font-semibold">7TravelMoney</span> allows international reloading, unlike some banks.</p>
        </div>
        <div className="p-4 bg-white bg-opacity-20 rounded-lg">
          <h3 className="text-xl font-medium">What happens to the remaining balance after my trip?</h3>
          <p className="text-lg">You can unload any remaining balance and credit it to your bank account.</p>
        </div>
      </div>
    </div>
    <FooterComponent/>
    </>
  );
};

export default ReloadForex;
