<template>
  <div id="PainelList">
     <div v-for="(tarefas, index) in listTarefas" :key="index">
        <div id="divData"> 
            {{tarefas.data}}
        </div>
        <div id="divTarefas">
             <div id="tarefas">{{tarefas.nome}}</div>
        </div>       
     </div>
  </div>
</template>

<script>
export default {
    computed: {
        listTarefas(){
            return this.$store.state.arreyTarefas;
        }
    }
}
</script>

<style>
    #PainelList {
        border: 1px solid rgb(67, 139, 248);
        box-shadow: 2px 5px 5px rgb(213, 229, 253);
        border-radius: 10px;
        width: 31%;
        min-height: 100px;
        margin-top: 50px;
        margin-left: 600px;
        padding-bottom: 10px;
         display: flex;
        flex-wrap: wrap;
    }
    #divTarefas {
        border: 1px solid black;
        min-width: 100px;
        min-height: 30px;
        margin-left: 10px;
        padding: 5px;
        background-color: #fff;
    }
    #divData {
        background-color: #fff;
        margin-top: 10px;
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        border: 1px solid black;
    }
    #tarefas {
        display: flex;
        justify-content: center;
        align-items: center;
    }
      #divTarefas:hover {
        cursor: pointer;
        width: 150px;
        height: 45px;
    }
</style>