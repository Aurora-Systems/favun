import Bg from "./BgImg";

const About = () => {
    return (
        <section id="about" className="mb-5 text-center container">
            <div className=''>
                <h1 className="fw-bold display-2">About Favun Advisory</h1>
                <p> Your trusted partner for innovative business solutions in
                    Zimbabwe and the surrounding region</p>
                <div className="row mb-3">
                    <div className="col-sm rounded" style={{ ...Bg("https://aurorasystems.sirv.com/2147626425.jpg") }}>

                    </div>
                    <div className="col-sm text-start">
                        <h3>
                            Who We Are
                        </h3>
                        <p >Favun Advisory is a management consulting firm offering innovative
                            solutions to clients across various sectors in Zimbabwe and the
                            surrounding region. We specialize in Strategy, Sustainability, and Innovation,
                            leveraging technology and research to drive growth acceleration.</p>
                        <p>
                            Our company empowers individuals, businesses, and communities through innovative
                            business solutions. We deliver tailored solutions, leveraging local insights
                            and global best practices, to drive growth acceleration and unlock your full potential.
                        </p>
                    </div>
                </div>
                <div className="row ">
                    <div className=" p_bg rounded p-5 mb-3 text-white">

                        <h3>Our Vision & Mission</h3>
                        <div className="mb-3">
                            <h5>Vision</h5>
                            <p>To become a leading and respected consulting firm in Zimbabwe and the surrounding region, known for innovation, excellence, and customer satisfaction.</p>
                        </div>
                        <div>
                            <h5>Mission</h5>
                            <p>To empower individuals, businesses, and communities through innovative
                                business solutions.</p>
                        </div>
                    </div>

                </div>
                <div className="row gap-3 mb-3 text-center">
                    <div className="col-sm p-5 p_bg text-white rounded">
                        <h5>Value Proposition</h5>
                        <p>Empowering businesses in Zimbabwe and the region to thrive through
                            innovative strategy, sustainable growth, and technological innovation. We
                            deliver tailored solutions, leveraging local insights and global best practices,
                            to drive growth acceleration and unlock your full potential.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
