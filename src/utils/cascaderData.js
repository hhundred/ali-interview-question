import provinces from "china-division/dist/provinces.json";
import cities from "china-division/dist/cities.json";
import areas from "china-division/dist/areas.json";

areas.forEach((item) => {
  const curCity = cities.find((city) => city.code == item.cityCode);
  if (curCity) {
    curCity.children = curCity.children || [];
    curCity.children.push({
      label: item.name,
      value: item.code,
    });
  }
});

cities.forEach((item) => {
  const curProvinces = provinces.find((p) => p.code == item.provinceCode);
  if (curProvinces) {
    curProvinces.children = curProvinces.children || [];
    curProvinces.children.push({
      label: item.name,
      value: item.code,
      children: item.children,
    });
  }
});

const options = provinces.map((item) => ({
  label: item.name,
  value: item.code,
  children: item.children,
}));

export default options;
