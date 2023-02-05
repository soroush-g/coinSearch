import axios from 'axios';
import { create } from 'zustand';


const showStore = create((set) => ({
  graphData: [],

  fetchData: async (id) => {
    const [graphRes, dataRes] = await Promise.all([
      axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=115`),
      axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`)
    ]);

    const graphData = graphRes.data.prices.map(price => {
      const [timestamp, p] = price;
      const date = new Date(timestamp).toLocaleDateString('en-us');
      return {
          Date: date,
          Price: p,
          uv: 2390,
          pv: 3800,
          amt: 2500,
        };
    });
    console.log(dataRes);
    set({graphData})
  }
}))


export default showStore;