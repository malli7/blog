import { SignInInput, SignUpInput } from "@malli7/common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";

const Auth = ({ type }: { type: "signin" | "signup" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] =
    type === "signin"
      ? useState<SignInInput>({
          email: "",
          password: "",
        })
      : useState<SignUpInput>({
          name: "",
          email: "",
          password: "",
        });

  const sendRequest = async () => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signin" ? "signin" : "signup"}`,
        postInputs
      );
      const data = response.data;
      const token = data.token;
      if (token) {
        localStorage.setItem("token", token);
        navigate("/blogs");
      } else {
        alert(data.msg);
      }
    } catch (error) {
      alert("some error occurred");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {type === "signin" ? (
        <>
          <div className="font-extrabold text-3xl">Login to your Account</div>
          <div className="text-md text-gray-500">
            Don't have an account?
            <Link to="/signup" className="underline">
              Signup
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="font-extrabold text-3xl">Create an account</div>
          <div className="text-md text-gray-500">
            Already have an account?
            <Link to="/signin" className="underline">
              Login
            </Link>
          </div>
        </>
      )}
      <div>
        {type === "signup" && (
          <LabelledInput
            label="Name"
            placeholder="enter your name "
            type="text"
            onChange={(e) =>
              setPostInputs({
                ...postInputs,
                name: e.target.value,
              })
            }
          />
        )}
        <LabelledInput
          label="Email"
          placeholder="enter your email "
          type="email"
          onChange={(e) =>
            setPostInputs({
              ...postInputs,
              email: e.target.value,
            })
          }
        />
        <LabelledInput
          label="Password"
          placeholder="enter your password "
          type="password"
          onChange={(e) =>
            setPostInputs({
              ...postInputs,
              password: e.target.value,
            })
          }
        />
        <button
          type="button"
          onClick={sendRequest}
          className="mt-2 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          {type === "signup" ? "Sign Up" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Auth;

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium pt-2 text-black">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-16"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
