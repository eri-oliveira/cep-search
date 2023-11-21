import { Search } from "@mui/icons-material";
import { InputAdornment, Skeleton, Typography } from "@mui/material";
import { inputZipCode } from "../../../shared/utils/masks";
import { SearchBoxProps } from "./search-cep.interface";
import { SearchTextfield, StyledSearchGrid } from "./styles";

const SearchBox: React.FC<SearchBoxProps> = ({
  zipCodeValue,
  setZipCodeValue,
  handleSearch,
  isLoading,
}) => {
  return (
    <StyledSearchGrid item xl={6} lg={6} md={6} sm={12} xs={12}>
      <Typography variant="h3">BUSCAR CEP</Typography>
      <Typography variant="body1">
        Por favor, insira o CEP desejado no campo abaixo. Ao inserir o CEP
        correto, você poderá obter informações sobre a localização e o endereço
        correspondente.
      </Typography>

      {!isLoading ? (
        <SearchTextfield
          fullWidth
          variant="outlined"
          color="primary"
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]*",
            maxLength: 8,
          }}
          InputProps={{
            ...inputZipCode.InputProps,
            endAdornment: (
              <InputAdornment
                position="end"
                children={<Search style={{ cursor: "pointer" }} />}
                onClick={() => {
                  handleSearch(zipCodeValue);
                }}
              />
            ),
          }}
          placeholder="Ex: 01310-930"
          value={zipCodeValue}
          onChange={(event) => {
            const inputValue = event.target.value.replace(/[^0-9]/g, "");
            setZipCodeValue(inputValue);
          }}
        />
      ) : (
        <Skeleton height={50} variant="rounded" />
      )}
    </StyledSearchGrid>
  );
};

export default SearchBox;
