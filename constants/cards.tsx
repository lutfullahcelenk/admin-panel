import {
  ColumnChart,
  LineChart,
  PieChart,
  RadarChart,
} from "../components/Charts";

export const cards = [
  {
    id: 0,
    title: "Lutfullah Plus",
    tag: "Sales",
    price: "24,780",
    percentage: "+49",
    chart: <LineChart />,
  },
  {
    id: 1,
    title: "Lutfullah Pro",
    tag: "Discount",
    price: "24,780",
    percentage: "-9",
    chart: <ColumnChart />,
  },
  {
    id: 2,
    title: "Lutfullah Plus",
    tag: "Cripto Currency",
    price: "24,780",
    percentage: "+13",
    chart: <PieChart />,
  },
  {
    id: 3,
    title: "Lutfullah Pro",
    tag: "Inflation",
    price: "24,780",
    percentage: "-57",
    chart: <RadarChart />,
  },
];
