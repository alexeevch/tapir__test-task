export const formatPrice = (num: number) => {
  const intl = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency: "RUB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  return intl.format(num);
};
