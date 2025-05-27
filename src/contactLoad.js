function contactLoad(){
    const content = document.getElementById("content");
    content.textContent = ""; // Clear existing content
    content.removeAttribute("class"); // Remove any existing class
    content.classList.add("contact-content"); // Add a new class for styling
    content.innerHTML = `
        <div>
            <h1>Contact Us</h1>
            <p>We would love to hear from you!</p>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                
                <button type="submit">Send</button>
            </form>
        </div>`;

}
export { contactLoad };
