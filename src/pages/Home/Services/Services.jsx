import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center space-y-5">
        <h3 className="text-orange-500 font-bold text-xl">Services</h3>
        <h2 className="text-5xl text-[#151515)]">Our Services Area</h2>
        <p className="">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
      </div>
      <div>
        <p className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Services;
