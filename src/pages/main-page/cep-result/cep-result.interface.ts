import { ZipCodeInterface } from "../../../service/zip-code.interface";

export interface CepResultProps {
  searchedValue: ZipCodeInterface | null;
  isLoading: boolean;
}
