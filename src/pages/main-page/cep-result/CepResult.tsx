import { Skeleton, Typography } from "@mui/material";
import { CepResultProps } from "./cep-result.interface";
import { ImgBox, StyledResultGrid } from "./styles";

const CepResult: React.FC<CepResultProps> = ({ searchedValue, isLoading }) => {
  return searchedValue ? (
    !isLoading ? (
      <StyledResultGrid>
        <ImgBox>
          <img
            src="/src/assets/search-cep-icon.png"
            alt="map icon"
            style={{ width: "70%" }}
          />
        </ImgBox>

        <div>
          <Typography variant="h3">Resultado - CEP</Typography>
          <Typography variant="h6">
            {searchedValue?.logradouro}{" "}
            {searchedValue?.complemento
              ? `, ${searchedValue?.complemento}`
              : ""}{" "}
            - {searchedValue?.bairro} - {searchedValue?.localidade} -{" "}
            {searchedValue?.uf}
          </Typography>
          <Typography variant="h6">DDD: {searchedValue?.ddd}</Typography>
          <Typography variant="h6">IBGE: {searchedValue?.ibge}</Typography>
          <Typography variant="h6">GIA: {searchedValue?.gia}</Typography>
          <Typography variant="h6">SIAFI: {searchedValue?.siafi}</Typography>
        </div>
      </StyledResultGrid>
    ) : (
      <Skeleton variant="rounded" sx={{ width: "100%", height: "90%" }} />
    )
  ) : (
    <></>
  );
};

export default CepResult;
