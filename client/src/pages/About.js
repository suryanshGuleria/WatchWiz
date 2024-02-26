import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - WatchWiz"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            <h4>WatchWiz: Where Time Becomes Timeless Welcome to WatchWiz</h4>
            your one-stop destination for the finest timepieces in India. We're
            more than just an online store; we're a community of watch
            enthusiasts, curating a collection that transcends fleeting trends
            and embraces enduring style.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
