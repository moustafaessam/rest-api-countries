import { Controller, useFormContext } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { StyledSelect } from "./ChooseRegion.styles";
import { FormProps } from "../Filter";

type ChooseRegionProps = {
  isDark: boolean;
};

export default function ChooseRegion({ isDark }: ChooseRegionProps) {
  const { control } = useFormContext<FormProps>();
  const [searchParams, setFilters] = useSearchParams();

  const options = [
    { value: "africa", label: "Africa" },
    { value: "america", label: "America" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];

  const initialRegions = searchParams.getAll("region");
  const defaultSelectedOptions =
    initialRegions && initialRegions.length > 0
      ? options.filter((option) => initialRegions.includes(option.value))
      : [];
  return (
    <Controller
      key={searchParams.toString()}
      name="filter"
      control={control}
      defaultValue={defaultSelectedOptions}
      render={({ field }) => (
        <StyledSelect
          {...field}
          isMulti
          noOptionsMessage={() => "Select A Valid Region"}
          options={options}
          placeholder="Filter by Region"
          classNamePrefix="react-select"
          styles={{
            input: (provided) => ({
              ...provided,
              color: isDark ? "white" : "#111517",
            }),
            noOptionsMessage: (provided) => ({
              ...provided,
              fontSize: "1.4rem",
              fontFamily: "Nunito Sans Regular",
              lineHeight: "2rem",
            }),
          }}
          onChange={(selectedOptions) => {
            field.onChange(selectedOptions);
            const regionValues = Array.isArray(selectedOptions)
              ? selectedOptions.map((option) => option.value)
              : [];
            if (regionValues.length > 0) {
              setFilters({ region: regionValues });
            } else {
              setFilters({});
            }
          }}
        />
      )}
    />
  );
}
