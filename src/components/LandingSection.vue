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
    width: 370px;
  height: 370px;
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
    width: 5000px;
    object-fit: fill;
    border: 2px solid #51C4DF;
    box-shadow: 5px 5px 10px #51C4DF;
    border-radius: 2rem;
}

.span {
    font-size: 2rem;
}

p {
    font-size: 3rem;
    color: white;
}

#myname {
    color: white;
    text-shadow: 3px 3px 5px #51C4DF;
    font-size: 3.7rem;
    padding-bottom: 2rem;
}

.container-fluid {
    background-color: #002231;
    margin-top: 6rem;
}

.col {
    padding-block-start: 3rem;
}
.container-fluid{
    background-image: url('');
}

@media (max-width: 980px) {
  .img-fluid {
    width: 300px;
    height: 300px;
  }
  
  #myname {
    font-size: 3rem;
  }

  p {
    font-size: 2.5rem;
  }

  .span {
    font-size: 1.8rem;
  }
}

@media (max-width: 768px) {
  .row {
    flex-direction: column;
    text-align: center;
  }

  .img-fluid {
    width: 250px;
    height: 250px;
  }

  #myname {
    font-size: 2.5rem;
  }

  p {
    font-size: 2rem;
  }

  .span {
    font-size: 1.5rem;
  }
}
@media (max-width: 770px) {
  .img-fluid {
    width: 300px;
    height: 300px;
  }

  #myname {
    font-size: 2rem;
  }

  p {
    font-size: 1.8rem;
  }

  .span {
    font-size: 1.2rem;
  }

  .col {
    padding-block-start: .5rem;
  }
}

@media (max-width: 480px) {
  .img-fluid {
    width: 300px;
    height: 300px;
  }

  #myname {
    font-size: 2rem;
  }

  p {
    font-size: 1.8rem;
  }

  .span {
    font-size: 1.2rem;
  }

  .col {
    padding-block-start: .5rem;
  }
}

@media (max-width: 299px) {
  .img-fluid {
    width: 150px;
    height: 150px;
  }

  #myname {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.2rem;
  }

  .span {
    font-size: 1rem;
  }

  .col {
    padding-block-start: 0.5rem;
  }
}



</style>