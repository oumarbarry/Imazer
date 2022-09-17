<script setup>
import init, { apply_effect as applyGrayscaleEffect } from 'rsw-img-effects';

const input = $ref(null);
const placeholder = $ref(null);

const processImage = () => {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(input.files[0]);

  fileReader.onload = () => {
    let base64 = fileReader.result.replace(
      /^data:image\/(png|jpeg|jpg);base64,/,
      ''
    );

    let newImage = applyGrayscaleEffect(base64);
    placeholder.setAttribute('src', newImage);
  };
};

init();
</script>

<template>
  <div>
    <div class="bg" v-for="i in 3" :key="i"></div>

    <div class="flex justify-center relative z-100 px-20 py-22">
      <div class="bg-gray-50 bg-opacity-95 border-2 border-black shadow-xl px-14 py-12 text-center space-y-9">
        <h1 class="font-cursive text-5xl mt-0">Imazer</h1>
        <p>
          Want to apply an amazing <span font-semibold italic>grayscale</span> effect on your image ? <br>
          Just upload it below. We'll take care of the rest.
        </p>

        <label class="block w-full mx-auto py-6 bg-pink-600 text-white font-bold cursor-pointer">
          Upload PNG Image
          <input ref="input" type="file" accept=".png" class="hidden" @change="processImage" />
        </label>

        <img ref="placeholder" class="mx-auto aspect-ratio-video max-w-50vw max-h-50vw" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg {
  --at-apply: "fixed inset-y-0 -inset-x-2/4 opacity-50 z-0 bg-gradient-to-r from-green-400 to-blue-500";
  background-image: linear-gradient(-60deg, #404053 50%, #18161e 50%);
  animation: slide 3s ease-in-out infinite alternate;
}

.bg:nth-child(2) {
  animation-direction: alternate-reverse;
  animation-duration: 4s;
}

.bg:nth-child(3) {
  animation-duration: 5s;
}

@keyframes slide {
  0% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(25%);
  }
}
</style>
