<template>
  <div class="c-form-upload">
    <div class="c-form-upload-container ivu-input-wrapper ivu-input-wrapper-default">
      <div>
        <Upload :action="action" :on-success="uploadSuccess" :show-upload-list="false">
          <div>
            <div>
              <i-button icon="ios-cloud-upload-outline">上传</i-button>
            </div>
          </div>
        </Upload>
      </div>
      <div class="form-image">
        <img :src="value" v-if="value" @click="display.modalImage = true" />
      </div>
    </div>


    <Modal title="View Image" v-model="display.modalImage">
    <img :src="value" style="width: 100%">
    </Modal>
  </div>
</template>

<script>
  export default {
    props: [
      'action', 'value'
    ],
    data () {
      return {
        display: {
          modalImage: false,
        },
      }
    },
    methods: {
      uploadSuccess (res, file) {
        this.$emit('input', res.data.url)
      },
    }
  }
</script>

<style scoped>
.c-form-upload-container{
  min-width: 300px;
  text-align: left;
}
.form-image{
  max-height: 60px;
  max-width: 100px;
  margin-left: 10px;
}
.c-form-upload-container>div{
  display: inline-block;
  vertical-align: middle;
}
.form-image img{
  max-width: 100%;
  max-height: 100%;
}
.ivu-upload-select{
  display: block;
}

</style>
