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
      {/* <article className="space-y-2">
        <h2 className="text-4xl">Yes Movies</h2>
        <p className="text-base ">
          YesMovies ranks first on our list for its comprehensive movie and TV
          series collection across all genres. The interface is user-friendly,
          allowing you to easily find films by year, actor, genre, or IMDb
          rating. The site also provides valuable details about your chosen
          movie or series, such as trailers and ratings. Whatever you seek, it's
          likely available on YesMovies for free.
        </p>
      </article> */}
      {/* <article  className="space-y-2">
        <h2 className="text-4xl">Vumoo</h2>
        <p className="text-base ">
          Vumoo offers a rich array of movies in high quality without a
          complicated interface. The site hosts a vast number of movies and TV
          shows, from Hollywood hits to lesser-known foreign productions like
          Japanese anime. If you're a fan of international cinema, this site is
          your go-to!
        </p>
      </article>
      <article  className="space-y-2">
        <h2 className="text-4xl">Look Movie</h2>
        <p className="text-base ">
          LookMovie is one of the most straightforward platforms out there.
          Enjoy a seamless viewing experience without any account creation or
          ads. The website features a broad array of movies, sitcoms, and
          documentaries, all free from pop-ups.
        </p>
      </article>
      <article  className="space-y-2">
        <h2 className="text-4xl">Wath Free</h2>
        <p className="text-base "> 
          True to its name, WatchFree lets you enjoy a plethora of movies and
          series without any cost. Whether you're into mainstream Hollywood
          films or indie classics, the site has something for everyone. It's so
          engaging that you'll want to clear your schedule before browsing.
        </p>
      </article>

      <article  className="space-y-2">
        <h2 className="text-4xl">Soap2Day</h2>
        <p className="text-base ">
          This platform is a treasure trove for movie aficionados, hosting a
          vast selection of HD-quality films and series. The site covers every
          genre imaginable, and all you have to do is sit back, choose a film,
          and immerse yourself in its world.
        </p>
      </article> */}
    </section>
  );
};

export default OtherSites;
