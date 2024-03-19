export default function computeDate(date: Date) {
  const splittedDate = date.toLocaleDateString().split(".");

  return splittedDate
    .map((arr) =>
      arr.split("").reduce((total: string, cur: string) => {
        return Number.parseInt(total) + Number.parseInt(cur);
      })
    )
    .reduce((total, cur) => (total += cur));
}
