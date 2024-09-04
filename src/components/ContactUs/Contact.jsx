import "./contact.css"

export default function Contact() {
    function handleClick(){
        alert("Feedback Sent!")
    }
    return(
        <>
        <section id="contact">
    <div class="contact-container">
        <h2>Contact Us</h2>
        <form  class="contact-form">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />

            <label for="feedback">Feedback:</label>
            <textarea id="feedback" name="feedback" placeholder="Your Feedback" rows="5" required></textarea>

            <button onClick={handleClick} class="submit-btn">Send</button>
        </form>
    </div>
</section>

        </>
    )
}