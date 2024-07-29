import { otherSitesData } from "@/utils/data";
import React from "react";

const OtherSites = () => {
  return (
    <section className=" px-8 sm:px-16 text-white space-y-4 ">
        {otherSitesData.map(({id,heading,description})=>{
            return <article key={id} className="space-y-2">
            <h2 className="text-4xl">{heading}</h2>
            <p className="text-base ">
              {description}
            </p>
          </article>
        })}
    </section>
  );
};

export default OtherSites;
