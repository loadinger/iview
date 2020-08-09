<template>
  <div>
    <Button type="primary" @click="modal1 = true">Display dialog box</Button>
    <Modal
      v-model="modal1"
      title="Common Modal dialog box title"
      @on-ok="ok"
      @on-cancel="cancel"
     width="1000" 
      >
    <VendorListForm />
    </Modal>
  </div>
</template>


<script>
  import VendorListForm from './vendor-list-form.vue'
  export default {
    components: {
      VendorListForm,
    },
    data () {
      return {
        modal1: false
      }

    },
    methods: {
      ok () {
        this.$Message.info('Clicked ok');

      },
      cancel () {
        this.$Message.info('Clicked cancel');

      }

    }

  }
</script>
