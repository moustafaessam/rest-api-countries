import { useQuery } from "@tanstack/react-query";
import {
  CountryDetailsContainer,
  CountryDetailSpanLabel,
  CountryLabelContainer,
  CountryLabelDetailsBox,
  CountryLabelImage,
  CountryName,
} from "./CountryLabel.styles";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useFormContext } from "react-hook-form";

type Country = {
  name: { common: string };
  flags: { png: string };
  population: number;
  capital: string;
  region: string;
};

const fetchData = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default function CountryLabel() {
  // Hooks
  const [filters] = useSearchParams();
  const navigate = useNavigate();
  const { watch } = useFormContext();
  const { data, isLoading } = useQuery<Country[], Error>({
    queryKey: ["countries"],
    queryFn: fetchData,
  });

  const regions = filters.getAll("region");
  const watchedSearch = (watch("search") || "").toLowerCase().trim();
  // Combine region and search filtering in one step
  const displayedData = data?.filter((country) => {
    const regionMatch =
      regions.length > 0
        ? regions.some((filterRegion) =>
            country.region.toLowerCase().startsWith(filterRegion.toLowerCase())
          )
        : true;

    const searchMatch = watchedSearch
      ? country.name.common.toLowerCase().startsWith(watchedSearch)
      : true;

    return regionMatch && searchMatch;
  });

  // functions
  function handleNavigate(location: string) {
    navigate(location);
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {displayedData?.map((country) => (
        <CountryLabelContainer
          key={country.name.common}
          onClick={() => handleNavigate(country.name.common)}
        >
          <CountryLabelImage
            src={country.flags.png}
            alt={country.name.common}
          />
          <CountryLabelDetailsBox>
            <CountryName>{country.name.common}</CountryName>
            <CountryDetailsContainer>
              <div>
                Population:{" "}
                <CountryDetailSpanLabel>
                  {country.population.toLocaleString()}
                </CountryDetailSpanLabel>
              </div>
              <div>
                Region:{" "}
                <CountryDetailSpanLabel>
                  {country.region}
                </CountryDetailSpanLabel>
              </div>
              <div>
                Capital:{" "}
                <CountryDetailSpanLabel>
                  {country.capital}
                </CountryDetailSpanLabel>
              </div>
            </CountryDetailsContainer>
          </CountryLabelDetailsBox>
        </CountryLabelContainer>
      ))}
    </>
  );
}
