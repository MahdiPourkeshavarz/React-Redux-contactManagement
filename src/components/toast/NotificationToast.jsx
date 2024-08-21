/* eslint-disable react/prop-types */
import { toast, ToastContainer } from "react-toastify";

export function NotificationToast({ contactName }) {
  const showToastMessage = () => {
    toast.success(`با موفقیت حذف شد!${contactName}`, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div>
      <button onClick={showToastMessage}>Notify</button>
      <ToastContainer />
    </div>
  );
}
