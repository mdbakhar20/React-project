 const About = function () {
    return (
        <div className="about-page">
            <section className="about-hero">
                <div>
                    <p className="eyebrow">About Food Express</p>
                    <h1>Fresh meals delivered fast</h1>
                    <p className="about-intro">
                        We connect you with the best restaurants nearby and deliver your favorite food
                        right to your door. Whether you are craving local classics or international cuisine,
                        Food Express brings the best of your city in one fast, friendly app.
                    </p>
                    <div className="about-highlights">
                        <div className="about-card">
                            <h3>Fast Delivery</h3>
                            <p>Hot food delivered with care in under 30 minutes.</p>
                        </div>
                        <div className="about-card">
                            <h3>Trusted Restaurants</h3>
                            <p>Hand-picked local restaurants with real customer favorites.</p>
                        </div>
                        <div className="about-card">
                            <h3>Easy Ordering</h3>
                            <p>Simple search, quick checkout and live order tracking.</p>
                        </div>
                    </div>
                </div>
                <div className="about-hero-image">
                    <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80" alt="delicious food delivery" />
                </div>
            </section>
            <section className="about-story">
                <div className="story-card">
                    <h2>Our mission</h2>
                    <p>
                        We believe great food should be easy to enjoy. Our mission is to support local restaurants,
                        delight hungry customers, and make every meal feel special. From busy weeknights to lazy weekends,
                        Food Express is here to bring joy to your table.
                    </p>
                </div>
                <div className="story-stats">
                    <div className="stat-box">
                        <strong>500+</strong>
                        <span>Restaurants</span>
                    </div>
                    <div className="stat-box">
                        <strong>20k+</strong>
                        <span>Happy orders</span>
                    </div>
                    <div className="stat-box">
                        <strong>4.9</strong>
                        <span>Average rating</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;