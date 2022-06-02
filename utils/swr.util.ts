import axios from "axios";

export const swrFetch = (url: string, token?: string) => {
	return axios.get(url, { headers: { Authorization: token ? token : '' } }).then((res) => res.data);
};

