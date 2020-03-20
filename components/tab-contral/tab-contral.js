// components/tab-contral/tab-contral.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },

  data: {
    currentIndex:0
  },
  
  methods: {
    handleItemClick(event) {
      const index = event.currentTarget.dataset.index;

      this.setData (
        {
          currentIndex:index
        }
      )

      this.triggerEvent('itemclick',{index,title: this.properties.titles[index]},{})
    }
  }

 
})
