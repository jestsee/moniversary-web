<script setup lang="ts">
import { PlusSmIcon } from "@heroicons/vue/solid";
import { useModal } from "../composables/useModal";
import Modal from "./Modal.vue";
import Input from "./Input.vue";
import { ref, watch } from "vue";
import { Wish } from "../composables/types/wish";
import { useWish } from "../composables/@api/useWish";

const { isOpen, openModal, closeModal } = useModal();
const { addWish, loadingWish } = useWish();

interface Props {
  reload: CallableFunction;
}
const props = withDefaults(defineProps<Props>(), {});

const initData = {
  title: "",
  from: "",
  wish: "",
};
const data = ref<Wish>(initData);
const errTitle = ref<string>();
const errFrom = ref<string>();
const errWish = ref<string>();

const handleClose = () => {
  closeModal();
};

const handleOpen = () => {
  data.value = { ...initData };
  errTitle.value = undefined;
  errFrom.value = undefined;
  errWish.value = undefined;
  openModal();
};

const errorCheck = (
  field: string,
  min: number,
  err?: string
): string | undefined => {
  if (field.length < min && field.length > 0) return "singkat amat";
  else if (err && field === "") return "jangan kosong dong weh";
  else {
    err = undefined;
    // console.log(err);
  }
};

const validate = (): boolean => {
  let canSubmit = true;
  if (data.value.title === "") {
    errTitle.value = "jangan kosong dong weh";
    canSubmit = false;
  }
  if (data.value.from === "") {
    errFrom.value = "jangan kosong dong weh";
    canSubmit = false;
  }
  if (data.value.wish === "") {
    errWish.value = "jangan kosong dong weh";
    canSubmit = false;
  }
  return canSubmit;
};

const submit = async () => {
  console.log(data.value);
  if (errTitle.value || errFrom.value || errWish.value) return;

  if (validate()) {
    console.log("halal untuk disubmit");
    const resp = await addWish(data.value);
    if (resp.state === "SUCCESS") {
      closeModal();
      props.reload();
    }
  }
};

watch(
  () => [data.value.title],
  () => {
    errTitle.value = errorCheck(data.value.title, 5, errTitle.value);
  }
);
watch(
  () => [data.value.from],
  () => {
    errFrom.value = errorCheck(data.value.from, 3, errFrom.value);
  }
);
watch(
  () => [data.value.wish],
  () => {
    errWish.value = errorCheck(data.value.wish, 20, errWish.value);
  }
);
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
    :open-modal="handleOpen"
    :close-modal="handleClose"
    :submit="submit"
    :loading="loadingWish"
  >
    <form @submit="" class="grid grid-cols-1 gap-y-4">
      <Input
        v-model="data.title"
        label="title"
        placeholder="hbd gitu ato apa kek.."
        :error="errTitle"
      />
      <Input
        v-model="data.from"
        label="from"
        placeholder="dari siapa ni? gosah anon2 ini bukan askfm"
        :error="errFrom"
      />
      <Input
        v-model="data.wish"
        label="wish"
        placeholder="yang panjangan gitu..."
        :error="errWish"
        text-area
      />
    </form>
  </Modal>
</template>
