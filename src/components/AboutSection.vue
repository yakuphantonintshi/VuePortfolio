<template>
    <div class="container">

        <h1 class="about">About Me</h1>
        <div class="aboutwrap">
            <div class="row align-items-center">
                <div class="col-4">
                    <img src="https://yakuphantonintshi.github.io/myimages/Images/LifeChoicesPic.jpg" alt="my image" loading="lazy" class="img-fluid">
                </div>
                <div class="col-8" about>
                    <div v-if="about?.length"> 
                  <p class="lead" v-for="(about, index) in about" :key="index">
                      {{ about }} 
                     <span> <br><br> => </span>Date of Birth: 19 December 2002 <br> <br>
                     <span> => </span>Age: 21 years old <br> <br>
                     <span> => </span>Weight: 61.7 kg
                  </p>
                </div>
              <Spinner v-else/>
                </div>
            </div>
        </div>
    </div>
  </template>
  <script setup>
  import { computed, onMounted} from 'vue'
  import {useStore} from 'vuex'
  import Spinner from '@/components/Spinner.vue'
  const store = useStore()
  const about = computed(() => store.state.about)
  
  onMounted(() => {
      store.dispatch('fetchAbout')
  })
  </script>
  
<style scoped>
h1{
    color: #51c4df
}

:is(.col-4, .col-8){
    color: white;
}

.container{
    padding-top: 70px;
}

.aboutwrap{
    display: flex;
    justify-content: center;
}

img{
    width: 35rem;
    border-radius: 1rem;
}

@media screen and (max-width: 800px) {
.row{
display: flex;
flex-direction: column;
}
}

p{
    font-size: 25px;
}


span{
    color: #51c4df;
}
.about{
    color: white;
    text-shadow: 4px 4px 6px #51c4df;
    font-size: 3.5rem;
    text-decoration: underline;
    padding-bottom: 2rem;
}

.row{
    width: 80%;
}
  </style>