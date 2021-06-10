import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import CallIcon from "@material-ui/icons/Call";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InfoIcon from "@material-ui/icons/Info";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export function AboutUs() {
  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <h1 className="text-dark" style={{ fontFamily: "cursive" }}>
        <InfoIcon></InfoIcon> About Us
      </h1>
      <p className="m-3" style={{ textAlign: "justify" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut illo
        id in repudiandae cum eius repellat dolorem totam ea, autem laboriosam
        velit, exercitationem earum provident culpa modi molestias. Deleniti
        quas ut sequi quam iure in, quis voluptatem tempora facilis, quae
        officia aliquam sapiente cum, accusantium nostrum laborum quidem! Quia
        molestiae saepe sunt soluta eum, accusantium, aliquam adipisci fugit
        necessitatibus incidunt maxime consequuntur ipsa ullam nostrum! Impedit
        dolore quidem veniam consequatur reiciendis rem similique corrupti? Odit
        veniam veritatis praesentium aspernatur vero reiciendis consequatur
        esse, provident dicta maiores, quasi harum est eum error nobis corrupti.
        Recusandae quia ex, aliquam fuga sed delectus explicabo molestias quod
        veritatis voluptatibus nihil culpa ad, perferendis ducimus nesciunt
        molestiae alias voluptates aliquid magni laudantium? Cumque perspiciatis
        est deleniti laboriosam ea asperiores rerum minima illum, architecto
        ipsam veritatis quaerat adipisci magnam assumenda. Sit deserunt incidunt
        quam architecto placeat unde quidem earum! Ea repudiandae numquam
        voluptates, sequi nobis natus fuga accusamus asperiores delectus ad est.
        Harum tenetur porro itaque obcaecati beatae soluta quia accusamus
        quaerat? Autem nesciunt minima necessitatibus culpa sit praesentium
        velit ut maxime qui eius laborum quidem doloremque sed ullam eveniet,
        provident aperiam voluptates alias. Eius eos labore nulla necessitatibus
        nemo numquam veritatis! Aut, nihil tenetur.
      </p>

      <div className="m-2">
        {" "}
        <h2>Contact us</h2>
        <div>
          <MailIcon></MailIcon>
          <strong>Email:</strong> financialrating@outlook.com
        </div>
        <div>
          <CallIcon></CallIcon>
          <strong>Contact:</strong> +91 84444499663
        </div>
        <div>
          <WhatsAppIcon></WhatsAppIcon>
          <strong>WhatsApp</strong> +91 8444441236
        </div>
        <div>
          <a href="https://www.facebook.com/" target="_blank" className="">
            <FacebookIcon></FacebookIcon>
          </a>
          <a href="https://www.twitter.com/" target="_blank" className="">
            <TwitterIcon></TwitterIcon>
          </a>
          <a href="https://www.linkedin.com/" target="_blank" className="">
            <LinkedInIcon></LinkedInIcon>
          </a>
        </div>
      </div>
    </div>
  );
}
