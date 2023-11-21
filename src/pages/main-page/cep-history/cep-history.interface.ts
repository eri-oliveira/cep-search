import { ZipCodeInterface } from "../../../service/zip-code.interface";

export interface HistoryBoxProps {
  searchedValues: ZipCodeInterface[] | [];
  isLoading: boolean;
  handleHistoryClick: (value: ZipCodeInterface) => void;
  hideWhenSmall: boolean;
  hideWhenLarge: boolean;
}
