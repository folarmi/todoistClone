import Review from "../UIComponents/Review";
import { BsArrowRight } from "react-icons/bs";
// import Testimonials from "./Testimonials";
import task from "./../images/task.webp";
import mission from "./../images/mission.webp";
// import review from "./../images/.webp";
import { SectionWrapper } from "../layout/SectionWrapper";
// import { AiOutlineAmazon } from "react-icons/ai";
// import { AiFillFacebook } from "react-icons/ai";

const Details = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const imageUrl = windowWidth <= 650 ? phonebg : review;

  // useEffect(() => {
  //   const handleWindowResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleWindowResize);

  //   return () => {
  //     window.removeEventListener("resize", handleWindowResize);
  //   };
  // }, []);
  return (
    <div>
      <section
        className="text-center px-12 py-10 lg:flex lg:justify-between lg:text-left bgImage"
        // style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <img src="" alt="" />
        <Review
          name="Google Play"
          company="Editor's Choice"
          award=" 4.7 stars, 187K+ reviews"
        />

        <Review
          name="App Store"
          company="Featured app"
          award="4.8 stars, 30K+ reviews"
        />

        <Review
          name="The Verge"
          company="9/10"
          award="
“The best to-do list app
right now”"
        />
      </section>

      <SectionWrapper>
        <section className="mt-20 text-center lg:flex lg:text-left">
          <div>
            <p className="text-lg font-semibold max-w-2xl lg:text-2xl lg:font-bold lg:max-w-xs">
              Todoist has helped millions of people complete
            </p>
            <p className="text-4xl font-bold lg:text-6xl">
              over 1.5 billion tasks in 150+ million projects.
            </p>
          </div>

          <div>
            <img
              src={task}
              alt="task"
              className="m-4 rounded-2xl shadow-2xl lg:w-4/5"
            />

            <section>
              <div className="flex items-center mt-8">
                <BsArrowRight className="text-blue-500 mr-2" />
                <a
                  href="https://todoist.com/home"
                  className="text-blue-500 hover:underline"
                >
                  Learn more about the Todoist community
                </a>
              </div>
            </section>
          </div>
        </section>

        {/* <Testimonials /> */}

        <section className="mt-12 text-center lg:text-left lg:flex">
          <div>
            <p className="text-4xl font-bold leading-10 lg:text-6xl lg:max-w-xl">
              A task manager you can trust for life
            </p>
            <p className="leading-6 text-lg mt-4 lg:text-xl lg:max-w-lg">
              In the 14 years and 20 days that we’ve been building Todoist,
              we’ve never considered selling out or becoming acquired.
            </p>
            <p className="leading-6 text-lg mt-4 lg:text-xl lg:max-w-lg">
              Our team is committed to staying independent and earning your
              trust for as long as you need our apps.
            </p>
            <div className="flex items-center justify-center lg:justify-start mt-8">
              <BsArrowRight className="text-blue-500 mr-2" />
              <a
                href="https://todoist.com/home"
                className="text-blue-500 hover:underline"
              >
                Learn about our long-term mission
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/2">
            <img src={mission} alt="mission" className="lg:-mt-12" />
          </div>
        </section>
      </SectionWrapper>
    </div>
  );
};

export default Details;

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyC3iv-VZUYOKQ092Y0jrz6LSy-tjgjg2fA",
//     authDomain: "todoist-clone-f7025.firebaseapp.com",
//     projectId: "todoist-clone-f7025",
//     storageBucket: "todoist-clone-f7025.appspot.com",
//     messagingSenderId: "641102497963",
//     appId: "1:641102497963:web:d622160ca9e1e8b3090fee"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>
