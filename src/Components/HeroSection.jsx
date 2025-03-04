import React from 'react';
import '../App.css'; // Import your CSS file
import localImage from '../Assets/images/git.png'; // Adjust the path accordingly
import mongoDBImage from '../Assets/images/mongo-db.png';
import mySQLImage from '../Assets/images/mysql.png';
import nodeJSImage from '../Assets/images/nodejs.png';
import phpImage from '../Assets/images/php.png';
import typeScriptImage from '../Assets/images/typescript.png';
import vueImage from '../Assets/images/vue.png';
import tailwind from '../Assets/images/tailwind.png';
import dartImage from '../Assets/images/dart.png';
import javaScriptImage from '../Assets/images/javascript.png';
import angularJsImage from '../Assets/images/angularjs.png';
import cssImage from '../Assets/images/css.png';
import reactImage from '../Assets/images/pngwing.com (2).png';
import flutterImage from '../Assets/images/pngwing.com (3).png';
import pythonImage from '../Assets/images/pngwing.com (4).png';
import laravel from '../Assets/images/laravel-framework.png';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <h1>CODE YOUR VISION</h1>
                            <h2>Mastering the<br />Languages that<br />Shape the Digital<br />World</h2>
                            <p>
                                Don't settle for shaky foundations. We wield the sharpest tools in the software shed - Next.js, React.js, Python, Node.js, and more. Craft a digital empire that stands the test of time, pixel-perfect and ready to thrive. Let's build your breakthrough together.
                            </p>
                            <a href="#discover" className="btn btn-primary">Discover now!</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='row'>
                            <div className="col-lg-3"><div className="hero-image">
                                <img src={localImage} alt="Digital World" className="img-fluid" />
                            </div>
                            </div>
                            <div className="col-lg-3"><div className="hero-image">
                                <img src={mongoDBImage} alt="Digital World" className="img-fluid" />
                            </div>
                            </div>
                            <div className="col-lg-3"><div className="hero-image">
                                <img src={mySQLImage} alt="Digital World" className="img-fluid" />
                            </div>
                            </div>
                            <div className="col-lg-3"><div className="hero-image">
                                <img src={nodeJSImage} alt="Digital World" className="img-fluid" />
                            </div>
                            </div>



                        </div>
                        <div className='row'>
                            <div className="col-lg-3"><div className="hero-image">
                                <img src={phpImage} alt="Digital World" className="img-fluid" />
                            </div>
                            </div>
                            <div className="col-lg-3"><div className="hero-image">
                                <img src={typeScriptImage} alt="Digital World" className="img-fluid" />
                            </div>
                            </div>
                            <div className="col-lg-3"><div className="hero-image">
                                <img src={vueImage} alt="Digital World" className="img-fluid" />
                            </div>
                            </div>
                            <div className="col-lg-3"><div className="hero-image">
                                <img src={tailwind} alt="Digital World" className="img-fluid" />
                            </div>
                            </div>



                        </div>

                        <div className='row'>
                            <div className="col-lg-3"><div className="hero-image">
                                <img src={dartImage} alt="Digital World" className="img-fluid" />
                            </div>
                            </div>
                            <div className="col-lg-3"><div className="hero-image">
                                <img src={laravel} alt="Digital World" className="img-fluid" />
                            </div>
                            </div>
                            <div className="col-lg-3"><div className="hero-image">
                                <img src={javaScriptImage} alt="Digital World" className="img-fluid" />
                            </div>
                            </div>
                            <div className="col-lg-3"><div className="hero-image">
                                <img src={angularJsImage} alt="Digital World" className="img-fluid" />
                            </div>
                            </div>



                        </div>

                     <div className='row'>
                            <div className="col-lg-3"><div className="hero-image">
                                <img src={cssImage} alt="Digital World" className="img-fluid" />
                            </div>
                            </div>
                            <div className="col-lg-3"><div className="hero-image">
                                <img src={reactImage} alt="Digital World" className="img-fluid" />
                            </div>
                            </div>
                            <div className="col-lg-3"><div className="hero-image">
                                <img src={pythonImage} alt="Digital World" className="img-fluid" />
                            </div>
                            </div>
                            <div className="col-lg-3"><div className="hero-image">
                                <img src={flutterImage} alt="Digital World" className="img-fluid" />
                            </div>
                            </div>



                        </div>

                    

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;