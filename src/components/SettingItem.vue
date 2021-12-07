<template>
  <div class="settings__content">
    <div @click="item.show = !item.show" class="myCardHeaderBlock">
      <div class="settings__login">
        <div class="settings__login-title">
          Изменить: <span>{{item.rus}}</span>
        </div>
        <div class="settings__login-arrow">
          <svg-arrow-up
              :style="{transform:!item.show ? 'rotateX(180deg)' :'rotateX(0deg)' }"
              class="commission"
          />
        </div>
      </div>
    </div>
    <transition v-if="item.show" name="show-side">
      <div >
        <div >
          <div class="settings__activeLogin">
            текущее значение: <span>{{ item.name === 'birthday' ? user[item.name].substring(0, 10) : user[item.name] }}</span>
          </div>
          <div>
            <div class="settings__login_edit" v-if="item.type != 'radio'">
              <input
                  v-model="item.value"
                  placeholder="Введите новое значение"
                  name="item.name"
                  :type="item.type"
                  id="item.name"
                  required
              >
            </div>
            <div class="settings__radio" v-if="item.type == 'radio'">
              <div class="settings__radio_item">
                <label for="female">Ж</label>
                <input class="input__radio"
                  v-model="item.value"
                  value='Ж'
                  name="item.name"
                  :type="item.type"
                  id='female'
                  required
                >
              </div>
              <div class="settings__radio_item">
                <label for="male">М</label>
                <input class="input__radio"
                  v-model="item.value"
                  value='М'
                  name="item.name"
                  :type="item.type"
                  id='male'
                  required
                >
              </div>
            </div>
          </div>
        </div>
        <div >
          <div class="button__wrapper" >
            <button
                type="button"
                @click="change"
            >
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import SvgArrowUp from '../svg/SvgArrowUp';
import { mapGetters } from "vuex";
export default {
  name: "SettingItem",
  components: { SvgArrowUp },
  data: () => ({}),
  props: {
    item: { type: Object, default: () => ({}) }
  },
  methods:{
    async change() {
      await this.$store.dispatch("updateUser", { id: this.user.id, newParam: { [this.item.name]: this.item.value }});
    }
  },
  computed: {
    ...mapGetters({ user: "user_getter" })
  },
}
</script>

<style scoped>
  .setting__title{
    text-align: center;
    padding: 20px;
  }
  .settings__login-title{
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #555555;
    padding: 10px;
  }
  .settings__login-title span{
    font-weight: 600;
    color: #142533;
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
    padding: 15px;
    font-size: 18px;
  }
  .settings__activeLogin span{
    font-weight: 600;
    color: #00b0e0;
  }
  .settings__login_edit{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .settings__radio{
    display: flex;
    justify-content: center;
  }
 .settings__radio_item{
    margin: 0 20px;
  }
 input {
    padding: 10px;
    margin: 10px;
    max-width: 350px;
    width: 100%;
  }
  .input__radio {
    padding: initial;
    margin: initial;
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
    margin: 10px 0;
  }
  button:hover{
    cursor: pointer;
    background: #c7b299;
    border-color: #c7b299;
    transition: 2s;
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
