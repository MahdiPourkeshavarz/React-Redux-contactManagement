/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useCreateContactMutation } from "../../store/contactSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const initialProp = {
  fullName: "",
  imgUrl: "",
  mobileNumber: "",
  emailAddress: "",
  job: "",
  relation: "",
};

export function NewContactForm() {
  const [createContact] = useCreateContactMutation();

  const [contact, setContact] = useState(initialProp);

  const navigate = useNavigate();

  const schema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    imgUrl: Yup.string().url("Invalid URL").required("Image URL is required"),
    mobile: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(11, "Must be exactly 10 digits")
      .max(11, "Must be exactly 10 digits")
      .required("Mobile number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    job: Yup.string().required("Job is required"),
    relation: Yup.string().required("Relation is required"),
  });

  const {
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    createContact({ ...contact, id: crypto.randomUUID() });
    reset();
    navigate("/");
  };

  return (
    <>
      <form className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md text-right">
        <div className="mb-4">
          <input
            {...register("fullName")}
            className="w-full p-2 bg-gray-700 text-white rounded text-right"
            placeholder="نام و نام خوانوادگی"
            value={contact.fullName}
            onChange={(e) =>
              setContact({ ...contact, fullName: e.target.value })
            }
          />
          <p className="text-red-500 text-sm">{errors.fullName?.message}</p>
        </div>

        <div className="mb-4">
          <input
            {...register("imgUrl")}
            className="w-full p-2 bg-gray-700 text-white rounded text-right"
            placeholder="آدرس تصویر"
            value={contact.imgUrl}
            onChange={(e) => setContact({ ...contact, imgUrl: e.target.value })}
          />
          <p className="text-red-500 text-sm">{errors.imgUrl?.message}</p>
        </div>

        <div className="mb-4">
          <input
            {...register("mobileNumer")}
            className="w-full p-2 bg-gray-700 text-white rounded text-right"
            placeholder="شماره تلفن"
            value={contact.mobileNumber}
            onChange={(e) =>
              setContact({ ...contact, mobileNumber: e.target.value })
            }
          />
          <p className="text-red-500 text-sm">{errors.mobileNumber?.message}</p>
        </div>
        <div className="mb-4">
          <input
            {...register("emailAddress")}
            className="w-full p-2 bg-gray-700 text-white rounded text-right"
            placeholder="آدرس ایمیل"
            value={contact.emailAddress}
            onChange={(e) =>
              setContact({ ...contact, emailAddress: e.target.value })
            }
          />
          <p className="text-red-500 text-sm">{errors.emailAddress?.message}</p>
        </div>

        <div className="mb-4">
          <input
            {...register("job")}
            className="w-full p-2 bg-gray-700 text-white rounded text-right"
            placeholder="شغل"
            value={contact.job}
            onChange={(e) => setContact({ ...contact, job: e.target.value })}
          />
          <p className="text-red-500 text-sm">{errors.job?.message}</p>
        </div>

        <div className="mb-6">
          <select
            {...register("relation")}
            className="w-full p-2 bg-gray-700 text-white rounded text-right"
            onChange={(e) =>
              setContact({ ...contact, relation: e.target.value })
            }
          >
            <option value={contact ? contact.relation : ""}>
              {contact.relation ? contact.relation : "...رابطه"}
            </option>
            <option value="خانواده">خانواده</option>
            <option value="دوست">دوست</option>
            <option value="همکار">همکار</option>
          </select>
          <p className="text-red-500 text-sm">{errors.relation?.message}</p>
        </div>

        <div className="flex justify-between space-x-2">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            انصراف
          </button>
          <button
            type="submit"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            onClick={onSubmit}
          >
            ایجاد مخاطب
          </button>
        </div>
      </form>
    </>
  );
}
