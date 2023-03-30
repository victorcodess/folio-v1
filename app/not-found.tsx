import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <p>Uh oh! This post could not be found.</p>
      <div>
        <Link href="/">Go back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
