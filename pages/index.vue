<script setup lang="ts">
// import { Dropdown } from "flowbite-react";
</script>

<template>

<!--  <div class="container-fluid">-->
<!--    <h1 class="text-6xl dark:text-white font-semibold text-sky-400">2023</h1>-->
<!--    <p class="mt-4 text-9xl dark:text-white font-bold text-gray-600">FancyWeb</p>-->
<!--  </div>-->
  <div class="bg-success-subtle py-5">
    <div class="container text-center bg-white" style="border-radius: 20px;">

      <div class="row">
        <div class="col-12 col-lg-4">
          <img class="w-100" src="/Logo.jpg" alt="">
        </div>
        <div class="col-12 col-lg-8 d-flex justify-content-center align-items-center">
          <p style="font-size: 5rem" class="text-success align-middle" >愈富環保企業社</p>
        </div>
      </div>


      <SepticTankBacteria/>
      <div class="row">

        <div class="col-3">
          <img src="/septic_tank_bacteria/LINE_ALBUM_化糞池菌相_240122_11.jpg" style="border-radius: 30px;object-fit: cover;" class="p-3 w-100" alt="">
        </div>
        <div class="col-3 d-flex justify-content-center align-items-center">
          <img src="/septic_tank_bacteria/LINE_ALBUM_化糞池菌相_240122_14.jpg" style="border-radius: 30px;object-fit: cover;" class="p-3 w-100" alt="">
        </div>
        <div class="col-3 d-flex justify-content-center align-items-center">
          <img src="/septic_tank_bacteria/LINE_ALBUM_化糞池菌相_240122_46.jpg" style="border-radius: 30px;" class="p-3 w-100" alt="">
        </div>
        <div class="col-3 d-flex justify-content-center align-items-center">
          <img src="/septic_tank_bacteria/LINE_ALBUM_化糞池菌相_240122_49.jpg" style="border-radius: 30px;" class="p-3 w-100" alt="">
        </div>
      </div>
<!--      <div class="row">-->
<!--        <div class="col-3 p-3">-->
<!--          <div class="card" style="width: 18rem;">-->
<!--            <img src="https://picsum.photos/200/200?random=1" class="card-img-top" alt="...">-->
<!--            <div class="card-body">-->
<!--              <h5 class="card-title">證照1</h5>-->
<!--&lt;!&ndash;              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>&ndash;&gt;-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-3">-->

<!--        </div>-->
<!--        <div class="col-3">-->

<!--        </div>-->
<!--        <div class="col-3 p-3">-->
<!--          <div class="card " style="width: 18rem;">-->
<!--            <img src="https://picsum.photos/200/200?random=2" class="card-img-top" alt="...">-->
<!--            <div class="card-body">-->
<!--              <h5 class="card-title">證照2</h5>-->
<!--&lt;!&ndash;              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>&ndash;&gt;-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
      <div class="row">
        <div class="col-12 col-lg-4">
          <div class="embed-responsive embed-responsive-16by9">
            <video class="embed-responsive-item w-100 rounded" controls>
              <source src="/video/727605640.571123.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="embed-responsive embed-responsive-16by9 w-100">
            <video class="embed-responsive-item w-100 rounded" controls>
              <source src="/video/727605640.740348.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="embed-responsive embed-responsive-16by9 w-100">
            <video class="embed-responsive-item w-100 rounded" controls>
              <source src="/video/727605640.888858.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <img src="/水刀_2.jpg" style="border-radius: 30px;" class="p-3 w-100" alt="">
        </div>
        <div class="col-6">
          <img src="/水刀_1.jpg" style="border-radius: 30px;object-fit: cover;" class="p-3 w-100" alt="">
        </div>
        <div class="col-6 d-flex justify-content-center align-items-center">
          <img src="/水刀_2.jpg" style="border-radius: 30px;object-fit: cover;" class="p-3 w-100" alt="">
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <img src="/抽水肥_1.jpg" style="border-radius: 30px;" class="p-3 w-100" alt="">
        </div>
        <div class="col-3">
          <img src="/抽水肥_1.jpg" style="border-radius: 30px;" class="p-3 w-100" alt="">
        </div>
        <div class="col-3">
          <img src="/抽水肥_2.jpg" style="border-radius: 30px;" class="p-3 w-100" alt="">
        </div>
        <div class="col-3">
          <img src="/抽水肥_3.jpg" style="border-radius: 30px;" class="p-3 w-100" alt="">
        </div>
        <div class="col-3">
          <img src="/抽水肥_4.jpg" style="border-radius: 30px;" class="p-3 w-100" alt="">
        </div>
      </div>

      <div class="row">
        <div class="col-12 d-flex flex-column text-start">
<!--          <p  style="font-size: 2rem" class="ps-3" >地址: XXXXXXXXXXXXXXXXXXXX</p>-->
<!--          <p  style="font-size: 2rem" class="ps-3" >連略方式: XXXXXXXXXXXXXXXXXXXX</p>-->

        </div>
        <div class="col-3">
          <img src="/LineCode.png" class="w-100" alt="">
        </div>
<!--        <div class="col-3">-->
<!--          <img src="/LineCode.png" class="w-100" alt="">-->
<!--        </div>-->
<!--        <div class="col-3">-->
<!--          <img src="/LineCode.png" class="w-100" alt="">-->
<!--        </div>-->
<!--        <div class="col-3">-->
<!--          <img src="/LineCode.png" class="w-100" alt="">-->
<!--        </div>-->
      </div>

    </div>
  </div>



</template>

<style scoped>

</style>