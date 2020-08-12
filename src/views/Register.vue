<template>
  <div>
    <Card style="width:540px; margin: 0 auto;">
    <p slot="title">
      <Icon type="ios-film-outline"></Icon>
      供应商注册
    </p>
    <div>
      <!-- <h3>供应商注册</h3> -->
      <Form ref="form" :rules="formValidate" :label-width="120" :model="form">
        <FormItem label="用户名" prop="venName">
        <i-col span="22">
          <Input v-model="form.venName" />
        </i-col>
        </FormItem>
        <FormItem label="登录密码" prop="venName">
        <i-col span="22">
          <Input v-model="form.venName" />
        </i-col>
        </FormItem>
        <FormItem label="重复密码" prop="venName">
        <i-col span="22">
          <Input v-model="form.venName" />
        </i-col>
        </FormItem>
        <FormItem label="电子邮箱" prop="venName">
        <i-col span="22">
          <Input v-model="form.venName" />
        </i-col>
        </FormItem>
        <FormItem label="手机号码" prop="venName">
        <i-col span="16">
          <Input v-model="form.venName" />
        </i-col>
        <i-col span="6" style="text-align: right;">
          <i-button type="primary">发送验证码</i-button>
        </i-col>
        </FormItem>
        <FormItem label="手机验证码" prop="venName">
        <i-col span="22">
          <Input v-model="form.venName" />
        </i-col>
        </FormItem>

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
      next () {
        this.$router.push('/register2')
      },
    },
  }
</script>
