"use client"
import Download from "@/components/buttons/download";
import DefaultFooter from "@/components/footers/defaultFooter";
import { DefaultNav } from "@/components/navbars/defaulNav";
import { bg, movie } from "@/public";
import { androidAppData } from "@/utils/data";
import Image from "next/image";
import React from "react";
import "./index.css";
import { useGlobalContext } from "@/context/Context";
import LoginForm from "@/components/loginform/loginFOrm";
const AndroidApp = () => {
    const {login , setLogin} =useGlobalContext();
  return (
    <>
      {login && (
        <div className="fixed inset-0 bg-[#111111] bg-opacity-80 flex items-center justify-center z-50">
          <LoginForm onClose={() => setLogin(false)} />
        </div>
      )}
      <section className={`relative ${login ? "opacity-50" : "opacity-100"} `}>
        <DefaultNav
          visibility={"visible"}
          bgColor={"bg-[#000]"}
          longinButtonBg={"bg-[#000]"}
        />
        <section className=" min-h-screen bg-[#282828] md:bg-[#111111]  flex flex-col justify-center items-center  lg:py-16 lg:px-28 ">
          <div className="bg-custom flex rounded-sm flex-col md:flex-row gap-10 justify-center items-center p-14 ">
            <figure className=" pb-20">
              <Image src={movie} alt="movie-app" width={300} />
            </figure>
            <article className="space-y-8 text-white">
              <div>
                <h1 className="text-2xl  font-bold mb-1">
                  Andyday Android Movies Apk
                </h1>
                <p className="text-xl  tracking-wide">
                  Official Movies App for Android of AndyDay
                </p>
              </div>
              <ul className="list-disc text-lg text-gray-300 space-y-2 font-extralight">
                {androidAppData.map((app) => {
                  return <li key={app.id}>{app.text}</li>;
                })}
              </ul>
              <div className="space-y-3">
                <Download
                  text={"Download for Android"}
                  textColor={"text-black"}
                  bgColor={"bg-white"}
                />
                <Download
                  text={"Download for Android TV"}
                  textColor={"text-white"}
                  bgColor={"bg-green-500 hover:bg-green-600"}
                />
              </div>
            </article>
          </div>
        </section>
        <DefaultFooter />
      </section>
    </>
  );
};

export default AndroidApp;
