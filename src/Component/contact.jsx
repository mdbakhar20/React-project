const Contact = function () {
    return (
        <div className="contact-page">
            <section className="contact-hero">
                <div>
                    <p className="eyebrow">Get in touch</p>
                    <h1>Contact Food Express</h1>
                    <p className="contact-intro">
                        Have a question about an order, want to partner with us, or need help choosing the perfect meal?
                        Our support team is ready to help you fast and friendly.
                    </p>
                </div>
                <div className="contact-info-card">
                    <h2>Contact details</h2>
                    <p>Phone: <strong>+1 (555) 123-4567</strong></p>
                    <p>Email: <strong>support@foodexpress.com</strong></p>
                    <p>Hours: <strong>Mon–Sun, 8am–10pm</strong></p>
                    <div className="contact-badges">
                        <span>24/7 Support</span>
                        <span>Order tracking</span>
                        <span>Fast response</span>
                    </div>
                </div>
            </section>
            <section className="contact-form-area">
                <div className="form-card">
                    <h2>Send us a message</h2>
                    <form>
                        <label>
                            Name
                            <input type="text" placeholder="Your name" />
                        </label>
                        <label>
                            Email
                            <input type="email" placeholder="you@example.com" />
                        </label>
                        <label>
                            Message
                            <textarea placeholder="Tell us how we can help" rows="5"></textarea>
                        </label>
                        <button type="submit">Send message</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contact;