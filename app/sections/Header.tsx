const Header = () => {
  return (
    <header className="relative flex items-center justify-between p-6 font-medium md:px-10 lg:py-6 xl:mx-auto xl:max-w-[1600px]">
      <span>Logo</span>
      <ul className="absolute flex w-full items-center justify-center gap-6">
        <li><a href="#process">Process</a></li>
        <li><a href="#business">Business</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#case-studies">Case Studies</a></li>
      </ul>
      <button>Contact Us</button>
    </header>
  );
};

export default Header;
