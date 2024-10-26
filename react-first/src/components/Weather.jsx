export const Weather = () => {
  let temp = 25;

  if (temp < 15) {
    return <h1>It's cold Outside</h1>;
  } else if (temp >= 25 && temp <= 25) {
    return <h1>It's nice outside</h1>;
  } else if (temp > 25) {
    return <h1>It's hot outside</h1>;
  }
};
