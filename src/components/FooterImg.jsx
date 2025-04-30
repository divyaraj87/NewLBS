import React from "react";
import footer from './../images/footer.PNG';

const WhytoBetter = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-left overflow-hidden">
      {/* Background Image */}
      <img
        src={footer} // <-- Make sure to have this image inside /public
        alt="footer"
        className="absolute w-full h-full object-fill"
        
      />
    </section>
  );
};

export default WhytoBetter;
