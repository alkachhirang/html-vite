import './style.css'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `

  <swiper-container style="--swiper-navigation-color: #fff; --swiper-pagination-color: #fff" class="mySwiper"
    speed="600" parallax="true" pagination="true" pagination-clickable="true" navigation="true">
    <div slot="container-start" class="parallax-bg"
      style="background-image: url(https://swiperjs.com/demos/images/nature-1.jpg);" data-swiper-parallax="-23%"></div>

    <swiper-slide class='d-flex justify-content-center align-items-center flex-column'>
      <div class="title" data-swiper-parallax="-300">Slide 1</div>
      <div class="text" data-swiper-parallax="-100">
        <p class='text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
          laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
          Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
          Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
          ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
          tincidunt ut libero. Aenean feugiat non eros quis feugiat.
        </p>
      </div>
    </swiper-slide>
    <swiper-slide class='d-flex justify-content-center align-items-center flex-column'>
      <div class="title" data-swiper-parallax="-300">Slide 2</div>
      <div class="text" data-swiper-parallax="-100">
        <p class='text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
          laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
          Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
          Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
          ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
          tincidunt ut libero. Aenean feugiat non eros quis feugiat.
        </p>
      </div>
    </swiper-slide>
    <swiper-slide class='d-flex justify-content-center align-items-center flex-column'>
      <div class="title" data-swiper-parallax="-300">Slide 3</div>
      <div class="text" data-swiper-parallax="-100">
        <p class='text-center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
          laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
          Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
          Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
          ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
          tincidunt ut libero. Aenean feugiat non eros quis feugiat.
        </p>
      </div>
    </swiper-slide>
  </swiper-container>


`

setupCounter(document.querySelector('#counter'))
