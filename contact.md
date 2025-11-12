---
layout: single
title: "Contact"
permalink: /contact/
---

<form action="https://formspree.io/f/REPLACE_WITH_YOUR_CODE" method="POST">
  <p>
    <label for="name">Your Name (required)</label><br>
    <input type="text" id="name" name="name" required style="width:100%">
  </p>

  <p>
    <label for="email">Your Email (required)</label><br>
    <input type="email" id="email" name="email" required style="width:100%">
  </p>

  <p>
    <label for="subject">Subject</label><br>
    <input type="text" id="subject" name="subject" style="width:100%">
  </p>

  <p>
    <label for="message">Your Message</label><br>
    <textarea id="message" name="message" rows="10" style="width:100%"></textarea>
  </p>

  <!-- anti-spam honeypot (hidden from users) -->
  <p style="display:none">
    <label>Leave this empty:
      <input type="text" name="_gotcha">
    </label>
  </p>

  <!-- Optional: redirect to a thank-you page after submit -->
  <!-- <input type="hidden" name="_next" value="/thanks/"> -->

  <button type="submit" style="padding:.6rem 1.2rem;background:#0aa0df;border:none;color:#fff;border-radius:3px">
    SEND
  </button>
</form>
