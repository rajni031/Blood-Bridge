import "../styles/AboutUs.css";

const About = () => {
  return (
    <div className="about-us-container">
      <header className="about-us-header">
        <h1>About Us</h1>
      </header>
      <section className="about-us-content">
        <p>
          Blood donation and transfusion service is an indispensable part of contemporary medicine and health care.
          Blood management has been recognized as a challenging task because of the life-threatening nature of blood products 
          and the meticulous administration due to its perishable nature & required timely processing and it also saves lives. 
          Such a great challenge has been considerably alleviated with the development of information and computer technology. 
          Blood Bridge is an integrated blood bank automation system. This web-based mechanism interconnects all the Blood Banks 
          of the State into a single network.
        </p>
        <p>
          Integrated Blood Bank MIS offers the acquisition, validation, storage, and circulation of various live data and 
          information electronically regarding blood donation and transfusion services. Such a system is able to assemble 
          heterogeneous data into legible reports to support decision-making from effective donor screening to optimal blood 
          dissemination in the field. Those electronic processes will help the public for easy access to the blood availability 
          status of blood banks on fingertips; so that one can place a requisition of a particular blood group in a nearby blood 
          bank (Especially rare groups) to save a valuable life.
        </p>
      </section>
      <div className="bg-light text-center py-5">
        <div className="container">
          <a className="btn btn-success" href="https://wa.me/9609010045">
            <i className="bi bi-whatsapp"></i> +91 9877015146
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <div className="row">
            <div className="col">
              <h5>BLOOD BRIDGE</h5>
              <p>
                Bloodana Chettiy, Developed in association with Sikkhatri
                Infotech Pvt.Ltd.
              </p>
              <p>
                <i className="bi bi-telephone-fill"></i> +8944880309,+91 9877015146 <br />
                <i className="bi bi-envelope-fill"></i> bloodbank@org <br />
                <i className="bi bi-geo-alt-fill"></i> Hoshiarpur, Punjab 146111
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
