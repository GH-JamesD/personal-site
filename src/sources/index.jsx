import { pastWork } from "../src/data.js"
import { skills } from "../src/skills.js"

class AboutMe extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-thcol-night">
              Hi, I'm James!
              <br className="hidden lg:inline-block" />
              <span className="sm:text-2xl text-xl text-thcol-water"> A chem bio-turned-computer science student at UC Berkeley </span> 
            </h1>
            <p className="mb-8 leading-relaxed text-thcol-night">
              With a background in biochemistry and biomedical research, I started at Berkeley as a chemical biology major in fall 2020.
              After taking my first computer science class in spring 2021, I fell in love with the discipline and switched my major by fall. 
              Currently I am interested in the interdisciplinary applications of computer science and software engineering, particularly to solve problems related to 
              human health, drug disovery and development. In my freetime I enjoy cooking, baking, hiking, and building PC computers.
            </p>
            <div className="flex justify-center">
              <a href="#contact" className="inline-flex text-white hover:text-thcol-night hover:bg-thcol-lisea border-0 py-2 px-6 focus:outline-none bg-thcol-dasea rounded text-lg">
                Connect With Me
              </a>
              <a href="#past-work" className="ml-4 inline-flex text-white hover:bg-thcol-dasea hover:text-thcol-night border-0 py-2 px-6 focus:outline-none bg-thcol-water rounded text-lg">
                See My Past Work
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" src="personal-site/src/icon.png" alt="placeholder">
            </img>
          </div>
        </div>
      </section>
    )
  }
}

class PastWork extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section id="past-work" className="bg-thcol-water text-white">
        <div className="container px-5 py-10 mx-auto text-center lg:px-20">
          <div className="flex flex-col w-full mb-20">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto inline-block w-10 mb-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
            </svg>
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
              My Past Work
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Below is a compilation of work that I've done in the past, personally, for internships, and for school. 
              They span my time doing computer science as well as my time doing biochem, and everything in-between. 
              Mouse over each image below to see more information about the project and click for a link to the product, if available.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {pastWork.map((project) => (
              <a href={project.link} key={project.image} className="sm:w-1/2 w-100 lg:w-5/8 p-4">
                <div className="flex relative">
                  <img alt="project photo" className="absolute inset-0 w-full h-full object-cover object-center" src={project.image}/>
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-thcol-lisea bg-thcol-dasea opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm font-medium text-thcol-ligreen mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div> 
      </section>
    )
  }
}

class Skills extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section id="skills" className="bg-thcol-dasea text-thcol-ligreen">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 inline-block mb-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
              Skills and Technologies
            </h1>
            <p className="lg:w-3/4 xl:w-1/2 mx-auto leading-relaxed text-base">
              Here are various skills, languages, and technologies that I've studied both independently and in my time at Berkeley. 
              The items below are strictly computer science related. To see skills I gained while studying chemical biology, 
              please see past papers from the section above or click on my LinkedIn below.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {skills.map((skill) => (
              <div key={skill} className="p-2 sm:w-1/2 w-full">
                <div className="bg-thcol-lisea rounded flex p-4 h-full items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-white w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 7H7v6h6V7z" />
                    <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                  </svg>
                  <span className="title-font font-large text-thcol-night">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div> 
      </section>
    )
  }
}

class Contact extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section id="contact" className="bg-thcol-ligreen text-thcol-night">
        <div className="container flex items-center flex-col md:flex-row mx-auto px-10 pt-10">
          <div className="flex flex-col w-full mb-20 mr-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto inline-block w-10 mb-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <h1 className="mx-auto sm:text-4xl text-3xl font-medium title-font mb-4">
              Contact Me
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center">
              The best way to reach me is to direct message me on LinkedIn. 
              I'm happy to discuss anything related to my past work, skills, or employment.
              The icon will take you to my personal page.
            </p>
          </div>
          <a href="https://www.linkedin.com/in/jamesdeloye/" target="_blank" rel="noopener noreferrer" className="flex md:justify-start justify-center items-center md:mb-0 mb-10">
            <img src="personal-site/src/linkedin.png" className="w-1/4 pr-5"/>
            <h1 className="text-xl md:text-3xl "> 
              <u>
                LinkedIn 
              </u>
            </h1>
          </a>
        </div>
      </section> 
    )
  }
}


class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>
        <div className="bg-thcol-night text-thcol-dasea flex flex-row justify-between w-full">
           <p className="pl-2">
	          &copy;
            James DeLoye 2022
          </p>
          <p className="pr-2">
            Made by James DeLoye with React and Tailwind CSS
          </p>
        </div>
      </section>
    )
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className="bg-thcol-dasea sticky top-0 z-[100] border-b-2 border-thcol-night">
        <div className="flex flex-wrap px-10 p-5 flex-col md:flex-row items-center md:justify-between">
          <a href="#about" className="title-font font-medium text-white mb-4 md:mb-0 inline-flex items-center md:justify-self-start">
            <img className="object-scale-down object-center rounded h-24" src="personal-site/src/icon.png" alt="personal icon" />
            <h1 className="ml-3 text-3xl">
              James DeLoye
            </h1>
          </a>
          <nav className="md:ml-4 md:py-1 md:pl-4 flex flex-wrap text-thcol-night items-center justify-center text-2xl">
            <a href="#past-work" className="px-10 hover:text-thcol-ligreen">
              Past Work
            </a>
            <a href="#skills" className="md:border-x px-10 hover:text-thcol-ligreen">
              Skills
            </a>
            <a href="#contact" className="px-10 hover:text-thcol-ligreen">
              Contact
            </a>
          </nav>
        </div>
      </header>
    )
  }
}

ReactDOM.render(
  <main className="bg-thcol-ligreen">
    <Navbar />
    <AboutMe />
    <PastWork />
    <Skills />
    <Contact />
    <Footer />
  </main>,
  document.getElementById("root")
);