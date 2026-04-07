import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <h1 id="header">
      <img src={logo} alt="Investment calculator logo"></img>
      <p>Investment Calculator</p>
    </h1>
  );
}
