<template>
  <div>
    <h1 class="display-6 pt-4">Contact</h1>
    <p class="lead">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eligendi
      libero at dolorum quia aliquid recusandae tenetur corrupti quibusdam!
      Nesciunt, porro! Dolore neque nostrum quidem cupiditate, est vel eveniet
      consectetur.
    </p>
    <p class="lead">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eligendi
      libero at dolorum quia aliquid recusandae tenetur corrupti quibusdam!
      Nesciunt, porro! Dolore neque nostrum quidem cupiditate, est vel eveniet
      consectetur.
    </p>
    <p class="lead">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure eligendi
      libero at dolorum quia aliquid recusandae tenetur corrupti quibusdam!
      Nesciunt, porro! Dolore neque nostrum quidem cupiditate, est vel eveniet
      consectetur.
    </p>
  </div>
</template>

<script>
import { usePageData } from '@/stores/pagedata';

export default {
  name: 'contact-view',
  mounted() {
    const page = usePageData();
    console.log({ page, currentpage: page.currentpage });
  },
};
</script>
