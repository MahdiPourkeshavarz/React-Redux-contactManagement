import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export function CreateContactPage() {
  const schema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    imgUrl: Yup.string().url("Invalid URL").required("Image URL is required"),
    mobile: Yup.string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(10, "Must be exactly 10 digits")
      .max(10, "Must be exactly 10 digits")
      .required("Mobile number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    job: Yup.string().required("Job is required"),
    relation: Yup.string().required("Relation is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <div className="border-b border-slate-500 flex justify-center py-2">
        <p className="text-green-600 font-medium text-xl">ساختن مخاطب جدید</p>
      </div>
      <div className="flex justify-center items-center gap-x-8">
        <div className="">
          <img className="rounded-xl" src="../../public/hero.jpg" alt="_" />
        </div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md text-right"
          >
            <div className="mb-4">
              <label className="block text-gray-300 mb-2">
                نام و نام خوانوادگی
              </label>
              <input
                {...register("fullName")}
                className="w-full p-2 bg-gray-700 text-white rounded"
              />
              <p className="text-red-500 text-sm">{errors.fullName?.message}</p>
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 mb-2">آدرس تصویر</label>
              <input
                {...register("imgUrl")}
                className="w-full p-2 bg-gray-700 text-white rounded"
              />
              <p className="text-red-500 text-sm">{errors.imgUrl?.message}</p>
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 mb-2">شماره تلفن</label>
              <input
                {...register("mobile")}
                className="w-full p-2 bg-gray-700 text-white rounded"
              />
              <p className="text-red-500 text-sm">{errors.mobile?.message}</p>
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 mb-2">آدرس ایمیل</label>
              <input
                {...register("email")}
                className="w-full p-2 bg-gray-700 text-white rounded"
              />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 mb-2">شغل</label>
              <input
                {...register("job")}
                className="w-full p-2 bg-gray-700 text-white rounded"
              />
              <p className="text-red-500 text-sm">{errors.job?.message}</p>
            </div>

            <div className="mb-6">
              <label className="block text-gray-300 mb-2">رابطه</label>
              <select
                {...register("relation")}
                className="w-full p-2 bg-gray-700 text-white rounded"
              >
                <option value="">انتخاب...</option>
                <option value="family">خانواده</option>
                <option value="friend">دوست</option>
                <option value="colleague">همکار</option>
              </select>
              <p className="text-red-500 text-sm">{errors.relation?.message}</p>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => reset()}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                انصراف
              </button>
              <button
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
              >
                ایجاد مخاطب
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
