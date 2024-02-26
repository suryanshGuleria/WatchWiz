import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
            <b>Personal Information:</b> Name, email address, shipping address,
            phone number (optional).
          </p>
          <p>
            <b>Payment Information:</b> Credit card details are not stored by
            WatchWiz. We use a secure third-party payment processor for secure
            transactions.
          </p>
          <p>
            <b>Activity Information:</b> Browsing history, search queries,
            watchlist items, purchase history (anonymized).
          </p>
          <p>
            <b>Device Information:</b>IP address, device type, operating system
            (for app functionality).
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
