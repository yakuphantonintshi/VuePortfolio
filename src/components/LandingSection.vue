<template>
  <div class="container-fluid">
    <div class="row align-items-center">
        <div class="col">
            <img src="https://yakuphantonintshi.github.io/myimages/Images/LifeChoicesPic.jpg" alt="my image" loading="lazy" class="img-fluid">
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
.img-fluid{
    width: 550px;
  height: 550px;
  object-fit: cover;
  border: 4px solid #51c4df;
  animation: shapeChange 5s infinite ease-in-out;
  transition: transform 0.5s ease-in-out;
}
.img-fluid:hover {
  transform: scale(1.1);
}
@keyframes shapeChange {
  0% {
    border-radius: 0%;
  }
  25% {
    border-radius: 25%;
  }
  50% {
    border-radius: 50%;
  }
  75% {
    border-radius: 75%;
  }
  100% {
    border-radius: 0%;
  }
}
span {
    color: white;
    font-family: fantasy;
    size: 50rem;
    text-shadow: 3px 3px 5px #51C4DF;
}

img {
    width: 550px;
    object-fit: fill;
    border: 2px solid #51C4DF;
    box-shadow: 5px 5px 10px #51C4DF;
    border-radius: 2rem;
}

.span {
    font-size: 3rem;
}

p {
    font-size: 3rem;
    color: white;
}

#myname {
    color: white;
    text-shadow: 3px 3px 5px #51C4DF;
    font-size: 6rem;
    padding-bottom: 2rem;
}

.container-fluid {
    background-color: #002231;
    margin-top: 6rem;
}

.col {
    padding-block-start: 7rem;
}
.container-fluid{
    background-image: url('');
}

@media screen and (max-width: 950px) {
    #myname {
        font-size: 4.5rem;
    }

    p {
        font-size: 2.5rem;
    }

    .span {
        font-size: 2.5rem;
    }

    img {
        width: 400px;
    }

    .col {
        padding-block-start: 5rem;
    }
}

@media screen and (max-width: 750px) {
    .row {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #myname {
        font-size: 3.5rem;
        text-align: center;
    }

    p {
        font-size: 2rem;
        text-align: center;
    }

    .span {
        font-size: 2rem;
    }

    img {
        width: 300px;
    }

    .col {
        padding-block-start: 3rem;
    }
}
@media screen and (max-width: 500px) {
    #myname {
        font-size: 3rem;
    }

    p {
        font-size: 1.8rem;
    }

    .span {
        font-size: 1.8rem;
    }

    img {
        width: 200px;
    }

    .col {
        padding-block-start: 2rem;
    }
    .img-fluid{
        margin-top: 3rem;
    }
}
@media screen and (max-width: 300px) {
    #myname {
        font-size: 2.5rem;
    }

    p {
        font-size: 1.5rem;
    }

    .span {
        font-size: 1.5rem;
    }

    img {
        width: 200px;
    }

    .col {
        padding-block-start: 1rem;
    }
}


</style>