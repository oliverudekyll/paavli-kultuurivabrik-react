import Button from "./Button.js";

function Header() {
  return (
    <header className="header">
      <div className="header__socials">
        <Button
          value={
            <img
              className="socials__icon"
              src="../assets/images/instagram-icon.svg"
            ></img>
          }
          href={"#"}
          ariaLabel={""}
        />
        <Button
          value={
            <img
              className="socials__icon"
              src="../assets/images/facebook-icon.svg"
            ></img>
          }
          href={"#"}
          ariaLabel={""}
        />
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
