<template>
  <div class="header-top-row">
    <router-link to="/" class="logo">
      <svg
        class="logo-svg"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="64"
        height="56"
        viewBox="0 0 64 56"
      >
        <path
          d="M52.873,55.128 L58.125,45.939 L63.377,55.128 L52.873,55.128 ZM46.303,45.172 L56.811,45.172 L51.557,54.359 L46.303,45.172 ZM51.557,34.451 L56.811,43.641 L46.303,43.641 L51.557,34.451 ZM39.738,33.686 L50.243,33.686 L44.990,42.874 L39.738,33.686 ZM44.990,22.967 L50.243,32.154 L39.738,32.154 L44.990,22.967 ZM33.168,22.202 L43.676,22.202 L38.422,31.390 L33.168,22.202 ZM38.422,11.480 L43.676,20.671 L33.168,20.671 L38.422,11.480 ZM26.600,10.713 L37.108,10.713 L31.854,19.905 L26.600,10.713 ZM31.854,-0.006 L37.108,9.184 L26.600,9.184 L31.854,-0.006 ZM20.032,20.671 L25.286,11.480 L30.540,20.671 L20.032,20.671 ZM13.465,32.154 L18.718,22.967 L23.971,32.154 L13.465,32.154 ZM6.897,43.641 L12.151,34.451 L17.404,43.641 L6.897,43.641 ZM0.331,55.128 L5.582,45.939 L10.836,55.128 L0.331,55.128 ZM17.404,45.172 L12.151,54.359 L6.897,45.172 L17.404,45.172 ZM23.971,33.686 L18.718,42.874 L13.465,33.686 L23.971,33.686 ZM30.540,22.202 L25.286,31.390 L20.032,22.202 L30.540,22.202 ZM37.108,55.128 L26.600,55.128 L31.854,45.939 L37.108,55.128 ZM43.676,45.172 L38.422,54.359 L33.168,45.172 L43.676,45.172 ZM50.243,55.128 L39.738,55.128 L44.990,45.939 L50.243,55.128 Z"
        />
      </svg>
      <span class="logo-txt">GeekJob</span>
    </router-link>
    <div class="header-top-cnt">
      <input class="mobile-input-btn" id="mobile-btn" type="checkbox" />
      <label class="mobile-label-btn" for="mobile-btn">
        <div class="mobile-menu__icon"></div>
      </label>
      <ul class="main-header-list">
        <li class="main-header-list-item">
          <a href="#" class="list-item-link">Соискателям</a>
        </li>
        <li class="main-header-list-item">
          <a href="#" class="list-item-link">Работодателям</a>
        </li>
        <li class="main-header-list-item">
          <Account />
        </li>
      </ul>
      <div class="header-buttons-cnt">
        <router-link to="/profile">
          <form class="form-search" action="#" method="post">
            <label class="form-search-label" for="searchbox">
              <svg
                class="header-search-svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="32"
                height="32"
                viewBox="0 0 40 40"
              >
                <path
                  d="M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z"
                />
                <path
                  d="M16,17a5,5,0,1,1,5-5A5,5,0,0,1,16,17Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,16,9Z"
                />
                <path
                  d="M25.55,24a1,1,0,0,1-.74-.32A11.35,11.35,0,0,0,16.46,20h-.92a11.27,11.27,0,0,0-7.85,3.16,1,1,0,0,1-1.38-1.44A13.24,13.24,0,0,1,15.54,18h.92a13.39,13.39,0,0,1,9.82,4.32A1,1,0,0,1,25.55,24Z"
                />
              </svg>
            </label>
          </form>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Account from "@components/Account.vue";

export default {
  name: "Header",
  components: { Account }
};
</script>

<style >
</style>