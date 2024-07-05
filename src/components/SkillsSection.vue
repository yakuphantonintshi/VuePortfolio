<template>
    <div class="container">
      <div class="row">
             <h1 class="skills">Skills</h1>
              <div class="row gap-2 justify-content-center" v-if="skills?.length">
              <Card v-for="skill in skills" :key="skill.id" id="card">
                  <template #cardHeader>
                    <h5 class="card-title">{{ skill.title }} </h5>
                  </template>
                  <template #cardBody>
                     
                        <img :src="skill.image" :alt="skill.title" loading="lazy" class="img-fluid">
                     
                  </template>
              </Card>
          </div>
          <div v-else class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
              </div>
          </div>
      </div>
  
    </div>
  </template>


<script>
import Card from '@/components/Card.vue'
export default {
    components: {
        Card
    },
    computed: {
        skills() {
            return this.$store.state.skills
        }
    },
    mounted() {
        this.$store.dispatch('fetchSkills')
    },
   
}
</script>

<style scoped>
img{
    width: 200px;
    height: 200px;
}
.container{
    position: relative;
  animation-name: example;
  animation-duration: 3s;  
  animation-delay: 2s;
  animation-fill-mode: backwards;

    
}
@keyframes example {
  from {right: 0px;}
  to {right: 200px;}
}
.skills{
    color: white;
    text-shadow: 4px 4px 6px #51c4df;
    font-size: 3.5rem;
    text-decoration: underline;
    padding-bottom: 2rem;
}
#card{
    border: 5px solid #51c4df;
    border-radius: 15px;
    background-color: transparent;
    margin: 3.5rem;
    background-image: url('https://i.pinimg.com/originals/62/5e/95/625e95640cd2dc2f39b4862fd07826b2.gif');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
@media screen and (max-width: 700px) {
  #app{
    display: block;
   }
}
.card-title{
    color: white;
    text-shadow: 4px 4px 6px #51c4df;
    font-size: 2rem;
    text-decoration: underline;
    padding-bottom: 2rem; 
}
.card-title:hover{
    font-family: fantasy;
    font-size: 3rem;
}
.container{
    margin-top: 4rem;
}

</style>