const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
ขอบคุณที่อ้วนตั้งใจรัก อ้วนใจดี อ้วนใจเย็นกับเค้าทุกอย่าง 
ขอบคุณที่ไม่ว่าเค้าจะไม่น่ารักขนาดไหน เค้าก็ยังมีตัวที่ยืนอยู่ข้างๆ 
เค้าแบบนี้เสมอ เดินข้างๆเค้าแบบนี้ไปนานๆ นะ เติบโตไปด้วยกัน 

เค้ารักตัวนะ 🤍
`;

// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});
