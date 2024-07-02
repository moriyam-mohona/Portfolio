const About = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-6xl font-bold text-yellow-200 mb-6">About</h2>
        <div className="grid grid-cols-12 gap-5 ">
          <hr className="border-2 col-span-1 mr-5" />

          <p className="text-xl col-span-11 font-light">
            Hi, I'm Moriyam Mohona, a passionate{" "}
            <span className="text-yellow-200"> Front-End Developer</span> with a
            keen eye for design and user experience. I specialize in creating
            responsive, user-friendly websites that provide seamless
            interactions. With a strong foundation in HTML, CSS, JavaScript, and
            modern frameworks, I strive to bring ideas to life through clean,
            efficient code and innovative solutions. My goal is to continuously
            learn and grow in the ever-evolving field of web development,
            delivering high-quality work that exceeds expectations.{" "}
            <span className="text-yellow-200">
              Let's build something amazing together!
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
