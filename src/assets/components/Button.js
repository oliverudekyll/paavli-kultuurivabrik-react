function Button({ value, href, ariaLabel }) {
  return (
    <a className="button" href={href} ariaLabel={ariaLabel}>
      {value}
    </a>
  );
}

export default Button;
