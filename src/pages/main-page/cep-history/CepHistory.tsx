import { Place } from "@mui/icons-material";
import { Skeleton, Typography } from "@mui/material";
import { ZipCodeInterface } from "../../../service/zip-code.interface";
import { HistoryBoxProps } from "./cep-history.interface";
import { HistoryHeader, LineBox, ScrollBox, StyledHystoryGrid } from "./styles";

const HistoryBox: React.FC<HistoryBoxProps> = ({
  searchedValues,
  isLoading,
  handleHistoryClick,
  hideWhenSmall,
  hideWhenLarge,
}) => {
  const getHistoryLine = (value: ZipCodeInterface) => {
    return !isLoading ? (
      <LineBox onClick={() => handleHistoryClick(value)}>
        <Place style={{ color: "#263239" }} />
        <Typography variant="body1">{value.cep}</Typography>
        <Typography variant="body1">{value.localidade}</Typography>
        <Typography variant="body1">{value.uf}</Typography>
      </LineBox>
    ) : (
      <Skeleton
        height={50}
        variant="rounded"
        sx={{ width: "96%", marginBottom: "10px" }}
      />
    );
  };

  return (
    <StyledHystoryGrid
      item
      xl={6}
      lg={6}
      md={6}
      sm={12}
      xs={12}
      hideWhenSmall={hideWhenSmall}
      hideWhenLarge={hideWhenLarge}
    >
      <HistoryHeader>
        <Typography variant="h5">HISTÓRICO</Typography>
        <Typography variant="body1">Últimos CEPs pesquisados</Typography>
      </HistoryHeader>

      {searchedValues.length > 0 ? (
        <ScrollBox>
          {searchedValues?.map((searchedValue: ZipCodeInterface) =>
            getHistoryLine(searchedValue)
          )}
        </ScrollBox>
      ) : (
        <ScrollBox>
          <Typography variant="body1" fontWeight={500}>
            Sem histórico no momento
          </Typography>
        </ScrollBox>
      )}
    </StyledHystoryGrid>
  );
};

export default HistoryBox;
