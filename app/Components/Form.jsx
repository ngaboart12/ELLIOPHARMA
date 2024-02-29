"use client"
import React, { useState } from 'react'
import { ThreeDots } from "react-loader-spinner";
import toast from "react-hot-toast";


const Form = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [emapty, setEmpty] = useState();

    async function handelSubmit(e) {
        e.preventDefault();
        setLoading(true);
        const data = {
          username,
          email,
          message,
        };
        if (username == "") {
          setEmpty("username");
          setLoading(false);
        } else if (email == "") {
          setEmpty("email");
          setLoading(false);
        } else if (message == "") {
          setEmpty("message");
          setLoading(false);
        } else {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
    
          if (response.ok) {
            setLoading(false);
            setEmpty("");
            setEmail("");
            setUsername("");
            setMessage("");
            toast.success("Email sent successfully");
            console.log("Message sent successfully");
          }
          if (!response.ok) {
            setLoading(false);
            setEmpty("");
            setEmail("");
            setUsername("");
            setMessage("");
            toast.error("message not sent");
            console.log(response);
          }
        }
      }
  return (
    <form action=""   onSubmit={handelSubmit} className="w-full py-5 flex flex-col gap-6">
    <div className="flex flex-col gap-1 w-full">
      <span className="text-black">Name</span>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your name"
        className="p-[10px] w-full  outline-none rounded-xl border border-gray-300 font-light placeholder:text-black text-black"
      />
    </div>
    <div className="flex flex-col gap-1">
      <span className="text-black">Email</span>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your Email"
        className="p-[10px] outline-none rounded-xl border border-gray-300 font-light  placeholder:text-black text-black"
      />
    </div>
    <div className="flex flex-col gap-1">
      <span className="text-black">Message</span>
      <textarea
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your Message"
        className="p-[10px] outline-none rounded-xl border border-gray-300 font-light  placeholder:text-black text-black"
        rows={3}
      ></textarea>
    </div>
    <button
      type="submit"
      className=" bg-blueColor  w-full md:w-full text-white rounded-xl p-4"
    >
       {loading ? (
                <ThreeDots
                  height="20"
                  width="80"
                  radius="9"
                  color="white"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              ) : (
                "submit Now"
              )}
    </button>
  </form>
  )
}

export default Form
