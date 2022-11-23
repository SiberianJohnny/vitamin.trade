import axios from "axios";
import { supplementsSlice } from "./SupplementsSlice";

export const fetchSupplements = async (dispatch) => {
  try {
    dispatch(supplementsSlice.actions.supplementsFetching());
    const response = await axios.get(
      "https://api.vitamin.trade/SupplementsList",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: "ers45bsGH^)()Hhj",
        },
      }
    );
    dispatch(
      supplementsSlice.actions.supplementsFetchingSuccess(
        response.data.SupplementsList
      )
    );
  } catch (e) {
    dispatch(supplementsSlice.actions.supplementsFetchingError(e.message));
  }
};
