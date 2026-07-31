import { Link } from "react-router-dom";

export default function Success() {

  return (

    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white">

      <h1 className="text-5xl text-green-400">

        Booking Request Sent

      </h1>

      <p className="mt-5 text-xl">

        The owner will contact you soon.

      </p>

      <p>

        Or you can directly contact the owner for payment.

      </p>

      <Link
        to="/"
        className="mt-10 bg-yellow-500 px-8 py-3 rounded-xl text-black"
      >

        Back To Home

      </Link>

    </div>

  );

}