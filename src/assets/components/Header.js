import Button from "./Button.js";

function Header() {
  return (
    <header className="header">
      <div className="header__socials">
        <Button value={"Instagram"} href={"#"} ariaLabel={""} />
        <Button value={"Facebook"} href={"#"} ariaLabel={""} />
      </div>
      <div className="header__languages">
        <Button value={"en"} href={"#"} ariaLabel={""} />
        <Button value={"en"} href={"#"} ariaLabel={""} />
        <Button value={"ru"} href={"#"} ariaLabel={""} />
      </div>
    </header>
  );
}

export default Header;
