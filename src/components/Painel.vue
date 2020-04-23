<template>
  <div id="Painel">
      <div id="divInput">
          <input type="text" placeholder="Digite sua tarefa aqui.." v-model="nomeTarefa"/>
      </div>
      <input type="date"  v-model="dataTarefa"/>
      <button @click="cadastraTarefas">Clique</button>
  </div>
</template>

<script>
export default {
    methods: {
        cadastraTarefas: function(){
            if(this.nomeTarefa != '' && this.dataTarefa != '' ){
            this.$store.commit('arrey', {
                nome: this.nomeTarefa,
                data: this.dataTarefa,
                key: this.key
            })
            this.nomeTarefa = ''
            this.dataTarefa = ''
            this.key +=1
            }
            else {
                alert('ATENÇÃO!!! REVEJA SUA TAREFA NOVAMENTE..')
            }

        }
    }, data: function(){
        return {
            nomeTarefa: '',
            dataTarefa: '',
            key: 0
        }
    }
}
</script>

<style>
    #Painel {
        border: 1px solid rgb(19, 26, 129);
        box-shadow: 2px 5px 5px rgb(213, 229, 253);
        width: 20%;
        height: 100px;
        margin-top: 50px;
        margin-left: 700px;
        display: flex;
        align-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 25px;
        border-radius: 10px;
    }
    #divInput {
        margin-left: 10px;
        margin-bottom: 10px;
    }
    #Painel button {
        color: #fff;
        background: #780206;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to left, #061161, #780206);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to left, #061161, #780206); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


    }
    button {
        cursor: pointer;
        outline: none;
        width: 100px;
        height: 25px;
        border: none;
        margin-top: 10px;
    }
</style>