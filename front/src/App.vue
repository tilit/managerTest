<template>
  <div>
    <div class="row">
      <div class="col form-inline">
        <input type="text" v-model="newTask" placeholder="Enter Task" @keyup.enter="add" />
        <button @click="add" variant="primary" class="ml-3">Add</button>
      </div>
    </div>
    <div id="kanban">
      <div class="todo">
        <h3>Back Log</h3>
        <draggable class="list-group kanban-column" :list="arrBackLog" group="tasks">
          <div
            class="list-group-item"
            v-for="element in arrBackLog"
            :key="element.name"
          >{{ element.name }}</div>
        </draggable>
      </div>
      <div class="wip">
        <h3>In Progress</h3>
        <draggable class="list-group kanban-column" :list="arrInProgress" group="tasks">
          <div
            class="list-group-item"
            v-for="element in arrInProgress"
            :key="element.name"
          >{{ element.name }}</div>
        </draggable>
      </div>
      <div class="testing">
        <h3>Testing</h3>
        <draggable class="list-group kanban-column" :list="arrTested" group="tasks">
          <div
            class="list-group-item"
            v-for="element in arrTested"
            :key="element.name"
          >{{ element.name }}</div>
        </draggable>
      </div>
      <div class="done">
        <h3>Done</h3>
        <draggable class="list-group kanban-column" :list="arrDone" group="tasks">
          <div
            class="list-group-item"
            v-for="element in arrDone"
            :key="element.name"
          >{{ element.name }}</div>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import draggable from "vuedraggable";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    draggable
  }
})
export default class App extends Vue {
  newTask = "";
  arrBackLog = [
    { name: "Code Sign Up Page" },
    { name: "Test Dashboard" },
    { name: "Style Registration" },
    { name: "Help with Designs" }
  ];
  arrInProgress = [];
  arrTested = [];
  arrDone = [];
  add() {
    if (this.newTask) {
      this.arrBackLog.push({ name: this.newTask });
      this.newTask = "";
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
#app {
  font-family: 'Montserrat';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#kanban {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;  

  > div {
    display: flex;
    flex-direction: column;
    > div {
      flex-basis: 0;
      flex-grow: 1;
    }
  }
}
.todo{
  background-color: grey;
}
.wip {
  background-color: blue;
}
.testing {
  background-color: orange;
}
.done {
  background-color: green;
}
</style>
