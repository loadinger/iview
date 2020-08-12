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

    <Tabs active-key="key1">
        <Tab-pane label="企业基本信息" key="key1">
          <VendorListForm />
        </Tab-pane>
        <Tab-pane label="联系信息" key="key2">
          <about />
        </Tab-pane>
        <Tab-pane label="财务往来信息" key="key3">
          456456456
        </Tab-pane>
    </Tabs>
  </div>
</template>


<script>
  import VendorListForm from './vendor-list-form.vue'
  import About from './About.vue'
  export default {
    components: {
      VendorListForm,
      About,
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
