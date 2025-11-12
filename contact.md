---
layout: single
title: "Contact"
permalink: /contact/
---

<form action="https://formspree.io/f/abcd1234" method="POST">
  <label>Your Name (required)
    <input type="text" name="name" required>
  </label>

  <label>Your Email (required)
    <input type="email" name="email" required>
  </label>

  <label>Subject
    <input type="text" name="subject">
  </label>

  <label>Your Message
    <textarea name="message" rows="7" required></textarea>
  </label>

  <!-- Optional extras -->
  <input type="hidden" name="_subject" value="New message from mahnaztd.github.io">
  <input type="hidden" name="_redirect" value="https://mahnaztd.github.io/contact/thanks/">
  <input type="text" name="_gotcha" style="display:none"> <!-- honeypot -->

  <button type="submit">Send</button>
</form>
