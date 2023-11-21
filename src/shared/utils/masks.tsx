/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef } from "react";
import { PatternFormat } from "react-number-format";

const PatternFormatDefault = forwardRef(function NumberFormatCustom(
  props: any,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <>
      <PatternFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values: any) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        valueIsNumericString
      />
    </>
  );
});

export const inputZipCode = {
  InputProps: {
    inputComponent: PatternFormatDefault,
    inputProps: {
      format: `#####-###`,
    },
  },
};
