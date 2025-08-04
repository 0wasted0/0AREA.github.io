// Basit animasyon ya da mesaj gösterimi
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mesajınız gönderildi! Ekibimiz size en kısa sürede ulaşacak.");
  this.reset();
});
