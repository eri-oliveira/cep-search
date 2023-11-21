export interface SearchBoxProps {
  zipCodeValue: string;
  setZipCodeValue: (value: string) => void;
  handleSearch: (event: any) => void;
  isLoading: boolean;
}
