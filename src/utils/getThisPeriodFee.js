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
    const eleFee =
      (electricFee / periodElectrickWh) *
        (currentElectricMeter - lastElectricMeter) +
      publicElectricFee / 2;
    return eleFee + (gasFee + waterFee) / 2;
  },
);
