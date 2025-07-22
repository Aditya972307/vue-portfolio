<template>
  <section class="contact">
    <div class="contact-info">
      <h2>Hubungi Saya</h2>
      <p>Silakan kirim pesan jika kamu memiliki pertanyaan.</p>
      <ul>
        <li><strong>Email:</strong> adityapratamaap452@hmail.com</li>
        <li><strong>Telepon:</strong> +62 812 3406 0439</li>
        <li><strong>Alamat:</strong> Malang, Jawa Timur</li>
      </ul>
    </div>

    <div class="contact-form">
      <form @submit.prevent="submitForm">
        <input type="text" placeholder="Nama" required />
        <input type="email" placeholder="Email" required />
        <textarea rows="5" placeholder="Pesan" required></textarea>
        <button type="submit" class="btn">Kirim Pesan</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  methods: {
    submitForm() {
      alert("Pesan berhasil dikirim!");
    }
  }
}
</script>

<style scoped>
.contact {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding: 63px 10%;
  background: linear-gradient(to bottom right, #f0f4f8, #d9e4f5);
}

.contact-info {
  flex: 1;
}

.contact-info h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 15px;
}

.contact-info p {
  color: #555;
  margin-bottom: 20px;
}

.contact-info ul {
  list-style: none;
  padding: 0;
}

.contact-info li {
  margin-bottom: 10px;
  color: #444;
  font-size: 1rem;
}

.contact-form {
  flex: 1;
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form input,
.contact-form textarea {
  padding: 12px 16px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: none;
  font-family: 'Poppins', sans-serif;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #6C9BCF;
  box-shadow: 0 0 5px rgba(108, 155, 207, 0.3);
}

.btn {
  background-color: #6C9BCF;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;
}

.btn:hover {
  background-color: #5588c8;
}

@media (max-width: 768px) {
  .contact {
    flex-direction: column;
    padding: 60px 5%;
  }

  .contact-form {
    width: 100%;
    margin-top: 30px;
  }
}
</style>