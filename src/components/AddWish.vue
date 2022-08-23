<script setup lang="ts">
import { useModal } from "../composables/useModal";
import Modal from "./Modal.vue";
import Input from "./Input.vue";
import { ref, watch } from "vue";
import { Wish } from "../composables/types/wish";
import { useWish } from "../composables/@api/useWish";
import { PlusSmIcon } from "@heroicons/vue/solid";

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
    errWish.value = errorCheck(data.value.wish, 10, errWish.value);
  }
);
</script>

<template>
  <button
    @click="openModal"
    class="h-fit rounded-full bg-black shadow-lg group-hover:motion-safe:animate-bounce lg:shadow-none"
  >
    <PlusSmIcon class="h-16 text-white" />
  </button>
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
        placeholder="dari siapa ni?"
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
