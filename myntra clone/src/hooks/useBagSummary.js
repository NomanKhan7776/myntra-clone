import { useSelector } from "react-redux";

const useBagSummary = () => {
  const bagItemLength = useSelector((store) => store.bag);
  const CONVENIENCE_FEES = bagItemLength.length === 0 ? 0 : 99;
  let totalMRP = 0;
  let totalDiscount = 0;
  bagItemLength.forEach((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  return {
    CONVENIENCE_FEES,
    totalMRP,
    totalDiscount,
    finalPayment,
    bagItemLength: bagItemLength.length,
  };
};

export default useBagSummary;
