<script setup lang="ts">
import { PlusSmIcon } from "@heroicons/vue/solid";
import { useModal } from "../composables/useModal";
import Modal from "./Modal.vue";
import Input from "./Input.vue";
import { ref } from "vue";
import { Err, Wish } from "../composables/types/wish";

const { isOpen, openModal, closeModal } = useModal();

const data = ref<Wish>({
  title: '',
  from: '',
  wish: ''
})
const titleError = ref<Err>()
const wishError = ref<Err>()
const fromError = ref<Err>()

const submit = () => {
  console.log(data.value);
};
</script>

<template>
  <div class="flex flex-col gap-y-6">
    <div
      class="bg-white min-w-[250px] max-h-[250px] aspect-square rounded-3xl flex justify-center items-center hover:scale-105 group cursor-pointer shadow-[0_35px_60px_-15px_rgba(0,0,0,0.06)]"
    >
      <button
        @click="openModal"
        class="bg-black rounded-full h-fit group-hover:motion-safe:animate-bounce"
      >
        <PlusSmIcon class="text-white h-20" />
      </button>
    </div>
    <h2 class="font-extrabold text-[2.5rem] leading-10 mt-4">
      a little suggestion
    </h2>
    <p class="">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo nam possimus
      sit animi obcaecati facilis, earum doloribus ipsum.
    </p>
  </div>
  <Modal
    title="Drop your wish"
    :is-open="isOpen"
    :open-modal="openModal"
    :close-modal="closeModal"
    :submit="submit"
  >
    <form @submit="" class="grid grid-cols-1 gap-y-4">
      <Input label="title" placeholder="hbd gitu ato apa kek.." />
      <Input label="wish" placeholder="yang panjangan gitu..." text-area />
      <Input
        label="from"
        placeholder="dari siapa ni? gosah anon2 ini bukan askfm"
      />
    </form>
  </Modal>
</template>
