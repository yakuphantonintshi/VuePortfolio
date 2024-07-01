<template>
  <div class="container">
    <div class="row align-items-center">
        <div class="col">
            <h1 class="display-2" id="myname">Yakupha Ntonintshi</h1>
                <p v-if="title"> I am a <br><span class="span">{{ title }}</span>
                </p>
                <Spinner v-else/>
        </div>

        <div class="col">
            <div id="details">
                <img src="https://yakuphantonintshi.github.io/myimages/Images/webdevelopment.jpg" width="500" height="500" alt="Home" class="img-fluid" loading="lazy">
            </div>

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

    .span{
    font-size: 3rem;
}
p{
    font-size: 3rem;
    color: #51c4df;
}
#myname{
    color: #51c4df;
}
.container{
    padding-top: 2rem;
    margin-top: 5rem;
}

@media screen and (max-width: 600px) {
  .row{
    display: flex;
    flex-direction: column;
  }
}


</style>