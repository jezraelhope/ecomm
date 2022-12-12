import React from "react";
import './fakelinks.css'

const FakeLinks = () => {
    return (
        <div className="fake-links">
            <main>
                <section id="about-us">
                    <h2>About Us</h2>
                    <p>5 years ago, I stumbled upon a documentary uncovering the effects of fast fashion on the environment and the workers who make them. Prior to this moment, I never thought of the process of how my clothes were made. I was only thinking of how cheap it was and how it looked on me. After watching the documentary, I felt guilt and shame for only focusing on how my purchases impacted me.</p>
                    <p>Since then, I have made it my personal mission to educate myself on how my clothings are sourced and ensured that I am mindful and intentional with my purchases. This new mindset also taught me to be picky with not only just my clothing, but also with food, home supplies, etc.</p>
                    <p>I am hoping that in doing these, I influence others, specially the people around me into making better choices for themselves and for the environment.</p>
                </section>
                <section id="sustainability-mission">
                    <h2>Sustainability Mission</h2>
                    <p>NZM is committed to helping fashionable people realize that their love for fashion does not necessarily equate to not loving the planet. We make our products easily accessible and affordable for everyone</p>
                </section>
                <section id="FAQs">
                    <h2>FAQs</h2>
                    <div>
                        <p className="question">What is NZM?</p>
                        <p className="answer">NZM is a mock e-commerce website created to showcase the creator's React, Javascript, CSS, and other programming skills.</p>
                    </div>
                    <div>
                        <p className="question">Do you collect any information?</p>
                        <p className="answer">There's no information collected during the purchase process. NZM is a mock e-commerce website and the purchase process is not real. All items are not really for sale.</p>
                    </div>
                    <div>
                        <p className="question">What is the purchase process?</p>
                        <p className="answer">Enjoy going through the purchase process without actually buying anything. Just select items, add them to cart and checkout like you normally would, except there's no need to enter any information. Place your order and then see a successful purchase notification. None of it is real... Is this a fever dream? Could be... </p>
                    </div>
                    <div>
                        <p className="question">Can I try a coupon code?</p>
                        <p className="answer">To test the discount functionality, try these codes:<br/>
                            45% off -  hireme45 <br/>
                            20% off - newyear20 <br/>
                            25%off - unclerogerforever25
                        </p>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default FakeLinks