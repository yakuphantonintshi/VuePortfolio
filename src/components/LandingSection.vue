<template>
  <div class="container">
    <div class="row align-items-center">
        <div class="col">
            
        </div>

        <div class="col">
            <h1 class="display-2" id="myname">Yakupha Ntonintshi</h1>
                <p v-if="title"> I am a <br><span class="span">{{ title }}</span>
                </p>
                <Spinner v-else/>
        </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import {useStore} from 'vuex'
import Spinner from '@/components/Spinner.vue'
const store = useStore()
const jobTitle = computed(() => store.state.jobTitle)
const title = ref('web developer')
const cnt = ref(-1)

function repeat(){
    try{
        if (cnt.value == jobTitle.value?.length) cnt.value = 0
        title.value = jobTitle.value?.at(cnt.value)?.title;
        setTimeout(repeat, 2000)
        cnt.value ++
    }catch (e) {
        // 
    }
}
onMounted(() => {
    store.dispatch('fetchJobTitle')
    repeat()
})

</script>

<style scoped>
span {
    color: white;
    font-family:fantasy;
    size: 50rem;
    text-shadow: 3px 3px 5px #51c4df
}
img{
    width: 700px;
    height: 30rem;
    object-fit: fill;
    border: 2px solid #51c4df;
    box-shadow: 5px 5px 10px #51c4df;
}

.span{
    font-size: 3rem;
}
p{
    font-size: 3rem;
    color: #51c4df;
}
#myname{
    color: #51c4df;
    font-size: 5rem;
    
}
.container{
    background-image: url('https://retipoint.ca/assets/images/img1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
}
.col{
    padding-block-start: 17rem;
}


@media screen and (max-width: 750px) {
  .row{
    display: flex;
    flex-direction: column;
  }
  img{
    width: 400px;
  }

}


</style>