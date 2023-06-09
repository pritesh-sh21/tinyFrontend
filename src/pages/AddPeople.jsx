import React from "react";

import { Header } from "../components";
import { Button } from "../components";

import { useState } from "react";

import { useStateContext } from "../contexts/ContextProvider";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const AddPeople = () => {
  const { currentColor, currentMode } = useStateContext();

  const createPeople = async (people) => {
    console.log(people);
    return await fetch(`http://localhost:9000/api/people/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(people),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  const [values, setValues] = useState({
    name: "",
    age: 0,
    gender: "",
    fatherName: "",
    motherName: "",
    phoneNumber: "",
    address: "",
    dob: null,
    disease: "",
    selfEducation: "",
    childEducationStatus: 0,
    employmentStatus: 0,
    welfareSchemes: 0,
    familySize: 0,
    dependentChildren: 0,
    elderlyFamilyMembers: 0,
    income: 0,
  });

  const {
    name,
    age,
    gender,
    fatherName,
    motherName,
    phoneNumber,
    address,
    dob,
    selfEducation,
    childEducationStatus,
    disease,
    familySize,
    employmentStatus,
    dependentChildren,
    welfareSchemes,
    elderlyFamilyMembers,
  } = values;

  const handelChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleDateChange = (name) => (date) => {
    setValues({ ...values, [name]: date });
  };
  const onSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    createPeople({
      name,
      age,
      gender,
      fatherName,
      motherName,
      phoneNumber,
      address,
      dob,
      selfEducation,
      childEducationStatus,
      disease,
      familySize,
      employmentStatus,
      dependentChildren,
      welfareSchemes,
      elderlyFamilyMembers,
    })
      .then((data) => {
        if (data.error) {
          console.log(error);
        } else {
          setValues({
            ...values,
            name: "",
            age: 0,
            gender: "",
            fatherName: "",
            motherName: "",
            phoneNumber: "",
            address: "",
            dob: null,
            disease: "",
            selfEducation: "",
            childEducationStatus: 0,
            employmentStatus: 0,
            welfareSchemes: 0,
            familySize: 0,
            dependentChildren: 0,
            elderlyFamilyMembers: 0,
            income: 0,
          });
        }
      })
      .catch(console.log("Error in Creating People"));
  };

  return (
    <div className="flex justify-center items-start min-h-screen">
      <div className="w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl p-4 md:p-8 bg-white rounded-3xl">
        <Header category="App" title="Add People" />
        <div className="text-center">
          <div className="w-full">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="grid grid-cols-1 gap-6">
                {/* //name  */}
                <div className="mb-4">
                  <label
                    className="block text-left  text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Name"
                    onChange={handelChange("name")}
                    value={name}
                  />
                </div>
                {/* /Father Name  */}
                <div className="mb-4">
                  <label
                    className="block text-left  text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Father Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Father Name"
                    onChange={handelChange("fatherName")}
                    value={fatherName}
                  />
                </div>
                {/* /Mother name  */}
                <div className="mb-4">
                  <label
                    className="block text-left  text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Mother Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Mother Name"
                    onChange={handelChange("motherName")}
                    value={motherName}
                  />
                </div>

                {/* //gender  */}

                <div className="mb-4">
                  <label
                    className="block text-left text-gray-700 text-sm font-bold mb-2"
                    htmlFor="gender"
                  >
                    Gender
                  </label>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "flex-start",
                      alignContent: "space-around",
                    }}
                  >
                    <label className="mr-2">
                      <input
                        className="mr-2 leading-tight"
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={handelChange("gender")}
                        checked={gender === "male"}
                      />
                      Male
                    </label>
                    <label className="mr-2">
                      <input
                        className="mr-2 leading-tight"
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={handelChange("gender")}
                        checked={gender === "female"}
                      />
                      Female
                    </label>
                    <label className="mr-2">
                      <input
                        className="mr-2 leading-tight"
                        type="radio"
                        name="gender"
                        value="other"
                        onChange={handelChange("gender")}
                        checked={gender === "other"}
                      />
                      Other
                    </label>
                  </div>
                </div>

                {/* //Age  */}

                <div className="mb-4">
                  <label
                    className="block text-left  text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Age
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="number"
                    placeholder="Age"
                    onChange={handelChange("age")}
                    value={age}
                    
                  />
                </div>

                {/* //phone number  */}
                <div className="mb-4">
                  <label
                    className="block text-left  text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Phone Number
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="number"
                    placeholder="Phone Number"
                    onChange={handelChange("phoneNumber")}
                    value={phoneNumber}
                  />
                </div>

                {/* address  */}

                <div className="mb-4">
                  <label
                    className="block text-left  text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Address
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Address"
                    onChange={handelChange("address")}
                    value={address}
                  />
                </div>

                {/* //date of birth  */}
                <div className="mb-4">
                  <label
                    className="block text-left  text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    DOB
                  </label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        id="username"
                        label="Date Of Birth"
                        value={values.dob}   
                        onChange={handleDateChange("dob")}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </div>

                {/* disease */}
                <div className="mb-4">
                  <label
                    className="block text-left  text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Disease
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="disease"
                    onChange={handelChange("disease")}
                    value={disease}
                  />
                </div>

                {/* Self Education */}
                <div className="mb-4">
                  <label
                    className="block text-left  text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Self Education
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Self Education"
                    onChange={handelChange("selfEducation")}
                    value={selfEducation}
                  />
                </div>

                {/* children education status */}

                <div className="mb-4">
                  <label
                    className="block text-left text-gray-700 text-sm font-bold mb-2"
                    htmlFor="gender"
                  >
                    Children Going School
                  </label>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "flex-start",
                      alignContent: "space-around",
                    }}
                  >
                    <label className="mr-2">
                      <input
                        className="mr-2 leading-tight"
                        type="radio"
                        name="childEducationStatus"
                        value="true"
                        onChange={handelChange("childEducationStatus")}
                        checked={childEducationStatus === "true"}
                      />
                      Yes
                    </label>
                    <label className="mr-2">
                      <input
                        className="mr-2 leading-tight"
                        type="radio"
                        name="childEducationStatus"
                        value="false"
                        onChange={handelChange("childEducationStatus")}
                        checked={childEducationStatus === "false"}
                      />
                      No
                    </label>
                  </div>
                </div>

                {/* Employement */}
                <div className="mb-4">
                  <label
                    className="block text-left text-gray-700 text-sm font-bold mb-2"
                    htmlFor="gender"
                  >
                    Employement
                  </label>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "flex-start",
                      alignContent: "space-around",
                    }}
                  >
                    <label className="mr-2">
                      <input
                        className="mr-2 leading-tight"
                        type="radio"
                        name="employmentStatus"
                        value="true"
                        onChange={handelChange("employmentStatus")}
                        checked={employmentStatus === "true"}
                      />
                      Yes
                    </label>
                    <label className="mr-2">
                      <input
                        className="mr-2 leading-tight"
                        type="radio"
                        name="employmentStatus"
                        value="false"
                        onChange={handelChange("employmentStatus")}
                        checked={employmentStatus === "false"}
                      />
                      No
                    </label>
                  </div>
                </div>

                {/* Welfare Scheme */}

                <div className="mb-4">
                  <label
                    className="block text-left text-gray-700 text-sm font-bold mb-2"
                    htmlFor="gender"
                  >
                    Welfare Schemes
                  </label>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "flex-start",
                      alignContent: "space-around",
                    }}
                  >
                    <label className="mr-2">
                      <input
                        className="mr-2 leading-tight"
                        type="radio"
                        name="welfareSchemes"
                        value="true"
                        onChange={handelChange("welfareSchemes")}
                        checked={welfareSchemes === "true"}
                      />
                      Yes
                    </label>
                    <label className="mr-2">
                      <input
                        className="mr-2 leading-tight"
                        type="radio"
                        name="welfareSchemes"
                        value="false"
                        onChange={handelChange("welfareSchemes")}
                        checked={welfareSchemes === "false"}
                      />
                      No
                    </label>
                  </div>
                </div>

                {/* family Size */}

                <div className="mb-4">
                  <label
                    className="block text-left  text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Family Members
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="number"
                    placeholder="familySize"
                    onChange={handelChange("familySize")}
                    value={familySize}
                  />
                </div>
                {/* Dependent Children */}

                <div className="mb-4">
                  <label
                    className="block text-left  text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Childrens
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="number"
                    placeholder="dependentChildren"
                    onChange={handelChange("dependentChildren")}
                    value={dependentChildren}
                  />
                </div>
                {/* Dependent elders */}

                <div className="mb-4">
                  <label
                    className="block text-left  text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Elders
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="number"
                    placeholder="elderlyFamilyMembers"
                    onChange={handelChange("elderlyFamilyMembers")}
                    value={elderlyFamilyMembers}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div onClick={onSubmit}>
                    <Button
                      color="white"
                      bgColor={currentColor}
                      text="Add People"
                      borderRadius="10px"
                    />
                  </div>

                  {/* <button
                    type="button"
                    onClick={onSubmit}
                    style={{ backgroundColor: currentColor, color:"white", borderRadius:"10px" }}
                    className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
                  >
                    {icon} {text}
                  </button> */}
                </div>
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
              &copy;2020 Acme Corp. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPeople;
