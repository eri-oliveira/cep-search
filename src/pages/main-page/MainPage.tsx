import { CssBaseline, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getZipCode } from "../../service/service";
import { ZipCodeInterface } from "../../service/zip-code.interface";
import HistoryBox from "./cep-history/CepHistory";
import CepResult from "./cep-result/CepResult";
import SearchCep from "./search-cep/SearchCep";
import { StyledContainer } from "./styles";

export default function MainPage() {
  const [zipCodeValue, setZipCodeValue] = useState("");
  const [searchedValues, setSearchedValues] = useState<ZipCodeInterface[] | []>(
    []
  );

  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (value: string) => {
    if (value.length !== 8) {
      toast.error("Por favor, pesquise um CEP válido!");
      return;
    }

    setIsLoading(true);

    getZipCode(value)
      .then((res) => {
        if (!res?.success) {
          toast.error(
            res?.errors?.toString() || "Ocorreu um erro. Tente novamente!"
          );
          return;
        }

        setZipCodeValue("");
        const newSearchedValues = [...searchedValues];
        newSearchedValues.unshift(res?.data);

        setSearchedValues(newSearchedValues);
      })
      .finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  };

  const handleHistoryClick = (value: ZipCodeInterface) => {
    let historyIndex = 0;

    searchedValues.filter((v: ZipCodeInterface, index: number) => {
      if (v.cep === value.cep) {
        historyIndex = index;
      }
    });

    const oldValue = searchedValues[0];
    const newValue = searchedValues[historyIndex];

    const newSearchedValues = [...searchedValues];
    newSearchedValues[0] = newValue;
    newSearchedValues[historyIndex] = oldValue;

    setSearchedValues(newSearchedValues);
  };

  useEffect(() => {
    if (zipCodeValue.length === 8) {
      handleSearch(zipCodeValue);
    }
  }, [zipCodeValue]);

  return (
    <StyledContainer>
      <CssBaseline />

      <Grid container sx={{ marginBottom: "20px" }}>
        <SearchCep
          zipCodeValue={zipCodeValue}
          setZipCodeValue={setZipCodeValue}
          handleSearch={handleSearch}
          isLoading={isLoading}
        />
        <HistoryBox
          searchedValues={searchedValues}
          isLoading={isLoading}
          handleHistoryClick={handleHistoryClick}
          hideWhenSmall={true}
          hideWhenLarge={false}
        />
      </Grid>

      {searchedValues.length > 0 ? (
        <CepResult
          searchedValue={searchedValues?.[0] || null}
          isLoading={isLoading}
        />
      ) : (
        <></>
      )}

      {searchedValues.length > 0 ? (
        <HistoryBox
          searchedValues={searchedValues}
          isLoading={isLoading}
          handleHistoryClick={handleHistoryClick}
          hideWhenSmall={false}
          hideWhenLarge={true}
        />
      ) : (
        <></>
      )}
    </StyledContainer>
  );
}
