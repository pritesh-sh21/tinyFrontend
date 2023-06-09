import React, { useEffect, useState } from "react";

import { Header } from "../components";

import { IoIosMore } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { GoPencil } from "react-icons/go";

import product9 from "../data/product9.jpg";

import { Button } from "../components";

import { useStateContext } from "../contexts/ContextProvider";

const CommunityList = () => {
  const { currentColor, currentMode } = useStateContext();
  const [communities,SetCommunities]=useState([])

  const clickHandler=()=>{

  }

  useEffect(() => {
    
  
    
  }, [])
  

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Community Details" />
      <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap' ,background:"smoke"}}>
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Daily Activities</p>

            <div className="flex  column ">
              <button
                type="button"
                className="text-xl font-semibold text-gray-500 m-2"
              >
                <GoPencil />
              </button>
              <button
                type="button"
                className="text-xl font-semibold text-gray-500 m-2"
              >
                <AiOutlineDelete />
              </button>
            </div>
          </div>
          <div className="mt-10">
            <img className="md:w-96 h-50 " src={product9} alt="" />
            <div className="mt-8">
              <p className="font-semibold text-lg">React 18 coming soon!</p>
              <p className="text-gray-400 ">By Johnathan Doe</p>
              <p className="mt-8 text-sm text-gray-400">
                This will be the small description for the news you have shown
                here. There could be some great info.
              </p>
              
              <div className="mt-3" onClick={clickHandler}>
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="See Details"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Daily Activities</p>

            <div className="flex  column ">
              <button
                type="button"
                className="text-xl font-semibold text-gray-500 m-2"
              >
                <GoPencil />
              </button>
              <button
                type="button"
                className="text-xl font-semibold text-gray-500 m-2"
              >
                <AiOutlineDelete />
              </button>
            </div>
          </div>
          <div className="mt-10">
            <img className="md:w-96 h-50 " src={product9} alt="" />
            <div className="mt-8">
              <p className="font-semibold text-lg">React 18 coming soon!</p>
              <p className="text-gray-400 ">By Johnathan Doe</p>
              <p className="mt-8 text-sm text-gray-400">
                This will be the small description for the news you have shown
                here. There could be some great info.
              </p>
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="See Details"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Daily Activities</p>

            <div className="flex  column ">
              <button
                type="button"
                className="text-xl font-semibold text-gray-500 m-2"
              >
                <GoPencil />
              </button>
              <button
                type="button"
                className="text-xl font-semibold text-gray-500 m-2"
              >
                <AiOutlineDelete />
              </button>
            </div>
          </div>
          <div className="mt-10">
            <img className="md:w-96 h-50 " src={product9} alt="" />
            <div className="mt-8">
              <p className="font-semibold text-lg">React 18 coming soon!</p>
              <p className="text-gray-400 ">By Johnathan Doe</p>
              <p className="mt-8 text-sm text-gray-400">
                This will be the small description for the news you have shown
                here. There could be some great info.
              </p>
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="See Details"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Daily Activities</p>

            <div className="flex  column ">
              <button
                type="button"
                className="text-xl font-semibold text-gray-500 m-2"
              >
                <GoPencil />
              </button>
              <button
                type="button"
                className="text-xl font-semibold text-gray-500 m-2"
              >
                <AiOutlineDelete />
              </button>
            </div>
          </div>
          <div className="mt-10">
            <img className="md:w-96 h-50 " src={product9} alt="" />
            <div className="mt-8">
              <p className="font-semibold text-lg">React 18 coming soon!</p>
              <p className="text-gray-400 ">By Johnathan Doe</p>
              <p className="mt-8 text-sm text-gray-400">
                This will be the small description for the news you have shown
                here. There could be some great info.
              </p>
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="See Details"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Daily Activities</p>

            <div className="flex  column ">
              <button
                type="button"
                className="text-xl font-semibold text-gray-500 m-2"
              >
                <GoPencil />
              </button>
              <button
                type="button"
                className="text-xl font-semibold text-gray-500 m-2"
              >
                <AiOutlineDelete />
              </button>
            </div>
          </div>
          <div className="mt-10">
            <img className="md:w-96 h-50 " src={product9} alt="" />
            <div className="mt-8">
              <p className="font-semibold text-lg">React 18 coming soon!</p>
              <p className="text-gray-400 ">By Johnathan Doe</p>
              <p className="mt-8 text-sm text-gray-400">
                This will be the small description for the news you have shown
                here. There could be some great info.
              </p>
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="See Details"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Daily Activities</p>

            <div className="flex  column ">
              <button
                type="button"
                className="text-xl font-semibold text-gray-500 m-2"
              >
                <GoPencil />
              </button>
              <button
                type="button"
                className="text-xl font-semibold text-gray-500 m-2"
              >
                <AiOutlineDelete />
              </button>
            </div>
          </div>
          <div className="mt-10">
            <img className="md:w-96 h-50 " src={product9} alt="" />
            <div className="mt-8">
              <p className="font-semibold text-lg">React 18 coming soon!</p>
              <p className="text-gray-400 ">By Johnathan Doe</p>
              <p className="mt-8 text-sm text-gray-400">
                This will be the small description for the news you have shown
                here. There could be some great info.
              </p>
              <div className="mt-3">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="See Details"
                  borderRadius="10px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CommunityList;
