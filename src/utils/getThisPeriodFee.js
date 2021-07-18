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
    const subEleFee = eleFeePerkwh * usedEle;
    const eleFee = subEleFee + publicElectricFee / 2;
    const gasAndWaterFee = (Number(gasFee) + Number(waterFee)) / 2;
    return {
      total: (eleFee + gasAndWaterFee).toFixed(2),
      subEleFee,
      eleFee,
      eleFeePerkwh,
      usedEle,
      gasAndWaterFee,
    };
  },
);
