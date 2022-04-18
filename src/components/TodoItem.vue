<template>
  <li style="margin-bottom: 10px">
    <p
      style="display: inline-block; width: 92%"
      v-if="!isEdit"
      @click="redirectToDesc"
    >
      {{ todo.list }}
    </p>
    <input
      v-else
      type="text"
      v-model="title"
      :id="'inputs-' + todo.list"
      style="width: 90%; color: black; background-color: white; display: inline"
    />
    &nbsp; <button @click="toggleEdit">Edit</button> &nbsp;
    <button @click="deleteValue(id)">Hapus</button>
  </li>
</template>

<script>
export default {
  props: ["todo", "id"],
  data() {
    return {
      isEdit: false,
      title: this.todo.list,
    };
  },
  methods: {
    toggleEdit() {
      if (this.isEdit) {
        this.$store.commit("editTitle", {
          id: this.id,
          title: this.title,
        });
      }
      this.isEdit = !this.isEdit;
    },

    redirectToDesc(id) {
      this.$router.push({ name: "Description", params: { id: this.id } });
    },

    deleteValue(id) {
      this.$store.commit("deleteTodo", id);
    },
  },
};
</script>