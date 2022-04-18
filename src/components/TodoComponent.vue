<template>
  <div>
    <h1>Todo List</h1>
    <ol>
      <todo-item
        v-for="(todo, index) in getTodos"
        :key="index"
        :todo="todo"
        :id="index"
      />
    </ol>
    <form @submit.prevent="addValue" action="">
      <div>
        <input
          style="width: 92%"
          v-model="input.list"
          type="text"
          id="list"
          autocomplete="off"
        />
        &nbsp;
        <button type="submit">Tambahkan</button>
      </div>
    </form>
    <div>
      {{ message }}
    </div>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem.vue";
export default {
  name: "TodoComponent",
  data() {
    return {
      message: "",
      input: {
        list: "",
        description: "",
      },
    };
  },
  methods: {
    addValue() {
      console.log(this.input);
      if (this.input.list) {
        // this.todos.push(this.input);
        this.$store.commit("addTodo", this.input);
        console.log(this.getTodos);
        this.input = {
          list: "",
        };
        if (this.getTodos.length == 4) {
          this.message = "Hebat Puol Sumpaaaaah!";
        }
      } else {
        alert("inputan tidak boleh kosong bre");
      }
    },
  },
  computed: {
    getTodos() {
      return this.$store.state.todos;
    },
  },
  components: {
    TodoItem,
  },
};
</script>