<template>
  <ion-slides ref="slider" class="slides" pager="true" :options="slideOpts">
    <ion-slide>
      <SlideContent
        v-bind:img="'/assets/slide1.png'"
        v-bind:title="`Привет, ${data?.name ?? ''} Мини-приложения в Aitu`"
        v-bind:description="'Расскажем, что это и как использовать aitu.apps для своего бизнеса'"
        v-bind:button-label="'Я готов!'"
        v-on:next-click="next"
      ></SlideContent>
    </ion-slide>
    <ion-slide>
      <SlideContent
        v-bind:img="'/assets/slide2.png'"
        v-bind:title="'+800.000 пользователей Aitu'"
        v-bind:description="'Могут увидеть ваше мини-приложение и стать его пользователями'"
        v-bind:button-label="'Интересно'"
        v-on:next-click="next"
      ></SlideContent>
    </ion-slide>
    <ion-slide>
      <SlideContent
        v-bind:img="'/assets/slide3.png'"
        v-bind:title="'Всегда под рукой'"
        v-bind:description="'Каталог с мини-приложениями находится на центральной вкладке. Пользователи легко его найдут'"
        v-bind:button-label="'Что ещё?'"
        v-on:next-click="next"
      ></SlideContent>
    </ion-slide>
    <ion-slide>
      <SlideContent
        v-bind:img="'/assets/slide4.png'"
        v-bind:title="'Баннер с вашим предложением'"
        v-bind:description="'Уникальная скидка, спецпредложение или акция. Донесите ценное предложение до всех пользователей Aitu'"
        v-bind:button-label="'Далее'"
        v-on:next-click="next"
      ></SlideContent>
    </ion-slide>
  </ion-slides>
</template>

<script lang="ts">
import { IonSlides, IonSlide } from "@ionic/vue";
import { defineComponent } from "vue";
import SlideContent from "@/views/slideContent.vue";
import aituBridge from "@btsd/aitu-bridge";

export default defineComponent({
  name: "Slider",
  components: { SlideContent, IonSlides, IonSlide },
  methods: {
    next() {
      this.$el.slideNext();
    },
  },
  async data() {
    try {
      const data = await aituBridge.getMe();
      return { data };
    } catch (e) {
      console.log(e);
    }
  },
  setup() {
    const slideOpts = {
      initialSlide: 0,
      speed: 400,
    };
    return { slideOpts };
  },
});
</script>

<style>
.slides {
  height: 100%;
}
</style>
