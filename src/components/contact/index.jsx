import React from "react";
import Wrapper from "./style";
import { motion } from "framer-motion";
import { IoMdCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import { IoLocation } from "react-icons/io5";
import { toast } from "react-toastify";

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwoVQ7dFHkIvLNCCC-XBGhMjiDwg7odA32xEmv3fEemrvv3NmTAlC_axcIJz9Ehc2pZBg/exec";

const Contact = () => {

  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();
  const form = e.target;

  setLoading(true); // start loader

  const payload = new URLSearchParams();
  payload.append("source", "ContactForm");
  payload.append("firstName", form.firstName.value);
  payload.append("lastName", form.lastName.value);
  payload.append("email", form.email.value);
  payload.append("phone", form.phone.value);
  payload.append("subject", form.subject.value || "");
  payload.append("message", form.message.value);

  try {
    const res = await fetch(WEB_APP_URL, {
      method: "POST",
      body: payload,
    });

    const json = await res.json();

    if (json.status === "success") {
      toast.success("Message sent successfully!");
      form.reset();
    } else {
      toast.error("Server error! Please try again.");
    }
  } catch (err) {
    console.error(err);
    toast.error("Failed to send message!");
  } finally {
    setLoading(false); // stop loader
  }
};

  return (
    <Wrapper>
      <motion.div 
        className="contact-wrapper"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Reach Us
        </motion.h1>

        <motion.p 
          className="subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Any question or remarks? Just write us a message!
        </motion.p>

        <div className="contact-container">
          {/* Left Side Contact Info */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <h2>Contact Information</h2>
            <p>Say something to start a live chat!</p>

            <ul>
              <li><IoMdCall size={20}/> +91 9829058944, +91 9521465844</li>
              <li><HiMail size={20}/> gautamstoneart@gmail.com</li>
              <li><IoLocation size={20}/> 3113, Bhindo ka rasta, Chandpole bazar, Jaipur</li>
            </ul>

            <motion.div 
              className="social-icons"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <a 
                href="https://instagram.com/gautamstoneart" 
                target="_blank" 
                rel="noopener noreferrer"
                className="instagram"
              >
                <img src="https://res.cloudinary.com/dancodp27/image/upload/f_auto,q_auto/v1764750123/instagram_1_mg3hjm.png" alt="" />
              </a>
              <a 
                href="https://facebook.com/gautamstoneart" 
                target="_blank" 
                rel="noopener noreferrer"
                className="facebook"
              >
                <img src="https://res.cloudinary.com/dancodp27/image/upload/f_auto,q_auto/v1764750100/facebook_inv66f.png" alt="" />
              </a>
            </motion.div>

            {/* Map Embed */}
            <motion.div 
              className="map-container"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.3876433314736!2d75.80936617522475!3d26.922922776641183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db12eafa33983%3A0xebd70b839e915241!2sGautam%20Stone%20Art!5e0!3m2!1sen!2sin!4v1755974654188!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: "10px", marginTop: "20px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Right Side Contact Form */}
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input name="firstName" type="text" placeholder="John" required />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input name="lastName" type="text" placeholder="Doe" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input name="email" type="email" placeholder="youremail@gmail.com" required />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input name="phone" type="tel" placeholder="+91 0123456789" />
                </div>
              </div>

              <div className="form-group">
                <label>Select Subject?</label>
                <div className="radio-group">
                  <label><input type="radio" name="subject" value="General Inquiry" /> General Inquiry</label>
                  <label><input type="radio" name="subject" value="Support" /> Support</label>
                  <label><input type="radio" name="subject" value="Feedback" /> Feedback</label>
                  <label><input type="radio" name="subject" value="Other" /> Other</label>
                </div>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea name="message" placeholder="Write your message..." required></textarea>
              </div>

              <motion.button 
                type="submit" 
                disabled={loading}
                className={loading ? "btn-loading" : ""}
                whileHover={{ scale: loading ? 1 : 1.05 }}
                whileTap={{ scale: loading ? 1 : 0.95 }}
              >
                {loading ? (
                  <div className="spinner"></div>
                ) : (
                  "Send Message"
                )}
              </motion.button>

            </form>
          </motion.div>
        </div>
      </motion.div>
    </Wrapper>
  );
};

export default Contact;
