<template>
  <div class="container">
    <header>
      <Header />
    </header>
    <main>
      <div class="vacancy-page">
        <div class="page inner-cnt">
          <h2>PHP разработчик</h2>
          <h3>от 190 000 до 290 000 руб. до вычета налогов</h3>

          <div class="company">
            <div class="block-left">
              <div class="name-company">PeopleNET</div>
              <div class="text">Москва</div>
            </div>
            <div class="block-right">
              <a href="#">
                <img class="logo-image" src="https://hhcdn.ru/employer-logo/4046152.jpeg" alt="logo">
              </a>
            </div>
          </div>
          
          <p class="text margin-top-30">Требуемый опыт работы: 1–3 года</p>
          <p class="text">Полная занятость, удаленная работа</p>
          <p class="text">
            Возможно временное оформление: договор услуг, подряда, ГПХ,
            самозанятые, ИП
          </p>
          <div>
            <p class="text">
              <span class="font-bold">Ищем уверенного в своих навыках PHP разработчика.</span>

              <span class="font-bold">О проекте:</span><br />

              Разработка приложения с интернет-магазином, которым пользуются в
              разных регионах страны. <br />
              Подход к разработке, применяемые технологии, профессиональная
              команда и процессы сравнимы с <br />
              высокотехнологичными компаниями.
              Компания находиться на стыке Enterprise и интернет-витрин для
              покупателей. <br />

              <span class="font-bold">Обязанности:</span> <br />

              Хорошо и своевременно выполнять взятые на себя обязанности и
              задачи <br />
              Быть на связи в рабочее время <br />

              <span class="font-bold">Базовые требования:</span> <br />

              Опыт коммерческой разработки от 3х лет <br />
              Опыт работы в команде <br />
              Опыт работы с Jira, GitHub <br />
              Ваш уровень не ниже Middle/Middle+ <br />

              <span class="font-bold">Необходимые навыки:</span> <br />

              Знание PHP7+, MySQL , PHP фреймворков (например Symfony 4+) <br />

              Владение очередями (например RabbitMQ), REST API (OAuth, типы
              запросов, статусы ответа) и базами данных класса NoSQL (Redis,
              Memcached) <br />

              Умение запускать Docker-контейнеры <br />

              <span class="font-bold">Условия:</span> <br />

              Контракт с самозанятым или ИП <br />
              Выплаты 1 раз в месяц <br />
              Работа удаленно, 8 часовой рабочий день <br />
              Переработки оплачиваются дополнительно <br />
              Минимальный срок контракта 12 месяцев <br />
              Интервью на проектах оплачивается <br />
            </p>
            <p class="text margin-top-30">
              <i class="publish-info">Вакансия опубликована 1 декабря 2021 в Москве</i>
            </p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@components/Header.vue";
import Footer from "@components/Footer.vue";

export default {
  name: "Vacancy",
  components: { Header, Footer },
  mounted: function () {
    if (!this.$route.params.id) {
      this.$router.push({ path: "/" });
    }
  },
};
</script>
