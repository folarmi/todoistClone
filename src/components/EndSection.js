import Button from "../base/Button";
import blackLogo from "../images/blackLogo.png";
import peace from "../images/peace.webp";

const EndSection = () => {
  return (
    <div style={{ backgroundColor: "#fff9f3" }} className="mt-16">
      <div className=" px-12 py-10 text-center lg:text-left lg:flex lg:flex-row-reverse">
        <section>
          <p className="text-3xl font-bold leading-10 lg:text-5xl lg:mt-28 lg:max-w-lg">
            Achieve peace of mind with Todoist
          </p>
          <div className="m-4">
            <Button content="Get it from Microsoft" />
          </div>
        </section>
        <section className="hidden lg:block lg:w-1/3 lg:-mt-28">
          <img src={peace} alt="peace" />
        </section>
      </div>

      <hr />

      <div className="lg:flex lg:justify-between">
        <section className="mt-16 mx-4" style={{ color: "fff9f3" }}>
          <div className="flex items-center">
            <img
              src={blackLogo}
              alt="blacklogo"
              className="w-8 h-8 mr-8 lg:hidden"
            />
            <p className="max-w-xs" style={{ maxWidth: "18rem" }}>
              Join millions of people who organize work and life with Todoist.
            </p>
          </div>
          <div className="flex"></div>
        </section>

        <section className="ml-20 mt-10 lg:flex ">
          <div>
            <ul className="text-base">
              <p className="uppercase text-sm mb-4">Features</p>
              <li className="mb-2">How it Works</li>
              <li className="mb-2">Premium</li>
              <li className="mb-2">For Teams</li>
              <li className="mb-2">Pricing</li>
              <li className="mb-2">Templates</li>
            </ul>
          </div>

          <div>
            <ul>
              <p className="uppercase text-sm mt-8 mb-4">Resources</p>
              <li className="mb-2">Download Apps</li>
              <li className="mb-2">Help Center</li>
              <li className="mb-2">Productivity Methods</li>
              <li className="mb-2">Refer a friend</li>
              <li className="mb-2">Integrations</li>
              <li className="mb-2">Channel Partners</li>
              <li>Developer API</li>
            </ul>
          </div>

          <div>
            <ul>
              <p className="uppercase text-sm mt-8 mb-4">Company</p>
              <li className="mb-2">About Us</li>
              <li className="mb-2">We are hiring!</li>
              <li className="mb-2">Blog</li>
              <li className="mb-2">Press</li>
              <li className="mb-2">Twist</li>
            </ul>
          </div>
        </section>
      </div>

      <footer className="flex p-4" style={{ backgroundColor: "#f2ece7" }}>
        <p className="text-sm mr-8">Security|Privacy|Terms</p>
        <p className="text-sm">© Doist Inc.</p>
      </footer>
    </div>
  );
};

export default EndSection;
