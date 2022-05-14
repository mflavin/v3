<template>
  <div>
    <form-modal />
    <form-loader />
  </div>
</template>

<script>
import FormLoader from '@/components/FormLoader.vue';
import FormModal from '@/components/FormModal.vue';

export default {
  name: 'add-new-page',
  components: { FormLoader, FormModal },
};
</script>
