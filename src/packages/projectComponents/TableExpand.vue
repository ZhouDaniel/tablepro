<template>
  <div :style="`overflow:hidden;margin-top: ${mgTop}`">
    <div
      v-if="secondaryTitle"
      class="wrapper-secondary-title"
      :style="`font-size: ${secondaryTitleFS}`"
    >
      {{ secondaryTitle }}
      <span class="toggleExpand" @click="toggleExpand">
        {{ isExpand ? "收起" : "展开" }}
      </span>
      <i :class="isExpand ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i>
    </div>
    <div style="position: relative">
      <slot name="fixedPart" :sty="true"></slot>
      <div v-if="!secondaryTitle" class="secondaryTitle">
        <span class="toggleExpand" @click="toggleExpand">
          {{ isExpand ? "收起" : "展开" }}
        </span>
        <i :class="isExpand ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i>
      </div>
    </div>
    <slot v-if="isExpand" name="expandPart"></slot>
  </div>
</template>
<script>
export default {
  name: "TableExpand",
  props: {
    secondaryTitle: {
      type: String,
      default: "",
    },
    secondaryTitleFS: {
      type: String,
      default: "12px",
    },
    mgTop: {
      type: String,
      default: "0px",
    },
  },
  data() {
    return {
      isExpand: false,
    };
  },
  methods: {
    toggleExpand() {
      this.isExpand = !this.isExpand;
    },
  },
};
</script>
<style scoped lang="scss">
.wrapper-secondary-title {
  color: #1a1a1a;
  font-weight: bold;
  margin: 0 0 15px 0;
}

.wrapper-secondary-title i,
.secondaryTitle i {
  color: #0e9df7;
  font-size: 12px;
  font-weight: 300;
}

.toggleExpand {
  cursor: pointer;
  font-size: 12px;
  color: #0e9df7;
  margin-left: 10px;
}
.secondaryTitle {
  margin-top: 22px;
  width: 60px;
  position: absolute;
  top: -15px;
  right: 0;
}
</style>
