<template>
  <div>
    <Card style="width:800px; margin: 0 auto;">
    <p slot="title">
      <Icon type="ios-film-outline"></Icon>
      供应商注册
    </p>
    <div>

      <Form ref="form" :rules="formValidate" :label-width="120" :model="form">
        <Row>
          <i-col span="12" class="form-i-col">
            <FormItem label="供应商名称" prop="venName">
            <Input v-model="form.venName" />
            </FormItem>
          </i-col>
          <i-col span="12" class="form-i-col">
            <FormItem label="营业执照编号" prop="venIdno">
            <Input v-model="form.venIdno" />
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="12" class="form-i-col">
            <FormItem label="供应商名称" prop="venName">
            <Input v-model="form.venName" />
            </FormItem>
          </i-col>
          <i-col span="12" class="form-i-col">
            <FormItem label="营业执照编号" prop="venIdno">
            <Input v-model="form.venIdno" />
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="12" class="form-i-col">
            <FormItem label="供应商名称" prop="venName">
            <Input v-model="form.venName" />
            </FormItem>
          </i-col>
          <i-col span="12" class="form-i-col">
            <FormItem label="营业执照编号" prop="venIdno">
            <Input v-model="form.venIdno" />
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <i-col span="12" class="form-i-col">
            <FormItem label="供应商名称" prop="venName">
            <Input v-model="form.venName" />
            </FormItem>
          </i-col>
          <i-col span="12" class="form-i-col">
            <FormItem label="营业执照编号" prop="venIdno">
            <Input v-model="form.venIdno" />
            </FormItem>
          </i-col>
        </Row>



        <Form-item>
          <i-col span="16">
            &nbsp;
          </i-col>
          <i-col span="6" style="text-align: left;">
            <i-button type="primary" @click="next">下一步</i-button>
          </i-col>

          <!--
            <i-col style="text-align: right;">
            <i-button type="primary">下一步</i-button>
            </i-col>
            <i-col span="2">
            </i-col>
          -->
        </Form-item>



      </Form>


    </div>
    </Card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: {},
      }
    },
    methods: {
    },
  }
</script>
