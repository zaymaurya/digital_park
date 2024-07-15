import React from "react";

function Feedback() {
  return (
    <>
      <div id="feedback">
        <div className="container container-fluid p-0">
          <div className="heading feedback_section flex flex-column justify-center py-5 py-md-5">
            <span className="h6 fw-bold text-center text-uppercase">
              Client's Feedback
            </span>
            <h1 className="mt-0 fw-bold text-center mb-2 text-uppercase">
              People say's about us!
            </h1>
          </div>
          <div className="feed-parent mt-4 lg:mt-5">
            <div className="feedbacks mar-1">
              <h3>
                Jannat Tumpa The standard chunk of Lorem Ipsum used since the
                1500s is reproduced below for those interested. Sections Bonorum
                at Malorum Original.
              </h3>
              <span className="mt-3 text-uppercase">Jannat Tumpa</span>
              <span className="text-uppercase">
                {" "}
                - Coo, Amerimar Enterprises, Inc.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
