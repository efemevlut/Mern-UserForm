import * as Yup from "yup";


export const addUser = Yup.object({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("First name is a required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Last name is a required"),
    phone: Yup.number()
      .min(100000000, "Min 10 chars")
      .required("Phone is a required"),
  });