---
layout: single
title: "Contact"
permalink: /contact/
---

<form id="contact-form" action="https://formspree.io/f/abcd1234" method="POST">
  <label>نام شما (الزامی)
    <input type="text" name="name" required>
  </label>

  <label>ایمیل شما (الزامی)
    <input type="email" name="email" required>
  </label>

  <label>موضوع
    <input type="text" name="subject">
  </label>

  <label>پیام شما
    <textarea name="message" rows="7" required></textarea>
  </label>

  <!-- اختیاری: موضوع ایمیل ارسالی -->
  <input type="hidden" name="_subject" value="New message from mahnaztd.github.io">
  <!-- ضد اسپم -->
  <input type="text" name="_gotcha" style="display:none">

  <button type="submit">ارسال</button>
  <p id="status" style="margin-top:.75rem;"></p>
</form>

<script>
  const form = document.getElementById('contact-form');
  const status = document.getElementById('status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = 'در حال ارسال...';

    const data = new FormData(form);
    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        status.textContent = 'پیام شما با موفقیت ارسال شد. سپاس!';
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        status.textContent = (json && json.errors && json.errors[0] && json.errors[0].message)
          || 'ارسال ناموفق بود. لطفاً دوباره تلاش کنید.';
      }
    } catch (err) {
      status.textContent = 'خطای شبکه. دوباره تلاش کنید.';
    }
  });
</script>
