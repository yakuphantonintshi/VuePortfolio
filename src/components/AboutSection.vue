<template>
    <div class="container">
        <h1 class="about">About Me</h1>
        <div class="aboutwrap">
            <div class="row align-items-center">
                <div class="col-5" about>
                    <div v-if="about?.length"> 
                  <p class="lead" v-for="(about, index) in about" :key="index">
                      {{ about }} 
                     <!-- <span> <br><br> => </span>Date of Birth: 19 December 2002 <br> <br>
                     <span> => </span>Age: 21 years old <br> <br> -->
                  </p>
                  <a href="https://yakuphantonintshi.github.io/myimages/Images/YAKUPHA CV.pdf" class="btn btn-dark" target="_blank"><i class="bi bi-cloud-arrow-down-fill"></i> RESUME</a>
                </div>
              <Spinner v-else/>
                </div>
                <div class="col-7">
      <div class="row">
        <h2 class="skills">TECHNICAL SKILLS</h2>
        <div class="row gap-1 justify-content-center" id="skills" v-if="skills?.length">
          <Card v-for="skill in skills" :key="skill.id" id="card">
            <template #cardHeader>
              <h5 class="card-title">{{ skill.title }} </h5>
            </template>
            <template #cardBody>
              <img :src="skill.image" :alt="skill.title" loading="lazy" class="img-fluid">
            </template>
          </Card> <br>
          <h4>SOFT SKILLS</h4> <br>
          <ul>
            <li>
              Communication
            </li>
            <li>
              Team Work
            </li>
            <li>
              Problem solving
            </li>
            <li>
              Time management
            </li>
            <li>
              Adaptability 
            </li>
            <li>
              Leadership
            </li>
            <li>
              Peer Support
            </li>
          </ul>
        </div>
        <div v-else class="d-flex justify-content-center">
          <div class="spinner-border" role="status"></div>
        </div>
    
    </div>
              <!-- <img src="https://yakuphantonintshi.github.io/myimages/Images/LifeChoicesPic.jpg" alt="my image" loading="lazy" class="img-fluid"> -->
                </div>
                
            </div>
        </div>
    </div>
  </template>
  <script setup>
  import { computed, onMounted} from 'vue'
  import {useStore} from 'vuex'
  import Spinner from '@/components/Spinner.vue'
  import Card from '@/components/Card.vue'
  const store = useStore()
  const about = computed(() => store.state.about)
  const skills = computed(() => store.state.skills);
  
  onMounted(() => {
      store.dispatch('fetchAbout')
  })
  </script>
  
<style scoped>
.btn{
  width: 300px;
  height: 3.4rem;
  font-size: 1.5rem;
  background-color: #197b91;
  color: white;
  border-radius: 5px;
  margin-top: 2rem;
  border: 2px solid #51C4DF;
}
.btn:hover{
  background-color: #197b91;
  color: white;
  border: 2px solid #51C4DF;
}
ul{
  color: white;
  font-size: 1.6rem;
}
li{
  margin-left: 2rem;
}
.card{
    width: 150px;
    height: 150px;
    background-color: transparent;
    border: 2px solid #51C4DF;
    margin-block: 1.3rem;
}
.card-title{
    color: white;
}
:is(h1, h2, h4){
    color: white;
    text-shadow: 2px 2px 5px #51C4DF;
}
#skills{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  /* gap: 2rem; Space between grid items */
  justify-items: center;
  margin-left: 3rem;
  height: 600px;
  width: 800px;
  overflow-y: scroll;
  /* padding: 10px; */
  background-color: transparent;
  border: 2px solid #51C4DF;
}
.img-fluid{
    height: 70px;
}

p{
    color: white;
    font-size: 1.1rem;
    padding-top: 3rem;
}

.container{
    background-color: #002231;
    margin-top: 6rem;
}

.aboutwrap{
    display: flex;
    justify-content: center;
}

img{
    /* width: 32rem;
    height: 38rem; */
    /* border-radius: 1rem; */
    object-fit: fill;
    /* border: 8px solid #51c4df; */
    box-shadow: 4px 4px 10px 8px #51C4DF;
}

span{
    color: #51C4DF;
}
.about{
    color: white;
    text-shadow: 4px 4px 6px #51C4DF;
    font-size: 3rem;
    text-decoration: underline;
    padding-bottom: 2rem;
}

.row{
    width: 90%;
}
@media (max-width: 980px) {
  .aboutwrap {
    flex-direction: column;
    align-items: center;
  }

  .col-5,
  .col-7 {
    width: 100%;
  }

  .btn {
    width: 250px;
    font-size: 1.2rem;
  }

  #skills {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    height: 500px;
  }

  h1, h2, h4 {
    font-size: 2.5rem;
  }

  ul {
    font-size: 1.4rem;
  }

  .card {
    width: 130px;
    height: 130px;
  }

  .img-fluid {
    height: 50px;
    /* margin-bottom: 2rem; */
  }
  #card{
    width: 10rem;
  }

  p {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .aboutwrap {
    flex-direction: column;
    text-align: center;
  }

  .btn {
    width: 220px;
    font-size: 1.1rem;
  }

  #skills {
    grid-template-columns: 1fr;
    height: auto;
  }

  h1, h2, h4 {
    font-size: 2rem;
  }

  ul {
    font-size: 1.2rem;
  }

  .card {
    width: 120px;
    height: 120px;
  }

  .img-fluid {
    height: 50px;
  }
  #card{
    width: 10rem;
    height: 10rem;
  }

  p {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .btn {
    width: 200px;
    font-size: 1rem;
  }

  h1, h2, h4 {
    font-size: 1.8rem;
  }

  ul {
    font-size: 1rem;
  }

  .card {
    width: 100px;
    height: 100px;
  }

  .img-fluid {
    height: 70px;
    width: 70px;
  }

  p {
    font-size: 0.8rem;
  }
  .skills{
    padding-top: 1.8rem
  }
  #skills{
    margin-right: 300px;
  }
  #card{
    width: auto;
    height: 150px;
  }
}

@media (max-width: 300px) {
  .btn {
    width: 180px;
    font-size: 0.9rem;
  }

  h1, h2, h4 {
    font-size: 1.5rem;
  }

  ul {
    font-size: 0.9rem;
  }

  .card {
    width: 90px;
    height: 90px;
  }

  .img-fluid {
    height: 35px;
  }

  p {
    font-size: 0.7rem;
  }
  #skills{
    margin-left: 2rem;
  }
}

  </style>