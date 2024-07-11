import { Proyect } from "../../interfaces/Proyect.interfaces";

import { BiLogoTypescript } from "react-icons/bi";
import { FaExternalLinkAlt, FaReact } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { IoLogoVercel } from "react-icons/io5";
import { Icon } from "@iconify/react";
import { Button, Dialog, DialogContent, DialogTrigger } from "../ui/";

export const ItemProyects = ({
  description,
  img,
  link,
  name,
  stack,
  deploy,
  github,
}: Proyect) => {
  return (
    <div className="w-full bg-1 flex flex-col  rounded-lg overflow-hidden">
      <div className="max-h-[190px] relative text-black hover:text-blue-600 ">
        <img className="w-full h-full object-cover " src={img} alt="" />
      </div>
      <div className="h-full flex flex-col justify-between  pt-2 pb-5 px-4 gap-5">
        <div className="flex flex-col gap-3">
          <div className="flex w-full justify-between">
            <h1 className="text-2xl capitalize">{name}</h1>
          </div>
        </div>
        <p>{description}</p>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant={"secondary"} className=" self-end">
              Ver mas...
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[95%] border-none">
            <div className=" bg-1 flex flex-col text-white rounded-lg w-full">
              <a
                target="_blank"
                className="  w-auto relative text-black hover:text-blue-600 p-2"
                href={link}
              >
                <FaExternalLinkAlt className="absolute right-0 m-2 " />

                <img className="w-full h-full object-cover " src={img} alt="" />
              </a>
              <div className="h-full flex flex-col justify-between  py-2 px-4 gap-5">
                <div className="flex flex-col gap-3">
                  <div className="flex w-full justify-between">
                    <h1 className="text-2xl capitalize">{name}</h1>
                    <span className="flex items-center gap-2 text-sm">
                      {deploy}
                      {deploy === "vercel" && (
                        <IoLogoVercel className="bg-black px-[6px] text-2xl rounded-full" />
                      )}
                      {deploy === "netlify" && (
                        <Icon
                          className="text-2xl"
                          icon="vscode-icons:file-type-netlify"
                        />
                      )}
                    </span>
                  </div>
                  <a
                    className="flex items-center gap-2 font-sans bg-black w-max py-1 px-3 rounded-3xl hover:underline"
                    href={`https://github.com/mateopedehonta/${github}`}
                    target="_blank"
                  >
                    <BsGithub className=" hover:text-blue-700" />
                    <p>{`mateopedehonta/${github}`}</p>
                  </a>
                </div>
                <p>{description}</p>
                <div className="  flex items-center  gap-4">
                  <p className="flex text-xl gap-3">
                    <FaReact className=" hover:text-blue-700" />
                    <BiLogoTypescript className=" hover:text-blue-700" />
                  </p>
                  <p className="text-sm hover:text-blue-700">{stack}</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

//
