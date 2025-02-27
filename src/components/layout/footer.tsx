"use client"

import Copyright from "./copyright";

export default function FooterInfo() {
  return (
    <>
      <div className="w-full h-[255px] flex justify-center items-center bg-black">
        <div className="flex w-[80%] h-[80%] flex-col justify-between items-start">
          <div className="flex w-[80%] justify-between">
            <div>
              <h3>Título</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
              <h3>Título</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
              <h3>Título</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="flex w-full justify-center">
            <Copyright></Copyright>
          </div>
        </div>
      </div>
    </>
  );
}
