<template>
  <div class="c-vendor-finder">
     <Select
       v-model="form.key"
       filterable
       remote
       :remote-method="search"
       :loading="display.loading"
       @input="input"
       placeholder="查找供应商"
       loading-text="查找中.."
       not-found-text="未找到供应商"
       clearable
        prefix="ios-search"
       >
       <Option v-for="(option, index) in options" :value="option.value" :key="index">{{option.label}}</Option>
     </Select>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        options: [],
        list: [
          {
            id: '1',
            ven_name: 'aaaaa',
          },
          {
            id: '2',
            ven_name: 'bbbbb',
          },
          {
            id: '3',
            ven_name: 'aabbb',
          },
          {
            id: '4',
            ven_name: 'aaccc',
          },
        ],
        form: {
          key: '',
        },
        display: {
          loading: false,
        },
      }
    },
    methods: {
      search (key) {
        if (key !== '') {
          this.display.loading = true;
          setTimeout(() => {
            this.display.loading = false;
            const list = this.list.map(item => {
              return {
                value: item.id,
                label: item.ven_name,
              };
            });
            this.options = list.filter(item => item.label.toLowerCase().indexOf(key.toLowerCase()) > -1);
          }, 500);

        } else {
          this.options = [];
        }
      },
      input (value) {
        this.$emit('input', value)
      },
    },
  }
</script>

<style>
  .c-vendor-finder{}
</style>
