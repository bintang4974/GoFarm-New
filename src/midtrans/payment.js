import axios from "axios";
import { HEADER_MIDTRANS, URL_MIDTRANS } from "./config";
// import { API_TIMEOUT, HEADER_MIDTRANS, URL_MIDTRANS } from "./config";

export const snapTransactions = async (data) => {
    try {
        const response = await axios({
            method: "post",
            url: URL_MIDTRANS + "transactions",
            headers: HEADER_MIDTRANS,
            data: data,
            // timeout: API_TIMEOUT,
        });
        return response.data;
    } catch (error) {
        console.error("Error in snapTransactions:", error);
        throw error;
    }
};
