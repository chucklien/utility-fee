export const outputTemplate = data => `
#五樓用電度數 (${data?.currentElectricMeter}-上期${data?.lastElectricMeter}=${data?.usedEle}度)
------------------------------
流動電費$${data?.electricFee}
/總用度數${data?.periodElectrickWh}度
——————————————
每度約$${data?.eleFeePerkwh}
*五樓用度數${data?.usedEle}度
——————————————
小計$${data?.subEleFee}
+）分攤公共電費（$${data?.publicElectricFee}/2）
——————————————
Total電費 $${data?.eleFee}

瓦斯費加水費(${data?.gasFee}+${data?.waterFee})/2=${data?.gasAndWaterFee}
Total=${data?.total}
`;
