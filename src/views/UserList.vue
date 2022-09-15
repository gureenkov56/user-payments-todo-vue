<template>
  <h1 class="text-center pt-3">Пользователи</h1>
  <div class="bg-light p-3 m-3 rounded"
       v-for="user in users"
       :key="user.id"
  >
    <h3>{{ user.name }}</h3>
    <p>Тел. {{ user.tel }} | email: {{ user.email }}</p>
    <button class="btn btn-warning m-1" @click="openModalToDo(user.todo)">ToDo</button>
    <button class="btn btn-success m-1" @click="openModalEditUser(user)">Изменить</button>
  </div>

  <Modal :isOpen="openUserModal || openToDoModal"
         @closeModal="closeModal"
  >
    <div v-if="openUserModal">
      <p>Изменить контакты</p>
      <form>
        <div class="mb-3">
          <label for="name" class="form-label">Имя</label>
          <input type="text" class="form-control" id="name" v-model="nowEditUser.name">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" v-model="nowEditUser.email">
        </div>
        <div class="mb-3">
          <label for="tel" class="form-label">Телефон</label>
          <input type="text" class="form-control" id="tel" v-model="nowEditUser.tel">
        </div>
        <button type="button" class="btn btn-primary" @click="closeModal">OK</button>
      </form>

    </div>
    <div v-else>
      <p>ToDo</p>
      <p v-if="nowEditTodo.length == 0"
         class="todo-list-content">
        Ваш список пуст
      </p>
      <div class="form-check todo-list-content" v-else>

        <div class="d-flex"
          v-for="(todoItem, idx) in nowEditTodo"
        >
          <div>
            <input class="form-check-input"
                   type="checkbox"
                   id="flexCheckDefault"
                   v-model="todoItem.isDone"
            >
            <label class="form-check-label" for="flexCheckDefault">
              {{ todoItem.title }}
            </label>
          </div>
          <div class="remove-btn-wrapper">
            <button @click="nowEditTodo.splice(idx, 1)">
              <img src="../assets/close.svg" alt="remove">
            </button>
          </div>
        </div>

      </div>

      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Новая задача" v-model="inputNewTodo">
        <button
            class="btn btn-primary"
            type="button"
            @click="addNewTodoItem"
        >
          +
        </button>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal";

export default {
  name: "UserList",
  components: {Modal},
  data() {
    return {
      openUserModal: false,
      openToDoModal: false,
      nowEditUser: undefined,
      nowEditTodo: undefined,
      inputNewTodo: '',
      users: [
        {
          id: 1,
          name: 'Василий Пронин',
          tel: '+798818422133',
          email: 'v.pronin@mail.ru',
          todo: [
            {
              id: 1,
              isDone: false,
              title: 'Купить хлеб'
            },
            {
              id: 2,
              isDone: false,
              title: 'Навести порядок'
            },
            {
              id: 3,
              isDone: true,
              title: 'Починить авто'
            },
          ]
        },
        {
          id: 2,
          name: 'Петр Васютин',
          tel: '+7962132123',
          email: 'vasutinjob@mail.ru',
          todo: []
        }
      ]
    }
  },
  methods: {
    openModalEditUser(user) {
      this.openUserModal = true;
      this.nowEditUser = user;
    },
    openModalToDo(todo) {
      this.openToDoModal = true;
      this.nowEditTodo = todo;
    },
    closeModal() {
      this.openUserModal = false;
      this.openToDoModal = false;
    },
    addNewTodoItem() {
      // get last ID OR set 0
      let lastId = this.nowEditTodo[this.nowEditTodo.length - 1] || 0;

      let newTodo = {
        id: lastId + 1,
        isDone: false,
        title: this.inputNewTodo
      }
      this.nowEditTodo.push(newTodo);
      this.inputNewTodo = '';
    }
  }
}
</script>

<style scoped>
.form-check button {
  width: 25px;
  height: 25px;
  border: none;
  background-color: transparent;
}

.remove-btn-wrapper {
  flex: 1;
  text-align: right;
}

.todo-list-content {
  min-height: 200px;
}
</style>