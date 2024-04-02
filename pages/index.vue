<script setup lang="ts">
// import { Dropdown } from "flowbite-react";

const to1 = () => {
  window.location.href = "#1";
}
const to2 = () => {
  window.location.href = "#2";
}
const to3 = () => {
  window.location.href = "#3";
}

</script>

<template>

  <nav class="navbar navbar-expand-lg border-1 fixed-top bg-white">
    <div class="container">
      <div class=" d-flex align-items-center">
        <img style="width: 90px; height: 90px" src="/Logo.jpg" alt="">
        <p style="font-size: 3.8rem" class="text-success m-0">愈富</p>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
<!--   化糞池菌種馴養   -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link fs-4 fw-bold" href="#1">證照</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fs-4 fw-bold" href="#2">抽水肥</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fs-4 fw-bold" href="#3">通管</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fs-4 fw-bold" href="#4">聯絡方式</a>
          </li>
        </ul>
        <form class="d-none d-lg-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="搜尋" aria-label="Search">
          <button class="btn btn-outline-success" style="width: 70px" type="submit">搜尋</button>
        </form>
      </div>
    </div>
  </nav>
<!-- 佔位 -->
  <div class=" d-md-none collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <p class="nav-link fs-4 fw-bold">抽水肥</p>
      </li>
      <li class="nav-item">
        <p class="nav-link fs-4 fw-bold">水刀通管</p>
      </li>

    </ul>
  </div>

  <div id="1" class="container text-center bg-white" >

    <div class="row" style="padding-top: 150px">
      <div class="col-12 d-flex">
        <p class=" fs-1 fw-semibold ms-1 ms-md-5">證照</p>
      </div>
      <div class="col-4">
        <img src="/證照/LINE_ALBUM_證照_240314_5.jpg" style="border-radius: 10px;object-fit: cover;" class=" w-75" alt="">
        <p style="font-size: 1.2rem">甲級廢棄物處理專責人員證照</p>
      </div>
      <div class="col-4">
        <img src="/證照/LINE_ALBUM_證照_240314_1.jpg" style="border-radius: 10px;object-fit: cover;" class=" w-75" alt="">
        <p style="font-size: 1.2rem">公民營事業廢棄物清除許可證</p>
      </div>
      <div class="col-4">
        <img src="/證照/LINE_ALBUM_證照_240314_3.jpg" style="border-radius: 10px;object-fit: cover;" class=" w-75" alt="">
        <p style="font-size: 1.2rem">甲級污水處理專責人員證照</p>
      </div>
    </div>

  </div>

  <div id="2" class="container text-center bg-white">

    <div class="col-12 d-flex" style="padding-top: 100px">
      <p class=" fs-1 fw-semibold ms-1 ms-md-5">合法抽水肥</p>
    </div>

    <div class="d-flex justify-content-center">

      <div class="col-3">

        <img src="/抽水肥_2.jpg" style="border-radius: 10px;object-fit: cover;" class="w-100" alt="">
        <p style="font-size: 1.2rem">抽化糞池前</p>
      </div>
      <div class="col-1 d-flex justify-content-center align-items-center">
        <i style="font-size: 2rem" class="fa-solid fa-arrow-right"></i>
      </div>
      <div class="col-3">
        <img src="/抽水肥_3.jpg" style="border-radius: 10px;object-fit: cover;" class="w-100" alt="">
        <p style="font-size: 1.2rem">抽化糞池後</p>
      </div>
      <div class="col-1 d-flex justify-content-center align-items-center">
        <i style="font-size: 2rem" class="fa-solid fa-arrow-right"></i>
      </div>
      <div class="col-3">
        <img src="/抽水肥_3.jpg" style="border-radius: 10px;object-fit: cover;" class="w-100" alt="">
        <p style="font-size: 1.2rem">投放菌種</p>
      </div>
    </div>

  </div>

  <div id="3" class="container bg-white">

    <div class="col-12 d-flex" style="padding-top: 100px">
      <p class=" fs-1 fw-semibold ms-1 ms-md-5">通管</p>
    </div>
<!--  row rounded m-1 border-1  border-body-tertiary -->

    <div class="m-1">
      <p style="font-size: 1.5rem">傳統通管</p>
      <p>傳統通管機使用各式接頭將管路內的污染物推出，但並無完全清洗管路，仍會有污染物垢</p>
      <p>殘留於管壁，且再次堵塞的風險，特別無法處理因油質堵住等管路。</p>
      <p style="font-size: 1.5rem">水刀通管</p>
      <p>水刀通管機則是利用高壓水槍搭配合適的噴頭清洗管路，以徹底疏通，恢復管路內至接近新品。</p>
    </div>

    <div class="row justify-content-center">

      <div class="col-4">
        <img src="/水刀_2.jpg" class="w-100 rounded pipe" alt="">
        <p style="font-size: 1.2rem">清洗前</p>
      </div>

      <div class="col-4">
        <img src="/水刀_1.jpg" class="w-100 rounded pipe" alt="">
        <p style="font-size: 1.2rem">清洗後</p>
      </div>

      <div class="col-4">
        <video class="embed-responsive-item rounded w-100 pipe" controls>
          <source src="/video/727605640.571123.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <p style="font-size: 1.2rem">清洗後</p>
      </div>
    </div>
  </div>





  <!-- style="height: 25rem"-->
  <div class="container text-center bg-white">
    <div id="4" class="row mb-5">
      <div class="col-12 d-flex flex-column text-start">

        <div class="d-flex mb-3">
          <a class="fa-brands fa-facebook fa-2x mx-1 text-decoration-none" target="_blank" href="https://www.facebook.com/profile.php?id=61557225605699"></a>
          <a class="fa-brands fa-line fa-2x mx-1 text-decoration-none" target="_blank" href="https://lin.ee/NvHj9i7"></a>
        </div>

        <p class="fs-5">地址: 台東市豐榮路243巷1弄37號</p>
        <p class="fs-5">聯絡電話: 0905-537307</p>

        <p class="fs-5">Proudly built with Daxton</p>
        <!--        <div class="d-flex">-->
        <!--          <img src="/LineCode.png" class="w-25" alt="">-->
        <!--          <img src="/qrcode/facebook.png" class="w-25" alt="">-->
        <!--        </div>-->
        <!--        <i class="fa-brands fa-square-facebook fa-2x"></i>-->

      </div>

    </div>
  </div>
  <!--  <div class="bg-success-subtle py-5">-->
  <!--    -->
  <!--  </div>-->
  <!--    <div class="flex">-->
  <!--      <p style="font-size: 1.5rem">與我們聯絡</p>-->
  <!--      <div>-->
  <!--        <i class="px-2 fa-xl fa-solid fa-arrow-down"></i>-->
  <!--        <i class="px-2 fa-xl fa-solid fa-arrow-down"></i>-->
  <!--        <i class="px-2 fa-xl fa-solid fa-arrow-down"></i>-->
  <!--        <i class="px-2 fa-xl fa-solid fa-arrow-down"></i>-->
  <!--        <i class="px-2 fa-xl fa-solid fa-arrow-down"></i>-->
  <!--        <i class="px-2 fa-xl fa-solid fa-arrow-down"></i>-->
  <!--        <i class="px-2 fa-xl fa-solid fa-arrow-down"></i>-->
  <!--        <i class="px-2 fa-xl fa-solid fa-arrow-down"></i>-->
  <!--        <i class="px-2 fa-xl fa-solid fa-arrow-down"></i>-->
  <!--        <i class="px-2 fa-xl fa-solid fa-arrow-down"></i>-->
  <!--        <i class="px-2 fa-xl fa-solid fa-arrow-down"></i>-->
  <!--        <i class="px-2 fa-xl fa-solid fa-arrow-down"></i>-->
  <!--        <i class="px-2 fa-xl fa-solid fa-arrow-down"></i>-->
  <!--      </div>-->
  <!--    </div>-->


</template>

<style scoped>
@media(min-width: 576px){
  .pipe {
    height: 25rem
  }

}
</style>