import axios from "axios";
import { useEffect, useState } from "react";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading", data: null, 
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(
          "https://v6.exchangerate-api.com/v6/76aff3f82713637c14f1c1da/latest/PLN"
        );

        setRatesData({
          state: "success",
          data: response.data,
          currencies: response.data.conversion_rates,
          apiDate: response.data.time_last_update_utc,
        });
      
      } catch {
        setRatesData({
          state: "error",
          data: null,
        });
      }
    };
    setTimeout(fetchRates, 1200);
  }, []);
  return ratesData;
};
