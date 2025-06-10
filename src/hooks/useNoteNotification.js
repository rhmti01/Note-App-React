import toast from "react-hot-toast";

function useNoteNotification(messageType = "success") {
  const messages = {
    success: "Note added successfully!",
    remove: "Note removed successfully!",
    complete: "Note marked as completed.",
    edit: "Note edited successfully.",
    default: "Action completed.",
  };

  const toastMap = {
    success: toast.success,
    remove: toast.error,
    complete: toast.success,
    edit: toast.success,
  };

  const message = messages[messageType] || messages.default;
  const notify = toastMap[messageType] || toast.success;

  notify(message);
}

export default useNoteNotification;
