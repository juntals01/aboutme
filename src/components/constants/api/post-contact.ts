import { ContactInputs } from "../FormTypes";
import axiosApi from "./axiosApi";
import { AxiosResponse, AxiosError, AxiosPromise } from "axios";

const postContact = async (params: ContactInputs): Promise<AxiosResponse> => {
  return await axiosApi.post(`/public/contact-me`, params);
};

export default postContact;
