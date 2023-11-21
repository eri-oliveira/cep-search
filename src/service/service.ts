import axios from "axios";
import { Response } from "../shared/models/response.interface";
import { ZipCodeInterface } from "./zip-code.interface";

const getZipCode = async (
  zip_code: string
): Promise<Response<ZipCodeInterface>> => {
  const res = await axios.get(`https://viacep.com.br/ws/${zip_code}/json`);

  return {
    data: res.data,
    success: Boolean(res?.data?.cep?.length > 0),
    errors: res?.data?.errors || [],
    status: res.status,
  };
};

export { getZipCode };
