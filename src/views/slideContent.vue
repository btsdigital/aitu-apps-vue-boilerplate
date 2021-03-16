<template>
  <div class="slide-content">
    <img :src="img" />
    <div class="slide-block">
      <ion-text color="dark">
        <h2>{{title}}</h2>
      </ion-text>
      <ion-text
      ><sub
      >{{description}}</sub
      ></ion-text
      >
    </div>
    <div class="slide-button">
      <ion-button @click="$emit('next-click')" expand="full">{{buttonLabel}}</ion-button>
    </div>
  </div>
</template>

<script>
import {IonButton, IonText} from "@ionic/vue";

export default {
  name: "slideContent",
  components: { IonButton, IonText },
  props: {
    title: String,
    description: String,
    onClick: Function,
    img: String,
    buttonLabel: String
  }
}
</script>

<style scoped>
.slide-content {
  display: flex;
  height: 100%;
  flex-direction: column;
  padding-bottom: 30px;
}

.slide-block {
  height: 100%;
  padding: 0 16px;
  text-align: left;
}

.slide-button {
  padding: 0 16px;
}
</style>
