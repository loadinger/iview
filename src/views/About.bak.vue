<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <!-- <Upload action="//jsonplaceholder.typicode.com/posts/">
        <Button icon="ios-cloud-upload-outline">Upload files</Button>
      </Upload> -->
    </div>
    <div>
      <i-form inline>
        <Row>
          <i-col span="12" class="form-i-col">
            <FormItem label="供应商名称" prop="venName">
              <Input v-model="form.venName" />
            </FormItem>
          </i-col>
          <i-col span="12" class="form-i-col">
            <FormItem label="图片上传一" prop="venName">
              <formUpload action="/api/upload.php" v-model="form.url"></formUpload>
            </FormItem>
          </i-col>
        </Row>
      </i-form>
      <i-form>
        <FormItem label="供应商名称" prop="venName">
          <Input v-model="form.venName" />
        </FormItem>
        <FormItem label="图片上传一" prop="venName">
          <formUpload action="/api/upload.php" v-model="form.url2"></formUpload>
        </FormItem>
      </i-form>

      {{form}}

    </div>
  </div>
</template>

<script>
  import formUpload from '@/components/formUpload.vue'
  export default {
    components: {
      formUpload,
    },
    data () {
      return {
        form: {
          url: '',
          url2: '',
        },
      }
    },
    methods: {
    }

  }
</script>

<style scoped>
.form-i-col{
  text-align: left;
}
.form-image{
  height: 60px;
  max-width: 100%;

}
.form-image img{
  max-width: 100%;
  max-height: 100%;

}
</style>
