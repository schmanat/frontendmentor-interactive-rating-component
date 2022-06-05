import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ThankYou from "./assets/images/illustration-thank-you.svg";
import RatingForm from "./components/RatingForm";

function App() {
  const [stars, setStars] = useState(0);
  const [submited, setSubmited] = useState(false);

  return (
    <div className="bg-blue-very-dark font-overpass min-h-screen flex items-center justify-center text-normal text-white">
      {submited === false ? (
        <Card>
          <div className="p-4 inline-block rounded-full bg-blue-light">
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
                fill="#FC7614"
              />
            </svg>
          </div>
          <h1 className="text-xl font-bold mt-6">How did we do?</h1>
          <p className="text-grey-medium my-6">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <RatingForm
            stars={stars}
            onChangeHandler={setStars}
            onSubmitHandler={() => setSubmited(true)}
          />
        </Card>
      ) : (
        <Card>
          <div className="flex flex-col items-center w-full justify-center">
            <img src={ThankYou} alt="Illustration - Thank you" />
            <span className="mt-6 px-2 py-3 leading-3 text-primary rounded-md bg-blue-light">
              You selected {stars} out of 5
            </span>
            <h1 className="text-xl font-bold mt-6">Thank you!</h1>
            <p className="text-grey-medium my-6 text-center">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don't hesitate to get in touch!
            </p>
          </div>
        </Card>
      )}
    </div>
  );
}

export default App;
