const About = () => {
  return (
    <section id="about" className="py-5 bg-base-200 mb-20">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-5xl lg:text-6xl font-bold text-yellow-200 mb-6">
          About
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <hr className="border-2 col-span-1 lg:mr-5" />
          <p className="text-lg lg:text-xl col-span-1 lg:col-span-11 font-light">
            Hi, I'm Moriyam Mohona, a passionate
            <span className="text-yellow-200"> Front-End Developer</span> with a
            keen eye for design and user experience. I specialize in creating
            responsive, user-friendly websites that provide seamless
            interactions. With a strong foundation in HTML, CSS, JavaScript, and
            modern frameworks, I strive to bring ideas to life through clean,
            efficient code and innovative solutions. My goal is to continuously
            learn and grow in the ever-evolving field of web development,
            delivering high-quality work that exceeds expectations.
            <span className="text-yellow-200">
              {" "}
              Let's build something amazing together!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
