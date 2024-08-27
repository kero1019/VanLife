import React from "react";
import { useLocation } from "react-router-dom";
export default function Login() {
  const [formData, setFormData] = React.useState({ email: "", password: "" });

  // Function to handle submit
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  // Function handle change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  const  location = useLocation()
  const message = location.state?.message || ''
  return (
    <div className="h-full p-10 bg-main-background flex flex-col gap-10 items-center">
      <h3 className="text-red-500 font-bold text-xl">{message}</h3>
      <h1 className="text-3xl font-bold text-center">
        Sign in to your account
      </h1>
      <form action="" className="flex flex-col gap-5 w-1/2" onClick={handleSubmit}>
        <div className="flex flex-col ">
          <input
            type="e-mail"
            name="email"
            id="email"
            placeholder="Email address"
            onChange={handleChange}
            value={formData.email}
            className=" indent-3 p-2 rounded-t-md focus:outline-none focus:border-[1px] focus:border-solid border"
          />
          <input
            type="password"
            name="password"
            id="email"
            placeholder="Password"
            onChange={handleChange}
            value={formData.password}
            className=" indent-3 p-2 rounded-b-md focus:outline-none focus:border-[1px] focus:border-solid border"
          />
        </div>
        <button
          type="submit"
          className="bg-orange p-5 rounded-lg w-full font-bold text-white"
        >
          Sign in
        </button>
      </form>
      <h2 className=" text-center font-semibold">
        Don't have an account ?{" "}
        <span className="text-orange font-bold cursor-pointer">
          Create one now
        </span>
      </h2>
    </div>
  );
}
