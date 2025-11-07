export default function Footer() {
  return (
    <footer className="bg-[#191919] w-full h-auto p-[50px_230px] ">
      <div className="footer_content">
        <div className="footer_content--title ">
          <span className="font-bold text-[23.53px]">Contact</span>
        </div>
        <div className="footer_content--description text-[#C5C5C5] text-[14.12px] pt-[34px]">
          Seasoned Full Stack Software Engineer with over 3 years of hands-on
          experience in designing and implementing robust, scalable, and
          innovative web solutions. Adept at leveraging a comprehensive skill
          set encompassing front-end and back-end technologies
        </div>
        <div className="footer_content--email flex gap-2 pt-[22px]">
          <img src="Email.svg" alt="Email icon" />
          <span className="text-[#8491A0] ">amoshal1997@gmail.com</span>
        </div>
        <div className="footer_content--contacts_link flex gap-5 pt-[41px]">
          <img src="instagram.svg" alt="Instagramm" />
          <img src="x.svg" alt="X" />
          <img src="youtube.svg" alt="YouTube" />
        </div>
      </div>
    </footer>
  );
}
