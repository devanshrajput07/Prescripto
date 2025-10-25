import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets_admin/assets.js";
import { toast } from "react-toastify";
import axios from "axios";
import { AdminContext } from "../../context/AdminContext.jsx";

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const { backendUrl, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (!docImg) {
        return toast.error("Image Not Selected");
      }

      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );

      // Console log formData
      // formData.forEach((value, key) => {
      //   console.log(`${key}: ${value}`);
      // });

      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formData,
        {
          headers: { atoken: aToken },
        }
      );

      if (data.success) {
        toast.success(data.message);
        setDocImg(false);
        setName("");
        setEmail("");
        setPassword("");
        setExperience("1 Year");
        setFees("");
        setAbout("");
        setSpeciality("General physician");
        setDegree("");
        setAddress1("");
        setAddress2("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-3 text-lg font-semibold">Add Doctor</p>

      <div className="bg-white px-8 py-8 rounded-lg w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        {/* Image Upload */}
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img
              className="w-20 h-20 bg-gray-100 rounded-full cursor-pointer object-cover"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt=""
            />
          </label>
          <input
            onChange={(e) => setDocImg(e.target.files[0])}
            type="file"
            id="doc-img"
            hidden
          />
          <p className="text-gray-400 text-sm">
            Upload Doctor <br /> Picture
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-700">
          {/* Left Column */}
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-700">Doctor Name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                type="text"
                placeholder="Name"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-700">Doctor Email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                type="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-700">
                Doctor Password
              </p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                type="password"
                placeholder="Password"
                autoComplete="new-password"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-700">Experience</p>
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                className="border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="1 Year">1 Year</option>
                <option value="2 Years">2 Years</option>
                <option value="3 Years">3 Years</option>
                <option value="4 Years">4 Years</option>
                <option value="5 Years">5 Years</option>
                <option value="6 Years">6 Years</option>
                <option value="7 Years">7 Years</option>
                <option value="8 Years">8 Years</option>
                <option value="9 Years">9 Years</option>
                <option value="10 Years">10+ Years</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-700">Fees</p>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                className="border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                type="number"
                placeholder="Fees"
                required
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-700">Speciality</p>
              <select
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
                className="border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-700">Education</p>
              <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                className="border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                type="text"
                placeholder="Education"
                required
              />
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-gray-700">Address</p>
              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                className="border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent mb-2"
                type="text"
                placeholder="Address 1"
                required
              />
              <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                className="border border-gray-300 rounded px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                type="text"
                placeholder="Address 2"
                required
              />
            </div>
          </div>
        </div>

        {/* About Doctor Textarea */}
        <div className="mt-6">
          <p className="text-sm font-medium text-gray-700 mb-2">About Doctor</p>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            className="w-full px-4 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            rows={4}
            placeholder="Write about Doctor"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white px-10 py-3 mt-6 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Add doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
