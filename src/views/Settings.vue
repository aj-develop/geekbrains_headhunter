<template>
  <div class="container">
    <header>
      <Header />
    </header>
    <main>
      <h2 class="setting__title">Настройки</h2>
      <div class="settings__content">
        <div @click="showBlock.login = !showBlock.login" class="myCardHeaderBlock">
          <div class="settings__login">
            <div class="settings__login-title mySectionTitle">
              Изменение Логина
            </div>
            <div class="settings__login-arrow">
              <svg-arrow-up
                  :style="{transform:!showBlock.login ? 'rotateX(180deg)' :'rotateX(0deg)' }"
                  class="commission"
              />
            </div>
          </div>
        </div>
        <transition v-if="showBlock.login" name="show-side">
          <div >
            <div >
              <div class="settings__activeLogin">
                Текущий логин: <b>{{ userLogin }}</b>
              </div>
              <div>
                <div class="settings__login_edit">
                  <input
                      v-model="settings.login"
                      placeholder="Введите новый логин"
                      name="login"
                      type="text"
                      id="login"
                      required
                  >
                </div>
              </div>
            </div>
            <div >
              <div class="button__wrapper" >
                <button
                    type="button"
                    @click="changeLogin"
                >
                  Сохранить логин
                </button>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <div class="settings__content">
        <div @click="showBlock.password = !showBlock.password" class="myCardHeaderBlock">
          <div class="settings__login">
            <div class="settings__login-title mySectionTitle">
              Изменение Пароля
            </div>
            <div class="settings__login-arrow">
              <svg-arrow-up
                  :style="{transform:!showBlock.login ? 'rotateX(180deg)' :'rotateX(0deg)' }"
                  class="commission"
              />
            </div>
          </div>
        </div>
        <transition v-if="showBlock.password" name="show-side">
          <div class="settings__password">
            <div >
              <div class="settings__password-item">
                <label for="oldPassword">Текущий пароль</label>
                <input
                    v-model="settings.old_password"
                    :type=passwordFiledType
                    id="oldPassword"
                    name="old_password"
                    required
                >
                <a href="#" :class="{'view' : !passwordShow, 'no__view': passwordShow}" @click="showPassword"></a>
              </div>
              <div class="settings__password-item">
                <label for="newPassword">Новый пароль</label>
                <input
                    v-model="settings.password"
                    :type=passwordNewFiledType
                    id="newPassword"
                    name="new_password"
                    required
                >
                <a href="#" :class="{'view' : !passwordShowNew, 'no__view': passwordShowNew}" @click="showPasswordNew"></a>
              </div>
              <div class="settings__password-item">
                <label for="confirmationNewPassword">Повторите пароль</label>
                <input
                    v-model="settings.password_confirmation"
                    :type=passwordConfirmFiledType
                    id="confirmationNewPassword"
                    name="password_confirmation"
                    required
                >
                <a href="#" :class="{'view' : !passwordShowConfirm, 'no__view': passwordShowConfirm}" @click="showPasswordConfirm"></a>
              </div>
            </div>
            <div class="col-12 text-center">
              <button
                  type="button"
                  @click="changePassword"
              >
                Сохранить пароль
              </button>
            </div>
          </div>
        </transition>
      </div>
      <div class="settings__content">
        <div @click="showBlock.email = !showBlock.email" class="myCardHeaderBlock">
          <div class="settings__login">
            <div class="settings__login-title mySectionTitle">
              Изменение Email
            </div>
            <div class="settings__login-arrow">
              <svg-arrow-up
                  :style="{transform:!showBlock.email ? 'rotateX(180deg)' :'rotateX(0deg)' }"
                  class="commission"
              />
            </div>
          </div>
        </div>
        <transition v-if="showBlock.email" name="show-side">
          <div >
            <div >
              <div class="settings__activeLogin">
                Текущий email: <b>asb@mail.ru</b>
              </div>
              <div>
                <div class="settings__login_edit">
                  <input
                      v-model="settings.email"
                      placeholder="Введите новый email"
                      name="login"
                      type="text"
                      id="email"
                      required
                  >
                </div>
              </div>
            </div>
            <div >
              <div class="button__wrapper" >
                <button
                    type="button"
                    @click="changeEmail"
                >
                  Сохранить email
                </button>
              </div>
            </div>
          </div>
        </transition>
      </div>

    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@components/Header.vue";
import Footer from "@components/Footer.vue";
import SvgArrowUp from '../svg/SvgArrowUp';
import {mapGetters} from "vuex";
export default {
  name: "Settings",
  components: { Header, Footer,SvgArrowUp },
  data: () => ({
    showBlock: {
      login: false,
      password: false,
      email: false
    },
    settings: {
      login: '',
      old_password: '',
      password: '',
      password_confirmation: '',
      email: ''
    },
    passwordFiledType: 'password',
    passwordNewFiledType: 'password',
    passwordConfirmFiledType: 'password',
    passwordShow: false,
    passwordShowNew: false,
    passwordShowConfirm: false,
  }),
  computed: {
    ...mapGetters({ userLogin: "userLogin_getter" }),
  },
  methods:{
    changeEmail() {
      console.log('меняем email')
    },
    changeLogin() {
      console.log('меняем login')
    },
    changePassword() {
      console.log('меняем password')
    },
    showPassword() {
      if(this.passwordFiledType === 'password') {
        this.passwordFiledType = 'text'
        this.passwordShow = true;

      } else {
        this.passwordFiledType = 'password'
        this.passwordShow = false;
      }
    } ,
    showPasswordNew() {
      if(this.passwordNewFiledType === 'password') {
        this.passwordNewFiledType = 'text'
        this.passwordShowNew = true;

      } else {
        this.passwordNewFiledType = 'password'
        this.passwordShowNew = false;
      }
    } ,
    showPasswordConfirm() {
      if(this.passwordConfirmFiledType === 'password') {
        this.passwordConfirmFiledType = 'text'
        this.passwordShowConfirm = true;
      } else {
        this.passwordConfirmFiledType = 'password'
        this.passwordShowConfirm = false;
      }
    }
  }
}
</script>

<style scoped>
  .setting__title{
    text-align: center;
    padding: 20px;
  }
  .mySectionTitle{
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: #142533;
    padding: 10px;
  }
  .myCardHeaderBlock{
    background-color: #f1f1f1 !important;
  }
  .settings__content{
    padding: 10px 40px;
  }
  .settings__login{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }
  .settings__activeLogin{
    text-align: center;
    padding: 5px;
    font-size: 20px;
  }
  .settings__login_edit{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
 input {
    padding: 10px;
    margin: 10px;
    max-width: 350px;
    width: 100%;
  }
  .button__wrapper{
    text-align: center;
  }
  button{
    padding: 10px;
    background: #555555;
    color: #fff;
    outline: none;
    border: none;
  }
  button:hover{
    cursor: pointer;
    background: #c7b299;
    border-color: #c7b299;
    transition: 2s;
  }
  .settings__password{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 10px;
  }
  .settings__password-item{
    position: relative;
  }
  .view{
    position: absolute;
    top: 38px;
    right: -15px;
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url(https://snipp.ru/demo/495/view.svg) 0 0 no-repeat;
  }
   .no__view {
     position: absolute;
     top: 38px;
     right: -15px;
     display: inline-block;
     width: 20px;
     height: 20px;
    background: url(https://snipp.ru/demo/495/no-view.svg) 0 0 no-repeat;
  }
</style>
