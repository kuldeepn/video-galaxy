const FormatViewCount = (viewCount) => {
  const formatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    maximumFractionDigits: 2,
  });
  return formatter.format(viewCount);
};

export default FormatViewCount;
