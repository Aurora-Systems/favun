import Bg from "./BgImg";

const Hero = () => (
  <section id="hero" className="hero-gradient text-white container p-0  mb-5 rounded text-center d-flex justify-content-center align-items-center " style={{...Bg("https://aurorasystems.sirv.com/2147626521.jpg"), height:"80vh"}}>
    <div className="opacity-bg h-100  d-flex justify-content-center align-items-center p-0 m-0  rounded">
        <div className=" p-4">

        <h1 className="display-1 fw-bold">Favun Advisory</h1>
        <h3>Empowering businesses in Zimbabwe
 and the region to thrive through
 innovative strategy, sustainable growth,
 and technological innovation</h3>
 <p>We deliver tailored solutions, leveraging local insights and global best practices, to drive growth acceleration and unlock your full potential.</p>
 <a href="#contact"><button className="rounded p-btn btn ">Get Started</button></a>
         </div>

    </div>
  </section>
);

export default Hero;