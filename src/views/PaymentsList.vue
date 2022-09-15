<template>
  <h1 class="text-center pt-3">Платежи</h1>
  <div class="bg-light p-3 m-3 rounded"
       v-for="payitem in paymentData"
       :key="payitem.id"
  >
    <h4>Сумма: {{ payitem.sum }} руб</h4>
    <button class="btn btn-warning m-1" @click="openModalWithDetail(payitem.details)">Детали</button>
  </div>

  <Modal :isOpen="openModal"
         @closeModal="openModal = false"
  >
    <p>Детали платежа</p>
    {{ paymentDetailInModal }}
  </Modal>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  name: "PaymentsList",
  components: {Modal},
  data() {
    return {
      openModal: false,
      paymentData: [
        {
          id: 1,
          sum: 4500,
          details: 'Оплачено банковской картой **** 7853'
        },
        {
          id: 2,
          sum: 20100,
          details: 'Оплачено наличными'
        },
        {
          id: 3,
          sum: 39000,
          details: 'Оформлен рассрочный платеж'
        }
      ],
      paymentDetailInModal: ''
    }
  },
  methods: {
    openModalWithDetail(details) {
      this.openModal = true;
      this.paymentDetailInModal = details;
    }
  }
}
</script>

<style scoped>

</style>