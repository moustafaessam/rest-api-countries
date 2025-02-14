import CountriesLabel from "../../features/Home/CountriesLabel/CountriesLabel";
import Filter from "../../features/Home/Filter/Filter";
import { FormProvider, useForm } from "react-hook-form";

type HomeProps = {
  isDark: boolean;
};

export default function Home({ isDark }: HomeProps) {
  const form = useForm();
  return (
    <FormProvider {...form}>
      <Filter isDark={isDark} />
      <CountriesLabel />
    </FormProvider>
  );
}
