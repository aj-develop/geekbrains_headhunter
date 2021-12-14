<template>
  <div class="container">
    <header>
      <Header />
    </header>
    <main>
      <h2 class="cv__title">Резюме</h2>
      <div class="cv__content">
        <img v-if="user.photo_url" :src="user.photo_url" alt="user_photo" class="profile__img">
        <section class="cv__section">
          <h3>Контактные данные</h3>
          <p>
            <label>имя: </label>
            <input v-model="cv.first_name" class="profile__data" type="text"/>
          </p>
          <p>
            <label>фамилия: </label>
            <input v-model="cv.last_name" class="profile__data" type="text"/>
          </p>
          <p>
            <label>телефон: </label>
            <input v-model="cv.phone" class="profile__data" type="phone"/>
          </p>
          <p>
            <label>e-mail: </label>
            <input v-model="cv.email" class="profile__data" type="email"/>
          </p>
          <p>
            <label>город: </label>
            <input v-model="cv.city" class="profile__data" type="text"/>
          </p>
          <p>
            <label>адрес: </label>
            <input v-model="cv.address" class="profile__data" type="text"/>
          </p>
        </section>
        <section class="cv__section">
          <h3>Основная информация</h3>
          <p>
            <label>дата рождения: </label>
            <input v-model="cv.birthday" class="profile__data" type="date"/>
          </p>
          <div class="cv__section_item">
            <label>пол: </label>
            <div class="cv__radio">
              <div class="cv__radio_item">
                <label for="female">женский</label>
                <input class="cv__input"
                  v-model="cv.gender"
                  value='Ж'
                  type="radio"
                  id='female'
                />
              </div>
              <div class="cv__radio_item">
                <label for="male">мужской</label>
                <input class="cv__input"
                  v-model="cv.gender"
                  value='М'
                  type="radio"
                  id='male'
                />
              </div>
            </div>
          </div>
          <div class="cv__section_item">
            <label>опыт работы: </label>
            <div class="cv__radio">
              <div class="cv__radio_item">
                <label for="hasExperience">есть опыт</label>
                <input class="cv__input"
                  v-model="showExperience"
                  :value='true'
                  type="radio"
                  id='hasExperience'
                />
              </div>
              <div class="cv__radio_item">
                <label for="noExperience">нет опыта</label>
                <input class="cv__input"
                  v-model="showExperience"
                  :value='false'
                  type="radio"
                  id='noExperience'
                />
              </div>
            </div>
          </div>
        </section>
        <section class="cv__section" v-if="showExperience">
          <h3>Опыт работы</h3>
          <textarea v-model="cv.experience" class="cv__textarea"/>
        </section>
        <section class="cv__section">
          <h3>Специальность</h3>
          <p>
            <label>желаемая должность: </label>
            <input v-model="cv.profession" class="profile__data" type="text"/>
          </p>
        </section>
        <section class="cv__section">
          <h3>Образование</h3>
          <textarea v-model="cv.education" class="cv__textarea"/>
        </section>
        <section class="cv__section">
          <h3>Дополнительная информация</h3>
          <textarea v-model="cv.additionally" class="cv__textarea"/>
        </section>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@components/Header.vue";
import Footer from "@components/Footer.vue";
import { mapGetters } from "vuex";

export default {
  name: "CV",
  components: { Header, Footer },
  data() {
    return {
      cv: {
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        city: '',
        birthday: '',
        gender: '',
        address: '',
        profession: '',
        education: '',
        additionally: ''
      },
      showExperience: false
    }
  },
  mounted() {
    Object.keys(this.user).forEach((key) => {
      if (this.user[key] !== null) {
        this.cv[key] = this.user[key];
      }
    })
    this.cv.birthday = this.cv.birthday.substring(0, 10);
  },
  computed: {
    ...mapGetters({ user: "user_getter" }),
  },
};
</script>

<style >
.cv__title {
  font-family: "montserrat", "arial", sans-serif;
  text-align: center;
  padding: 10px;
  margin-top: 30px;
  color: #555555;
}

.cv__content {
  font-family: "montserrat", "arial", sans-serif;
  color: #8c8c8c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  padding: 20px 0;
}

.cv__content p {
  display: flex;
  justify-content: space-between;
  align-self: center;
  margin-bottom: 10px;
}

.profile__data {
  font-weight: 400;
  color: #555555;
}

.cv__button {
  width: 100px;
  padding: 5px 10px;
  margin-top: 20px;
  border: 0;
  border: 1px solid #0088ad;
  border-radius: 5px;
  color: #0088ad;
  font-family: "raleway", "arial", sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  align-self: center;
}

.cv__button:hover {
  background-color: #0088ad;
  color: white;
}

.profile__img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: center center;
  border: 1px solid #c7b299;
  border-radius: 5px;
  align-self: center;
  margin: 5px 5px 20px 5px;
}

.cv__section {
  align-self: center;
  width: 600px;
  margin: 20px 0;
  padding: 20px;
  background-color: #fbfaf8;
}

.cv__section h3{
  margin-bottom: 20px;
  font-size: 16px;
  color: #0088ad;
}

.cv__textarea {
  width: 100%;
  border: 1px solid #c7b299;
  border-radius: 3px;
  padding: 5px;
}

.cv__section input{
  border: 1px solid #c7b299;
  border-radius: 3px;
  padding: 5px;
  width: 50%;
}

.cv__section_item {
  display: flex;
  justify-content: space-between;
  align-self: center;
  margin: 30px 0;
}

.cv__radio {
  display: flex;
  width: 50%;
}

.cv__radio_item {
  margin-right: 30px;
  font-size: 16px;
}

</style>
