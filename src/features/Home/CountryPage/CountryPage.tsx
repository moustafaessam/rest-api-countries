import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import {
  CountryDetailsContainer,
  CountryDetailsImage,
  CountryDetailsTextContainer,
  CountryInfoContainer,
  CountryInfoContainerFirstParagraph,
  CountryInfoContainerSecondParagraph,
  CountryInfoValueSpan,
  CountryPageBackButton,
  CountryPageBackIcon,
  CountryPageButtonText,
  CountryPageMainContainer,
  CountryPageName,
  CountrySingleInfoLine,
  BorderCountriesContainer,
  BorderCountryButton,
  BorderHeader,
  BorderCountryButtonContainer,
} from "./CountryPage.styles";
import NotFound from "../../../pages/NotFound/NotFound";

type CountryData = {
  name: {
    common: string;
    nativeName?: Record<string, { common: string }>;
  };
  population: number;
  region: string;
  subregion?: string;
  capital?: string[];
  tld?: string[];
  currencies?: Record<string, { name: string; symbol: string }>;
  languages?: Record<string, string>;
  borders?: string[];
  flags: { png: string };
};

type CountryPageProps = {
  isDark: boolean;
};

export default function CountryPage({ isDark }: CountryPageProps) {
  const { country } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery<CountryData[]>({
    queryKey: ["country", country],
    queryFn: async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${country}`
      );
      if (!response.ok) throw new Error("Invalid country");
      return response.json();
    },
  });

  if (isLoading) return <div>Loading...</div>;

  if (error || !data || data.length === 0) return <NotFound />;

  const countryData = data[0];

  return (
    <CountryPageMainContainer>
      <CountryPageBackButton onClick={() => navigate(-1)}>
        <CountryPageBackIcon
          src={isDark ? "/images/back-dark.svg" : "/images/back-light.svg"}
        />
        <CountryPageButtonText>Back</CountryPageButtonText>
      </CountryPageBackButton>
      <CountryDetailsContainer>
        <CountryDetailsImage src={countryData.flags.png} />
        <CountryDetailsTextContainer>
          <CountryPageName>{countryData.name.common}</CountryPageName>
          <CountryInfoContainer>
            <CountryInfoContainerFirstParagraph>
              <CountrySingleInfoLine>
                Native Name:{" "}
                <CountryInfoValueSpan>
                  {countryData.name.nativeName
                    ? Object.values(countryData.name.nativeName)[0]?.common
                    : "Unknown"}
                </CountryInfoValueSpan>
              </CountrySingleInfoLine>
              <CountrySingleInfoLine>
                Population:{" "}
                <CountryInfoValueSpan>
                  {countryData.population.toLocaleString()}
                </CountryInfoValueSpan>
              </CountrySingleInfoLine>
              <CountrySingleInfoLine>
                Region:{" "}
                <CountryInfoValueSpan>
                  {countryData.region}
                </CountryInfoValueSpan>
              </CountrySingleInfoLine>
              <CountrySingleInfoLine>
                Sub Region:{" "}
                <CountryInfoValueSpan>
                  {countryData.subregion || "N/A"}
                </CountryInfoValueSpan>
              </CountrySingleInfoLine>
              <CountrySingleInfoLine>
                Capital:{" "}
                <CountryInfoValueSpan>
                  {countryData.capital?.join(", ") || "N/A"}
                </CountryInfoValueSpan>
              </CountrySingleInfoLine>
            </CountryInfoContainerFirstParagraph>
            <CountryInfoContainerSecondParagraph>
              <CountrySingleInfoLine>
                Top Level Domain:{" "}
                <CountryInfoValueSpan>
                  {countryData.tld?.join(", ") || "N/A"}
                </CountryInfoValueSpan>
              </CountrySingleInfoLine>
              <CountrySingleInfoLine>
                Currencies:{" "}
                <CountryInfoValueSpan>
                  {countryData.currencies
                    ? Object.values(countryData.currencies)
                        .map(
                          (currency) => `${currency.name} (${currency.symbol})`
                        )
                        .join(", ")
                    : "N/A"}
                </CountryInfoValueSpan>
              </CountrySingleInfoLine>
              <CountrySingleInfoLine>
                Languages:
                <CountryInfoValueSpan>
                  {countryData.languages
                    ? Object.values(countryData.languages).join(", ")
                    : "N/A"}
                </CountryInfoValueSpan>
              </CountrySingleInfoLine>
            </CountryInfoContainerSecondParagraph>
          </CountryInfoContainer>
          {countryData.borders && countryData.borders.length > 0 && (
            <BorderCountriesContainer>
              <BorderHeader>Border Countries:</BorderHeader>
              <BorderCountryButtonContainer>
                {countryData.borders.map((border) => (
                  <BorderCountryButton key={border}>
                    {border}
                  </BorderCountryButton>
                ))}
              </BorderCountryButtonContainer>
            </BorderCountriesContainer>
          )}
        </CountryDetailsTextContainer>
      </CountryDetailsContainer>
    </CountryPageMainContainer>
  );
}
