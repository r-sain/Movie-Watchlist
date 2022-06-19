import React from "react";
// import bgImg from "../assets/img1.jpg";
import { useForm } from "react-hook-form";
import "./form.css";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate();
  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate("/watch");
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="App">
      <div className="register">
        <div className="col-1">
          <h2>Sign In</h2>
          <span>Sign In to your Movie Watchlist</span>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              {...register("username")}
              placeholder="username"
            />
            <input
              type="text"
              {...register("password")}
              placeholder="password"
            />
            <input
              type="text"
              {...register("confirmpwd")}
              placeholder="confirm password"
            />
            <input
              type="text"
              {...register("mobile", { required: true, maxLength: 10 })}
              placeholder="mobile number"
            />
            {errors.mobile?.type === "required" && "Mobile Number is required"}
            {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
            <button className="btn" onClick={handleClick}>
              Sign In
            </button>
          </form>
        </div>
        <div className="col-2">
          <img
            src="https://images.pexels.com/photos/5662857/pexels-photo-5662857.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Movie Watchlist"
          />
        </div>
      </div>
    </section>
  );
}
