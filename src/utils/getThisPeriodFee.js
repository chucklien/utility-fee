// @format
import { curry } from 'ramda';

export const getThisPeriodFee = curry(
  (
    lastElectricMeter,
    currentElectricMeter,
    periodElectrickWh,
    electricFee,
    publicElectricFee,
    gasFee,
    waterFee,
  ) => {
    const eleFeePerkwh = Number(electricFee) / Number(periodElectrickWh);
    const usedEle = Number(currentElectricMeter) - Number(lastElectricMeter);
    const eleFee = eleFeePerkwh * usedEle + publicElectricFee / 2;
    return {
      total: (eleFee + (Number(gasFee) + Number(waterFee)) / 2).toFixed(2),
      eleFeePerkwh,
    };
  },
);
