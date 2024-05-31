import { Injectable } from '@nestjs/common';
import { CreateAirRightDto } from './dto/create-air-right.dto';
import { UpdateAirRightDto } from './dto/update-air-right.dto';
import axios from 'axios';

@Injectable()
export class AirRightsService {
  async findAll() {
    const options = {
      method: 'GET',
      url: 'https://api.parcllabs.com/v1/price_feed/5373892/price_feed',
      headers: {
        accept: 'application/json',
        Authorization: process.env.PARCL_API_KEY,
      },
    };

    const res = await axios.request(options);
    return res.data;
  }

  async searchMarkets(city: string) {
    const options = {
      method: 'GET',
      url: `https://api.parcllabs.com/v1/search/markets?query=${city}`,
      headers: {
        accept: 'application/json',
        Authorization: process.env.PARCL_API_KEY,
      },
    };

    const res = await axios.request(options);
    const filteredItems = res.data.items.filter(
      (item) => item.pricefeed_market === 1,
    );

    const result = filteredItems.map((item) => ({
      name: item.name,
      region: item.region,
      state_abbreviation: item.state_abbreviation,
      geoid: item.geoid,
    }));

    return result;
  }

  async searchMarket(geoid: string) {
    const options = {
      method: 'GET',
      url: `https://api.parcllabs.com/v1/search/markets?geoid=${geoid}`,
      headers: {
        accept: 'application/json',
        Authorization: process.env.PARCL_API_KEY,
      },
    };

    const res = await axios.request(options);
    const filteredItems = res.data.items.filter(
      (item) => item.pricefeed_market === 1,
    );

    const result = filteredItems.map((item) => ({
      parcel_id: item.parcl_id,
      name: item.name,
      region: item.region,
      state_abbreviation: item.state_abbreviation,
      geoid: item.geoid,
    }));

    return result;
  }

  async findPrice(data, geoid) {
    const geoidIndex = data.findIndex((item) => item.geoid === geoid);

    if (geoidIndex !== -1) {
      const parcelId = data[geoidIndex].parcel_id;
      const options = {
        method: 'GET',
        url: `https://api.parcllabs.com/v1/price_feed/${parcelId}/price_feed?limit=5`,
        headers: {
          accept: 'application/json',
          Authorization: process.env.PARCL_API_KEY,
        },
      };
      const res = await axios.request(options);
      const pricePerSquareFoot = res.data.items;

      // Use the first price_feed value
      const firstPriceFeed = pricePerSquareFoot[0].price_feed;
      const fifteenPercent = firstPriceFeed * 0.15;
      const today = new Date().toISOString().split('T')[0];
      // return parseFloat(fifteenPercent.toFixed(4));

      return { date: today, price: parseFloat(fifteenPercent.toFixed(4)) };
    }
  }
}
