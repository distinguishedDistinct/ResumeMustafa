import { useState } from "react";
import Input from "../components/Input";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [years, setYears] = useState("");
  const [service, setService] = useState("Web Development");
  const [message, setMessage] = useState("");
  const formData = {
    name,
    email,
    company,
    years: parseInt(years),
    service,
    message,
  };
  const sendForm = async () => {
    const response = await fetch("http://localhost:3000/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      alert("Form submitted successfully");
      window.location.reload(); // This will refresh the page
    } else {
      alert(result.message || "Failed to submit the form"); // Display the error message
    }
  };

  return (
    <div className="Main-Container bg-gray-800 p-5">
      <h1 className="text-green-400 text-3xl"> Let's Work Together</h1>
      <p className="w-96 my-5">
        Want to work with me? send me a message and we'll get right back to you.
      </p>
      <div className="Input-containers flex">
        <div className=" First mr-10">
          <Input labels="Name" placeholder="" type="text" onChange={setName} />
        </div>
        <Input labels="email" placeholder="" type="email" onChange={setEmail} />
      </div>
      <div className="Input-containers flex my-5 ">
        <div className="First mr-10">
          <Input
            labels="Company"
            placeholder=""
            type="text"
            onChange={setCompany}
          />
        </div>
        <Input
          labels="Years"
          placeholder=""
          type="number"
          onChange={setYears}
        />
      </div>
      <select
        name="Service"
        id="Service"
        className="w-100p py-2"
        required
        onChange={(e) => setService(e.target.value)}
      >
        <option value="placeholder">Select Service</option>
        <option value="Web Development">Web Development</option>
        <option value="Graphic Design">Graphic Design</option>
        <option value="UI/UX Design">UI/UX Design</option>
        <option value="Logo Design">Logo Design</option>
      </select>
      <textarea
        onChange={(e) => setMessage(e.target.value)}
        name="message"
        id=""
        placeholder="Type your message here."
        className="my-5 w-100p"
        rows={8}
      ></textarea>
      <button
        className="rounded-full font-extrabold bg-green-400 p-2 text-black hover:text-black hover:bg-white"
        onClick={sendForm}
      >
        Send Message
      </button>
      <style jsx>{`
        @media (max-width: 450px) {
          .Main-Container {
            margin-left: auto;
            margin-right: auto;
            width: 90%;
          }
          .Input-containers {
            flex-direction: column;
            width: 50%;
            margin-right: auto;
            margin-left: auto;
          }

          h1 {
            font-size: 2rem;
          }
          p {
            width: 280px;
            font-size: 10px;
          }
          .First {
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: 5px;
          }
        }
      `}</style>
    </div>
  );
};

export default Form;
