<template>
  <div>
    <Form ref="form" :rules="formValidate" :label-width="90" :model="form">

          <FormItem label="供应商名称" prop="venName">
            <Input v-model="form.venName" />
          </FormItem>
          <FormItem label="营业执照编号" prop="venIdno">
            <Input v-model="form.venIdno" />
          </FormItem>
          <FormItem label="供应商地址" prop="venAddr">
            <Input v-model="form.venAddr" />
          </FormItem>
          <FormItem label="供应商电话" prop="venTel">
            <Input v-model="form.venTel" />
          </FormItem>
          <FormItem label="供应商传真" prop="venFax">
            <Input v-model="form.venFax" />
          </FormItem>
          <FormItem label="代表者姓名" prop="ownerName">
            <Input v-model="form.ownerName" />
          </FormItem>
          <FormItem label="代表者身份证号" prop="ownerResidentNo">
            <Input v-model="form.ownerResidentNo" />
          </FormItem>
          <FormItem label="代表者住宅电话" prop="ownerPhone">
            <Input v-model="form.ownerPhone" />
          </FormItem>
          <FormItem label="注册资金" prop="billLimitAmt">
            <Input v-model="form.billLimitAmt" />
          </FormItem>
          <FormItem label="供应商选择" prop="billLimitAmt">
            <VendorFinder v-model="form.vendorId" />
          </FormItem>
          <FormItem label="供应商选择2" prop="billLimitAmt">
            <VendorFinderDialog v-model="form.vendorId" />
          </FormItem>
    </Form>

    <Row class="code-row-bg" justify="end" type="flex">          
      <!-- <Upload
        :action="uploadUrl"
        :headers="uploadHeader"
        :onError="uploadError"
        :onSuccess="uploadSuccess"
        :showUploadList="false"
      >
        <Button icon="ios-cloud-upload-outline" type="primary">上传新文件</Button>
      </Upload> --> 
      
      <!-- <Button @click="cancel" style="margin-right:10px">取消</Button> -->
      <!-- <Button @click="save" type="primary">保存</Button> -->
    </Row>
  </div>
</template>
<script>
  //import { vendorApi } from '@/api/vendor';
  import VendorFinder from '@/components/vendorFinder.vue'
  import VendorFinderDialog from '@/components/vendorFinderDialog.vue'
  export default {
    name: 'CodeReviewListForm',
    components: {
      VendorFinder,
      VendorFinderDialog,
    },
    props: {
      //是否为更新表单
      isUpdate: {
        type: Boolean,
        default: true
      },
      //更新的表单数据对象
      updateData: {
        type: Object
      }
    },
    data () {
      return {
        display: {
          modal1: false,
        },
        //表单数据
        form: {

          vendorId: 0,
         //供应商编号
         id:null,
         //供应商名称
         venName:null,
         //营业执照编号
         venIdno:null,
         //供应商地址
         venAddr:null,
         //供应商电话
         venTel:null,
         //供应商传真
         venFax:null,
         //代表者姓名
         ownerName:null,
         //代表者身份证号
         ownerResidentNo:null,
         //代表者住宅电话
         ownerPhone:null,
         //注册资金
         billLimitAmt:null,
        },
        //表单验证
        formValidate: {
        //供应商编号
        //id:[{ type:'number',required: true, message: '请输入供应商编号', trigger: 'blur' }],
        //供应商名称
        venName:[{ required: true, message: '请输入供应商名称', trigger: 'blur' }],
        //营业执照编号
        venIdno:[{ required: true, message: '请输入营业执照编号', trigger: 'blur' }],
        
        }
      };
    },
  watch: {
      updateData: function(newValue, oldValue) {
          this.$refs['form'].resetFields();
          if (this.isUpdate) {
              for (let k in this.form) {
                  this.$set(this.form, k, newValue[k]);
              }
              this.$set(this.form, 'id', newValue['id']);
          }
      },
      isUpdate: function(newValue, oldValue) {
          if (!newValue) {
              this.resetForm();
              this.$refs['form'].resetFields();
          }
      }
  },
    created() {},
    mounted() {},
    methods: {
      showFindForm () {
        console.log(1)
        this.$refs.vendorFinderDialog.show()
      },
      showModal () {
        console.log('show')
        this.display.modal1 = true
      },
      cancel() {
        this.$emit('on-form-close');
      },
      save() {
       this.$refs['form'].validate(valid => {
         if (valid) {
           if (this.isUpdate) {
            this.update();
           } else {
             this.add();
           }
         } else {
          this.$Message.error('参数验证错误，请仔细填写表单数据!');
         }
       });
      },
    resetForm() {
        this.form = {
          //供应商编号
          id:null,
          //供应商名称
          venName:null,
          //营业执照编号
          venIdno:null,
          //供应商地址
          venAddr:null,
          //供应商电话
          venTel:null,
          //供应商传真
          venFax:null,
          //代表者姓名
          ownerName:null,
          //代表者身份证号
          ownerResidentNo:null,
          //代表者住宅电话
          ownerPhone:null,
          //注册资金
          billLimitAmt:null,
          //简称名称
          venShort:null,
          //供应商区分KTOKK
          venType:null,
          //供应商类型
          workType:null,
          //经营范围
          workKind:null,
          //供应商邮编
          venPost:null,
          //供应商邮编序号
          venPostSeq:null,
          //供应商区号
          venAreaCode:null,
          //供应商电话分机号
          venTelExtension:null,
          //供应商传真分机号
          venFaxExtension:null,
          //最初交易额
          firstDate:null,
          //倒闭与否
          dishonorYn:null,
          //担保与否
          guaranteeYn:null,
          //传真传真与否
          faxYn:null,
          //TAX_区分
          taxGubun:null,
          //序列号
          secretNo:null,
          //结束日期
          closeDate:null,
          //结束原因
          closeReason:null,
          //登记人
          insertId:null,
          //修改人
          modifyId:null,
          //***外部仓库ID
          zwhid:null,
          //***期望合作通路名称
          hQwhztlname:null,
          //***成立日期
          estDate:null,
          //***供应商代理层级LGROUP
          goodsSource:null,
          //***主要销售渠道
          mainsc:null,
          //***售后热线
          cshotline:null,
          //***售后网点数量
          csnetwork:null,
          //***备注
          remark:null,
          //***供应商级别
          venLevel:null,
          //***公司荣耀
          glories:null,
          //***关联公司名称
          vdname:null,
          //***总资产
          asset:null,
          //***品牌所有人
          brandOwner:null,
          //***主要销售区域
          degree:null,
          //***合作商品品牌
          hHzsppp:null,
          //***合作商品简要描述 
          hHzspjyms:null,
          //***企业售后负责人 
          hQyshfzr:null,
          //***联系手机号 
          hLxsjh:null,
          //***有效标记
          validFlag:null,
          //允许直播标记
          broadYn:null,
          //直播房间ID
          broadRoomId:null,
          //四级地址
          addrSeq:null,
          //详细地址
          addr:null,
          //审核标志
          auditFlag:null,
        };
        this.$refs['form'].resetFields();
      },
      async add() {
        this.$Spin.show();
        //let res = await vendorApi.addVendor(this.form);
        this.$Message.success(res.msg);
        this.$Spin.hide();
        this.resetForm();
        this.$emit('on-form-close');
      },
      async update() {
        this.$Spin.show();
        //let res = await vendorApi.updateVendor(this.form);
        this.$Message.success(res.msg);
        this.$Spin.hide();
        this.resetForm();
        this.$emit('on-form-close');
      }
    }
  };
</script>
