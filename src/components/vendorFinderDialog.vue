<template>
  <div class="c-vendor-finder-dialog">
    {{form.itemName}}
    <Button icon="ios-seach" type="primary" @click="showFindForm">供应商选择</Button>
  
    <Modal
      v-model="display.modal"
      title="供应商选择"
      width="600"
      @on-ok="ok"
      >

       <div style="margin-bottom: 20px;">
         供应商名称：
         <i-input style="width: 200px;" v-model="form.key" @on-enter="search">
           <i-button slot="append" icon="ios-search" @click="search"></i-button>
         </i-input>
       </div>
       <Card class="warp-card">
         <Table
           :columns="table.column"
           :data="table.data"
           :loading="display.loading"
           style="margin-bottom: 20px;"
           highlight-row
           @on-row-click="select"
           @on-row-dblclick="commit"
           ></Table>
         <Page
           :total="table.total"
           :page-size="table.pageSize"
           @on-change="pageChange"
           v-show="table.pages > 1"
           />
       </Card>
    </Modal>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        options: [],
        list: {
          pageNum: 1,
          pageSize: 2,
          total: 5,
          pages: 3,
          list: [
            {
              id: 1,
              vendorName: 'vendor 1',
              updateTime: '2020/08/01',
              createrUser: 'Admin',
            },
            {
              id: 2,
              vendorName: 'vendor 2',
              updateTime: '2020/08/01',
              createrUser: 'Admin',
            },
            {
              id: 3,
              vendorName: 'vendor 3',
              updateTime: '2020/08/01',
              createrUser: 'Admin',
            },
            {
              id: 4,
              vendorName: 'vendor 4',
              updateTime: '2020/08/01',
              createrUser: 'Admin',
            },
            {
              id: 5,
              vendorName: 'vendor 5',
              updateTime: '2020/08/01',
              createrUser: 'Admin',
            },

          ],
        },
        form: {
          key: '',
          item: 0,
          //itemName: '请选择',
          itemName: '',
        },
        display: {
          loading: false,
          modal: false,
        },
        table: {
          column: [
            {
              key: 'id',
              title: 'ID',
            },
            {
              key: 'vendorName',
              title: '供应商名称',
            },
            {
              key: 'updateTime',
              title: '上次更新时间',
            },
            {
              title: '创建人',
              key: 'createrUser',
            },
          ],
          data: [],
          pageNum: 0,
          pageSize: 10,
          total: 0,
          pages: 1,
        },
      }
    },
    methods: {
      search () {
        const key = this.form.key
        if (key !== '') {
          this.display.loading = true;
          setTimeout(() => {
            this.display.loading = false;
            this.table.pageNum = this.list.pageNum
            this.table.pageSize = this.list.pageSize
            this.table.total = this.list.total
            this.table.pages = this.list.pages
            let list = JSON.parse(JSON.stringify(this.list.list))
            this.table.data = list.splice((this.list.pageNum - 1) * this.list.pageSize, this.list.pageSize)
          }, 1000);

        } else {
          this.options = [];
        }
      },
      input (value) {
        this.$emit('input', value)
      },
      showFindForm () {
        this.display.modal = true
      },
      pageChange (page) {
        this.list.pageNum = page
        this.search()
      },
      select (item) {
        this.form.item = item.id
      },
      commit (item) {
        this.form.item = item.id
        this.display.modal = false
        this.ok()
      },
      ok () {
        if (this.form.item) {
          this.$emit('input', this.form.item)
          this.form.itemName = this.table.data.find((item) => {
            return item.id = this.form.item
          }).vendorName
        }
      },
    },
  }
</script>

<style>
  .c-vendor-finder{}
</style>
