<template>
  <div class="container-fluid">
    <div class="row align-items-center">
        <div class="col">
            <img src="https://cdn.dribbble.com/users/1588446/screenshots/7028330/media/8d542e2cc44a1054a2ff8057438fdb8a.gif" alt="">
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
    text-shadow: 3px 3px 5px red;
}
img{
    width: 700px;
    height: 30rem;
    object-fit: fill;
    border: 2px solid red;
    box-shadow: 5px 5px 10px red;
}

.span{
    font-size: 3rem;
}
p{
    font-size: 3rem;
    color: white;
}
#myname{
    color: white;
    text-shadow: 3px 3px 5px red;
    font-size: 5rem;
    
}
.container-fluid{
    /* background-image: url('https://retipoint.ca/assets/images/img1.jpg');
    background-repeat: no-repeat;
    background-size: cover; */
    background-color: black;
    border-bottom: 1px solid red;
}
.col{
    padding-block-start: 7rem;
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