import Button from "./Button.js";

const navItems = [
  { value: "Programm", href: "#", ariaLabel: "" },
  { value: "Galerii", href: "#", ariaLabel: "" },
  { value: "Ligipääsetavus", href: "#", ariaLabel: "" },
  { value: "Rent", href: "#", ariaLabel: "" },
  { value: "Saun", href: "#", ariaLabel: "" },
  { value: "Turvalisus", href: "#", ariaLabel: "" },
  { value: "Ajalugu", href: "#", ariaLabel: "" },
  { value: "Väärtused", href: "#", ariaLabel: "" },
  { value: "Paavli.CLUB & .LIVE", href: "#", ariaLabel: "" },
  { value: "Dreamscape", href: "#", ariaLabel: "" },
  { value: "Liveurope", href: "#", ariaLabel: "" },
  { value: "Partnerid", href: "#", ariaLabel: "" },
];

function NavBar() {
  return (
    <nav className="footer__nav-bar">
      {navItems.map(({ item, value, href, ariaLabel }) => (
        <Button
          key={value.split(" ").join("-").toLowerCase()}
          value={value}
          href={href}
          ariaLabel={ariaLabel}
        />
      ))}
    </nav>
  );
}

export default NavBar;
