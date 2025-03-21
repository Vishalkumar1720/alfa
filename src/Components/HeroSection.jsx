import React from 'react';
import './HeroSection.css'; 
import '../App.css'; 
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
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="hero-content">
                        <h1>CODE YOUR VISION</h1>
                        <h2>Mastering the<br />Languages that<br />Shape the Digital<br />World</h2>
                        <p>
                            Don't settle for shaky foundations. We wield the sharpest tools in the software shed...
                        </p>
                    </div>
                </div>
                
                <div className="col-lg-6" >
                    <div className="row g-2">  {/* Reduced gutter */}
                        {[
                            localImage, mongoDBImage, mySQLImage, nodeJSImage,
                            phpImage, typeScriptImage, vueImage, tailwind,
                            dartImage, laravel, javaScriptImage, angularJsImage,
                            cssImage, reactImage, pythonImage, flutterImage
                        ].map((img, index) => (
                            <div key={index} className="col-3">  {/* Always 4 columns */}
                                <div className="hero-image">
                                    <img src={img} alt="Tech logo" className="img-fluid" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default HeroSection;