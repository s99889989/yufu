<script setup lang="ts">
const menuOpen = ref(false)
</script>

<template>
  <!-- Navbar -->
  <nav class="yu-navbar fixed-top">
    <div class="container d-flex align-items-center justify-content-between py-2">
      <a href="#" class="d-flex align-items-center text-decoration-none gap-2">
        <img style="width: 64px; height: 64px; border-radius: 50%; object-fit: cover;" src="/Logo.jpg" alt="愈富 Logo">
        <span class="yu-logo-text">愈富</span>
      </a>

      <!-- Desktop Nav -->
      <ul class="d-none d-lg-flex list-unstyled mb-0 gap-4 align-items-center">
        <li><a class="yu-nav-link" href="#1">證照資格</a></li>
        <li><a class="yu-nav-link" href="#2">抽水肥服務</a></li>
        <li><a class="yu-nav-link" href="#3">通管服務</a></li>
        <li><a class="yu-nav-link" href="#4">聯絡我們</a></li>
      </ul>

      <a href="tel:0905537307" class="d-none d-lg-flex yu-cta-btn align-items-center gap-2">
        <i class="fa-solid fa-phone"></i>
        立即預約
      </a>

      <!-- Mobile Toggle -->
      <button class="d-lg-none yu-hamburger border-0 bg-transparent" @click="menuOpen = !menuOpen">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div :class="['yu-mobile-menu', { open: menuOpen }]">
      <a href="#1" @click="menuOpen = false">證照資格</a>
      <a href="#2" @click="menuOpen = false">抽水肥服務</a>
      <a href="#3" @click="menuOpen = false">通管服務</a>
      <a href="#4" @click="menuOpen = false">聯絡我們</a>
      <a href="tel:0905537307" class="yu-mobile-cta">
        <i class="fa-solid fa-phone me-2"></i>0905-537307
      </a>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="yu-hero d-flex align-items-center">
    <div class="yu-hero-overlay"></div>
    <div class="container position-relative z-1">
      <div class="row align-items-center">
        <div class="col-lg-7">
          <p class="yu-hero-eyebrow">台東合法認證</p>
          <h1 class="yu-hero-title">專業水肥<br>清潔服務</h1>
          <p class="yu-hero-sub">合法持照・專業施作・服務台東地區<br>抽水肥・水刀通管・化糞池菌種馴養</p>
          <div class="d-flex gap-3 flex-wrap mt-4">
            <a href="#2" class="yu-btn-primary">了解服務項目</a>
            <a href="tel:0905537307" class="yu-btn-outline">
              <i class="fa-solid fa-phone me-2"></i>0905-537307
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 服務特色 -->
  <section class="yu-features py-5">
    <div class="container">
      <div class="row g-4">
        <div class="col-md-4">
          <div class="yu-feature-card">
            <div class="yu-feature-icon"><i class="fa-solid fa-certificate"></i></div>
            <h3>合法持照</h3>
            <p>擁有甲級廢棄物處理及甲級污水處理專責人員證照，依法合規施作</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="yu-feature-card">
            <div class="yu-feature-icon"><i class="fa-solid fa-shield-halved"></i></div>
            <h3>專業設備</h3>
            <p>高壓水刀通管機搭配專業噴頭，徹底疏通清洗管路至接近新品狀態</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="yu-feature-card">
            <div class="yu-feature-icon"><i class="fa-solid fa-clock"></i></div>
            <h3>迅速到位</h3>
            <p>服務台東地區，聯絡後迅速排班到場，解決您的緊急需求</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 證照 Section -->
  <section id="1" class="yu-section py-6">
    <div class="container">
      <div class="yu-section-header">
        <span class="yu-section-tag">CERTIFICATION</span>
        <h2 class="yu-section-title">合法認證資格</h2>
        <p class="yu-section-sub">持有政府核發之合法執照，保障您的權益</p>
      </div>
      <div class="row g-4 justify-content-center">
        <div class="col-6 col-md-4">
          <div class="yu-cert-card">
            <div class="yu-cert-img-wrap">
              <img src="/證照/LINE_ALBUM_證照_240314_5.jpg" alt="甲級廢棄物處理專責人員證照">
            </div>
            <p>甲級廢棄物處理<br>專責人員證照</p>
          </div>
        </div>
        <div class="col-6 col-md-4">
          <div class="yu-cert-card">
            <div class="yu-cert-img-wrap">
              <img src="/證照/LINE_ALBUM_證照_240314_1.jpg" alt="公民營事業廢棄物清除許可證">
            </div>
            <p>公民營事業廢棄物<br>清除許可證</p>
          </div>
        </div>
        <div class="col-6 col-md-4">
          <div class="yu-cert-card">
            <div class="yu-cert-img-wrap">
              <img src="/證照/LINE_ALBUM_證照_240314_3.jpg" alt="甲級污水處理專責人員證照">
            </div>
            <p>甲級污水處理<br>專責人員證照</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 抽水肥 Section -->
  <section id="2" class="yu-section yu-section-alt py-6">
    <div class="container">
      <div class="yu-section-header">
        <span class="yu-section-tag">SEPTIC SERVICE</span>
        <h2 class="yu-section-title">合法抽水肥</h2>
        <p class="yu-section-sub">完整的化糞池清潔流程，抽取後投放菌種，維持長效清潔</p>
      </div>

      <div class="yu-process-row row g-0 align-items-center justify-content-center">
        <div class="col-5 col-md-3">
          <div class="yu-process-card">
            <div class="yu-process-num">01</div>
            <img src="/抽水肥_2.jpg" alt="抽化糞池前">
            <p>抽化糞池前</p>
          </div>
        </div>
        <div class="col-2 col-md-1 text-center">
          <i class="fa-solid fa-chevron-right yu-arrow"></i>
        </div>
        <div class="col-5 col-md-3">
          <div class="yu-process-card">
            <div class="yu-process-num">02</div>
            <img src="/抽水肥_3.jpg" alt="抽化糞池後">
            <p>抽化糞池後</p>
          </div>
        </div>
        <div class="col-2 col-md-1 text-center">
          <i class="fa-solid fa-chevron-right yu-arrow"></i>
        </div>
        <div class="col-5 col-md-3">
          <div class="yu-process-card">
            <div class="yu-process-num">03</div>
            <img src="/抽水肥_3.jpg" alt="投放菌種">
            <p>投放菌種</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 通管 Section -->
  <section id="3" class="yu-section py-6">
    <div class="container">
      <div class="yu-section-header">
        <span class="yu-section-tag">PIPE CLEANING</span>
        <h2 class="yu-section-title">通管服務</h2>
      </div>

      <div class="row g-4 mb-5">
        <div class="col-md-6">
          <div class="yu-compare-card traditional">
            <div class="yu-compare-tag">傳統通管</div>
            <h4>機械疏通</h4>
            <p>使用各式接頭將管路內的污染物推出，但並無完全清洗管路，仍會有污垢殘留於管壁，且有再次堵塞的風險，特別無法處理因油質造成的堵塞。</p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="yu-compare-card water-jet">
            <div class="yu-compare-tag recommended">推薦</div>
            <h4><i class="fa-solid fa-droplet me-2"></i>水刀通管</h4>
            <p>利用高壓水槍搭配合適的噴頭清洗管路，徹底疏通，恢復管路內至接近新品狀態，效果顯著且持久。</p>
          </div>
        </div>
      </div>

      <div class="row g-4 justify-content-center">
        <div class="col-6 col-md-4">
          <div class="yu-media-card">
            <img src="/水刀_2.jpg" alt="清洗前">
            <div class="yu-media-label">清洗前</div>
          </div>
        </div>
        <div class="col-6 col-md-4">
          <div class="yu-media-card">
            <img src="/水刀_1.jpg" alt="清洗後">
            <div class="yu-media-label after">清洗後</div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="yu-media-card">
            <video controls>
              <source src="/video/727605640.571123.mp4" type="video/mp4">
            </video>
            <div class="yu-media-label after">施工影片</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer / 聯絡 -->
  <footer id="4" class="yu-footer">
    <div class="container">
      <div class="row align-items-start g-5">
        <div class="col-md-5">
          <div class="d-flex align-items-center gap-3 mb-3">
            <img style="width: 56px; height: 56px; border-radius: 50%; object-fit: cover;" src="/Logo.jpg" alt="">
            <span class="yu-footer-brand">愈富</span>
          </div>
          <p class="yu-footer-desc">台東地區合法持照水肥清潔服務，提供抽水肥、水刀通管、化糞池菌種馴養等專業服務。</p>
          <div class="d-flex gap-3 mt-3">
            <a href="https://www.facebook.com/profile.php?id=61557225605699" target="_blank" class="yu-social-link">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://lin.ee/NvHj9i7" target="_blank" class="yu-social-link line">
              <i class="fa-brands fa-line"></i>
            </a>
          </div>
        </div>
        <div class="col-md-7">
          <h5 class="yu-footer-title">聯絡資訊</h5>
          <ul class="list-unstyled yu-contact-list">
            <li>
              <i class="fa-solid fa-location-dot"></i>
              台東市豐榮路243巷1弄37號
            </li>
            <li>
              <i class="fa-solid fa-phone"></i>
              <a href="tel:0905537307">0905-537307</a>
            </li>
          </ul>
          <a href="tel:0905537307" class="yu-footer-cta mt-3 d-inline-flex align-items-center">
            <i class="fa-solid fa-phone me-2"></i>立即撥打預約
          </a>
        </div>
      </div>
      <div class="yu-footer-bottom">
        <p>© 2024 愈富環境清潔服務 · Proudly built with Daxton</p>
      </div>
    </div>
  </footer>
</template>

<style>
/* ===== CSS Variables (global so they work in scoped context) ===== */
:root {
  --green-dark: #1a3a2a;
  --green-main: #2d6a4f;
  --green-mid: #40916c;
  --green-light: #74c69d;
  --green-pale: #d8f3dc;
  --gold: #c9a84c;
  --text-dark: #1a1a1a;
  --text-mid: #4a5568;
  --text-light: #718096;
  --bg-off: #f8faf9;
  --white: #ffffff;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --shadow-sm: 0 2px 8px rgba(0,0,0,0.08);
  --shadow-md: 0 8px 24px rgba(0,0,0,0.1);
  --shadow-lg: 0 16px 48px rgba(0,0,0,0.12);
}
</style>

<style scoped>
/* ===== Base ===== */
* { box-sizing: border-box; }

/* ===== Navbar ===== */
.yu-navbar {
  background: rgba(255,255,255,0.97);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(45,106,79,0.1);
  box-shadow: 0 2px 16px rgba(0,0,0,0.06);
  z-index: 1000;
}
.yu-logo-text {
  font-size: 2rem;
  font-weight: 800;
  color: var(--green-main);
  letter-spacing: -0.5px;
  font-family: 'Noto Serif TC', serif;
}
.yu-nav-link {
  text-decoration: none;
  color: var(--text-dark);
  font-weight: 600;
  font-size: 0.95rem;
  padding: 6px 4px;
  border-bottom: 2px solid transparent;
  transition: color 0.2s, border-color 0.2s;
}
.yu-nav-link:hover {
  color: var(--green-main);
  border-bottom-color: var(--green-main);
}
.yu-cta-btn {
  background: var(--green-main);
  color: var(--white) !important;
  padding: 10px 20px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  transition: background 0.2s, transform 0.15s;
  gap: 8px;
}
.yu-cta-btn:hover {
  background: var(--green-dark);
  transform: translateY(-1px);
}

/* Hamburger */
.yu-hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 6px;
  cursor: pointer;
}
.yu-hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--green-dark);
  border-radius: 2px;
  transition: 0.2s;
}
.yu-mobile-menu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease;
  background: var(--white);
  border-top: 1px solid var(--green-pale);
}
.yu-mobile-menu.open { max-height: 400px; }
.yu-mobile-menu a {
  display: block;
  padding: 14px 24px;
  color: var(--text-dark);
  font-weight: 600;
  font-size: 1.05rem;
  text-decoration: none;
  border-bottom: 1px solid var(--green-pale);
  transition: background 0.15s;
}
.yu-mobile-menu a:hover { background: var(--green-pale); }
.yu-mobile-cta {
  background: var(--green-main) !important;
  color: var(--white) !important;
  font-weight: 700 !important;
}

/* ===== Hero ===== */
.yu-hero {
  min-height: 100vh;
  background:
      linear-gradient(135deg, rgba(26,58,42,0.88) 0%, rgba(45,106,79,0.72) 60%, rgba(116,198,157,0.3) 100%),
      url('/抽水肥_2.jpg') center/cover no-repeat;
  position: relative;
  padding-top: 80px;
}
.yu-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(26,58,42,0.6) 0%, transparent 100%);
}
.yu-hero-eyebrow {
  color: var(--green-light);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 12px;
}
.yu-hero-title {
  font-family: 'Noto Serif TC', serif;
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 900;
  color: var(--white);
  line-height: 1.1;
  margin-bottom: 20px;
  letter-spacing: -1px;
}
.yu-hero-sub {
  color: rgba(255,255,255,0.82);
  font-size: 1.05rem;
  line-height: 1.8;
}
.yu-btn-primary {
  display: inline-flex;
  align-items: center;
  background: #ffffff;
  color: var(--green-dark) !important;
  padding: 14px 28px;
  border-radius: 50px;
  font-weight: 800;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: 0 4px 16px rgba(0,0,0,0.2);
}
.yu-btn-primary:hover {
  background: var(--green-pale);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
}
.yu-btn-outline {
  display: inline-flex;
  align-items: center;
  background: transparent;
  color: var(--white) !important;
  padding: 13px 28px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  border: 2px solid rgba(255,255,255,0.6);
  transition: all 0.2s;
}
.yu-btn-outline:hover {
  background: rgba(255,255,255,0.12);
  border-color: white;
}

/* ===== Features ===== */
.yu-features {
  background: var(--green-dark);
  padding-top: 48px;
  padding-bottom: 48px;
}
.yu-feature-card {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: var(--radius-lg);
  padding: 32px 28px;
  height: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, background 0.2s;
}
.yu-feature-card:hover {
  transform: translateY(-4px);
  background: rgba(255,255,255,0.11);
}
.yu-feature-icon {
  width: 52px;
  height: 52px;
  background: var(--green-mid);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: white;
  margin-bottom: 18px;
}
.yu-feature-card h3 {
  color: var(--white);
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 10px;
}
.yu-feature-card p {
  color: rgba(255,255,255,0.65);
  font-size: 0.9rem;
  line-height: 1.7;
  margin: 0;
}

/* ===== Sections ===== */
.yu-section { background: var(--white); }
.yu-section-alt { background: var(--bg-off); }
.py-6 { padding-top: 80px; padding-bottom: 80px; }

.yu-section-header {
  text-align: center;
  margin-bottom: 48px;
}
.yu-section-tag {
  display: inline-block;
  background: var(--green-pale);
  color: var(--green-main);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 3px;
  padding: 5px 14px;
  border-radius: 50px;
  margin-bottom: 14px;
}
.yu-section-title {
  font-family: 'Noto Serif TC', serif;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 900;
  color: var(--text-dark);
  margin-bottom: 12px;
  letter-spacing: -0.5px;
}
.yu-section-sub {
  color: var(--text-light);
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0;
}

/* ===== 證照 ===== */
.yu-cert-card {
  text-align: center;
  padding: 8px;
}
.yu-cert-img-wrap {
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  margin-bottom: 14px;
  border: 3px solid var(--green-pale);
  aspect-ratio: 3/4;
}
.yu-cert-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}
.yu-cert-card:hover .yu-cert-img-wrap img {
  transform: scale(1.04);
}
.yu-cert-card p {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-mid);
  line-height: 1.5;
  margin: 0;
}

/* ===== 抽水肥 流程 ===== */
.yu-process-card {
  text-align: center;
  padding: 8px;
  position: relative;
}
.yu-process-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background: var(--green-main);
  color: white;
  font-size: 0.75rem;
  font-weight: 800;
  border-radius: 50%;
  margin-bottom: 10px;
}
.yu-process-card img {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  margin-bottom: 10px;
}
.yu-process-card p {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-mid);
  margin: 0;
}
.yu-arrow {
  font-size: 1.5rem;
  color: var(--green-light);
}

/* ===== 通管對比 ===== */
.yu-compare-card {
  border-radius: var(--radius-lg);
  padding: 28px;
  height: 100%;
  position: relative;
}
.yu-compare-card.traditional {
  background: #f1f5f9;
  border: 2px solid #e2e8f0;
}
.yu-compare-card.water-jet {
  background: linear-gradient(135deg, var(--green-pale) 0%, #b7e4c7 100%);
  border: 2px solid var(--green-light);
}
.yu-compare-tag {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 50px;
  margin-bottom: 14px;
  background: #e2e8f0;
  color: #64748b;
}
.yu-compare-tag.recommended {
  background: var(--green-main);
  color: white;
}
.yu-compare-card h4 {
  font-size: 1.2rem;
  font-weight: 800;
  margin-bottom: 10px;
  color: var(--text-dark);
}
.yu-compare-card p {
  font-size: 0.9rem;
  color: var(--text-mid);
  line-height: 1.8;
  margin: 0;
}

/* ===== Media Cards ===== */
.yu-media-card {
  position: relative;
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-md);
}
.yu-media-card img,
.yu-media-card video {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}
.yu-media-label {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background: rgba(0,0,0,0.55);
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 50px;
  backdrop-filter: blur(4px);
}
.yu-media-label.after {
  background: rgba(45,106,79,0.85);
}

/* Footer CTA button (green on dark bg) */
.yu-footer-cta {
  background: var(--green-mid);
  color: white !important;
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.2s;
}
.yu-footer-cta:hover {
  background: var(--green-light);
  color: var(--green-dark) !important;
}

/* ===== Footer ===== */
.yu-footer {
  background: var(--green-dark);
  color: rgba(255,255,255,0.85);
  padding: 64px 0 0;
}
.yu-footer-brand {
  font-family: 'Noto Serif TC', serif;
  font-size: 2rem;
  font-weight: 800;
  color: var(--white);
}
.yu-footer-desc {
  font-size: 0.88rem;
  color: rgba(255,255,255,0.6);
  line-height: 1.8;
  margin: 0;
}
.yu-social-link {
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  color: white;
  font-size: 1.1rem;
  text-decoration: none;
  transition: background 0.2s;
}
.yu-social-link:hover { background: rgba(255,255,255,0.22); }
.yu-social-link.line { background: #06c755; }
.yu-social-link.line:hover { background: #04a847; }
.yu-footer-title {
  color: var(--green-light);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 18px;
}
.yu-contact-list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255,255,255,0.07);
  font-size: 0.95rem;
}
.yu-contact-list li i {
  color: var(--green-light);
  margin-top: 3px;
  flex-shrink: 0;
}
.yu-contact-list a {
  color: rgba(255,255,255,0.85);
  text-decoration: none;
}
.yu-contact-list a:hover { color: var(--green-light); }
.yu-footer-bottom {
  margin-top: 48px;
  border-top: 1px solid rgba(255,255,255,0.08);
  padding: 20px 0;
  text-align: center;
}
.yu-footer-bottom p {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.35);
  margin: 0;
}

@media (max-width: 576px) {
  .yu-hero-title { font-size: 2.8rem; }
  .yu-media-card img, .yu-media-card video { height: 180px; }
}
</style>