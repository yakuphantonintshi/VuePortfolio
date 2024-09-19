<template>
    <div class="container">
        <h1 class="about">About Me</h1>
        <div class="aboutwrap">
            <div class="row align-items-center">
                <div class="col-6" about>
                    <div v-if="about?.length"> 
                  <p class="lead" v-for="(about, index) in about" :key="index">
                      {{ about }} 
                     <!-- <span> <br><br> => </span>Date of Birth: 19 December 2002 <br> <br>
                     <span> => </span>Age: 21 years old <br> <br> -->
                  </p>
                  <a href="https://yakuphantonintshi.github.io/myimages/Images/CURRICULUM VITAE OF YAKUPHA copy.docx.pdf" class="btn btn-dark" target="_blank"><i class="bi bi-cloud-arrow-down-fill"></i> RESUME</a>

                  <!-- <a href="https://yakuphantonintshi.github.io/myimages/Images/CURRICULUM VITAE OF YAKUPHA copy.docx.pdf"> <button type="button"><i class="bi bi-cloud-arrow-down-fill"></i> RESUME</button></a> -->
                </div>
              <Spinner v-else/>
                </div>
                <div class="col-6">
      <div class="row">
        <h1 class="skills">TECHNICAL SKILLS</h1>
        <div class="row gap-2 justify-content-center" id="skills" v-if="skills?.length">
          <Card v-for="skill in skills" :key="skill.id" id="card">
            <template #cardHeader>
              <h5 class="card-title">{{ skill.title }} </h5>
            </template>
            <template #cardBody>
              <img :src="skill.image" :alt="skill.title" loading="lazy" class="img-fluid">
            </template>
          </Card> <br>
          <h2>SOFT SKILLS</h2> <br>
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
    width: 180px;
    height: 250px;
    background-color: transparent;
    border: 2px solid #51C4DF;
    margin-block: 2.5rem;
}
.card-title{
    color: white;
}
:is(h1, h2){
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
  overflow-y: scroll;
  padding: 10px;
  background-color: transparent;
  border: 2px solid #51C4DF;
}
.img-fluid{
    height: 150px;
}

p{
    color: white;
    font-size: 1.5rem;
}

.container{
    background-color: #002231;
    margin-top: 3rem;
}

.aboutwrap{
    display: flex;
    justify-content: center;
}

img{
    width: 32rem;
    height: 38rem;
    /* border-radius: 1rem; */
    object-fit: fill;
    /* border: 8px solid #51c4df; */
    box-shadow: 4px 4px 10px 8px #51C4DF;
}
@media screen and (max-width: 1002px) {
  #skills{
  display: block;
}
#card{
  width: 20rem;
}
}
@media screen and (max-width: 800px) {
  #skills{
  display: block;
}
#card{
  width: 25rem;
}
img{
    height: 250px;
}
.about{
    padding-top: 110px;
}
.btn{
  width: 200px;
}
.col-6{
  width: 800px;
}
.skills{
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
}
}
@media screen and (max-width: 700px) {
#skills{
  display: block;
}
#card{
  width: 20rem;
}
}
@media screen and (max-width: 600px) {
  #skills{
  display: block;
}
#card{
  /* margin-left: 4rem; */
  width: 14rem;
}
}
@media screen and (max-width: 500px) {
  #skills{
  display: block;
}
#card{
  /* margin-left: 4rem; */
  width: 14rem;
}
}
@media screen and (max-width: 400px) {
.btn{
width: 150px;
}
.img-fluid{
  width: 150px;
  height: 150px;
}
:is(h2, li){
  font-size: 1rem;
}
#skills{
  display: block;
}
}


span{
    color: #51C4DF;
}
.about{
    color: white;
    text-shadow: 4px 4px 6px #51C4DF;
    font-size: 3.5rem;
    text-decoration: underline;
    padding-bottom: 2rem;
}

.row{
    width: 90%;
}
  </style>