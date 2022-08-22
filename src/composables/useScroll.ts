import { defineComponent, onMounted } from "vue";

const useScroll = () => {
  const scrollTo = (navEl: string) => {
    let element = document.querySelector(`#${navEl}`);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return { scrollTo }
}

export { useScroll }