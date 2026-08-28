"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

function page() {
  return (
    <>
      <Navbar />
      <section className="bg-white text-black flex flex-col gap-14 pt-40">
        <h1 className="text-5xl font-extrabold space-grotesk text-center">
          Contact Us
        </h1>
        <div className="bg-gray-100 py-12 px-16 w-full flex flex-col gap-6">
          {/* box */}
          <div className="bg-white rounded-lg p-5 flex flex-col gap-3">
            <div>
              <p className="text-xl font-bold">Customer Support</p>
              <p>
                For order tracking, delivery issues, returns, or general product
                questions:
              </p>
            </div>
            <div className="flex items-center justify-between gap-8">
              <div>
                <p className="text-base font-semibold">Live Chat</p>
                <p className="text-sm">
                  Available during standard support hours. Instant responses for
                  active inquiries.
                </p>
                <p className="text-sm font-bold">Start Live Chat Now</p>
              </div>
              <div>
                <p className="text-base font-semibold">Email Us</p>
                <p className="text-sm">
                  For deep troubleshooting, details, or documentation exchanges.
                </p>
                <p className="text-sm font-bold">hello@vuselo.com</p>
              </div>
              <div>
                <p className="text-base font-semibold">Call Center</p>
                <p className="text-sm">
                  Direct telephone line matching global help desks
                  (Monday–Friday, 9am–6pm).
                </p>
                <p className="text-sm font-semibold">+1 (999) 888-77-66</p>
              </div>
            </div>
            <div className="border border-gray-400"></div>
            <p className="text-sm">
              Note: We aim to respond to all email inquiries within 24 hours.
            </p>
          </div>
          {/* box-2 */}
          <div className="flex justify-between gap-6">
            <div className="bg-white rounded-lg p-5 flex flex-col gap-1 w-full">
              <p className="text-base font-bold">Order & Delivery Help</p>
              <p className="text-sm">Track an active order</p>
              <p className="text-sm">Manage a subscription</p>
              <p className="text-sm">Initiate returns & refunds</p>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col gap-1 w-full">
              <p className="text-base font-bold">Product & Safety Questions</p>
              <p className="text-sm">
                Questions regarding safety standards, raw materials, or reports
                of adverse reactions.
              </p>
              <p className="text-sm font-bold">safety@vuselo.com</p>
            </div>
          </div>
          {/* box-3 */}
          <div className="flex justify-between gap-6">
            <div className="bg-white rounded-lg p-5 flex flex-col gap-1 w-full">
              <p className="text-base font-bold">
                Age Verification & Account Issues
              </p>
              <p className="text-sm">
                Problems with identity confirmation or account access locks?
                Reach our compliance officers directly.
              </p>
              <p className="text-base font-bold">verification@vuselo.com</p>
              <p className="text-sm">
                Please have a valid, state-issued photo ID ready for secure
                review.
              </p>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col gap-1 w-full">
              <p className="text-base font-bold">
                Wholesale & Retail Partnerships
              </p>
              <p className="text-sm">
                For distributors looking to carry VUSELO authentic devices or
                pods in regional shops.
              </p>
              <p className="text-sm font-bold">partners@vuselo.com</p>
            </div>
          </div>
          {/* box-4 */}
          <div className="flex justify-between gap-6">
            <div className="bg-white rounded-lg p-5 flex flex-col gap-1 w-full">
              <p className="text-base font-bold">Press & Media</p>
              <p className="text-sm">
                Media relations, asset requests, and brand partnership
                inquiries.
              </p>
              <p className="text-sm font-bold">press@vuselo.com</p>
            </div>
            <div className="bg-white rounded-lg p-5 flex flex-col gap-1 w-full">
              <p className="text-base font-bold">Find Us</p>
              <p className="text-sm font-bold">VUSELO International Ltd.</p>
              <p className="text-sm">
                Manchester M2 5PS, Office A, United Kingdom
              </p>
            </div>
          </div>
          {/* box-5 */}
          <div className="bg-white rounded-lg p-5 flex flex-col gap-3 w-full">
            <p className="text-base font-bold">Follow VUSELO</p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-bold space-grotesk">
                Instagram
              </a>
              <a href="#" className="text-bold space-grotesk">
                Facebook
              </a>
              <div className="border border-gray-400 h-5 mx-2"></div>
              <p className="text-sm text-gray-600">
                Media relations, asset requests, and brand partnership
                inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default page;
