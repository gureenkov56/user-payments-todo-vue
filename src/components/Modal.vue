<template>
  <transition name="fade">
    <div class="bg-modal" v-if="isOpen" @click="$emit('closeModal')">
      <div class="modal-container" @click.stop>
        <div class="close-modal-btn">
          <button @click="$emit('closeModal')">
            <img src="../assets/close.svg" alt="close-icon">
          </button>
        </div>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: {
    isOpen: {
      type: Boolean
    }
  }
}
</script>

<style scoped>
.bg-modal {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .9);
  z-index: 1050;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.modal-container {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  flex: 1;
  cursor: default;

  max-width: 300px;
  min-height: 300px;
}

.close-modal-btn {
  text-align: right;
}

.close-modal-btn > button {
  height: 30px;
  width: 30px;
  background-color: #fff;
  border: none;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>